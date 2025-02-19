import Link from "next/link";
import styles from "./circleTooltip.module.scss";

export type TooltipConfig = {
  className?: string;
  title: string;
  description: string;
  href: string;
  position?: "bottom" | "bottomLeft"
};

export function CircleTooltip({
  className,
  title,
  description,
  href,
  position = "bottom"
}: TooltipConfig) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={`${styles.circle}`}>
        <div className={styles.hole}></div>
      </div>

      <div className={`${styles.tooltip} ${styles[position]}`}>
        <div className={styles.leftContent}>
          <h3>{title}</h3>
          <p> {description}</p>
        </div>

        <Link href={href} className={styles.rightContent}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
