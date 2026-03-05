"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Index");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/8 blur-[120px]" />
        <div className="absolute top-2/3 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/8 dark:bg-violet-500/6 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-4xl"
      >
        {/* Terminal badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          {t("hero.availableForWork")}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t("hero.greeting")}
        </motion.h1>

        {/* Subtitle with gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent"
        >
          {t("hero.subtitle")}
        </motion.h2>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          {t("hero.punchline")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-4 mt-4"
        >
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200"
          >
            {t("hero.contactMe")}
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 transition-all duration-200"
          >
            {t("hero.aboutMe")}
          </a>
        </motion.div>
      </motion.div>      
    </section>
  );
}
