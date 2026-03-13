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

const experiences = [
  {
    current: true,
    title: "Marketing Manager",
    company: "Real Dreams Educational Consultancy",
    period: "Jan 2026 — Present",
    location: "London, UK",
    bullets: [
      "Ensuring all marketing and student recruitment comms adhere strictly to UKVI, GDPR, and international education policies",
      "Auditing digital and print materials for accuracy, evidence, and legal compliance",
      "Managing confidential partner data and conducting due diligence on third-party commercial agreements",
    ],
  },
  {
    current: false,
    title: "Marketing and Commercial Manager (Part-Time)",
    company: "Real Dreams Educational Consultancy",
    period: "Aug 2024 — Dec 2025",
    location: "London, UK",
    bullets: [
      "Developed compliant marketing & commercial strategies aligned with UKVI and sector regulations",
      "Managed digital campaigns, promotional content, partnerships with agents and stakeholders",
      "Analysed market trends and campaign performance to optimise outreach, branding, and conversion",
    ],
  },
  {
    current: false,
    title: "Trainee Digital Marketer",
    company: "Real Dreams Educational Consultancy",
    period: "Aug 2023 — July 2024",
    location: "London, UK",
    bullets: [
      "Developed and implemented digital marketing campaigns for international student outreach",
      "Managed Facebook, Instagram, LinkedIn — content creation and scheduling for brand visibility",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32">
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
            Career
          </p>
          <h2 className="font-display text-[38px] md:text-[52px] font-normal leading-[1.1]">
            Professional{" "}
            <span className="italic text-[var(--color-gold)]">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--color-gold)] opacity-30 shadow-[0_0_8px_rgba(201,168,76,0.25)]" />

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.title + exp.period}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-gold)] border-[3px] border-[var(--color-bg)] z-10 mt-8 lg:mt-10 animate-pulse-gold" />

                  {/* Spacer for alternating */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 ${
                      isLeft ? "lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <div className="group bg-[var(--color-card)] border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-gold)] p-7 md:p-8 rounded-sharp transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-l-[var(--color-gold-light)]">
                      {exp.current && (
                        <span className="inline-block font-body text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3 border border-[var(--color-gold)] px-3 py-1 rounded-sharp">
                          Current Role
                        </span>
                      )}

                      <h3 className="font-display text-[22px] md:text-[24px] font-normal leading-tight mb-1">
                        {exp.title}
                      </h3>
                      <p className="font-body text-[14px] text-[var(--color-gold)] mb-2">
                        {exp.company}
                      </p>
                      <p className="font-body text-[13px] text-[var(--color-muted)] mb-5">
                        {exp.period} · {exp.location}
                      </p>

                      <div className="border-t border-[var(--color-border)] pt-5">
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, bi) => (
                            <li
                              key={bi}
                              className="font-body text-[14px] leading-[1.7] text-[var(--color-white)] opacity-70 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[5px] before:h-[1px] before:bg-[var(--color-gold)]"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
