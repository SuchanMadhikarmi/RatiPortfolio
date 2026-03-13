"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import MagneticCursor from "@/components/MagneticCursor";
import ParticleBackground from "@/components/ParticleBackground";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [konamiIdx, setKonamiIdx] = useState(0);

  // Splash screen timer
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Konami code handler
  const handleKonami = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === KONAMI[konamiIdx]) {
        const next = konamiIdx + 1;
        if (next === KONAMI.length) {
          // Fire confetti!
          setKonamiIdx(0);
          import("canvas-confetti").then((confetti) => {
            const fire = confetti.default;
            const duration = 3000;
            const end = Date.now() + duration;
            const colors = ["#C9A84C", "#E8C97A", "#F5F0E8"];
            const frame = () => {
              fire({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors,
              });
              fire({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors,
              });
              if (Date.now() < end) requestAnimationFrame(frame);
            };
            frame();
          });
        } else {
          setKonamiIdx(next);
        }
      } else {
        setKonamiIdx(0);
      }
    },
    [konamiIdx]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKonami);
    return () => window.removeEventListener("keydown", handleKonami);
  }, [handleKonami]);

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-[99999] bg-[var(--color-bg)] flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="font-display text-[64px] md:text-[96px] text-[var(--color-gold)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              RM
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <MagneticCursor />
      <ScrollProgress />
      <ParticleBackground />

      <main className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <CompanySection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
