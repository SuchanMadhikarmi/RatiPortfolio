"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import Image from "next/image";

const lineVariant = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.09), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-32 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[55%]">
            {/* Gold label */}
            <motion.p
              className="font-body text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Marketing Manager · UK-Based
            </motion.p>

            {/* Headline */}
            <h1 className="font-display text-[52px] md:text-[72px] lg:text-[88px] font-light leading-[0.95] tracking-[-0.02em] mb-8">
              {["Turning Global", "Dreams Into"].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    variants={lineVariant}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden">
                <motion.span
                  className="block font-display italic text-[var(--color-gold)]"
                  variants={lineVariant}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  Destinations.
                </motion.span>
              </span>
            </h1>

            {/* Body */}
            <motion.p
              className="font-body text-base md:text-[17px] text-[var(--color-white)] opacity-75 leading-[1.8] max-w-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Bridging ambitious international students with world-class UK
              universities. Strategic marketing with purpose.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-14"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#experience")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="magnetic group font-body text-[12px] uppercase tracking-[0.15em] bg-[var(--color-gold)] text-[var(--color-bg)] px-8 py-4 rounded-sharp flex items-center gap-3 transition-all duration-300 hover:bg-[var(--color-gold-light)]"
              >
                View My Work
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <a
                href="#contact"
                className="magnetic font-body text-[12px] uppercase tracking-[0.15em] text-[var(--color-gold)] border border-[var(--color-gold)] px-8 py-4 rounded-sharp flex items-center gap-3 transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)]"
              >
                <Download size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 lg:gap-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              {[
                { value: 10000, suffix: "+", label: "Students Placed" },
                { value: 40, suffix: "+", label: "University Partners" },
                { value: 3, suffix: "+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <div className="text-[36px] md:text-[44px] lg:text-[52px] leading-none truncate">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[var(--color-muted)] mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Photo */}
          <motion.div
            className="w-full lg:w-[45%] relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <div className="relative mx-auto max-w-[500px]">
              {/* Gold border pseudo-element */}
              <div
                className="absolute -inset-2 border border-[var(--color-gold)] opacity-30"
                style={{
                  clipPath:
                    "polygon(0 5%, 95% 0, 100% 95%, 5% 100%)",
                }}
              />

              {/* Photo container */}
              <div
                className="relative overflow-hidden aspect-[4/5]"
                style={{
                  clipPath:
                    "polygon(0 5%, 95% 0, 100% 95%, 5% 100%)",
                }}
                data-cursor-text="VIEW"
              >
                {/* Gradient Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)] via-[#1a1a1a] to-[var(--color-bg)] flex items-center justify-center">
                  <span className="font-display text-[120px] text-[var(--color-white)] opacity-20">
                    RM
                  </span>
                </div>
                <Image
                  src="/images/profile.jpg"
                  alt="Rati Madhikarmi — Marketing Manager"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Floating badge: MSc */}
              <motion.div
                className="absolute -top-4 -right-4 md:top-2 md:right-[-20px] bg-[rgba(9,9,9,0.8)] backdrop-blur-md border border-[rgba(201,168,76,0.25)] px-4 py-2 rounded-sharp"
                style={{ rotate: "6deg" }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="font-body text-[11px] uppercase tracking-[0.12em] text-[var(--color-gold)]">
                  MSc Digital Marketing
                </span>
              </motion.div>

              {/* Floating badge: University */}
              <motion.div
                className="absolute -bottom-4 -left-4 md:bottom-6 md:left-[-20px] bg-[rgba(9,9,9,0.8)] backdrop-blur-md border border-[rgba(201,168,76,0.25)] px-4 py-2 rounded-sharp"
                style={{ rotate: "-4deg" }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  delay: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="font-body text-[11px] uppercase tracking-[0.12em] text-[var(--color-gold)]">
                  York St John University, UK
                </span>
              </motion.div>

              {/* Abstract gold dot cluster */}
              <div className="absolute top-[-20px] left-[-20px] w-24 h-24 opacity-30">
                <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] absolute top-0 left-4" />
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] absolute top-3 left-0 opacity-60" />
                <div className="w-1 h-1 rounded-full bg-[var(--color-gold)] absolute top-6 left-6 opacity-40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-gold)] absolute top-8 left-2 opacity-50" />
                <div className="w-1 h-1 rounded-full bg-[var(--color-gold)] absolute top-2 left-10 opacity-30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
