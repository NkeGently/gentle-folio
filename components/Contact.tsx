"use client";

import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

const contacts = [
  {
    label: "Email",
    value: "gentlenke@gmail.com",
    href: "mailto:gentlenke@gmail.com",
    note: "Best for roles, freelance requests, and direct introductions.",
  },
  {
    label: "GitHub",
    value: "github.com/NkeGently",
    href: "https://github.com/NkeGently",
    note: "Browse public work, experiments, and ongoing technical exploration.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nke-anchi-gentle-8b8bb92aa",
    href: "https://www.linkedin.com/in/nke-anchi-gentle-8b8bb92aa/",
    note: "Connect for professional opportunities and long-term collaborations.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <SectionIntro
        eyebrow="Contact"
        title="Direct contact, without the extra form."
        description="The CTA section already handles outreach clearly, so this section now keeps the essentials close at hand for fast contact."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {contacts.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08}>
            <a
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="glass-panel hover-card block h-full p-7"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-accent">
                {item.label}
              </p>
              <p className="mt-4 text-xl text-foreground">{item.value}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {item.note}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
