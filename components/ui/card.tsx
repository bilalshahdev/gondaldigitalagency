import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "premium-card rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
        className,
      )}
      {...props}
    />
  );
}
