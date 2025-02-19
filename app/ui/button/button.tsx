"use client";

import Link from "next/link";
import styles from "./button.module.scss";

export type ButtonProps = {
  className?: string;
  color: string;
  text: string;
  href?: string;
  onClick?: () => void;
};

export function Button({ className, color, text, href, onClick }: ButtonProps) {
  const handle = () => {
    return onClick?.();
  };

  const buttonContent = (
    <button
      type="button"
      onClick={handle}
      className={`${styles.button} ${styles[color]} ${className} ${
        className === "big" ? styles.big : ""
      }`}
    >
      {text}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
}
