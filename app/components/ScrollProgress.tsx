"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/* Linha de progresso de leitura no topo — referência direta ao ritmo de leitura
   de uma revista digital. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
