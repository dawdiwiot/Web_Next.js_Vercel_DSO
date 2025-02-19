import { ReactNode } from "react";
import styles from "./infoSection.module.scss";
import { Button, ButtonProps } from "../button/button";

type imageConfig = {
  alt: string;
  xs: string;
  md?: string;
  lg?: string;
};

export type InfoSectionProps = {
  id: string;
  className?: string;
  imageConfig: imageConfig;
  title: string;
  children: ReactNode;
  buttonsConfig?: ButtonProps[];
};

export function InfoSection({
  id,
  className,
  imageConfig,
  title,
  children,
  buttonsConfig,
}: InfoSectionProps) {
  return (
    <div className="container mx-auto px-4 md:px-28 lg:px-8">
      <div className={`${styles.wrapper} ${className}`}>
        <div className={styles.imageWrapper}>
          <picture>
            <source srcSet={imageConfig.lg} media="(min-width: 1024px)" />
            <source srcSet={imageConfig.md} media="(min-width: 768px)" />
            <img
              className={styles.image}
              src={imageConfig.xs}
              alt={imageConfig.alt}
            />
          </picture>
        </div>
        <div className={styles.infoWrapper}>
          <h2 className={styles.title}>{title}</h2>
          {children}
          <div className={styles.buttonsWrappers}>
            {buttonsConfig?.map((config, i) => (
              <Button key={id + i} {...config}></Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
