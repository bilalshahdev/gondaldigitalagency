"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { LinkButton } from "@/components/ui/button";
import { navItems } from "@/data/site";
import { cn } from "@/utils/cn";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      const currentSection =
        sectionIds
          .map((id) => document.getElementById(id))
          .filter(Boolean)
          .findLast((section) => section!.offsetTop <= scrollPosition)?.id ??
        sectionIds[0];

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(11,11,12,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={activeSection === item.id ? "page" : undefined}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "relative rounded-full px-3 py-2 text-sm font-medium transition",
                activeSection === item.id
                  ? "bg-[rgba(212,175,55,0.12)] text-[var(--gold-light)] shadow-[0_0_22px_rgba(212,175,55,0.16)]"
                  : "text-[var(--text-gray)] hover:text-[var(--text-white)]",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-3 -bottom-1 h-px origin-center rounded-full gold-gradient transition-transform",
                  activeSection === item.id ? "scale-x-100" : "scale-x-0",
                )}
              />
            </a>
          ))}
        </nav>
        <LinkButton href="#contact" size="sm" className="hidden sm:inline-flex">
          Book Strategy Call
        </LinkButton>
      </div>
    </header>
  );
}
