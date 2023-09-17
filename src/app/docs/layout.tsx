import React from "react";
import { LayoutProps } from ".next/types/app/layout";

const DocsLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default DocsLayout;
