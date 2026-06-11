"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SmoothScroll from "./SmoothScroll";
import ScrollProgress from "./ScrollProgress";
import Cursor from "./Cursor";
import ParallaxLayer from "./ParallaxLayer";
import CountUp from "./CountUp";
import VelocityMarquee from "./VelocityMarquee";
import Manifesto from "./Manifesto";

/* --- Navigation ----------------------------------------------------------------- */
const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Marcas", href: "#work" },
  { label: "Serviços", href: "#services" },
  { label: "Trajetória", href: "#trajectory" },
  { label: "Contato", href: "#contact" },
];

/* --- Brands (marquee) ----------------------------------------------------------- */
const brands = [
  { name: "Mamutus", src: "/images/logos/MAMUTE -- NOME -- TAG BRANCO.png" },
  { name: "Vila Bistrô", src: "/images/logos/VILA BISTRÔ.png" },
  { name: "BodyPrime", src: "/images/logos/BODYPRIME.png" },
  { name: "NeoClub", src: "/images/logos/NEOCLUB.png" },
  { name: "Montari", src: "/images/logos/MONTARI .png" },
  { name: "Sigma", src: "/images/logos/SIGMA.png" },
  { name: "Verdi & Co", src: "/images/logos/VERDI & CO.png" },
  { name: "Casa de Mãe", src: "/images/logos/CASA DE MÃE.png" },
  { name: "Festival Paranoide", src: "/images/logos/FESTIVAL DA PARANOIDE.png" },
  { name: "Tostes e Diniz", src: "/images/logos/TOSTES E DINIZ.png" },
  { name: "Poubel & Machado", src: "/images/logos/POUBEL & MACHADO.png" },
  { name: "Boizão", src: "/images/logos/BOIZÃO.png" },
  { name: "Arena Emirados", src: "/images/logos/ARENA EMIRADOS.jpg" },
  { name: "Dr. Leopoldo", src: "/images/logos/DR. LEOPOLDO MENEZES.jpg" },
  { name: "Emirados For Shape", src: "/images/logos/EMIRADOS FORSHAPE.jpg" },
  { name: "MamuTV", src: "/images/logos/MAMUTV.jpg" },
];

/* --- Project grid ------------------------------------------------------------ */
const projects = [
  {
    name: "Mamutus Branding & Design",
    category: "Branding & Identidade Visual",
    logo: "/images/logos/MAMUTE -- NOME -- TAG BRANCO.png",
    featured: true,
  },
  {
    name: "Festival da Paranoide",
    category: "Entretenimento",
    logo: "/images/logos/FESTIVAL DA PARANOIDE.png",
    featured: false,
  },
  {
    name: "Vila Bistrô",
    category: "Gastronomia",
    logo: "/images/logos/VILA BISTRÔ.png",
    featured: false,
  },
  {
    name: "Arena Emirados",
    category: "Esporte & Lifestyle",
    logo: "/images/logos/ARENA EMIRADOS.jpg",
    featured: true,
  },
  {
    name: "Body Prime Smart",
    category: "Saúde & Performance",
    logo: "/images/logos/BODYPRIME.png",
    featured: true,
  },
  {
    name: "Sigma Gelato & Café",
    category: "Gastronomia",
    logo: "/images/logos/SIGMA.png",
    featured: false,
  },
  {
    name: "Boizão",
    category: "Gastronomia",
    logo: "/images/logos/BOIZÃO.png",
    featured: false,
  },
  {
    name: "Verdi & Co",
    category: "Gastronomia",
    logo: "/images/logos/VERDI & CO.png",
    featured: false,
  },
  {
    name: "Dr. Leopoldo Menezes",
    category: "Saúde",
    logo: "/images/logos/DR. LEOPOLDO MENEZES.jpg",
    featured: false,
  },
  {
    name: "Montari Negócios",
    category: "Negócios & Serviços",
    logo: "/images/logos/MONTARI .png",
    featured: false,
  },
  {
    name: "Poubel & Machado",
    category: "Advocacia",
    logo: "/images/logos/POUBEL & MACHADO.png",
    featured: false,
  },
  {
    name: "Casa de Mãe",
    category: "Negócios & Serviços",
    logo: "/images/logos/CASA DE MÃE.png",
    featured: true,
  },
];

