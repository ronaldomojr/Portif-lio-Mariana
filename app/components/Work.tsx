"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
];

export default function Work() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const container = containerRef.current;

    if (!marquee || !container) return;

    let retries = 0;
    const maxRetries = 30;

    const startAnimation = () => {
      const scrollWidth = marquee.scrollWidth;
      const containerWidth = container.offsetWidth;

      // Only start if we have significant width (images loaded)
      if (scrollWidth > 1000) {
        // Kill old animation
        if (timelineRef.current) {
          timelineRef.current.kill();
        }

        // Get the width of one complete set of brands
        const singleSetWidth = scrollWidth / 4; // Since we clone 4x
        
        // Duration to scroll through one complete set
        const duration = singleSetWidth / 100; // 100px per second

        // Create infinite scroll: animate to end, then reset to beginning seamlessly
        const timeline = gsap.timeline({ repeat: -1 });
        
        // Animate one complete set
        timeline.to(marquee, {
          x: -singleSetWidth,
          duration: duration,
          ease: "linear",
          onComplete: () => {
            gsap.set(marquee, { x: 0 });
          }
        });

        timelineRef.current = timeline;

        // Pause/play on hover
        const pause = () => timeline.pause();
        const play = () => timeline.play();

        container.addEventListener("mouseenter", pause);
        container.addEventListener("mouseleave", play);

        return () => {
          container.removeEventListener("mouseenter", pause);
          container.removeEventListener("mouseleave", play);
        };
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(startAnimation, 200);
      }
    };

    // Wait for images to render
    setTimeout(startAnimation, 800);

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <section
      id="work"
      className="relative w-full py-32 md:py-40 lg:py-48 overflow-hidden px-6 md:px-12 lg:px-20 xl:px-24"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="max-w-[1440px] mx-auto mb-20 lg:mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="editorial-label"
          style={{ fontSize: "0.6875rem", letterSpacing: "0.15em" }}
        >
          04. Marcas & Clientes
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div 
        ref={containerRef}
        className="relative w-full border-y py-16 md:py-20 lg:py-24 overflow-hidden group premium-marquee-container" 
        style={{ borderColor: "var(--color-border)" }}
      >
        {/* Gradients for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-56 lg:w-72 z-30 pointer-events-none premium-fade-left" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-56 lg:w-72 z-30 pointer-events-none premium-fade-right" />

        {/* Marquee track - GSAP animates this */}
        <div ref={marqueeRef} className="flex will-change-transform" data-gsap-marquee>
          {/* Quadruple the array for seamless infinite scroll without visible cuts */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${Math.floor(i / brands.length)}-${i % brands.length}`}
              className="flex items-center justify-center px-12 md:px-20 lg:px-32 flex-shrink-0 premium-brand-item group/brand"
            >
              <div className="relative h-12 w-36 md:h-14 md:w-40 lg:h-16 lg:w-48 premium-brand-logo-wrapper">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 group-hover/brand:grayscale-0 transition-all duration-500 ease-out premium-brand-logo"
                  sizes="(max-width: 768px) 144px, (max-width: 1024px) 160px, 192px"
                  priority={false}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
