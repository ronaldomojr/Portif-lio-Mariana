"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Cursor editorial: um ponto em mix-blend-difference que acompanha o mouse e
 * cresce sobre elementos interativos. Renderizado apenas em dispositivos com
 * ponteiro fino (desktop) e sem preferência por movimento reduzido.
 * O cursor nativo permanece visível — o ponto é um acento, não um substituto.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 38, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 420, damping: 38, mass: 0.6 });
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { stiffness: 320, damping: 26 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor]");
      scale.set(interactive ? 4.2 : 1);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y, scale]);

  if (!enabled) return null;

  return (
    <motion.div
      className="cursor-dot"
      style={{ x: springX, y: springY, scale: springScale }}
      aria-hidden="true"
    />
  );
}
