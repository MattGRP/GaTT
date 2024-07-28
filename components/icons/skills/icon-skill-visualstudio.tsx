import React from "react";

import { cn } from "@/lib/utils";

export const IconSkillVisualStudioDark = ({
                                     className,
                                     ...props
                                   }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--visualstudio-dark]", className)}
    ></span>
  );
};

export const IconSkillVisualStudioLight = ({
                                      className,
                                      ...props
                                    }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--visualstudio-light]", className)}
    ></span>
  );
};
