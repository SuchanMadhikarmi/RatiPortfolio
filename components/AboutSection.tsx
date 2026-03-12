"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Monitor,
  Users,
  MapPin,
  Mail,
  Phone,
  Languages,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const values = [
  {
    icon: ShieldCheck,
    label: "Compliance",
    desc: "UKVI & GDPR specialist",
  },
  {
    icon: BarChart3,
    label: "Strategy",
    desc: "Data-driven campaigns",
  },
  {
    icon: Monitor,
    label: "Digital",
    desc: "Multi-platform presence",
  },
  {
    icon: Users,
    label: "Leadership",
    desc: "Cross-functional teams",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
            About
          </p>
          <h2 className="font-display text-[42px] md:text-[56px] font-normal leading-[1.1]">
            The Person Behind <br />
            <span className="italic text-[var(--color-gold)]">the Strategy</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT — Bio */}
          <motion.div
            className="relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Large quote mark */}
            <span
              className="absolute -top-10 -left-4 font-display text-[200px] text-[var(--color-gold)] opacity-[0.06] leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <div className="relative space-y-6 font-body text-[17px] leading-[1.9] text-[var(--color-white)] opacity-75">
              <p>
                I&apos;m Rati Madhikarmi, a Marketing Manager at Real Dreams
                Educational Consultancy — one of Nepal and the UK&apos;s most
                established international education agencies, proudly
                partnered with 40+ UK universities and counting over 10,000
                student success stories since 2003.
              </p>
              <p>
                With a background spanning digital campaigns, compliance
                management, commercial strategy, and student recruitment, I
                operate at the intersection of data-driven marketing and
                human aspiration — helping students from Nepal and beyond
                find their path to world-class British universities.
              </p>
              <p>
                Currently completing my MSc Digital Marketing with
                Professional Experience at York St John University, I bring
                both academic rigour and on-the-ground commercial instinct
                to everything I lead.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Details Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="glass-card p-8 md:p-10 mb-8">
              <h3 className="font-body text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-8">
                Personal Details
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    text: "Harrow, London, United Kingdom",
                  },
                  {
                    icon: Mail,
                    text: "ratimadhikarmi@gmail.com",
                    href: "mailto:ratimadhikarmi@gmail.com",
                  },
                  {
                    icon: Phone,
                    text: "+44 7466 436683",
                    href: "tel:+447466436683",
                  },
                  {
                    icon: Languages,
                    text: "English · Nepali · Hindi · Gujarati",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-4"
                  >
                    <item.icon
                      size={16}
                      className="text-[var(--color-gold)] shrink-0"
                    />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-[15px] text-[var(--color-white)] opacity-75 hover:text-[var(--color-gold)] transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="font-body text-[15px] text-[var(--color-white)] opacity-75">
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Value cards */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  className="group border border-[var(--color-border)] p-5 rounded-sharp transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-[rgba(201,168,76,0.04)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 * i,
                    duration: 0.5,
                  }}
                >
                  <v.icon
                    size={20}
                    className="text-[var(--color-gold)] mb-3"
                  />
                  <h4 className="font-body text-[12px] uppercase tracking-[0.15em] text-[var(--color-white)] mb-1">
                    {v.label}
                  </h4>
                  <p className="font-body text-[12px] text-[var(--color-muted)]">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
