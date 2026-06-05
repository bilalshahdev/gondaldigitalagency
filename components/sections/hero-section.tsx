import Image from "next/image";
import { LinkButton } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { stats } from "@/data/site";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#050506] px-5 pb-16 pt-28 sm:px-8 lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_42%,rgba(212,175,55,0.18),transparent_34%),linear-gradient(90deg,#050506_0%,rgba(5,5,6,0.96)_34%,rgba(5,5,6,0.5)_64%,#050506_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid min-h-[560px] items-center gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="z-10 max-w-2xl">
            <div className="inline-flex rounded border border-[var(--gold-border)] bg-[rgba(212,175,55,0.08)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold-light)]">
              Digital Transformation Partner
            </div>
            <h1 className="mt-7 font-[var(--font-display)] text-5xl font-semibold leading-[1.02] text-[var(--text-white)] sm:text-6xl lg:text-[76px]">
              Scaling Brands{" "}
              <span className="block">
                <span className="text-[var(--gold-light)]">Beyond</span> Borders.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-gray)]">
              We build elite digital systems that drive growth, maximize performance, and create global impact.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="#services" size="lg">
                Explore Our Solutions <ArrowRightIcon className="size-5" />
              </LinkButton>
              <LinkButton href="#case-studies" variant="ghost" size="lg">
                <span className="grid size-6 place-items-center rounded-full border border-[var(--gold-border)] text-[var(--gold)]">
                  ▶
                </span>
                Watch Video
              </LinkButton>
            </div>
          </div>
          <div className="pointer-events-none relative h-[430px] lg:h-[560px]">
            <Image
              src="/assets/hero-gold-globe.png"
              alt="3D gold Gondal emblem with floating digital interface cards"
              width={1536}
              height={1024}
              priority
              className="absolute inset-y-0 right-[-8%] h-full w-[114%] object-cover object-center opacity-95 mix-blend-screen drop-shadow-[0_32px_90px_rgba(212,175,55,0.24)]"
            />
          </div>
        </div>
        <div className="gold-border-glow relative -mt-4 grid rounded-xl border border-white/10 bg-black/70 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-4 border-white/10 px-7 py-5 sm:border-r last:border-r-0"
            >
              <stat.icon className="size-7 shrink-0 text-[var(--gold)]" />
              <div>
                <p className="font-[var(--font-display)] text-3xl font-semibold leading-none text-[var(--gold-light)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-[var(--text-gray)]">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
