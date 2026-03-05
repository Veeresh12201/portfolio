"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Contact");
  const email = t("email");

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto w-full scroll-mt-20 relative">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[300px] rounded-full bg-cyan-500/8 dark:bg-cyan-500/6 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center text-center"
      >
        {/* Label */}
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono tracking-wide mb-6">
          07. Contact
        </span>

        <h3 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-5 tracking-tight">
          {t("title")}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed mb-10">
          {t("subtitle")}
        </p>

        {/* Primary CTA */}
        <motion.a
          href={`mailto:${email}`}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-flex items-center gap-3 px-9 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {t("email_button")}
        </motion.a>

        {/* Email text */}
        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
          Or email directly at{" "}
          <a
            href={`mailto:${email}`}
            className="text-cyan-600 dark:text-cyan-400 hover:underline font-mono"
          >
            {email}
          </a>
        </p>
      </motion.div>
    </section>
  );
}
