"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

function MarqueeRow({
  text,
  baseVelocity,
  outlined,
}: {
  text: string;
  baseVelocity: number;
  outlined: boolean;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const directionFactor = useRef(baseVelocity > 0 ? 1 : -1);
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * Math.abs(baseVelocity) * (delta / 1000);
    const vf = velocityFactor.get();
    // O scroll acelera a faixa e pode inverter o sentido — a página "responde" à mão.
    if (vf < 0) directionFactor.current = baseVelocity > 0 ? -1 : 1;
    else if (vf > 0) directionFactor.current = baseVelocity > 0 ? 1 : -1;
    moveBy += directionFactor.current * Math.abs(baseVelocity) * (delta / 1000) * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="velocity-marquee__row">
      <motion.div className="velocity-marquee__track" style={{ x }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className={`velocity-marquee__item serif-heading${outlined ? " velocity-marquee__item--outline" : ""}`}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Faixa tipográfica dupla cuja velocidade reage ao scroll — tipografia serif
 * gigante em sentidos opostos, no espírito das aberturas de editoriais.
 */
export default function VelocityMarquee() {
  return (
    <section className="velocity-marquee" aria-hidden="true">
      <MarqueeRow
        text="Estratégia · Narrativa · Branding · Presença · "
        baseVelocity={2.2}
        outlined
      />
      <MarqueeRow
        text="Direção Criativa · Conteúdo · Cultura · Desejo · "
        baseVelocity={-2.2}
        outlined={false}
      />
    </section>
  );
}
