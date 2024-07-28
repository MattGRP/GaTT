import React from "react";

import { cn } from "@/lib/utils";

export const IconLogoApple = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[logos--apple]", className)}
    ></span>
  );
};
