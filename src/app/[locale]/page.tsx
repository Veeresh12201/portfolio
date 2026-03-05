import { HeroSection } from "@/components/HeroSection";
import { EngineRoomSection } from "@/components/EngineRoomSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsGrid } from "@/components/SkillsGrid";
import { CredentialsSection } from "@/components/CredentialsSection";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <EngineRoomSection />

      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <ProjectsGrid />

      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <ExperienceSection />
      
      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <SkillsGrid />

      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <CaseStudiesSection />

      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <CredentialsSection />

      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <ContactSection />
    </>
  );
}
