"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Anima o trecho numérico de um valor de estatística ("20+", "08", "2028")
 * quando ele entra na viewport, preservando zeros à esquerda e sufixos.
 */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const digits = match ? match[1].length : 0;
  const [display, setDisplay] = useState(match ? "0".padStart(digits, "0") : value);

  useEffect(() => {
    if (!inView || !match) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(String(Math.round(v)).padStart(digits, "0")),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!match) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
