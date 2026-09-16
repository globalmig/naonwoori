"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const PARTNERS = [
  { name: "Hyundai", src: "/images/partner/ref-hyundai.png" },
  { name: "Kia", src: "/images/partner/ref-kia.png" },
  { name: "Cheil", src: "/images/partner/ref-cheil.png" },
  { name: "Genesis", src: "/images/partner/ref-genesis.png" },
  { name: "Innocean", src: "/images/partner/ref-innocean.png" },
  { name: "Cadillac", src: "/images/partner/ref-cadillac.png" },
  { name: "Mercedes-Benz", src: "/images/partner/ref-mercedes.png" },
  { name: "Porsche", src: "/images/partner/ref-porsche.png" },
  { name: "Volvo", src: "/images/partner/ref-volvo.png" },
];
const LOOP = [...PARTNERS, ...PARTNERS];
const DURATION = PARTNERS.length * 5;

export default function Partners() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="주요 파트너"
      className="overflow-hidden py-13.5"
    >
      <ul className="sr-only">
        {PARTNERS.map((partner) => (
          <li key={partner.name}>{partner.name}</li>
        ))}
      </ul>

      <div className="overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="flex w-max shrink-0 items-center gap-11 px-5.5 md:px-(--side)"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
        >
          {LOOP.map((partner, i) => (
              <div key={`${partner.name}-${i}`} className="relative h-50 w-50 shrink-0 cursor-default opacity-100 transition-opacity duration-300 hover:opacity-50">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
