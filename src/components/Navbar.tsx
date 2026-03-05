"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "@/i18n/routing";

export default function Navbar() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV_LINKS = [
    { href: "#about",      label: t("about"),      num: "01" },
    { href: "#projects",   label: t("projects"),   num: "02" },
    { href: "#experience", label: t("experience"), num: "03" },
    { href: "#skills",     label: t("skills"),     num: "04" },
    { href: "#contact",    label: t("contact"),    num: "05" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-[#0a0f1e]/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="font-mono font-bold tracking-tighter text-lg text-zinc-900 dark:text-zinc-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          ~/veeresh
        </Link>

        <nav className="flex items-center gap-1">
          <ul className="hidden md:flex items-center gap-1 mr-4">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <a
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all"
                >
                  <span className="text-cyan-500 mr-1 text-xs">{link.num}.</span>
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700 hidden md:block mr-4" />
          <LanguageToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
