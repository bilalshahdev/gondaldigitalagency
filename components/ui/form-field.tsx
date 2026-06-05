import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/utils/cn";

const fieldClass =
  "min-h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-sm text-[var(--text-white)] outline-none transition placeholder:text-[rgba(182,188,200,0.58)] focus:border-[var(--gold-border)] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClass, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldClass, "min-h-28 resize-none py-3", className)}
      {...props}
    />
  );
}

export function Select({
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(fieldClass, className)} {...props} />;
}
