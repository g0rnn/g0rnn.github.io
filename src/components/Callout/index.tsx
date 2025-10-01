import React, { ReactNode } from "react";
import styles from "./styles.module.css";  // ✅ CSS Module import

type CalloutType = "default" | "info" | "warning" | "danger" | "success";

interface CalloutProps {
  type?: CalloutType;
  title?: ReactNode;   
  compact?: boolean;   
  children: ReactNode;
}

export default function Callout({
  type = "default",
  title,
  compact = true,
  children,
}: CalloutProps) {
  return (
    <div
      className={`${styles.callout} ${styles[type]} ${
        compact ? styles.isCompact : ""
      }`}
    >
      {title && <div className={styles.calloutTitle}>{title}</div>}
      <div className={styles.calloutContent}>{children}</div>
    </div>
  );
}