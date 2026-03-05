"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Technologies" },
  { value: "5+", label: "Projects Shipped" },
  { value: "2", label: "Countries Worked" },
];

export function EngineRoomSection() {
  const t = useTranslations("EngineRoom");

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-12 font-mono text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
          <span className="text-cyan-500 text-xl">01.</span>
          {t("title")}
        </h3>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Bio */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              {t("subtitle")}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t("intro")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { key: "speed", title: t("dna.speed.title"), desc: t("dna.speed.desc") },
                { key: "security", title: t("dna.security.title"), desc: t("dna.security.desc") },
                { key: "optimization", title: t("dna.optimization.title"), desc: t("dna.optimization.desc") },
                { key: "reliability", title: t("dna.reliability.title"), desc: t("dna.reliability.desc") },
              ].map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group p-4 rounded-xl bg-white/60 dark:bg-white/3 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 transition-colors"
                >
                  <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">
                    ▹ {item.title}
                  </span>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-5 rounded-2xl bg-white/60 dark:bg-white/3 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all text-center group"
                >
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-cyan-500 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Delivery section */}
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-white/3 border border-zinc-200 dark:border-zinc-800 space-y-4">
              <h4 className="text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                {t("delivery.title")}
              </h4>
              {[
                { key: "isolation", title: t("delivery.isolation.title"), desc: t("delivery.isolation.desc") },
                { key: "debt", title: t("delivery.debt.title"), desc: t("delivery.debt.desc") },
                { key: "scalable", title: t("delivery.scalable.title"), desc: t("delivery.scalable.desc") },
              ].map((item) => (
                <div key={item.key} className="flex gap-3">
                  <span className="text-cyan-500 mt-0.5 flex-shrink-0">▹</span>
                  <div>
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}