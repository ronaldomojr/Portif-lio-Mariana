"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <Image
          src="/images/photos/MMTS_SHOOTING LIFE0319.jpeg"
          alt="Mariana Páscoa Parallax"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          quality={90}
        />
        {/* Dark overlay to match the premium aesthetic */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "rgba(10, 10, 10, 0.4)" }}
        />
      </motion.div>
    </section>
  );
}
