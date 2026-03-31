import Reveal from "@/components/Reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <Reveal className={alignment}>
      <p className="section-heading">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className={`section-copy ${alignment}`}>{description}</p> : null}
    </Reveal>
  );
}
