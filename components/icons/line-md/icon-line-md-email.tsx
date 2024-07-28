import React from "react";

import { cn } from "@/lib/utils";

export const IconLineMdEmailDark = ({
                                      className,
                                      ...props
                                    }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[line-md--email-opened]", className)}
    ></span>
  );
};

export const IconLineMdEmailLight = ({
                                       className,
                                       ...props
                                     }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn("icon-[line-md--email-opened]", className)}
    ></span>
  );
};
