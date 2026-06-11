"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Palavras destacadas ganham itálico e cor plena — o resto do texto "acende"
   conforme o leitor rola, como uma página de manifesto sendo lida. */
const manifesto: { word: string; em?: boolean }[] = [
  { word: "Toda" }, { word: "marca" }, { word: "quer" }, { word: "atenção." },
  { word: "Poucas" }, { word: "constroem" }, { word: "presença.", em: true },
  { word: "Eu" }, { word: "trabalho" }, { word: "no" }, { word: "espaço" },
  { word: "entre" }, { word: "ver" }, { word: "e" }, { word: "lembrar", em: true },
  { word: "—" }, { word: "onde" }, { word: "estratégia", em: true },
  { word: "vira" }, { word: "narrativa," }, { word: "narrativa" },
  { word: "vira" }, { word: "cultura" }, { word: "e" }, { word: "cultura" },
  { word: "vira" }, { word: "desejo.", em: true },
];

/**
 * Scroll storytelling: a seção fica pinada enquanto o texto do manifesto é
 * revelado palavra por palavra, no ritmo do scroll (scrub). Sem JS ou com
 * movimento reduzido, o texto simplesmente fica visível.
 */
export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".manifesto__word",
        { opacity: 0.13 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.06,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=130%",
            scrub: 0.4,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="manifesto" aria-label="Manifesto">
      <div className="section-container">
        <span className="editorial-label manifesto__kicker">Manifesto</span>
        <p className="manifesto__text serif-heading">
          {manifesto.map((item, i) => (
            <span
              key={i}
              className={`manifesto__word${item.em ? " manifesto__word--em" : ""}`}
            >
              {item.word}{" "}
            </span>
          ))}
        </p>
        <div className="manifesto__rule" aria-hidden="true" />
      </div>
    </section>
  );
}
