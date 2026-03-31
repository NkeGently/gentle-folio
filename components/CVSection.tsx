"use client";

import { FileText } from "lucide-react";
import Link from "next/link";

import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

export default function CVSection() {
  return (
    <section id="cv" className="section-shell">
      <SectionIntro
        eyebrow="Curriculum Vitae"
        title="Curriculum Vitae"
        description="Download a concise overview of Gentle&apos;s experience, education, and technical background."
        align="center"
      />

      <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
        <div className="glass-panel text-center">
          <div className="p-10 sm:p-14">
            <div className="mx-auto flex size-20 items-center justify-center rounded-[28px] border border-accent/30 bg-accent/12 text-accent">
              <FileText className="size-9" />
            </div>
            <h3 className="mt-6 font-heading text-4xl text-foreground">
              Nke Anchi Gentle - Full Stack Engineer
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              Download my full CV to learn more about my background and skills.
            </p>
            <Link
              href="/cv.pdf"
              target="_blank"
              className="glass-button glass-button-gold mt-8 min-w-52"
            >
              <span className="relative z-10">Download CV</span>
            </Link>
            <p className="mt-4 text-sm text-dim-foreground">
              CV available in PDF format
            </p>
            {/* TODO: Drop your CV file at /public/cv.pdf */}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
