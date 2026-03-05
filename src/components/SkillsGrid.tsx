"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CATEGORIES = [
  "languages",
  "backend",
  "frontend",
  "databases",
  "devops",
  "security",
  "ai_tools"
] as const;

import { 
  SiPython, SiPhp, SiJavascript, SiTypescript, SiFastapi, SiSpringboot, SiLaravel, SiFlask, SiDjango, SiExpress,
  SiReact, SiNextdotjs, SiStreamlit, SiTailwindcss, SiPostgresql, SiMysql, SiRedis, SiMongodb,
  SiDocker, SiGithubactions, SiPostman, SiLinux, SiJsonwebtokens
} from "react-icons/si";
import { FaRobot, FaBrain, FaTerminal, FaJava } from "react-icons/fa6";
import { TbMessageChatbot } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";

const getSkillIcon = (skillName: string) => {
  const s = skillName.toLowerCase();
  
  if (s.includes("python")) return <SiPython className="w-7 h-7 text-[#3776AB]" />;
  if (s.includes("java") && !s.includes("script")) return <FaJava className="w-7 h-7 text-[#007396]" />;
  if (s.includes("php")) return <SiPhp className="w-7 h-7 text-[#777BB4]" />;
  if (s.includes("typescript")) return <SiTypescript className="w-7 h-7 text-[#3178C6]" />;
  if (s.includes("javascript")) return <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />;
  
  if (s.includes("fastapi")) return <SiFastapi className="w-7 h-7 text-[#009688]" />;
  if (s.includes("spring")) return <SiSpringboot className="w-7 h-7 text-[#6DB33F]" />;
  if (s.includes("laravel")) return <SiLaravel className="w-7 h-7 text-[#FF2D20]" />;
  if (s.includes("flask")) return <SiFlask className="w-7 h-7 dark:text-white" />;
  if (s.includes("django")) return <SiDjango className="w-7 h-7 text-[#092E20] dark:text-[#44b78b]" />;
  if (s.includes("express")) return <SiExpress className="w-7 h-7 dark:text-white" />;
  
  if (s.includes("react")) return <SiReact className="w-7 h-7 text-[#61DAFB]" />;
  if (s.includes("next")) return <SiNextdotjs className="w-7 h-7 dark:text-white" />;
  if (s.includes("streamlit")) return <SiStreamlit className="w-7 h-7 text-[#FF4B4B]" />;
  if (s.includes("tailwind")) return <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />;
  
  if (s.includes("postgres")) return <SiPostgresql className="w-7 h-7 text-[#4169E1]" />;
  if (s.includes("mysql")) return <SiMysql className="w-7 h-7 text-[#4479A1]" />;
  if (s.includes("redis")) return <SiRedis className="w-7 h-7 text-[#DC382D]" />;
  if (s.includes("mongo")) return <SiMongodb className="w-7 h-7 text-[#47A248]" />;
  
  if (s.includes("docker")) return <SiDocker className="w-7 h-7 text-[#2496ED]" />;
  if (s.includes("github")) return <SiGithubactions className="w-7 h-7 text-[#2088FF]" />;
  if (s.includes("postman")) return <SiPostman className="w-7 h-7 text-[#FF6C37]" />;
  if (s.includes("linux") || s.includes("bash")) return <SiLinux className="w-7 h-7 dark:text-white" />;
  
  if (s.includes("jwt")) return <SiJsonwebtokens className="w-7 h-7 text-[#000000] dark:text-white" />;
  if (s.includes("oauth")) return <BiNetworkChart className="w-7 h-7 text-emerald-500" />;
  
  if (s.includes("antigravity")) return <FaRobot className="w-7 h-7 text-cyan-500" />;
  if (s.includes("claude")) return <FaBrain className="w-7 h-7 text-amber-600" />;
  if (s.includes("gpt")) return <TbMessageChatbot className="w-7 h-7 text-emerald-500" />;
  if (s.includes("cursor")) return <FaTerminal className="w-7 h-7 dark:text-white" />;

  return <div className="w-4 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400" />;
};

export function SkillsGrid() {
  const t = useTranslations("Skills");
  const allSkills = CATEGORIES.flatMap(category => t.raw(`items.${category}`) as string[]);

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto w-full relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/8 dark:bg-cyan-500/5 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h3 className="text-3xl font-bold mb-12 font-mono text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
          <span className="text-cyan-500 text-xl">04.</span>
          {t("title")}
        </h3>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill}
              title={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.018, duration: 0.3 }}
              className="group relative flex flex-col items-center justify-center gap-2 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/60 dark:bg-white/3 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-lg dark:hover:shadow-cyan-500/10 transition-all duration-200 cursor-default"
            >
              <div className="transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                {getSkillIcon(skill)}
              </div>
              {/* Tooltip */}
              <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-zinc-500 dark:text-zinc-400 whitespace-nowrap pointer-events-none">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
