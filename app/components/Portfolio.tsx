"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";

const navLinks = [
  { label: "Marcas", href: "#work" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Trajetória", href: "#trajectory" },
  { label: "Contato", href: "#contact" },
];

const brands = [
  { name: "Mamutus Branding & Design", src: "/images/logos/MAMUTE -- NOME -- TAG BRANCO.png" },
  { name: "Vila Bistrô", src: "/images/logos/VILA BISTRÔ.png" },
  { name: "Body Prime Smart", src: "/images/logos/BODYPRIME.png" },
  { name: "Clínica Neo Club", src: "/images/logos/NEOCLUB.png" },
  { name: "Montari", src: "/images/logos/MONTARI .png" },
  { name: "Sigma Gelato & Café", src: "/images/logos/SIGMA.png" },
  { name: "Verdi&Co", src: "/images/logos/VERDI & CO.png" },
  { name: "Casa de Mãe", src: "/images/logos/CASA DE MÃE.png" },
  { name: "Festival da Paranoide", src: "/images/logos/FESTIVAL DA PARANOIDE.png" },
  { name: "Tostes & Diniz", src: "/images/logos/TOSTES E DINIZ.png" },
  { name: "Poubel & Machado", src: "/images/logos/POUBEL & MACHADO.png" },
  { name: "Boizão", src: "/images/logos/BOIZÃO.png" },
  { name: "Arena Emirados", src: "/images/logos/ARENA EMIRADOS.jpg" },
];

const stats = [
  { value: "20+", label: "marcas e projetos" },
  { value: "08", label: "frentes de atuação" },
  { value: "04", label: "projetos reconhecidos" },
  { value: "2028", label: "formação UniFOA" },
];

const services = [
  {
    number: "01",
    title: "Branding & Posicionamento",
    description:
      "Desenvolvimento estratégico de marcas, definição de percepção, fortalecimento de autoridade e alinhamento entre identidade, narrativa e presença digital.",
  },
  {
    number: "02",
    title: "Estratégia de Conteúdo",
    description:
      "Planejamento editorial, desenvolvimento de campanhas, construção de linhas editoriais e criação de conteúdos com foco em conexão, posicionamento e crescimento orgânico.",
  },
  {
    number: "03",
    title: "Direção Criativa & Narrativa",
    description:
      "Curadoria criativa, definição estética e construção de narrativas para campanhas, vídeos institucionais, podcasts e comunicação multicanal.",
  },
  {
    number: "04",
    title: "Marketing Digital & Growth",
    description:
      "Gestão estratégica de redes sociais, análise de métricas, SEO, comportamento de audiência e adaptação de campanhas baseada em performance.",
  },
];

const education = [
  {
    title: "Publicidade e Propaganda",
    meta: "Centro Universitário de Volta Redonda - UniFOA",
    description:
      "Graduação voltada para comunicação integrada, estratégia de marca, narrativa, planejamento de campanhas, fotografia, produção audiovisual, design editorial e cultura digital.",
  },
  {
    title: "Branding e Estratégia de Marca",
    meta: "Mirago",
    description:
      "Aprofundamento em posicionamento, identidade, propósito, arquétipos e gestão de percepção de marca.",
  },
  {
    title: "Marketing Digital",
    meta: "RD University",
    description:
      "Estratégias digitais, atração, conversão, comportamento de audiência e IA aplicada ao marketing.",
  },
  {
    title: "Comunidade Laje",
    meta: "Ana Couto",
    description:
      "Estudos voltados para branding contemporâneo, construção de marcas relevantes e comunicação orientada por cultura e comportamento.",
  },
];

const experiences = [
  {
    period: "Atual",
    role: "Growth Content Manager",
    company: "Mamutus Branding & Design",
    description:
      "Atuação estratégica no desenvolvimento de marcas, campanhas e fortalecimento de branding. Responsável por atendimento ao cliente, estratégia de posicionamento, estruturação de campanhas, desenvolvimento narrativo, planejamento de conteúdo, comunicação multicanal e construção de percepção de marca.",
  },
  {
    period: "2025",
    role: "Especialista em Mídias Sociais & Marketing",
    company: "Companhia Vitis Souls",
    description:
      "Gestão estratégica de marketing e comunicação integrada, com atuação em campanhas digitais, SEO, produção multimídia, redes sociais, crescimento orgânico, eventos institucionais, comunicação offline e liderança de equipe.",
  },
  {
    period: "Freelancer",
    role: "Social Media",
    company: "Marcas e profissionais de diferentes segmentos",
    description:
      "Desenvolvimento de estratégias digitais, planejamento de conteúdo, gestão de redes sociais e fortalecimento de presença digital.",
  },
  {
    period: "2024 - 2025",
    role: "Auxiliar de Professora / Educação Especial",
    company: "CENPPRI",
    description:
      "Apoio pedagógico, mediação de aluno autista e produção de conteúdo visual.",
  },
  {
    period: "2023 - 2024",
    role: "Assistente Administrativo",
    company: "Malta Rio Industrial",
    description:
      "Organização de planilhas, notas fiscais e relatórios analíticos.",
  },
];

const highlights = [
  {
    title: "Podcast Mentes Pensantes",
    description:
      "Projeto autoral vencedor do prêmio NaMoral Jovens Talentos 2024, com atuação em idealização, estratégia, roteirização, posicionamento digital e produção de narrativas.",
  },
  {
    title: "Talentos da Publicidade - TV Rio Sul",
    description:
      "Projeto audiovisual finalista e 2º colocado no concurso comemorativo de 35 anos da TV Rio Sul, com conceito criativo, roteiro, produção, organização audiovisual e edição final.",
  },
  {
    title: "ComunicaCast - UniFOA",
    description:
      "Participação como roteirista e host convidada do podcast universitário oficial da Escola de Comunicação do UniFOA.",
  },
  {
    title: "Mediação de Eventos Acadêmicos",
    description:
      "Condução de palestras e rodas de conversa sobre impacto social, comunicação e cultura, incluindo debates sobre preservação cultural e audiovisual universitário.",
  },
];

const sectionMotion = {
  initial: { opacity: 1, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-120px" },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <main className="site-shell">
      <motion.header
        initial={{ y: -18 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
          borderBottom: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: isScrolled ? "blur(18px)" : "none",
        }}
      >
        <nav className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">
          <a
            href="#hero"
            className="relative z-50 serif-heading"
            style={{ fontSize: "0.875rem", textTransform: "uppercase" }}
          >
            Mariana Páscoa
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link relative editorial-label transition-colors duration-300"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-2 md:hidden"
          >
            <span
              className="block h-px bg-white transition-transform duration-300"
              style={{
                width: 28,
                transform: isMenuOpen ? "translateY(4px) rotate(45deg)" : "translateY(0) rotate(0deg)",
              }}
            />
            <span
              className="block h-px bg-white transition-all duration-300"
              style={{
                width: isMenuOpen ? 28 : 18,
                transform: isMenuOpen ? "translateY(-5px) rotate(-45deg)" : "translateY(0) rotate(0deg)",
              }}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex items-center justify-center md:hidden"
            style={{ background: "var(--bg-primary)" }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 28 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="serif-heading"
                  style={{ fontSize: "2.75rem", fontStyle: "italic" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="image-gradient absolute inset-0">
          <Image
            src="/images/photos/MMTS_SHOOTING LIFE0346.jpeg"
            alt="Retrato editorial de Mariana Páscoa"
            fill
            priority
            quality={95}
            className="object-cover object-[center_22%]"
            sizes="100vw"
            style={{ opacity: 0.25 }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

        <div className="section-container relative z-10">
          <div className="relative mx-auto max-w-5xl py-28 text-center">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-0 top-1/2 hidden h-32 w-px origin-top md:block"
              style={{ background: "var(--accent)" }}
            />

            <motion.p
              initial={{ y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="editorial-label mb-10"
            >
              Art Director · Publicist
            </motion.p>

            <motion.h1
              initial={{ y: 28 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, delay: 0.45 }}
              className="serif-heading display-heading"
            >
              Estratégia
              <br />
              que vira
              <br />
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>presença</span>.
            </motion.h1>

            <motion.p
              initial={{ y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.72 }}
              className="hero-copy muted-copy mx-auto mt-9"
            >
              Transformo posicionamento em presença, conteúdo em percepção e marcas em experiências que conectam estratégia, narrativa e crescimento.
            </motion.p>

            <motion.a
              href="#work"
              initial={{ y: 8 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="editorial-label mx-auto mt-16 flex w-fit items-center gap-4"
            >
              Ver marcas
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                ↓
              </motion.span>
            </motion.a>
          </div>
        </div>
      </section>

      <section id="work" style={{ background: "var(--bg-primary)" }}>
        <motion.div {...sectionMotion} className="section-container py-[var(--section-py)]">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="editorial-label mb-6">Marcas & Clientes</p>
              <h2 className="serif-heading section-heading">Presença em diferentes segmentos.</h2>
            </div>
            <p className="muted-copy max-w-md">
              Uma seleção das marcas e frentes atendidas em projetos de branding, conteúdo, campanhas, presença digital e comunicação integrada.
            </p>
          </div>
        </motion.div>

        <div className="marquee-viewport">
          <div className="marquee-track">
            {[...brands, ...brands].map((brand, index) => (
              <div key={`${brand.name}-${index}`} className="brand-item flex flex-col items-center justify-center gap-5 px-8 py-10">
                <div className="relative h-12 w-40">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="brand-logo object-contain"
                    sizes="160px"
                  />
                </div>
                <span className="editorial-label text-center" style={{ color: "var(--text-muted)" }}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={{ background: "var(--bg-secondary)" }}>
        <motion.div {...sectionMotion} className="section-container grid gap-16 py-[var(--section-py)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[3/4] overflow-hidden grayscale">
              <Image
                src="/images/photos/MMTS_SHOOTING LIFE0321.jpeg"
                alt="Mariana Páscoa em retrato preto e branco"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </div>
            <div className="absolute -bottom-5 right-5 h-3/4 w-3/4 border border-white/30" aria-hidden="true" />
            <div className="absolute bottom-6 left-0 border border-[var(--border)] bg-[var(--bg-primary)] px-6 py-4">
              <span className="editorial-label" style={{ color: "var(--accent)" }}>
                Volta Redonda · Brasil
              </span>
            </div>
          </div>

          <div>
            <p className="editorial-label mb-7">Sobre Mim</p>
            <h2 className="serif-heading section-heading">
              Comunicação que encontra <span style={{ fontStyle: "italic" }}>estratégia</span>, cultura e comportamento.
            </h2>
            <div className="my-10 h-px w-8" style={{ background: "var(--accent)" }} />
            <div className="grid gap-7">
              <p className="muted-copy">
                Sou graduanda em Publicidade e Propaganda pelo Centro Universitário de Volta Redonda - UniFOA, com previsão de término em 2028. Sou profissional de marketing, apaixonada por comunicação estratégica, branding e construção de marcas com identidade forte e presença relevante.
              </p>
              <p className="muted-copy">
                Minha trajetória começou através da criação de conteúdo e da atuação como social media, evoluindo para uma visão estratégica da comunicação. Acredito que a comunicação vai muito além de estética ou frequência de postagem; marcas são percebidas através das experiências, da narrativa e da forma como ocupam espaço no digital e fora dele.
              </p>
              <p className="muted-copy">
                Atualmente, atuo como Growth Content Manager na Mamutus Branding & Design, desenvolvendo estratégias de posicionamento, campanhas e fortalecimento de marca para diferentes segmentos.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 border-t border-[var(--border)] pt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-[var(--border)] py-7 pr-6 even:pl-6 odd:border-r">
                  <strong className="serif-heading block" style={{ color: "var(--accent)", fontSize: "2.6rem", lineHeight: 1 }}>
                    {stat.value}
                  </strong>
                  <span className="mt-3 block" style={{ color: "var(--text-muted)", fontSize: "var(--fs-body-small)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="education" style={{ background: "var(--bg-primary)" }}>
        <motion.div {...sectionMotion} className="section-container py-[var(--section-py)]">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="editorial-label mb-7">Formação & Especializações</p>
              <h2 className="serif-heading section-heading">Aprendizado aplicado à construção de marca.</h2>
            </div>
            <p className="muted-copy">
              Repertório em publicidade, branding, marketing digital, storytelling, neurociência aplicada à comunicação e cultura digital.
            </p>
          </div>

          <div className="grid border-t border-[var(--border)] md:grid-cols-2">
            {education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 1, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="border-b border-[var(--border)] py-10 md:odd:border-r md:odd:pr-10 md:even:pl-10"
              >
                <span className="editorial-label" style={{ color: "var(--text-muted)" }}>
                  {item.meta}
                </span>
                <h3 className="serif-heading mt-5" style={{ fontSize: "1.65rem" }}>
                  {item.title}
                </h3>
                <p className="muted-copy mt-5">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="services" style={{ background: "var(--bg-secondary)" }}>
        <motion.div {...sectionMotion} className="section-container py-[var(--section-py)]">
          <div className="mb-20 max-w-4xl">
            <p className="editorial-label mb-7">Serviços</p>
            <h2 className="serif-heading section-heading">O que posso fazer pela sua marca.</h2>
          </div>

          <div className="border-t border-[var(--border)]">
            {services.map((service) => (
              <article
                key={service.number}
                className="group grid gap-8 border-b border-[var(--border)] py-10 transition-colors duration-300 md:grid-cols-[0.18fr_0.42fr_0.8fr] md:items-center md:py-14"
                onMouseEnter={(event) => {
                  event.currentTarget.style.background = "rgba(255,255,255,0.018)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = "transparent";
                }}
              >
                <span className="serif-heading" style={{ color: "var(--accent)", fontSize: "1rem" }}>
                  {service.number}
                </span>
                <h3 className="serif-heading transition-colors duration-300" style={{ fontSize: "1.8rem", color: "var(--text-primary)" }}>
                  {service.title}
                </h3>
                <p className="muted-copy">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 grid gap-10 border border-[var(--border)] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <h3 className="serif-heading title-heading">Estratégia, narrativa e presença em uma direção só.</h3>
              <p className="muted-copy mt-5 max-w-2xl">
                Para marcas que precisam ser percebidas com clareza, consistência e desejo.
              </p>
            </div>
            <a href="#contact" className="outline-button inline-flex min-h-14 items-center justify-center px-8 editorial-label">
              Iniciar conversa
            </a>
          </div>
        </motion.div>
      </section>

      <section id="trajectory" style={{ background: "var(--bg-primary)" }}>
        <motion.div {...sectionMotion} className="section-container py-[var(--section-py)]">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="editorial-label mb-7">Trajetória</p>
              <h2 className="serif-heading section-heading">Experiência em comunicação viva.</h2>
            </div>
            <p className="muted-copy">
              Uma atuação que atravessa estratégia, conteúdo, eventos, educação, bastidores operacionais e presença multicanal.
            </p>
          </div>

          <div className="border-t border-[var(--border)]">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.role}-${experience.period}`}
                initial={{ opacity: 1, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="grid gap-7 border-b border-[var(--border)] py-10 md:grid-cols-[0.22fr_0.48fr_0.85fr]"
              >
                <span className="editorial-label" style={{ color: "var(--text-muted)" }}>
                  {experience.period}
                </span>
                <div>
                  <h3 className="serif-heading" style={{ fontSize: "1.55rem" }}>
                    {experience.role}
                  </h3>
                  <p className="mt-3" style={{ color: "var(--accent)", fontSize: "0.95rem" }}>
                    {experience.company}
                  </p>
                </div>
                <p className="muted-copy">{experience.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="highlights" style={{ background: "var(--bg-secondary)" }}>
        <motion.div {...sectionMotion} className="section-container py-[var(--section-py)]">
          <div className="mb-16 max-w-5xl">
            <p className="editorial-label mb-7">Projetos de Destaque</p>
            <h2 className="serif-heading section-heading">Reconhecimentos que nascem de ideia, roteiro e presença.</h2>
          </div>

          <div className="grid gap-px bg-[var(--border)] md:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 1, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="bg-[var(--bg-secondary)] p-8 md:p-10"
              >
                <span className="editorial-label" style={{ color: "var(--text-muted)" }}>
                  0{index + 1}
                </span>
                <h3 className="serif-heading mt-8" style={{ fontSize: "1.8rem" }}>
                  {item.title}
                </h3>
                <p className="muted-copy mt-6">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" style={{ background: "var(--bg-primary)" }}>
        <motion.div {...sectionMotion} className="section-container grid gap-16 py-[var(--section-py)] lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="editorial-label mb-7">Contato</p>
            <h2 className="serif-heading section-heading">Vamos criar uma presença que permanece?</h2>
            <div className="my-10 h-px w-8" style={{ background: "var(--accent)" }} />
            <p className="muted-copy max-w-xl">
              Para projetos de branding, conteúdo, campanhas, presença digital e comunicação integrada, fale com Mariana pelos canais abaixo ou envie uma mensagem pelo formulário.
            </p>

            <div className="mt-12 grid gap-5">
              <a className="project-link relative w-fit editorial-label" href="https://wa.me/5524992294044" target="_blank" rel="noopener noreferrer">
                WhatsApp · (24) 99229-4044
              </a>
              <a className="project-link relative w-fit editorial-label" href="https://www.instagram.com/marianapascoamkt" target="_blank" rel="noopener noreferrer">
                Instagram · @marianapascoamkt
              </a>
              <a className="project-link relative w-fit editorial-label" href="https://www.linkedin.com/search/results/all/?keywords=Mariana%20P%C3%A1scoa" target="_blank" rel="noopener noreferrer">
                LinkedIn · Mariana Páscoa
              </a>
            </div>
          </div>

          <div className="border border-[var(--border)] p-8 md:p-12">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 1, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="flex min-h-[25rem] flex-col items-center justify-center text-center"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center border border-white">
                    <span aria-hidden="true" style={{ fontSize: "1.6rem", lineHeight: 1 }}>
                      ✓
                    </span>
                  </div>
                  <h3 className="serif-heading title-heading">Mensagem recebida.</h3>
                  <p className="muted-copy mt-5 max-w-sm">
                    Obrigada pelo contato. Mariana retornará assim que possível.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  onSubmit={handleSubmit}
                  className="grid gap-7"
                >
                  <input className="form-field" type="text" name="name" placeholder="Nome" aria-label="Nome" required />
                  <input className="form-field" type="email" name="email" placeholder="Email" aria-label="Email" required />
                  <input className="form-field" type="text" name="subject" placeholder="Assunto" aria-label="Assunto" />
                  <textarea className="form-field min-h-36 resize-none" name="message" placeholder="Mensagem" aria-label="Mensagem" required />
                  <button type="submit" className="outline-button mt-4 min-h-14 w-full editorial-label">
                    Enviar mensagem
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-[var(--border)]" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto grid min-h-24 w-full max-w-[1440px] items-center gap-5 px-6 py-8 md:grid-cols-[1fr_auto_1fr] md:px-12 lg:px-20">
          <span className="serif-heading" style={{ fontSize: "1rem" }}>
            Mariana Páscoa
          </span>
          <span className="editorial-label text-center" style={{ color: "var(--text-muted)", fontSize: "0.625rem" }}>
            © 2026 · Strategic Branding, Content & Communication
          </span>
          <span className="hidden h-px w-16 justify-self-end bg-white md:block" />
        </div>
      </footer>
    </main>
  );
}
