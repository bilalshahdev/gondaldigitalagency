import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const variants = {
  gold:
    "gold-gradient text-[#080808] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_32px_rgba(212,175,55,0.42)]",
  outline:
    "border border-[var(--gold-border)] bg-white/[0.03] text-[var(--text-white)] hover:border-[var(--gold)] hover:bg-white/[0.06]",
  ghost: "text-[var(--text-gray)] hover:text-[var(--text-white)]",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]";

export function Button({
  className,
  variant = "gold",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function LinkButton({
  className,
  variant = "gold",
  size = "md",
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
