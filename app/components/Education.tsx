"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full px-6 md:px-12 lg:px-20 xl:px-24 py-24 md:py-32 lg:py-48"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="editorial-label mb-16 md:mb-24 lg:mb-32"
          style={{ fontSize: "0.6875rem", letterSpacing: "0.15em" }}
        >
          05. Formação & Especializações
        </motion.h2>

        {/* Main Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32 lg:mb-40"
        >
          <h3
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
              fontWeight: 400,
              color: "var(--color-text-primary)",
              lineHeight: 1.3,
            }}
          >
            Publicidade e Propaganda
          </h3>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mt-4 mb-8">
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "1rem",
                color: "var(--color-text-primary)",
                letterSpacing: "0.2px"
              }}
            >
              Centro Universitário de Volta Redonda (UniFOA)
            </p>
            <span className="editorial-label text-xs whitespace-nowrap" style={{ fontSize: "0.75rem", letterSpacing: "0.12em" }}>
              2º Semestre (2028)
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "var(--color-text-secondary)",
              letterSpacing: "0.3px"
            }}
            className="max-w-3xl"
          >
            Formação voltada para estratégia de marca, narrativa/storytelling, planejamento de campanhas, fotografia, projetos voltados para comunicação integrada, produção audiovisual, design editorial, cultura digital, escrita publicitária e jornalística.
          </p>
        </motion.div>

        <div className="w-full h-px mb-20 md:mb-32 lg:mb-40" style={{ backgroundColor: "var(--color-border)" }} />

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 md:gap-x-20 lg:gap-x-28 gap-y-16 md:gap-y-20 lg:gap-y-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "1.2rem",
                color: "var(--color-text-primary)",
                fontWeight: 400,
                marginBottom: "0.75rem",
                lineHeight: 1.3
              }}
            >
              Comunidade Laje (Ana Couto)
            </h4>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                color: "var(--color-text-secondary)",
                letterSpacing: "0.2px"
              }}
            >
              Estudos voltados para branding contemporâneo, identidade, propósito, arquétipos e gestão de percepção de marca.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "1.2rem",
                color: "var(--color-text-primary)",
                fontWeight: 400,
                marginBottom: "0.75rem",
                lineHeight: 1.3
              }}
            >
              Marketing Digital (RD University)
            </h4>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                color: "var(--color-text-secondary)",
                letterSpacing: "0.2px"
              }}
            >
              Formação voltada para estratégias digitais, atração, conversão, comportamento de audiência e IA aplicada ao marketing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "1.2rem",
                color: "var(--color-text-primary)",
                fontWeight: 400,
                marginBottom: "0.75rem",
                lineHeight: 1.3
              }}
            >
              Branding e Estratégia de Marca (Mirago)
            </h4>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                color: "var(--color-text-secondary)",
                letterSpacing: "0.2px"
              }}
            >
              Aprofundamento em posicionamento, construção de marcas relevantes e comunicação orientada por cultura e comportamento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
