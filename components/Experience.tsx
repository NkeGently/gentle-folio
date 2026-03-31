"use client";

import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

const entries = [
  {
    role: "Junior Software Engineer (Intern)",
    company: "African Digital Strategies Network",
    period: "Dec 2024 – Jan 2025",
    description:
      "Worked on internal tools and prototypes. Focused on building a crowdfunding website to help underprivileged communities.",
  },
  {
    role: "Junior Software Engineer (Intern)",
    company: "Gracify Technology Cameroun",
    period: "July 2024 – Nov 2024",
    description:
      "Assisted in building and maintaining web applications. Contributed to frontend development using modern frameworks and supported integration of AI-driven features.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionIntro
        eyebrow="Experience"
        title="Experience"
        description="Hands-on engineering experience across product prototyping, internal tooling, and modern web application delivery."
      />

      <div className="relative mt-14 space-y-10 pl-10 sm:pl-14">
        <div className="timeline-line absolute bottom-0 left-3 top-0 w-px sm:left-5" />
        {entries.map((entry, index) => (
          <Reveal key={entry.company} delay={index * 0.08} className="relative">
            <span className="absolute left-[-1.95rem] top-8 size-3 rounded-full border border-accent-light bg-accent shadow-[0_0_0_8px_rgba(201,168,76,0.08)] sm:left-[-2.9rem]" />
            <article className="glass-panel border-l border-accent/35 p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {entry.period}
              </p>
              <h3 className="mt-3 font-heading text-3xl text-foreground">
                {entry.role}
              </h3>
              <p className="mt-2 text-lg text-accent">{entry.company}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {entry.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
