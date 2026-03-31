"use client";

import { motion } from "framer-motion";

import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

const highlights = [
  "2+ Years Experience",
  "Full Stack Specialist",
  "Open to Opportunities",
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionIntro
        eyebrow="About"
        title="Engineering thoughtful products from idea to deployment."
        description="I build systems with a product mindset — balancing polished interfaces, dependable backend architecture, and the performance needed for real users."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_420px] lg:items-start">
        <Reveal className="order-2 lg:order-1">
          <div className="glass-panel p-8 sm:p-10">
            <p className="text-lg leading-8 text-muted-foreground">
              I&apos;m Gentle — a Full Stack Engineer based in Douala,
              Cameroon, passionate about crafting digital products that solve
              real problems. With a strong foundation in both frontend and
              backend technologies, I build end-to-end solutions that are
              scalable, clean, and impactful. Currently pursuing a Bachelor of
              Technology in Computer Software Engineering while actively
              building in the industry.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-96px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass-panel hover-card px-5 py-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="glass-panel mx-auto aspect-[3/4] max-w-sm p-4">
            <div className="grid-overlay relative flex h-full items-center justify-center overflow-hidden rounded-[24px] border border-accent/20 bg-[linear-gradient(180deg,rgba(12,22,38,0.95),rgba(5,13,26,0.9))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.18),transparent_42%)]" />
              <div className="relative text-center">
                <div className="font-heading text-7xl font-semibold tracking-[0.25em] text-accent sm:text-8xl">
                  NGP
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Douala, Cameroon
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
