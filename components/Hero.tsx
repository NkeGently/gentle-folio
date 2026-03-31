"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const titles = [
  "Full Stack Engineer",
  "Next.js & React Developer",
  "Python & Node.js Engineer",
  "Building Scalable Digital Experiences",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/NkeGently" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nke-anchi-gentle-8b8bb92aa/" },
  { label: "Email", href: "mailto:gentlenke@gmail.com" },
];

const statCards = [
  { value: "2+", label: "Years Experience" },
  { value: "Full Stack", label: "Specialist" },
  { value: "Open", label: "To Opportunities" },
];

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const shouldPause = !isDeleting && displayed === currentWord;
    const nextDelay = shouldPause ? 1400 : isDeleting ? 35 : 75;

    const timeout = window.setTimeout(() => {
      if (shouldPause) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        const nextValue = currentWord.slice(0, Math.max(0, displayed.length - 1));
        setDisplayed(nextValue);

        if (nextValue.length === 0) {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
        }

        return;
      }

      setDisplayed(currentWord.slice(0, displayed.length + 1));
    }, nextDelay);

    return () => window.clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words]);

  return displayed;
}

export default function Hero() {
  const typedTitle = useTypewriter(titles);
  const particles = useMemo(
    () => [
      { top: "16%", left: "65%", size: "h-28 w-28", delay: 0 },
      { top: "52%", left: "79%", size: "h-20 w-20", delay: 0.8 },
      { top: "70%", left: "60%", size: "h-14 w-14", delay: 1.5 },
    ],
    [],
  );

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="grid-overlay absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.24),transparent_30%)]" />

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute hidden rounded-full border border-accent/20 bg-accent/10 blur-3xl lg:block ${particle.size}`}
          style={{ top: particle.top, left: particle.left }}
          animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
          transition={{
            duration: 6 + index,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-white/6 px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50" />
              <span className="relative inline-flex size-3 rounded-full bg-emerald-300" />
            </span>
            <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-6xl leading-[0.9] font-semibold tracking-tight sm:text-7xl lg:text-[6.2rem]"
          >
            <span className="block">Nke Anchi</span>
            <span className="block italic text-accent">Gentle</span>
            <span className="block text-[0.88em]">Petenchepankwang</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 min-h-16"
          >
            <p className="text-xl font-semibold tracking-[0.12em] text-foreground sm:text-2xl lg:text-3xl">
              {typedTitle}
              <span className="ml-1 inline-block h-[1.1em] w-px animate-pulse bg-accent align-middle" />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg"
          >
            I build fast, accessible, and scalable web and mobile applications
            - from pixel-perfect frontends to robust backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="#projects" className="glass-button glass-button-gold">
              <span className="relative z-10">View My Work</span>
            </Link>
            <Link href="/cv.pdf" className="glass-button" target="_blank">
              <span className="relative z-10">Download CV</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-3"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="text-xs uppercase tracking-[0.34em] text-muted-foreground transition hover:text-accent-light"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-b from-accent/10 via-transparent to-transparent blur-3xl" />
          <div className="relative space-y-5 pl-16">
            {statCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25 + index * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass-panel p-6"
              >
                <div className="text-3xl font-semibold tracking-tight text-accent">
                  {card.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {card.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
