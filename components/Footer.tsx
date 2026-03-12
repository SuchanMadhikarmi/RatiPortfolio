"use client";

import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)]">
      {/* Gold gradient line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-40" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-4">
            <span className="font-display text-[24px] text-[var(--color-gold)]">
              RM
            </span>
            <div className="h-6 w-[1px] bg-[var(--color-border)]" />
            <div>
              <p className="font-body text-[14px] text-[var(--color-white)]">
                Rati Madhikarmi
              </p>
              <p className="font-body text-[12px] text-[var(--color-muted)]">
                Marketing Manager · London, UK
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic w-10 h-10 flex items-center justify-center border border-[var(--color-border)] rounded-sharp text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <p className="font-body text-[12px] text-[var(--color-muted)]">
              © {new Date().getFullYear()} Rati Madhikarmi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
