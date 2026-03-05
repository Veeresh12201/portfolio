"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const jobs = t.raw("jobs") as Array<{ role: string; company: string; period: string; highlights: string[] }>;

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-12 font-mono text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
          <span className="text-cyan-500 text-xl">03.</span>
          {t("title")}
        </h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-zinc-300 dark:via-zinc-700 to-transparent" />

          <div className="space-y-10 pl-12 sm:pl-14">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                {/* Glowing timeline dot */}
                <div className="absolute -left-[41px] sm:-left-[50px] top-1.5">
                  <div className="w-4 h-4 rounded-full bg-white dark:bg-[#0a0f1e] border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-cyan-500 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-all duration-300" />
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/3 border border-zinc-200 dark:border-zinc-800 group-hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                      {job.role}
                    </h4>
                    <span className="inline-flex items-center px-2.5 py-1 text-xs font-mono rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/50 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                    {job.company}
                  </p>

                  <ul className="space-y-2">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <span className="text-cyan-500 flex-shrink-0 mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
