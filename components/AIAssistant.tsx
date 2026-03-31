"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import Reveal from "@/components/Reveal";

function GitHubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.367 6.839 9.722.5.096.682-.221.682-.492 0-.243-.009-.887-.014-1.741-2.782.617-3.369-1.369-3.369-1.369-.455-1.176-1.11-1.49-1.11-1.49-.908-.636.069-.623.069-.623 1.004.072 1.532 1.053 1.532 1.053.892 1.561 2.341 1.11 2.91.849.091-.664.349-1.11.635-1.365-2.221-.259-4.555-1.136-4.555-5.056 0-1.117.389-2.03 1.029-2.746-.103-.259-.446-1.302.098-2.715 0 0 .84-.276 2.75 1.049A9.303 9.303 0 0 1 12 6.836a9.27 9.27 0 0 1 2.504.345c1.909-1.325 2.748-1.049 2.748-1.049.546 1.413.203 2.456.1 2.715.64.716 1.027 1.629 1.027 2.746 0 3.93-2.338 4.794-4.566 5.048.359.319.679.948.679 1.911 0 1.379-.012 2.492-.012 2.83 0 .273.18.592.688.491C19.138 20.611 22 16.772 22 12.248 22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

const opportunities = [
  {
    title: "Full-Time Roles",
    description: "Open to opportunities",
  },
  {
    title: "Freelance Projects",
    description: "Available now",
  },
  {
    title: "Collaborations",
    description: "Always welcome",
  },
];

export default function CTASection() {
  return (
    <section id="ai-assistant" className="section-shell">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-white/6 px-4 py-2 backdrop-blur-xl">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50" />
            <span className="relative inline-flex size-3 rounded-full bg-emerald-300" />
          </span>
          <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Available for work
          </span>
        </div>

        <h2 className="mt-8 font-heading text-5xl leading-tight text-foreground sm:text-6xl">
          Let&apos;s Build Something Great Together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          I&apos;m open to full-time roles, freelance projects, and
          collaborations. Based in Douala, Cameroon - working globally.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:gentlenke@gmail.com"
            className="glass-button glass-button-gold min-w-56"
          >
            <Mail className="relative z-10 size-4" />
            <span className="relative z-10">Send Me an Email</span>
          </a>
          <a
            href="https://github.com/NkeGently"
            target="_blank"
            rel="noreferrer"
            className="glass-button min-w-56"
          >
            <GitHubIcon className="relative z-10 size-4" />
            <span className="relative z-10">View My GitHub</span>
          </a>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
        {opportunities.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.1}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-96px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-panel hover-card p-6 text-left"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-accent">
                {item.title}
              </p>
              <p className="mt-4 text-xl font-semibold text-foreground">
                {item.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
