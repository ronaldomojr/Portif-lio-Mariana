"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Moldura de parallax para imagens full-bleed: o conteúdo (Image fill) é
 * renderizado numa camada maior que a moldura e desliza verticalmente
 * conforme a seção atravessa a viewport.
 */
export default function ParallaxLayer({
  children,
  amount = 10,
  className = "",
}: {
  children: React.ReactNode;
  /** Deslocamento máximo em % da altura da moldura. */
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className={`parallax-frame ${className}`}>
      <motion.div
        className="parallax-frame__layer"
        style={{ y, top: `-${amount}%`, bottom: `-${amount}%` }}
      >
        {children}
      </motion.div>
    </div>
  );
}
