"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Marketing & Strategy",
    skills: [
      "Marketing Strategy",
      "Digital Marketing",
      "Campaign Management",
      "Social Media",
      "Content Creation",
      "Market Analysis",
      "Brand Management",
      "Facebook Ads",
      "Instagram",
      "LinkedIn Marketing",
      "Conversion Opt.",
      "Performance Tracking",
      "Reporting",
      "CRM Management",
      "Lead Generation",
      "ROI Analysis",
      "B2B Partnerships",
    ],
  },
  {
    title: "Compliance & Operations",
    skills: [
      "UKVI Compliance",
      "GDPR & Data Privacy",
      "Student Recruitment",
      "Stakeholder Mgmt",
      "Partner Relations",
      "Due Diligence",
      "Contract Negotiation",
      "Market Positioning",
    ],
  },
  {
    title: "Communication & Leadership",
    skills: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Event Management",
      "Staff Training",
      "Ethical Practices",
    ],
  },
];

// Deterministic rotation based on index
function getRotation(i: number) {
  const rotations = [-2, 1.5, -1, 2, -0.5, 1, -1.5, 0.5, -2, 1.8];
  return rotations[i % rotations.length];
}

export default function SkillsSection() {
  let globalIndex = 0;

  return (
    <section id="skills" className="relative py-32 bg-[var(--color-surface)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
            Expertise
          </p>
          <h2 className="font-display text-[38px] md:text-[52px] font-normal leading-[1.1]">
            Skills &{" "}
            <span className="italic text-[var(--color-gold)]">Capabilities</span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <motion.h3
                className="font-body text-[12px] uppercase tracking-[0.18em] text-[var(--color-gold)] mb-6 pb-3 border-b border-[var(--color-border)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {group.title}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const idx = globalIndex++;
                  const rotation = getRotation(idx);
                  return (
                    <motion.span
                      key={skill}
                      className="inline-block px-5 py-[10px] border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.04)] font-body text-[13px] uppercase tracking-[0.12em] text-[var(--color-white)] opacity-80 rounded-sharp transition-all duration-200 hover:border-[var(--color-gold)] hover:bg-[rgba(201,168,76,0.1)] hover:scale-[1.04]"
                      style={{ rotate: `${rotation}deg` }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.03,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
