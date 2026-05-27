"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Growth Content Manager",
    company: "Mamutus Branding & Design",
    period: "Atual",
    description: "Atuação estratégica no desenvolvimento de marcas, campanhas e fortalecimento de branding. Responsável por atendimento ao cliente, estratégia de posicionamento, estruturação de campanhas, desenvolvimento narrativo, planejamento de conteúdo, comunicação multicanal e construção de percepção de marca."
  },
  {
    role: "Especialista em Mídias Sociais & Marketing",
    company: "Companhia Vitis Souls",
    period: "2025",
    description: "Gestão estratégica de marketing e comunicação integrada. Atuação em campanhas digitais, SEO, produção de conteúdo multimídia, gestão de redes sociais, crescimento orgânico, planejamento editorial, eventos institucionais, comunicação offline e liderança de equipe. Destaque para a liderança da comunicação de um congresso universitário regional, coordenando equipe de Publicidade e Jornalismo."
  },
  {
    role: "Social Media Freelancer",
    company: "Marcas e Profissionais",
    period: "Anterior",
    description: "Desenvolvimento de estratégias digitais, planejamento de conteúdo, gestão de redes sociais e fortalecimento de presença digital para marcas e profissionais de diferentes segmentos. Atuação direta no desenvolvimento de posicionamento, direção criativa, roteirização, planejamento editorial e presença multicanal."
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          03. Experiência Profissional
        </motion.h2>

        <div className="flex flex-col gap-20 md:gap-24 lg:gap-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col gap-8 border-b pb-12"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <div className="flex-1">
                  <h3
                    style={{
                      fontFamily: "var(--font-heading), Georgia, serif",
                      fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                      fontWeight: 400,
                      color: "var(--color-text-primary)",
                      lineHeight: 1.3,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                      fontSize: "1rem",
                      color: "var(--color-text-primary)",
                      letterSpacing: "0.2px"
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  className="editorial-label whitespace-nowrap text-xs"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.12em" }}
                >
                  {exp.period}
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
              >
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