/* --- Stats -------------------------------------------------------------------- */
const stats = [
  { value: "20+", label: "Marcas e Projetos" },
  { value: "08", label: "Frentes de Atuação" },
  { value: "04", label: "Projetos Reconhecidos" },
  { value: "2028", label: "Formação UniFOA" },
];

/* --- Services ----------------------------------------------------------------- */
const services = [
  {
    number: "01",
    title: "Direção Criativa & Narrativa",
    description:
      "Curadoria criativa, definição estética e construção de narrativas para campanhas, vídeos institucionais, podcasts e comunicação multicanal.",
  },
  {
    number: "02",
    title: "Branding & Posicionamento",
    description:
      "Desenvolvimento estratégico de marcas, definição de percepção, fortalecimento de autoridade e alinhamento entre identidade, narrativa e presença digital.",
  },
  {
    number: "03",
    title: "Estratégia de Conteúdo",
    description:
      "Planejamento editorial, desenvolvimento de campanhas, construção de linhas editoriais e criação de conteúdos com foco em conexão, posicionamento e crescimento orgânico.",
  },
  {
    number: "04",
    title: "Marketing Digital & Growth",
    description:
      "Gestão estratégica de redes sociais, análise de métricas, SEO, comportamento de audiência e adaptação de campanhas baseada em performance.",
  },
];

/* --- Education ---------------------------------------------------------------- */
const education = [
  {
    title: "Publicidade e Propaganda",
    meta: "Centro Universitário de Volta Redonda — UniFOA",
    description:
      "Formação voltada para comunicação integrada, produção audiovisual, design editorial, estratégia de marca, narrativa/storytelling, planejamento de campanhas, fotografia e cultura digital.",
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

/* --- Experiences -------------------------------------------------------------- */
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
      "Gestão estratégica de marketing e comunicação integrada. Atuação em campanhas digitais, SEO, produção multimídia, gestão de redes sociais, crescimento orgânico, planejamento editorial, eventos institucionais, comunicação offline e liderança de equipe. Destaque para a liderança da comunicação de um congresso universitário regional, coordenando equipe de Publicidade e Jornalismo.",
  },
  {
    period: "Freelancer",
    role: "Social Media",
    company: "Marcas e profissionais de diferentes segmentos",
    description:
      "Desenvolvimento de estratégias digitais, planejamento de conteúdo, gestão de redes sociais e fortalecimento de presença digital. Atuação direta no desenvolvimento de posicionamento, direção criativa, roteirização, planejamento editorial e presença multicanal.",
  },
  {
    period: "2023 – 2024",
    role: "Assistente Administrativo",
    company: "Malta Rio Industrial",
    description:
      "Organização de planilhas, notas fiscais e relatórios analíticos.",
  },
];

/* --- Highlights --------------------------------------------------------------- */
const highlights = [
  {
    title: "Podcast Mentes Pensantes",
    description:
      "Projeto autoral vencedor do prêmio NaMoral Jovens Talentos 2024. Atuação completa em idealização, estratégia, roteirização, gestão de conteúdo, posicionamento digital e produção de narrativas.",
  },
  {
    title: "Talentos da Publicidade — TV Rio Sul",
    description:
      "Projeto audiovisual finalista e 2º colocado no concurso comemorativo de 35 anos da TV Rio Sul (Afiliada Globo). Responsável pelo conceito criativo, roteiro, produção, organização audiovisual e edição final.",
  },
  {
    title: "ComunicaCast — UniFOA",
    description:
      "Participação como roteirista e host convidada do podcast universitário oficial da Escola de Comunicação do UniFOA.",
  },
  {
    title: "Mediação de Eventos Acadêmicos",
    description:
      "Condução de palestras e rodas de conversa sobre impacto social, comunicação e cultura, incluindo a palestra 'Sabedoria Ancestral e Preservação Cultural na Comunicação'.",
  },
];

/* --- Animation presets -------------------------------------------------------- */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-120px" },
  transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

/* --- Editorial section kicker (numbered chapter label) ------------------------ */
function SectionKicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="section-kicker">
      <span className="section-kicker__num serif-heading">{index}</span>
      <span className="section-kicker__rule" aria-hidden="true" />
      <span className="editorial-label">{label}</span>
    </div>
  );
}

