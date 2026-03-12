"use client";

import { useState, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "ratimadhikarmi@gmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7466 436683",
    href: "tel:+447466436683",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Harrow, London, UK",
  },
];

const subjectOptions = [
  "Partnership",
  "Recruitment",
  "Collaboration",
  "Other",
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("ratimadhikarmi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-[var(--color-surface)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-display text-[48px] md:text-[72px] font-light leading-[1.05] mb-6">
            Let&apos;s Build Something
            <br />
            <span className="italic text-[var(--color-gold)]">Remarkable.</span>
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-[var(--color-muted)] max-w-2xl mx-auto leading-[1.7]">
            Whether you&apos;re looking for a results-driven marketing partner,
            exploring collaboration with Real Dreams Educational Consultancy,
            or simply want to connect — I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact method cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-4 mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {contactMethods.map((method) => (
            <div
              key={method.label}
              className={`glass-card p-8 text-center transition-all duration-300 hover:border-[var(--color-gold)] ${
                method.copyable ? "cursor-pointer" : ""
              }`}
              onClick={method.copyable ? copyEmail : undefined}
            >
              <method.icon
                size={24}
                className="text-[var(--color-gold)] mx-auto mb-4"
              />
              <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)] mb-2">
                {method.label}
              </p>
              {method.href ? (
                <a
                  href={method.href}
                  className="font-body text-[15px] text-[var(--color-white)] hover:text-[var(--color-gold)] transition-colors"
                >
                  {method.value}
                </a>
              ) : (
                <p className="font-body text-[15px] text-[var(--color-white)]">
                  {method.value}
                </p>
              )}
              {method.copyable && (
                <div className="flex items-center justify-center gap-2 mt-3">
                  {copied ? (
                    <Check size={12} className="text-[var(--color-gold)]" />
                  ) : (
                    <Copy size={12} className="text-[var(--color-muted)]" />
                  )}
                  <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                    {copied ? "Copied!" : "Click to copy"}
                  </span>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          className="max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Name */}
              <div className="floating-input">
                <input
                  type="text"
                  placeholder=" "
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <label>Name</label>
                {errors.name && (
                  <p className="text-[12px] text-red-400 mt-2 font-body">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="floating-input">
                <input
                  type="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <label>Email</label>
                {errors.email && (
                  <p className="text-[12px] text-red-400 mt-2 font-body">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="mb-8">
              <label className="block font-body text-[10px] uppercase tracking-[0.15em] text-[var(--color-gold)] mb-2">
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
                className="w-full appearance-none bg-transparent border-b border-[var(--color-border)] pb-2 pt-1 text-[var(--color-white)] text-[16px] outline-none transition-colors duration-300 focus:border-[var(--color-gold)] font-body"
              >
                <option value="" disabled className="bg-[var(--color-bg)] text-[var(--color-muted)]">
                  Select a subject
                </option>
                {subjectOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[var(--color-bg)] text-[var(--color-white)]">
                    {opt}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p className="text-[12px] text-red-400 mt-2 font-body">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="floating-input mb-10">
              <textarea
                rows={4}
                placeholder=" "
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <label>Message</label>
              {errors.message && (
                <p className="text-[12px] text-red-400 mt-2 font-body">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="magnetic w-full bg-[var(--color-gold)] text-[var(--color-bg)] font-body text-[13px] uppercase tracking-[0.18em] py-5 rounded-sharp transition-all duration-300 hover:bg-[var(--color-gold-light)] font-medium"
            >
              Send Message →
            </button>
          </form>
        </motion.div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {(copied || submitted) && (
          <motion.div
            className="fixed bottom-6 right-6 z-[9999] bg-[var(--color-card)] border border-[var(--color-gold)] px-6 py-3 rounded-sharp shadow-lg"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-body text-[13px] text-[var(--color-gold)]">
              {copied ? "Email copied ✓" : "Message sent ✓"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
