import React from "react";

import { cn } from "@/lib/utils";

export const IconSkillDotnet = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--dotnet]", className)}
    ></span>
  );
};