/* --- Component ---------------------------------------------------------------- */
export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [marqueeFallback, setMarqueeFallback] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  /* hero parallax — a foto desce mais devagar que o scroll e o texto se despede antes */
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroProgress, [0, 1], ["0%", "18%"]);
  const heroImageScale = useTransform(heroProgress, [0, 1], [1, 1.12]);
  const heroContentY = useTransform(heroProgress, [0, 0.8], [0, -70]);
  const heroContentOpacity = useTransform(heroProgress, [0, 0.65], [1, 0]);

  /* scroll nav state */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* body overflow for menu */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  /* GSAP marquee */
  useEffect(() => {
    const marquee = marqueeRef.current;
    const container = containerRef.current;
    if (!marquee || !container) return;

    let retries = 0;

    const startAnimation = () => {
      const scrollWidth = marquee.scrollWidth;
      if (scrollWidth > 1000) {
        setMarqueeFallback(false);
        if (timelineRef.current) timelineRef.current.kill();
        const singleSetWidth = scrollWidth / 4;
        const duration = singleSetWidth / 80;
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(marquee, {
          x: -singleSetWidth,
          duration,
          ease: "linear",
          onComplete: () => gsap.set(marquee, { x: 0 }),
        });
        timelineRef.current = tl;
        const pause = () => tl.pause();
        const play = () => tl.play();
        container.addEventListener("mouseenter", pause);
        container.addEventListener("mouseleave", play);
        return () => {
          container.removeEventListener("mouseenter", pause);
          container.removeEventListener("mouseleave", play);
        };
      } else if (retries < 30) {
        retries++;
        setTimeout(startAnimation, 200);
      } else {
        // GSAP could not measure the track — fall back to a pure-CSS loop.
        setMarqueeFallback(true);
      }
    };

    setTimeout(startAnimation, 800);
    return () => { if (timelineRef.current) timelineRef.current.kill(); };
  }, []);

  /* JSX */
  return (
    <main className="site-shell">

      {/* Camadas globais: smooth scroll, progresso de leitura e cursor editorial */}
      <SmoothScroll />
      <ScrollProgress />
      <Cursor />

      {/* ======================== NAV ======================== */}
      <motion.header
        initial={{
          y: -20,
          opacity: 0,
          backgroundColor: "rgba(10, 10, 10, 0)",
          borderBottomColor: "rgba(26, 26, 26, 0)",
          backdropFilter: "blur(0px)"
        }}
        animate={{
          y: 0,
          opacity: 1,
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.96)" : "rgba(10, 10, 10, 0)",
          borderBottomColor: isScrolled ? "rgba(26, 26, 26, 1)" : "rgba(26, 26, 26, 0)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)"
        }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed left-0 right-0 top-0 z-50 border-b"
      >
        <nav className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">
          <a
            href="#hero"
            className="relative z-50 editorial-label"
            style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em" }}
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

          {/* Hamburger */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((o) => !o)}
            className="relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-2 md:hidden"
          >
            <span
              className="block h-px bg-white transition-transform duration-300"
              style={{ width: 28, transform: isMenuOpen ? "translateY(4px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-px bg-white transition-all duration-300"
              style={{
                width: isMenuOpen ? 28 : 18,
                transform: isMenuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex items-center justify-center md:hidden"
            style={{ background: "var(--bg-primary)" }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 28 }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="serif-heading"
                  style={{ fontSize: "2.75rem", fontStyle: "italic" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== HERO ========== */}
      <section ref={heroRef} id="hero" className="relative flex min-h-screen flex-col overflow-hidden">

        {/* Full-bleed image — parallax: desce mais devagar que o scroll */}
        <div className="absolute inset-0 overflow-hidden bg-gray-900">
          <motion.div
            className="absolute inset-0"
            style={{ y: heroImageY, scale: heroImageScale }}
          >
            <Image
              src="/images/photos/MMTS_SHOOTING LIFE0346.jpeg"
              alt="Mariana Páscoa — Growth Content Manager"
              fill
              preload
              loading="eager"
              fetchPriority="high"
              quality={95}
              className="object-cover"
              style={{ objectPosition: "50% 35%" }}
              sizes="100vw"
            />
          </motion.div>
          {/* Bottom-heavy gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.72) 36%, rgba(10,10,10,0.12) 65%, transparent 100%)",
            }}
          />
          {/* Soft left vignette */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(10,10,10,0.28) 0%, transparent 55%)" }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

        {/* Top meta row — cover masthead */}
        <div className="section-container relative z-10 pt-28 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center justify-between gap-4 border-b border-white/10 pb-5"
          >
            <span className="editorial-label">Portfólio</span>
            <span
              className="editorial-label hidden sm:block"
              style={{ color: "rgba(245,240,235,0.55)" }}
            >
              Branding · Conteúdo · Estratégia
            </span>
            <span className="editorial-label" style={{ color: "rgba(245,240,235,0.55)" }}>
              Ed. 2026
            </span>
          </motion.div>
        </div>

        <div className="flex-1" aria-hidden="true" />

        {/* Headline anchored to bottom — sobe e some suavemente conforme o scroll */}
        <motion.div
          className="section-container relative z-10 pb-24 md:pb-32 lg:pb-40"
          style={{ y: heroContentY, opacity: heroContentOpacity }}
        >
          <div className="relative max-w-5xl md:pl-8">
            {/* Decorative vertical rule */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-0 top-2 hidden w-px origin-top md:block"
              style={{ height: "calc(100% - 0.5rem)", background: "var(--accent)" }}
              aria-hidden="true"
            />

            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="editorial-label block mb-6"
            >
              Publicitária · Growth Content Manager
            </motion.span>

            {/* Reveal de linha com máscara — entrada editorial, linha a linha */}
            <h1 className="serif-heading display-heading">
              {[
                <>Estratégia</>,
                <>que vira</>,
                <>
                  <span style={{ color: "var(--accent)", fontStyle: "italic" }}>presença</span>.
                </>,
              ].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "112%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.45 + i * 0.13,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.72 }}
              className="hero-copy muted-copy mt-9"
            >
              Transformo posicionamento em presença, conteúdo em percepção e marcas em
              experiências que conectam estratégia, narrativa e crescimento.
            </motion.p>

            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="editorial-label mt-16 flex w-fit items-center gap-4"
            >
              Sobre mim
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                ↓
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ======================== ABOUT ======================== */}
      <section id="about" style={{ background: "var(--bg-secondary)" }}>
        <motion.div
          {...sectionMotion}
          className="section-container grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-16"
          style={{ paddingTop: "var(--section-py)", paddingBottom: "clamp(2.75rem, 5cqw, 5rem)" }}
        >
          {/* Copy */}
          <div>
            <SectionKicker index="01" label="Sobre Mim" />
            <h2 className="serif-heading section-heading">
              Comunicação que encontra{" "}
              <span style={{ fontStyle: "italic" }}>estratégia</span>, cultura e comportamento.
            </h2>
            <div className="my-10 h-px w-8" style={{ background: "var(--accent)" }} />
            <div className="grid gap-7">
              <p className="muted-copy">
                Sou graduanda em Publicidade e Propaganda pelo Centro Universitário de Volta
                Redonda — UniFOA, com previsão de término em 2028. Profissional de marketing,
                publicitária e diretora artística, apaixonada por comunicação estratégica,
                branding e construção de marcas com identidade forte e presença relevante.
              </p>
              <p className="muted-copy">
                Minha trajetória começou através da criação de conteúdo e da atuação como
                social media, evoluindo para uma visão estratégica da comunicação. Acredito
                que a comunicação vai muito além de estética ou frequência de postagem; marcas
                são percebidas através das experiências, da narrativa e da forma como ocupam
                espaço no digital e fora dele.
              </p>
              <p className="muted-copy">
                Por isso, meu trabalho busca unir criatividade, comportamento, branding e
                estratégia para criar conexões reais entre marcas e pessoas. Atualmente, atuo
                como Growth Content Manager na Mamutus Branding & Design, desenvolvendo
                estratégias de posicionamento, campanhas e fortalecimento de marca para
                diferentes segmentos.
              </p>
            </div>

          </div>

          <div className="mx-auto w-full max-w-xl">
            {/* Portrait */}
            <div className="relative">
              <motion.div
                className="relative overflow-hidden grayscale"
                style={{ aspectRatio: "3/4" }}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Image
                  src="/images/photos/MMTS_SHOOTING LIFE0321.jpeg"
                  alt="Mariana Páscoa — retrato editorial em preto e branco"
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
              </motion.div>
              <div
                className="absolute -bottom-5 right-5 h-3/4 w-3/4 border border-white/30"
                aria-hidden="true"
              />
              <div className="absolute bottom-6 left-0 border border-[var(--border)] bg-[var(--bg-primary)] px-6 py-4">
                <span className="editorial-label" style={{ color: "var(--accent)" }}>
                  Volta Redonda · Brasil
                </span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="mt-[clamp(2.25rem,4cqw,3.5rem)] grid grid-cols-2 border-t border-[var(--border)]">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="min-h-[clamp(8rem,10cqw,10.75rem)] border-b border-[var(--border)] p-[clamp(1.75rem,2.4cqw,2.5rem)] odd:border-r odd:border-[var(--border)]"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.022)" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong
                    className="serif-heading block"
                    style={{ color: "var(--accent)", fontSize: "2.6rem", lineHeight: 1 }}
                  >
                    <CountUp value={stat.value} />
                  </strong>
                  <span
                    className="mt-3 block"
                    style={{ color: "var(--text-muted)", fontSize: "var(--fs-body-small)" }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ======================== PHOTO STRIP ======================== */}
      <section
        className="w-full overflow-hidden"
        style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="flex" style={{ height: "clamp(240px, 45vh, 480px)" }}>
          {[
            { src: "/images/photos/DSC04332 (1).jpeg", pos: "50% 30%", delay: 0 },
            { src: "/images/photos/MMTS_SHOOTING LIFE0319.jpeg", pos: "50% 38%", delay: 0.1 },
            { src: "/images/photos/DSC04333 (1).jpeg", pos: "50% 35%", delay: 0.2 },
          ].map((photo, i) => (
            <motion.div
              key={i}
              className="relative flex-1 overflow-hidden"
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.2, delay: photo.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ParallaxLayer amount={9}>
                <Image
                  src={photo.src}
                  alt="Mariana Páscoa — Publicitária"
                  fill
                  className="object-cover"
                  style={{ objectPosition: photo.pos }}
                  sizes="33vw"
                  loading="lazy"
                />
              </ParallaxLayer>
              <div
                className="absolute inset-0"
                style={{ background: "rgba(10,10,10,0.18)" }}
              />
              {i < 2 && (
                <div
                  className="absolute right-0 top-0 bottom-0 w-px"
                  style={{ background: "var(--border)" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== MANIFESTO — scroll storytelling pinado ========== */}
      <Manifesto />

      {/* ========== BRANDS MARQUEE + PROJECT GRID ========== */}
      <section
        id="work"
        className="relative w-full overflow-hidden"
        style={{ background: "var(--bg-primary)" }}
      >
        {/* Section header */}
        <div className="section-container pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24">
          <motion.div {...fadeUp}>
            <SectionKicker index="02" label="Marcas & Clientes" />
            <h2 className="serif-heading section-heading">
              Marcas que confiaram a{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>presença</span>{" "}
              à estratégia.
            </h2>
            <p className="muted-copy mt-7 max-w-2xl">
              De gastronomia a saúde, esporte e entretenimento — marcas de segmentos distintos
              construídas com direção criativa, posicionamento e narrativa.
            </p>
          </motion.div>
        </div>

        {/* Marquee */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden"
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "4.5rem 0",
          }}
        >
          {/* Edge fades */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 md:w-56 z-30 pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--bg-primary) 0%, transparent 100%)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 md:w-56 z-30 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--bg-primary) 0%, transparent 100%)" }}
          />

          <div
            ref={marqueeRef}
            className={`flex will-change-transform${marqueeFallback ? " marquee-fallback" : ""}`}
          >
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="brand-display-item flex items-center justify-center flex-shrink-0"
                style={{ padding: "0 clamp(2rem, 4vw, 5rem)" }}
              >
                <div
                  className="relative brand-display-logo"
                  style={{
                    height: "clamp(4rem, 6vh, 6rem)", // <-- Alterado aqui para aumentar a altura máxima
                    width: "clamp(8rem, 14vw, 16rem)", // <-- Aumentado a largura proporcionalmente para não cortar
                  }}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain brand-logo-img"
                    sizes="176px"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="section-container py-24 md:py-32 lg:py-40">
          <motion.div {...fadeUp} className="mb-14 md:mb-20">
            <SectionKicker index="03" label="Projetos Selecionados" />
            <h2 className="serif-heading section-heading">
              A estratégia que{" "}
              <span style={{ fontStyle: "italic" }}>vira presença</span>.
            </h2>
            <p className="muted-copy mt-7 max-w-2xl">
              Direção criativa, posicionamento e narrativa aplicados a marcas reais — do
              conceito à presença.
            </p>
          </motion.div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className={`project-card${project.featured ? " project-card--featured" : ""}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: (index % 4) * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="project-card__inner">
                  <div className="project-card__logo-wrap">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      fill
                      className="object-contain project-card__logo"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="project-card__info">
                    <span className="project-card__category editorial-label">
                      {project.category}
                    </span>
                    <p className="project-card__name serif-heading">{project.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== QUOTE PHOTO FEATURE ========== */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: "var(--bg-primary)",
          minHeight: "clamp(300px, 52vh, 560px)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden bg-gray-900">
          <ParallaxLayer amount={12}>
            <Image
              src="/images/photos/IMG_1150.JPG"
              alt="Mariana Páscoa — Direção Criativa"
              fill
              className="object-cover object-[50%_35%]"
              sizes="100vw"
              loading="lazy"
            />
          </ParallaxLayer>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.65) 48%, rgba(10,10,10,0.15) 100%)",
            }}
          />
        </div>
        <div className="section-container relative z-10 flex h-full items-center py-24 md:py-32">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="editorial-label mb-7" style={{ color: "var(--accent)" }}>
              Publicitária
            </p>
            <blockquote
              className="serif-heading"
              style={{
                fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)",
                lineHeight: 1.25,
                fontStyle: "italic",
              }}
            >
              &quot;Marcas são percebidas através das experiências, da narrativa e da forma como
              ocupam espaço no digital e fora dele.&quot;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ======================== EDUCATION ======================== */}
      <section id="education" style={{ background: "var(--bg-primary)" }}>
        <motion.div {...sectionMotion} className="section-container py-[var(--section-py)]">
          <div className="mb-16 md:mb-20">
            <SectionKicker index="04" label="Formação & Especializações" />
            <h2 className="serif-heading section-heading">
              Aprendizado aplicado à construção de marca.
            </h2>
            <p className="muted-copy mt-7 max-w-3xl">
              Repertório em publicidade, branding, marketing digital, storytelling, neurociência
              aplicada à comunicação e cultura digital.
            </p>
          </div>

          <div className="grid border-t border-[var(--border)] md:grid-cols-2">
            {education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border-b border-[var(--border)] py-10 md:odd:border-r md:odd:pr-10 md:even:pl-10"
                style={{ transition: "background 300ms ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.018)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
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

      {/* ======================== SERVICES ======================== */}
      <section id="services" style={{ background: "var(--bg-secondary)" }}>
        <motion.div {...sectionMotion} className="section-container py-[var(--section-py)]">
          <div className="mb-20">
            <SectionKicker index="05" label="Serviços" />
            <h2 className="serif-heading section-heading">
              O que posso fazer pela sua marca.
            </h2>
            <p className="muted-copy mt-7 max-w-3xl">
              Direção criativa, branding, conteúdo e comunicação integrada — com visão
              estratégica e presença real.
            </p>
          </div>

          <div className="border-t border-[var(--border)]">
            {services.map((service, index) => (
              <motion.article
                key={service.number}
                className="group grid gap-8 border-b border-[var(--border)] py-10 transition-colors duration-300 md:grid-cols-[0.18fr_0.42fr_0.8fr] md:items-center md:py-14"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.018)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <span
                  className="serif-heading"
                  style={{ color: "var(--accent)", fontSize: "1rem" }}
                >
                  {service.number}
                </span>
                <h3
                  className="serif-heading transition-colors duration-300"
                  style={{ fontSize: "1.8rem", color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>
                <p className="muted-copy">{service.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 grid gap-10 border border-[var(--border)] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <h3 className="serif-heading title-heading">
                Estratégia, narrativa e presença em uma direção só.
              </h3>
              <p className="muted-copy mt-5 max-w-2xl">
                Para marcas que precisam ser percebidas com clareza, consistência e desejo.
              </p>
            </div>
            <a
              href="https://wa.me/5524992294044"
              className="outline-button inline-flex min-h-14 items-center justify-center px-8 editorial-label"
            >
              Iniciar conversa
            </a>
          </div>
        </motion.div>
      </section>

      {/* ========== PHOTO PANEL (between services & trajectory) ========== */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "clamp(360px, 58vh, 600px)", background: "var(--bg-primary)" }}
      >
        <div className="absolute inset-0 overflow-hidden bg-gray-900">
          <ParallaxLayer amount={12}>
            <Image
              src="/images/photos/MMTS_SHOOTING LIFE0410.jpeg"
              alt="Mariana Páscoa — Bastidores da Comunicação"
              fill
              className="object-cover object-[50%_45%]"
              sizes="100vw"
              loading="lazy"
            />
          </ParallaxLayer>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.8) 100%)",
            }}
          />
        </div>
        <div className="section-container relative z-10 flex h-full items-center justify-end py-20 md:py-24">
          <motion.div
            className="text-right max-w-md"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="editorial-label" style={{ color: "rgba(255,255,255,0.55)" }}>
              Comunicação
            </span>
            <p
              className="serif-heading mt-4"
              style={{ fontSize: "clamp(1.25rem, 2.4vw, 2rem)", lineHeight: 1.3 }}
            >
              Da ideia à execução — presente em cada etapa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================== TRAJECTORY ======================== */}
      <section id="trajectory" style={{ background: "var(--bg-primary)" }}>
        <motion.div {...sectionMotion} className="section-container py-[var(--section-py)]">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <SectionKicker index="06" label="Trajetória" />
              <h2 className="serif-heading section-heading">
                Experiência em comunicação viva.
              </h2>
            </div>
            <p className="muted-copy">
              Uma atuação que atravessa estratégia, conteúdo, eventos, educação, bastidores
              operacionais e presença multicanal.
            </p>
          </div>

          <div className="border-t border-[var(--border)]">
            {experiences.map((exp, index) => (
              <motion.article
                key={`${exp.role}-${exp.period}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="grid gap-7 border-b border-[var(--border)] py-10 md:grid-cols-[0.22fr_0.48fr_0.85fr]"
                style={{ transition: "background 300ms ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.018)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <span className="editorial-label" style={{ color: "var(--text-muted)" }}>
                  {exp.period}
                </span>
                <div>
                  <h3 className="serif-heading" style={{ fontSize: "1.55rem" }}>
                    {exp.role}
                  </h3>
                  <p className="mt-3" style={{ color: "var(--accent)", fontSize: "0.95rem" }}>
                    {exp.company}
                  </p>
                </div>
                <p className="muted-copy">{exp.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ======================== HIGHLIGHTS ======================== */}
      <section id="highlights" style={{ background: "var(--bg-secondary)" }}>
        <motion.div {...sectionMotion} className="section-container py-[var(--section-py)]">
          <div className="mb-16 max-w-5xl">
            <SectionKicker index="07" label="Projetos de Destaque" />
            <h2 className="serif-heading section-heading">
              Reconhecimentos que nascem de{" "}
              <span style={{ fontStyle: "italic" }}>ideia, roteiro e presença</span>.
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            {/* Feature image — podcast / bastidores */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <div className="relative overflow-hidden grayscale" style={{ aspectRatio: "3 / 4" }}>
                <Image
                  src="/images/photos/IMG_0578.JPG"
                  alt="Mariana Páscoa gravando podcast — bastidores de conteúdo"
                  fill
                  className="object-cover object-[center_22%]"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.16)" }} />
              </div>
              <p className="editorial-label mt-5" style={{ color: "var(--text-muted)" }}>
                Bastidores · Podcast & Conteúdo
              </p>
            </motion.div>

            {/* Highlights list */}
            <div className="grid gap-px self-start border border-[var(--border)] bg-[var(--border)]">
              {highlights.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group bg-[var(--bg-secondary)] p-8 md:p-10"
                  style={{ transition: "background 300ms ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.025)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "var(--bg-secondary)"; }}
                >
                  <span className="editorial-label" style={{ color: "var(--text-muted)" }}>
                    0{index + 1}
                  </span>
                  <h3 className="serif-heading mt-8" style={{ fontSize: "1.8rem" }}>
                    {item.title}
                  </h3>
                  <div
                    className="my-5 h-px transition-all duration-500 group-hover:w-16"
                    style={{ width: "2rem", background: "var(--accent)" }}
                  />
                  <p className="muted-copy">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========== FAIXA TIPOGRÁFICA — reage à velocidade do scroll ========== */}
      <VelocityMarquee />

      {/* ======================== CONTACT ======================== */}
      <section id="contact" style={{ background: "var(--bg-primary)" }}>
        <motion.div
          {...sectionMotion}
          className="section-container grid gap-12 py-[var(--section-py)] lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16"
        >
          {/* Copy + CTA */}
          <div>
            <SectionKicker index="08" label="Contato" />
            <h2 className="serif-heading section-heading">
              Vamos criar uma presença que{" "}
              <span style={{ fontStyle: "italic" }}>permanece</span>?
            </h2>
            <div className="my-10 h-px w-8" style={{ background: "var(--accent)" }} />
            <p className="muted-copy max-w-xl">
              Para projetos de branding, conteúdo, campanhas, presença digital e comunicação
              integrada, o caminho mais direto é uma conversa. Chame pelo WhatsApp ou acompanhe
              o trabalho pelas redes.
            </p>

            {/* Primary WhatsApp CTA */}
            <a
              href="https://wa.me/5524992294044"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button mt-12 inline-flex min-h-16 items-center gap-4 px-10 editorial-label"
              style={{ fontSize: "0.8125rem" }}
            >
              Conversar no WhatsApp
              <span aria-hidden="true">→</span>
            </a>

            {/* Secondary channels */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-[var(--border)] pt-10">
              <a
                className="project-link relative editorial-label"
                href="https://wa.me/5524992294044"
                target="_blank"
                rel="noopener noreferrer"
              >
                (24) 99229-4044
              </a>
              <a
                className="project-link relative editorial-label"
                href="https://www.instagram.com/marianapascoamkt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram · @marianapascoamkt
              </a>
              <a
                className="project-link relative editorial-label"
                href="https://www.linkedin.com/in/mariana-p%C3%A1scoa-535456321/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn · Mariana Páscoa
              </a>
            </div>
          </div>

          {/* Portrait */}
          <motion.div
            className="relative mx-auto w-full max-w-md"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative overflow-hidden grayscale" style={{ aspectRatio: "3 / 4" }}>
              <Image
                src="/images/photos/IMG_8704.JPG"
                alt="Mariana Páscoa — retrato editorial em preto e branco"
                fill
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 100vw, 38vw"
                loading="lazy"
              />
            </div>
            <div
              className="absolute -bottom-5 right-5 h-3/4 w-3/4 border border-white/25"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ======================== FOOTER ======================== */}
      <footer
        className="border-t border-[var(--border)]"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="section-container py-[clamp(4rem,8cqw,7rem)]">
          {/* Wordmark + tagline */}
          <div className="grid gap-12 border-b border-[var(--border)] pb-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <a href="#hero" className="serif-heading" style={{ fontSize: "clamp(2rem,5cqw,3.25rem)" }}>
                Mariana <span style={{ fontStyle: "italic" }}>Páscoa</span>
              </a>
              <p className="muted-copy mt-6 max-w-md">
                Publicitária e Growth Content Manager. Estratégia, narrativa e branding para
                marcas que querem ser percebidas com clareza e desejo.
              </p>
            </div>

            {/* Navigation + channels */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="editorial-label mb-6" style={{ color: "var(--text-muted)" }}>
                  Navegação
                </p>
                <ul className="grid gap-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="project-link relative editorial-label">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="editorial-label mb-6" style={{ color: "var(--text-muted)" }}>
                  Contato
                </p>
                <ul className="grid gap-4">
                  <li>
                    <a
                      className="project-link relative editorial-label"
                      href="https://wa.me/5524992294044"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      className="project-link relative editorial-label"
                      href="https://www.instagram.com/marianapascoamkt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="project-link relative editorial-label"
                      href="https://www.linkedin.com/in/mariana-p%C3%A1scoa-535456321/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="editorial-label" style={{ color: "var(--text-muted)", fontSize: "0.625rem" }}>
              © 2026 Mariana Páscoa · Volta Redonda, Brasil
            </span>
            <a href="#hero" className="editorial-label flex items-center gap-3" style={{ color: "var(--text-muted)" }}>
              Voltar ao topo
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
