import type { Metadata } from "next";
import { Cormorant_Garamond, Syne } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nke Anchi Gentle | Full Stack Software Engineer",
  description:
    "Portfolio of Nke Anchi Gentle Petenchepankwang — Full Stack Engineer specializing in Next.js, React, Python, Node.js and PostgreSQL. Based in Douala, Cameroon.",
  keywords: [
    "Full Stack Engineer",
    "Next.js Developer",
    "React Developer",
    "Python Engineer",
    "Cameroon Software Engineer",
    "Nke Anchi Gentle",
    "Gentle Portfolio",
  ],
  authors: [{ name: "Nke Anchi Gentle" }],
  openGraph: {
    title: "Nke Anchi Gentle | Full Stack Engineer",
    description: "Building scalable web and mobile experiences.",
    url: "https://nkegentle.dev",
    siteName: "Nke Anchi Gentle Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nke Anchi Gentle | Full Stack Engineer",
    description: "Building scalable web and mobile experiences.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nke Anchi Gentle Petenchepankwang",
  alternateName: "Gentle",
  jobTitle: "Full Stack Engineer",
  description: "Full Stack Engineer building scalable web and mobile experiences.",
  email: "mailto:gentlenke@gmail.com",
  url: "https://nkegentle.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Douala",
    addressCountry: "Cameroon",
  },
  sameAs: [
    "https://github.com/NkeGently",
    "https://www.linkedin.com/in/nke-anchi-gentle-8b8bb92aa/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "JFN-HITECH University Douala",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
