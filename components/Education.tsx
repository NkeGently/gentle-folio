"use client";

import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

const education = [
  {
    degree: "BTech - Computer Software Engineering",
    school: "IUGET - Institut Universitaire des Grandes Ecoles des Tropiques",
    period: "Oct 2025 - Present | Douala, Cameroon",
    description:
      "Currently pursuing a Bachelor of Technology with a focus on modern web development, AI integration, and software engineering principles.",
  },
  {
    degree: "HND - Software Engineering",
    school: "JFN-HITECH University Douala",
    period: "Oct 2023 - June 2025 | Douala, Cameroon",
    description:
      "Obtained a Higher National Diploma with a focus on modern web development and software engineering principles.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionIntro
        eyebrow="Education"
        title="Academic Foundation"
        description="A continuing academic path grounded in software engineering, practical web development, and emerging AI-enabled product work."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.degree} delay={index * 0.08}>
            <article className="glass-panel h-full border-t border-accent/45 p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                {item.period}
              </p>
              <h3 className="mt-4 font-heading text-3xl text-foreground">
                {item.degree}
              </h3>
              <p className="mt-2 text-lg text-accent">{item.school}</p>
              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
