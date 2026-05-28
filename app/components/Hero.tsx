"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      {/* Full-Screen Background Image */}
      <Image
        src="/images/photos/MMTS_SHOOTING LIFE0346.jpeg"
        alt="Mariana Páscoa - Estrategista de Branding e Comunicação"
        fill
        className="object-cover object-[center_20%]"
        quality={100}
        priority
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background: "linear-gradient(to top, rgba(10,10,10,0.95), rgba(10,10,10,0.7) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-30 w-full h-full flex flex-col justify-end px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="max-w-[1440px] mx-auto w-full pb-24 md:pb-32 lg:pb-48">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="editorial-label mb-8 md:mb-12 premium-fade-in"
            style={{ fontSize: "clamp(0.5625rem, 0.8vw, 0.6875rem)", letterSpacing: "0.2em" }}
          >
            Branding Estratégico, Conteúdo & Comunicação
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontSize: "clamp(2.5rem, 9vw, 6rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              color: "var(--color-text-primary)",
            }}
          >
            Mariana
            <br />
            <span style={{ fontStyle: "italic" }}>Páscoa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 md:mt-12 max-w-2xl premium-text-glow"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)",
              lineHeight: 1.8,
              color: "var(--color-text-secondary)",
              letterSpacing: "0.3px",
            }}
          >
            Transformo posicionamento em presença, conteúdo em percepção e marcas em experiências que conectam estratégia, narrativa e crescimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-16 md:mt-20 flex items-center gap-4 premium-hover"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: 0.2 }}
              className="w-px h-12"
              style={{ backgroundColor: "var(--color-text-secondary)" }}
            />
            <span
              className="editorial-label"
              style={{ fontSize: "0.5625rem", letterSpacing: "0.1em" }}
            >
              Scroll para explorar
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
