"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function CaseStudiesSection() {
  const t = useTranslations("CaseStudies");
  const cases = t.raw("cases") as Array<{ title: string; tech: string[]; challenge: string; solution: string }>;

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-12 font-mono text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
          <span className="text-cyan-500 text-xl">05.</span>
          {t("title")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className="group relative flex flex-col rounded-2xl bg-white/60 dark:bg-white/3 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-500/5 overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 flex flex-col flex-grow pl-8">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-4 leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>

                <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 flex-grow">
                  <div>
                    <strong className="block text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1">Challenge</strong>
                    {project.challenge}
                  </div>
                  <div>
                    <strong className="block text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1">Solution</strong>
                    <span className="line-clamp-4">{project.solution}</span>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
