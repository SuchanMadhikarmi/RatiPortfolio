"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-[400ms] ease-out ${
          scrolled
            ? "bg-[rgba(9,9,9,0.85)] backdrop-blur-[20px] border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="magnetic font-display text-[28px] text-[var(--color-gold)] tracking-[-0.02em] transition-opacity hover:opacity-80"
          >
            RM
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`magnetic relative font-body text-[12px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-[var(--color-gold)]"
                    : "text-[var(--color-white)] opacity-70 hover:opacity-100"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[var(--color-gold)] transition-transform duration-300 origin-left ${
                    activeSection === link.href
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                  style={{ width: "100%" }}
                />
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNavClick("#contact")}
              className="magnetic hidden lg:block font-body text-[12px] uppercase tracking-[0.15em] text-[var(--color-gold)] border border-[var(--color-gold)] px-6 py-3 transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] rounded-sharp"
            >
              Get In Touch
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden magnetic text-[var(--color-white)] w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[9989] bg-[var(--color-bg)] flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-4xl text-[var(--color-white)] hover:text-[var(--color-gold)] transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick("#contact")}
                className="mt-4 font-body text-[12px] uppercase tracking-[0.15em] text-[var(--color-gold)] border border-[var(--color-gold)] px-8 py-4 transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
