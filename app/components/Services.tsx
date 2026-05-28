"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    title: "Branding & Posicionamento",
    description: "Desenvolvimento estratégico de marcas, definição de percepção, fortalecimento de autoridade e alinhamento entre identidade, narrativa e presença digital.",
  },
  {
    title: "Estratégia de Conteúdo",
    description: "Planejamento editorial, desenvolvimento de campanhas, construção de linhas editoriais e criação de conteúdos com foco em conexão, posicionamento e crescimento orgânico.",
  },
  {
    title: "Direção Criativa & Narrativa",
    description: "Curadoria criativa, definição estética e construção de narrativas para campanhas, vídeos institucionais, podcasts e comunicação multicanal.",
  },
  {
    title: "Comunicação Integrada",
    description: "Planejamento e execução de ações online e offline, garantindo coerência de marca em diferentes pontos de contato.",
  },
  {
    title: "Marketing Digital & Growth",
    description: "Gestão estratégica de redes sociais, análise de métricas, SEO, comportamento de audiência e adaptação de campanhas baseada em performance.",
  },
  {
    title: "Produção Audiovisual & Roteirização",
    description: "Criação de roteiros, storytelling, direção de conteúdo, cobertura de eventos e desenvolvimento de conteúdos audiovisuais estratégicos.",
  },
  {
    title: "Liderança & Gestão de Projetos",
    description: "Coordenação de equipes multidisciplinares, organização de processos criativos e acompanhamento estratégico de campanhas e entregas.",
  },
  {
    title: "Comunicação & Mediação",
    description: "Experiência em apresentação, mediação de eventos, podcasts e condução de entrevistas e conversas institucionais.",
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full px-6 md:px-12 lg:px-20 xl:px-24"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32 min-h-screen md:min-h-auto md:py-32 lg:py-48 items-center">

        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative w-full h-full min-h-[60vh] md:min-h-full order-2 md:order-1 premium-hover group overflow-hidden rounded-sm"
        >
          <Image
            src="/images/photos/MMTS_SHOOTING LIFE0410.jpeg"
            alt="Direção Criativa e Estratégia de Branding"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
        </motion.div>

        {/* Right Column: Skills Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          className="flex flex-col justify-center gap-12 md:gap-16 lg:gap-20 py-16 md:py-0 order-1 md:order-2"
        >
          <div>
            <h2
              className="editorial-label mb-6 md:mb-8 premium-fade-in"
              style={{ fontSize: "0.6875rem", letterSpacing: "0.15em" }}
            >
              02. Áreas de Atuação
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-12 md:gap-y-16 lg:gap-y-20">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col gap-6 p-6 rounded-sm transition-all duration-500 ease-out hover:bg-gradient-to-br hover:from-[rgba(255,255,255,0.04)] hover:to-[rgba(255,255,255,0.01)] hover:border-[rgba(255,255,255,0.1)] border border-transparent group cursor-pointer"
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                    fontWeight: 400,
                    color: "var(--color-text-primary)",
                    lineHeight: 1.3,
                    transition: "all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  className="group-hover:text-[var(--accent)]"
                >
                  {skill.title}
                </h3>
                <motion.div
                  className="h-px"
                  initial={{ width: 12, backgroundColor: "var(--color-border)" }}
                  whileHover={{ width: 40, backgroundColor: "var(--accent)" }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.8,
                    color: "var(--color-text-secondary)",
                    letterSpacing: "0.2px",
                    transition: "all 400ms ease-out",
                  }}
                  className="group-hover:text-[rgba(245,240,235,0.8)]"
                  }}
                  className="group-hover:text-[var(--text-primary)]"
                >
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
