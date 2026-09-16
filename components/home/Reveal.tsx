"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const MOTION_TAG = { div: motion.div, li: motion.li } as const;

export default function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const MotionTag = MOTION_TAG[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
