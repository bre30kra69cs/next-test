import React, { FC, ReactNode } from "react";

import { cn } from "../utils/cn";

import "./Inner.scss";

export type InnerProps = {
  className?: string;
  children?: ReactNode;
};

export const Inner: FC<InnerProps> = ({ className, children }) => {
  return <div className={cn("inner", className)}>{children}</div>;
};
