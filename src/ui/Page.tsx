import React, { FC } from "react";

import { Outer } from "./Outer";
import { Inner } from "./Inner";

import "./Page.scss";

export const Page: FC = () => {
  return (
    <main className="page">
      <Outer>
        <Inner />
      </Outer>
    </main>
  );
};
