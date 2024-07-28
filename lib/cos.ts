import COS from "cos-nodejs-sdk-v5"

import {
  NODE_ENV,
  COS_ACCESS_KEY_ID,
  COS_ACCESS_KEY_SECRET,
  COS_BUCKET,
  COS_REGION,
} from "@/config";

const globalForCOS = global as unknown as { cos : COS | undefined };

export const cos =
  globalForCOS.cos ??
  new COS({
    SecretId: COS_ACCESS_KEY_ID ?? "",
    SecretKey: COS_ACCESS_KEY_SECRET ?? "",
  });

if (NODE_ENV !== "production") globalForCOS.cos = cos;
