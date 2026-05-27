"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projetos", href: "#work" },
  { label: "Sobre Mim", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isScrolled
            ? "rgba(10, 10, 10, 0.85)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(245, 240, 235, 0.06)"
            : "1px solid transparent",
        }}
      >
        <nav className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20"
          style={{ height: "80px", transition: "all 0.5s ease" }}
        >
          {/* Logo / Name */}
          <a href="#" className="relative z-50" id="nav-logo">
            <span
              className="tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
                letterSpacing: "0.25em",
                color: "var(--color-text-primary)",
              }}
            >
              Mariana Páscoa
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className="relative group"
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-text-secondary)",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-secondary)")
                }
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "var(--color-text-primary)" }}
                />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col items-end justify-center gap-1.5"
            id="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileOpen ? 45 : 0,
                y: isMobileOpen ? 4 : 0,
                width: isMobileOpen ? "100%" : "100%",
              }}
              className="block h-px origin-center"
              style={{ backgroundColor: "var(--color-text-primary)", width: "100%" }}
            />
            <motion.span
              animate={{
                rotate: isMobileOpen ? -45 : 0,
                y: isMobileOpen ? -4 : 0,
                width: isMobileOpen ? "100%" : "60%",
              }}
              className="block h-px origin-center"
              style={{ backgroundColor: "var(--color-text-primary)" }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: "var(--color-bg-primary)" }}
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => setIsMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    color: "var(--color-text-primary)",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile menu footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex flex-col items-center gap-3"
            >
              <span
                className="editorial-label"
                style={{ fontSize: "0.625rem" }}
              >
                Strategic Branding & Content
              </span>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/marianapascoamkt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-label"
                  style={{ fontSize: "0.625rem" }}
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/marianapascoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-label"
                  style={{ fontSize: "0.625rem" }}
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
