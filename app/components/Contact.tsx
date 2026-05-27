"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full px-6 md:px-12 lg:px-20 xl:px-24 py-32 md:py-48 lg:py-64"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center min-h-screen md:min-h-[80vh]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="editorial-label mb-12 md:mb-16 lg:mb-20"
          style={{ fontSize: "0.6875rem", letterSpacing: "0.15em" }}
        >
          Vamos Conversar?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-heading), Georgia, serif",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "var(--color-text-primary)",
          }}
          className="mb-20 md:mb-32 lg:mb-40 text-balance"
        >
          Entre em Contato
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-24 md:gap-32 lg:gap-48"
        >
          <a
            href="https://wa.me/5524992294044"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <span
              className="editorial-label transition-colors duration-300 group-hover:text-white"
              style={{ fontSize: "1rem", letterSpacing: "0.1em" }}
            >
              WhatsApp
            </span>
            <span
              className="absolute left-0 -bottom-4 h-px w-0 group-hover:w-full transition-all duration-300"
              style={{ backgroundColor: "var(--color-text-primary)" }}
            />
          </a>

          <a
            href="https://www.instagram.com/mariana.pascoa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <span
              className="editorial-label transition-colors duration-300 group-hover:text-white"
              style={{ fontSize: "1rem", letterSpacing: "0.1em" }}
            >
              Instagram
            </span>
            <span
              className="absolute left-0 -bottom-4 h-px w-0 group-hover:w-full transition-all duration-300"
              style={{ backgroundColor: "var(--color-text-primary)" }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/mariana-páscoa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <span
              className="editorial-label transition-colors duration-300 group-hover:text-white"
              style={{ fontSize: "1rem", letterSpacing: "0.1em" }}
            >
              LinkedIn
            </span>
            <span
              className="absolute left-0 -bottom-4 h-px w-0 group-hover:w-full transition-all duration-300"
              style={{ backgroundColor: "var(--color-text-primary)" }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
