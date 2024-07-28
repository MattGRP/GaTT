import React from "react";

import { cn } from "@/lib/utils";

export const IconSkillRiderDark = ({
                                     className,
                                     ...props
                                   }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--rider-dark]", className)}
    ></span>
  );
};

export const IconSkillRiderLight = ({
                                      className,
                                      ...props
                                    }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--rider-light]", className)}
    ></span>
  );
};
