"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full px-6 md:px-12 lg:px-20 xl:px-24"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 min-h-screen md:min-h-auto md:py-32 lg:py-48 items-center">

        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full h-full min-h-[60vh] md:min-h-full"
        >
          <Image
            src="/images/photos/MMTS_SHOOTING LIFE0321.jpeg"
            alt="Mariana Páscoa - Sobre Mim"
            fill
            className="object-cover object-[center_20%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="flex flex-col justify-center gap-12 md:gap-16 lg:gap-20 py-16 md:py-0 px-8 md:px-16 lg:px-24"
        >
          <div>
            <h2
              className="editorial-label mb-6 md:mb-8"
              style={{ fontSize: "0.6875rem", letterSpacing: "0.15em" }}
            >
              01. Sobre Mim
            </h2>
            <h3
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.2,
                color: "var(--color-text-primary)",
                fontWeight: 400,
              }}
              className="text-balance"
            >
              Estrategista de marca, conteúdo e comunicação integrada
            </h3>
          </div>

          <div
            className="flex flex-col gap-12 md:gap-16 lg:gap-24"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "clamp(0.875rem, 1vw, 1.0625rem)",
              lineHeight: 1.8,
              color: "var(--color-text-secondary)",
              letterSpacing: "0.3px",
            }}
          >
            <p>
              Sou graduanda em Publicidade e Propaganda pelo Centro Universitário de Volta Redonda (UniFOA) e apaixonada por comunicação estratégica, branding e construção de marcas com identidade forte e presença relevante.
            </p>
            <p>
              Minha trajetória começou através da criação de conteúdo e da atuação como social media, evoluindo para uma visão estratégica da comunicação. Acredito que a comunicação vai muito além de estética ou frequência de postagem; marcas são percebidas através das experiências, da narrativa e da forma como ocupam espaço no digital e fora dele.
            </p>
            <p>
              Por isso, meu trabalho busca unir criatividade, comportamento, branding e estratégia para criar conexões reais entre marcas e pessoas. Atualmente, atuo como Growth Content Manager na Mamutus Branding & Design, desenvolvendo estratégias de posicionamento, campanhas e fortalecimento de marca para diferentes segmentos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
