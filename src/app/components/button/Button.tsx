"use client";

import { ReactNode } from "react";
import styles from "./button.module.css";

type ButtonProps = React.ComponentProps<"button"> & {
  children: ReactNode;
  fontSize: string;
  variante?: "green" | "secundary";
};

export default function Button({
  variante = "green",
  children,
  fontSize,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variante]}`}
      style={{ fontSize: fontSize }}
      {...props}
    >
      {children}
    </button>
  );
}
