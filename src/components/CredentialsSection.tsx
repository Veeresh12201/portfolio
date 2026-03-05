"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function CredentialsSection() {
  const t = useTranslations("Credentials");
  const education = t.raw("education") as { degree: string; institution: string; period: string };
  const certifications = t.raw("certifications") as Array<{ name: string; issuer: string; date: string; url: string }>;

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-12 font-mono text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
          <span className="text-cyan-500 text-xl">06.</span>
          {t("title")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-5 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h4>
            <div className="group p-6 rounded-2xl bg-white/60 dark:bg-white/3 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 transition-all hover:shadow-lg dark:hover:shadow-cyan-500/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">{education.degree}</div>
              <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-3">{education.institution}</div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{education.period}</div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-5 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certifications
            </h4>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-white/60 dark:bg-white/3 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 transition-all hover:shadow-lg dark:hover:shadow-cyan-500/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex-grow">
                    <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{cert.name}</div>
                    <div className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-2">{cert.issuer}</div>
                    <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{cert.date}</div>
                  </div>
                  <svg className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-cyan-500 flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
