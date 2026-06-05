import Image from "next/image";
import { LinkButton } from "@/components/ui/button";
import { ArrowRightIcon, GlobeIcon } from "@/components/ui/icons";

export function ClientPresenceSection() {
  return (
    <section className="bg-[#050506] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[var(--text-white)] sm:text-4xl">
          Our Global Client Presence
        </h2>
        <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#08101a] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
          <Image
            src="/assets/global-map-gold.png"
            alt="Gold global client presence map with connected nodes"
            width={1536}
            height={1024}
            className="h-auto w-full object-cover"
          />
          <div className="absolute left-[11%] top-[49%] hidden items-center gap-4 rounded-xl border border-[var(--gold-border)] bg-[rgba(16,24,39,0.82)] px-5 py-4 text-left backdrop-blur-md sm:flex">
            <GlobeIcon className="size-9 shrink-0 text-[var(--gold-light)]" />
            <p className="text-sm font-semibold leading-5 text-[var(--gold-light)]">
              Serving Clients <br /> Across 18+ Countries <br /> Worldwide
            </p>
          </div>
        </div>
        <LinkButton href="#case-studies" variant="outline" className="mt-7 min-w-64">
          View All Case Studies <ArrowRightIcon className="size-5" />
        </LinkButton>
      </div>
    </section>
  );
}
