"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const education = [
  {
    featured: true,
    degree: "MSc Digital Marketing with Professional Experience",
    shortDegree: "MSc",
    institution: "York St John University, United Kingdom",
    years: "2022 — 2024",
    tags: ["Digital Marketing", "Professional Experience", "UK University"],
  },
  {
    featured: false,
    degree: "Bachelor of Technology (Information Technology)",
    shortDegree: "BTech",
    institution: "Marwadi University, India",
    years: "2018 — 2022",
    tags: ["Information Technology", "Engineering"],
  },
];

const languages = [
  { name: "English", level: "Native/Fluent", dots: 3 },
  { name: "Nepali", level: "Native", dots: 3 },
  { name: "Hindi", level: "Fluent", dots: 3 },
  { name: "Gujarati", level: "Conversational", dots: 2 },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
            Education
          </p>
          <h2 className="font-display text-[34px] sm:text-[40px] md:text-[52px] font-normal leading-[1.1]">
            Academic{" "}
            <span className="italic text-[var(--color-gold)]">Foundation</span>
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className={`group relative overflow-hidden bg-[var(--color-card)] border rounded-sharp p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.08)] ${
                edu.featured
                  ? "border-[var(--color-gold)] hover:border-[var(--color-gold-light)]"
                  : "border-[var(--color-border)] hover:border-[var(--color-gold)]"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              {/* Watermark degree abbreviation */}
              <span className="absolute top-4 right-4 sm:right-6 font-accent text-[64px] sm:text-[80px] md:text-[100px] leading-none text-[var(--color-white)] opacity-[0.04] select-none pointer-events-none">
                {edu.shortDegree}
              </span>

              {/* Year watermark */}
              <span className="absolute top-5 right-4 sm:right-6 font-accent text-[24px] sm:text-[32px] leading-none text-[var(--color-white)] opacity-[0.06] select-none pointer-events-none">
                {edu.years.split(" — ")[0]}
              </span>

              {/* Behind background degree marker */}
              {edu.featured && (
                <span className="absolute bottom-[-8px] left-3 sm:left-4 font-accent text-[48px] sm:text-[64px] gold-gradient-text opacity-30 select-none pointer-events-none">
                  {edu.shortDegree}
                </span>
              )}

              <div className="relative z-10">
                <h3 className="font-display text-[20px] sm:text-[22px] md:text-[26px] font-normal leading-tight mb-2">
                  {edu.degree}
                </h3>
                <p className="font-body text-[14px] text-[var(--color-gold)] mb-1">
                  {edu.institution}
                </p>
                <p className="font-body text-[13px] text-[var(--color-muted)] mb-6">
                  {edu.years}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-4 py-[6px] border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] font-body text-[11px] uppercase tracking-[0.12em] text-[var(--color-muted)] rounded-sharp"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-8">
            Languages
          </p>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="border border-[var(--color-border)] px-5 sm:px-6 py-4 rounded-sharp min-w-[145px] sm:min-w-[160px] transition-all duration-200 hover:border-[var(--color-gold)]"
              >
                <p className="font-body text-[14px] text-[var(--color-white)] font-medium mb-1">
                  {lang.name}
                </p>
                <p className="font-body text-[11px] text-[var(--color-muted)] mb-3">
                  {lang.level}
                </p>
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className={`w-2 h-2 rounded-full ${
                        dot <= lang.dots
                          ? "bg-[var(--color-gold)]"
                          : "border border-[var(--color-muted)] opacity-30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
