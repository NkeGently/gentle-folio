import { Mail } from "lucide-react";
import Link from "next/link";

function GitHubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.367 6.839 9.722.5.096.682-.221.682-.492 0-.243-.009-.887-.014-1.741-2.782.617-3.369-1.369-3.369-1.369-.455-1.176-1.11-1.49-1.11-1.49-.908-.636.069-.623.069-.623 1.004.072 1.532 1.053 1.532 1.053.892 1.561 2.341 1.11 2.91.849.091-.664.349-1.11.635-1.365-2.221-.259-4.555-1.136-4.555-5.056 0-1.117.389-2.03 1.029-2.746-.103-.259-.446-1.302.098-2.715 0 0 .84-.276 2.75 1.049A9.303 9.303 0 0 1 12 6.836a9.27 9.27 0 0 1 2.504.345c1.909-1.325 2.748-1.049 2.748-1.049.546 1.413.203 2.456.1 2.715.64.716 1.027 1.629 1.027 2.746 0 3.93-2.338 4.794-4.566 5.048.359.319.679.948.679 1.911 0 1.379-.012 2.492-.012 2.83 0 .273.18.592.688.491C19.138 20.611 22 16.772 22 12.248 22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.17 3.5 3.31 4.38 3.31 5.46C3.31 6.54 4.17 7.42 5.25 7.42C6.33 7.42 7.19 6.54 7.19 5.46C7.19 4.38 6.33 3.5 5.25 3.5ZM20.69 12.55C20.69 9.36 18.99 7.87 16.72 7.87C14.89 7.87 14.07 8.89 13.61 9.61V8.5H10.37C10.41 9.24 10.37 19.5 10.37 19.5H13.74V13.36C13.74 13.03 13.76 12.7 13.86 12.47C14.12 11.81 14.71 11.13 15.71 11.13C17.01 11.13 17.53 12.15 17.53 13.64V19.5H20.9V13.24C20.9 12.99 20.9 12.77 20.69 12.55Z" />
    </svg>
  );
}

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const socials = [
  { icon: GitHubIcon, href: "https://github.com/NkeGently", label: "GitHub" },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/nke-anchi-gentle-8b8bb92aa/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:gentlenke@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-[#030916]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-3 lg:px-12">
        <div>
          <Link
            href="#hero"
            className="font-heading text-3xl tracking-[0.18em] text-accent"
          >
            NGP
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
            Full Stack Engineer | Douala, Cameroon
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.22em] text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:justify-end">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={social.label}
                className="inline-flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-accent/35 hover:text-accent-light"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-accent/10 px-6 py-5 text-center text-sm text-dim-foreground">
        Copyright 2025 Nke Anchi Gentle. All rights reserved. | Built with
        Next.js and love in Cameroon
      </div>
    </footer>
  );
}
