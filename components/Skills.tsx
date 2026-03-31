"use client";

import { motion } from "framer-motion";

import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionIntro
        eyebrow="Skills"
        title="Tech Stack"
        description="A focused toolkit for building performant products across frontend, backend, deployment, and design collaboration."
      />

      <div className="mt-14 space-y-10">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.category} delay={groupIndex * 0.08}>
            <div className="glass-panel p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-accent">
                {group.category}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-96px" }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 0 0 1px rgba(201,168,76,0.45), 0 18px 40px rgba(201,168,76,0.12)",
                    }}
                    className="rounded-full border border-white/10 bg-[rgba(10,22,40,0.9)] px-4 py-2 text-sm tracking-[0.08em] text-muted-foreground transition-colors hover:border-accent/45 hover:text-foreground"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
