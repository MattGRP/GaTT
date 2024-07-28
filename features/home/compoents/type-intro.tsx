"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

export const TypeIntro = () => {
  return (
    <TypeAnimation
      className="text-2xl tracking-widest md:text-5xl"
      sequence={[
        500,
        "一名后端开发实习生 。",
        1000,
        "A Back-end <Developer /> .",
        1000,
        "YSU电子商务在读。",
        1000,
      ]}
      speed={20}
      repeat={Infinity}
    />
  );
};
