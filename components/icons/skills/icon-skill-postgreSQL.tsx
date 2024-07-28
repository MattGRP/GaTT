import React from "react";

import { cn } from "@/lib/utils";

export const IconSkillPostgreSQLDark = ({
                                     className,
                                     ...props
                                   }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--postgresql-dark]", className)}
    ></span>
  );
};

export const IconSkillPostgreSQLLight = ({
                                      className,
                                      ...props
                                    }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[skill-icons--postgresql-light]", className)}
    ></span>
  );
};
