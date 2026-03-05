"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function ProjectsGrid() {
  const t = useTranslations("Projects");
  const projectKeys = ["1", "2"] as const;

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-12 font-mono text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
          <span className="text-cyan-500 text-xl">02.</span>
          {t("title")}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectKeys.map((key, index) => {
            const techItems = t.raw(`items.${key}.tech`) as string[];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="group relative flex flex-col h-full rounded-2xl bg-white/60 dark:bg-white/3 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-500/5 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-7 flex flex-col flex-grow">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {t(`items.${key}.duration`)}
                    </span>
                    <svg className="w-5 h-5 text-zinc-300 dark:text-zinc-700 group-hover:text-cyan-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>

                  <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {t(`items.${key}.title`)}
                  </h4>
                  <p className="text-sm font-medium text-cyan-600 dark:text-cyan-500 mb-4">
                    {t(`items.${key}.company`)}
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow">
                    {t(`items.${key}.desc`)}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/70">
                    {techItems.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
