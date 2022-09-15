import clsx from "clsx";
import * as React from "react";

type NavProps = {
  children?: React.ReactNode;
  orientation?: "horizontal" | "vertical";
};

export default function Nav({
  children,
  orientation = "horizontal"
}: NavProps) {
  return (
    <nav
      className={clsx(
        "flex flex-wrap",
        orientation === "vertical" && "flex-col"
      )}
    >
      {children}
    </nav>
  );
}
