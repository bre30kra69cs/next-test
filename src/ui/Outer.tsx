import React, { FC, ReactNode } from "react";

import { cn } from "../utils/cn";

import "./Outer.scss";

export type OuterProps = {
  className?: string;
  children?: ReactNode;
};

export const Outer: FC<OuterProps> = ({ className, children }) => {
  return <div className={cn("outer", className)}>{children}</div>;
};
