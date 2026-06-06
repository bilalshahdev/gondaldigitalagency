import Image from "next/image";
import { LinkButton } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { stats } from "@/data/site";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#050506] px-4 pb-10 pt-6 sm:px-8 lg:pb-16 lg:pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(212,175,55,0.18),transparent_34%),linear-gradient(90deg,#050506_0%,rgba(5,5,6,0.96)_35%,rgba(5,5,6,0.55)_66%,#050506_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20 px-5 pb-5 pt-7 shadow-[0_30px_110px_rgba(0,0,0,0.42)] sm:px-7 sm:pt-9 lg:grid lg:min-h-[560px] lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[radial-gradient(circle_at_70%_62%,rgba(212,175,55,0.2),transparent_58%)] lg:hidden" />
          <div className="relative z-10 max-w-2xl text-left">
            <div className="inline-flex max-w-full rounded border border-[var(--gold-border)] bg-[rgba(212,175,55,0.08)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-[var(--gold-light)] sm:text-xs">
              Digital Transformation Partner
            </div>
            <h1 className="mt-5 font-[var(--font-display)] text-[36px] font-semibold leading-[1.04] text-[var(--text-white)] min-[390px]:text-[40px] sm:mt-6 sm:text-6xl lg:mt-7 lg:text-[76px]">
              Scaling Brands{" "}
              <span className="block">
                <span className="text-[var(--gold-light)]">Beyond</span> Borders.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[var(--text-gray)] sm:mt-6 sm:text-lg sm:leading-8">
              We build elite digital systems that drive growth, maximize performance, and create global impact.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-8">
              <LinkButton href="#services" size="lg" className="h-12 w-full px-5 text-sm sm:h-14 sm:w-auto sm:px-7 sm:text-base">
                Explore Our Solutions <ArrowRightIcon className="size-5" />
              </LinkButton>
              <LinkButton href="#case-studies" variant="ghost" size="lg" className="h-11 w-full px-5 text-sm sm:h-14 sm:w-auto sm:px-7 sm:text-base">
                <span className="grid size-6 place-items-center rounded-full border border-[var(--gold-border)] text-[var(--gold)]">
                  ▶
                </span>
                Watch Video
              </LinkButton>
            </div>
          </div>

          <div className="relative z-0 mt-5 hidden aspect-[1.78] min-h-[178px] overflow-hidden rounded-2xl sm:mt-7 sm:block sm:min-h-[300px] lg:mt-0 lg:h-[520px] lg:min-h-0 lg:w-full lg:rounded-none lg:border-0">
            <Image
              src="/assets/hero-gold-globe.png"
              alt="3D gold Gondal emblem with floating digital interface cards"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center opacity-95 lg:mix-blend-screen lg:drop-shadow-[0_32px_90px_rgba(212,175,55,0.24)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        <div className="gold-border-glow relative mt-8 grid overflow-hidden rounded-xl border border-white/10 bg-black/70 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 border-b border-white/10 px-4 py-3 last:border-b-0 sm:border-r sm:px-5 sm:py-4 sm:[&:nth-child(2)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:justify-center lg:border-b-0 lg:border-r lg:px-7 lg:py-5 lg:[&:nth-child(2)]:border-r lg:last:border-r-0"
            >
              <stat.icon className="size-6 shrink-0 text-[var(--gold)] sm:size-7" />
              <div>
                <p className="font-[var(--font-display)] text-xl font-semibold leading-none text-[var(--gold-light)] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[11px] text-[var(--text-gray)] sm:mt-2 sm:text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
