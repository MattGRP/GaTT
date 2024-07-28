"use server";

import imageType, { minimumBytes } from "image-type";
import fs from "node:fs";
import path from "node:path";
import { readChunk } from "read-chunk";
import sharp from "sharp";

import { COS_BUCKET, COS_REGION, COS_UPLOAD_DIR } from "@/config";
import { isProduction } from "@/utils/env";
import { ERROR_NO_PERMISSION } from "@/constants";
import { noPermission } from "@/features/user";
import { cos } from "@/lib/cos";
import { createCuid } from "@/lib/cuid";

const UPLOAD_DIR = "uploads";
const PUBLIC_DIR = "public";

const getFilePath = (input: string) => {
  return path.join(process.cwd(), PUBLIC_DIR, input);
};

const saveFile = async (file: File) => {
  const fileArrayBuffer = await file.arrayBuffer();
  const fileExtension = path.extname(file.name);
  const fileNameWithoutExtension = file.name.replace(fileExtension, "");
  const baseURL = `/${UPLOAD_DIR}/${fileNameWithoutExtension}-${createCuid()}${fileExtension}`;
  const filePath = getFilePath(baseURL);

  fs.writeFileSync(filePath, Buffer.from(fileArrayBuffer));

  return baseURL;
};

const deleteFile = async (input: string) => {
  const filePath = getFilePath(input);

  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      if (error) {
        return reject(error.message);
      }
      resolve("");
    });
  });
};

const getImageInfo = async (filePath: string) => {
  const buffer = await readChunk(filePath, { length: minimumBytes });

  const typeInfo = await imageType(buffer);

  return {
    info: typeInfo,
    isImage: Boolean(typeInfo),
    isGif: typeInfo ? typeInfo.ext === "gif" : false,
    isWebp: typeInfo ? typeInfo.ext === "webp" : false,
  };
};

const compressImage = async (input: string): Promise<string> => {
  const inputFilePath = getFilePath(input);
  const { isGif, isImage, isWebp } = await getImageInfo(inputFilePath);

  if (!isImage || isWebp) {
    return input;
  }

  const fileName = path.basename(inputFilePath);
  const fileExtension = path.extname(fileName);
  const fileNameWithoutExtension = fileName.replace(fileExtension, "");

  const newFileName = `${fileNameWithoutExtension}.webp`;
  const output = `/${UPLOAD_DIR}/${newFileName}`;
  const outputFilePath = getFilePath(output);

  return new Promise((resolve, reject) => {
    sharp(inputFilePath, { animated: isGif, limitInputPixels: false })
      .webp({ lossless: true })
      .toFile(outputFilePath, (error) => {
        if (error) {
          reject(error.message);
        } else {
          resolve(output);
        }
      });
  });
};

const uploadToCOS = async (input) => {
  try {
    const inputFilePath = getFilePath(input);
    const fileName = path.basename(inputFilePath);
    const buffer = fs.readFileSync(inputFilePath);

    return new Promise((resolve, reject) => {
      cos.putObject(
        {
          Bucket: COS_BUCKET,
          Region: COS_REGION,
          Key: `${COS_UPLOAD_DIR}/${fileName}`,
          Body: buffer,
        },
        (err, data) => {
          if (err) {
            console.error("COS Upload Error:", err);
            return reject(err);
          }

          const url = `https://${COS_BUCKET}.cos.${COS_REGION}.myqcloud.com/${COS_UPLOAD_DIR}/${fileName}`;
          resolve(url);
        }
      );
    });
  } catch (error) {
    console.error("File Upload Error:", error);
    throw new Error("Failed to upload file to COS.");
  }
};

export const uploadFile = async (formData) => {
  try {
    const file = formData.get("file");
    if (!file) {
      throw new Error("No file provided.");
    }

    let url = await saveFile(file);
    url = await compressImage(url);

    if (isProduction()) {
      const cosURL = await uploadToCOS(url);
      await deleteFile(url);
      return { url: cosURL };
    }

    return { url };
  } catch (error) {
    console.error("Upload File Error:", error);
    return { error: error.message };
  }
};