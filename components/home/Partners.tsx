"use client";

import { motion, useReducedMotion } from "framer-motion";

// TODO: 텍스트를 실제 로고 이미지(next/image)로 교체
const PARTNERS = ["HYUNDAI", "KIA", "GENESIS", "CHEIL", "INNOCEAN"];
const LOOP = [...PARTNERS, ...PARTNERS];
const DURATION = PARTNERS.length * 5;

export default function Partners() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="주요 파트너"
      className="overflow-hidden border-y border-(--line) py-13.5"
    >
      <p className="m-0 mb-8.5 px-5.5 text-[11px] tracking-[0.17em] text-brand-sub md:px-(--side)">
        SELECTED CLIENTS &amp; PARTNERS
      </p>

      <div className="overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="flex w-max shrink-0 items-center gap-11 px-5.5 md:px-(--side)"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
        >
          {LOOP.map((name, i) => (
            <span key={`${name}-${i}`} className="flex shrink-0 items-center gap-11">
              <span className="cursor-default text-[clamp(19px,2.25vw,34px)] font-semibold tracking-tight opacity-100 transition-opacity duration-300 hover:opacity-40">
                {name}
              </span>
              <i className="h-1.25 w-1.25 shrink-0 rounded-full bg-brand-point" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
