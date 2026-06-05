import { cn } from "@/utils/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold leading-tight text-[var(--text-white)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[var(--text-gray)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
