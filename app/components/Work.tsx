"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
];

export default function Work() {
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
      <div className="relative w-full border-y py-16 md:py-20 lg:py-24" style={{ borderColor: "var(--color-border)" }}>
        {/* Gradients for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-64 z-10" style={{ background: "linear-gradient(to right, var(--color-bg-primary), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 z-10" style={{ background: "linear-gradient(to left, var(--color-bg-primary), transparent)" }} />

        <div className="flex w-max animate-marquee">
          {/* Double the array for seamless infinite scroll */}
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${Math.floor(i / brands.length)}`}
              className="flex items-center justify-center px-16 md:px-24 lg:px-32 opacity-70 hover:opacity-100 transition-all duration-500 group"
            >
              <div className="relative h-14 w-40 md:h-16 md:w-48">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain group-hover:drop-shadow-lg transition-all duration-300"
                  sizes="(max-width: 768px) 160px, 192px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
