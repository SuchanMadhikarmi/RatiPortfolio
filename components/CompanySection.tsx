"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const universities = [
  "York St John University",
  "University of East London",
  "University of Worcester",
  "University of Bedfordshire",
  "Middlesex University",
  "BPP University",
  "University of Hertfordshire",
  "Birmingham City University",
  "Northumbria University",
  "University of Greenwich",
];

const stats = [
  { value: 10000, suffix: "+", label: "Students Placed" },
  { value: 40, suffix: "+", label: "UK Partners" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 11, suffix: "", label: "Branches Globally" },
];

export default function CompanySection() {
  return (
    <section className="relative py-32 bg-[var(--color-surface)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
            Where I Lead
          </p>
          <h2 className="font-display text-[42px] md:text-[56px] font-normal leading-[1.1] mb-4">
            Real Dreams Educational Consultancy
          </h2>
          <p className="font-display text-xl md:text-2xl italic text-[var(--color-gold)]">
            Nepal&apos;s #1 — Shaping Global Futures Since 2003
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[var(--color-border)] p-8 text-center rounded-sharp"
            >
              <div className="text-[48px] md:text-[64px] leading-none mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="font-body text-[11px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Body text */}
        <motion.p
          className="font-body text-base leading-[1.8] text-[var(--color-white)] opacity-75 max-w-4xl mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          Real Dreams is a multi-award-winning international education
          consultancy headquartered in South Harrow, London, with branches
          across Nepal, Australia, and India. As the Exclusive Partner in
          Nepal for York St John University and University of Worcester, and
          a Preferred Partner worldwide for the University of East London,
          Real Dreams has been at the forefront of international student
          recruitment for over two decades. British Council Recognised and
          fully accredited by Nepal&apos;s Ministry of Education, the
          organisation sets the gold standard for ethical, expert, and
          transformative education consultancy.
        </motion.p>

        {/* University Marquee */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-6">
            University Partners
          </p>
          <div className="marquee-container py-4">
            <div className="inline-flex animate-marquee gap-4">
              {[...universities, ...universities].map((uni, i) => (
                <span
                  key={`${uni}-${i}`}
                  className="inline-block whitespace-nowrap border border-[rgba(201,168,76,0.2)] px-6 py-3 font-body text-[13px] tracking-[0.05em] text-[var(--color-white)] opacity-60 rounded-sharp"
                >
                  {uni}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
