"use client";

import { motion } from "framer-motion";

import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

const projects = [
  {
    title: "CampusGig",
    status: "In Development",
    description:
      "A dedicated freelancing platform connecting university students with small businesses for affordable, field-relevant services. It includes real-time messaging, authentication, service listings, project matching, and a review system designed to help students build experience while businesses access skilled talent. The project is not yet publicly hosted and the source code is not yet available on GitHub.",
    stack: ["Next.js", "Tailwind CSS", "Convex", "TypeScript"],
    primaryLabel: "Discuss Project",
    primaryHref: "mailto:gentlenke@gmail.com?subject=CampusGig%20Project%20Inquiry",
    secondaryLabel: "Private for Now",
    secondaryHref: "#",
  },
  {
    title: "Personal Portfolio Website",
    status: "Live",
    description:
      "A professional portfolio experience built around a bespoke dark navy and gold design system, strong SEO foundations, fluid Framer Motion interactions, and a polished single-page presentation. The project highlights both visual design quality and full-stack implementation discipline.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    primaryLabel: "Live Site",
    primaryHref: "https://gentle-folio.vercel.app",
    secondaryLabel: "GitHub Repo",
    secondaryHref: "https://github.com/NkeGently/gentle-folio",
  },
  {
    title: "Project Name",
    status: "Coming Soon",
    description:
      "Brief description of what this project does and the problem it solves.",
    stack: ["Tech One", "Tech Two", "Tech Three"],
    primaryLabel: "Live Demo",
    primaryHref: "#",
    secondaryLabel: "GitHub",
    secondaryHref: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionIntro
        eyebrow="Projects"
        title="Featured Projects"
        description="Selected work that reflects product thinking, full-stack execution, and a focus on building useful digital experiences."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              className={`relative flex h-full flex-col rounded-[28px] p-7 shadow-[0_20px_60px_rgba(1,6,13,0.28)] ${
                project.status === "Coming Soon"
                  ? "border border-dashed border-accent/45 bg-card/80"
                  : "glass-panel"
              }`}
            >
              {project.status === "Coming Soon" ? (
                /* TODO: Add project here */
                <span className="sr-only">Project placeholder</span>
              ) : null}

              <span className="absolute right-5 top-5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-accent-light">
                {project.status}
              </span>
              <h3 className="mt-10 font-heading text-3xl text-foreground">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.primaryHref}
                  target={project.primaryHref.startsWith("http") ? "_blank" : undefined}
                  rel={project.primaryHref.startsWith("http") ? "noreferrer" : undefined}
                  className="glass-button glass-button-gold"
                >
                  <span className="relative z-10">{project.primaryLabel}</span>
                </a>
                <a
                  href={project.secondaryHref}
                  target={project.secondaryHref.startsWith("http") ? "_blank" : undefined}
                  rel={project.secondaryHref.startsWith("http") ? "noreferrer" : undefined}
                  className="glass-button"
                >
                  <span className="relative z-10">{project.secondaryLabel}</span>
                </a>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
