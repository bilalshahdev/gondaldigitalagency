import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { process } from "@/data/site";

export function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="absolute inset-x-0 bottom-0 opacity-60">
        <Image
          src="/assets/world-map.svg"
          alt="World map with glowing connected growth nodes"
          width={980}
          height={360}
          className="mx-auto h-auto w-full max-w-6xl"
        />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How we work"
          title="A clear growth process from strategy to scale."
          description="Fast enough for modern launches, structured enough for serious brands."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {process.map((step, index) => (
            <Card key={step} className="p-7">
              <p className="font-[var(--font-display)] text-5xl font-semibold text-[rgba(212,175,55,0.22)]">
                0{index + 1}
              </p>
              <h3 className="mt-10 font-[var(--font-display)] text-2xl font-semibold text-[var(--text-white)]">
                {step}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-gray)]">
                We keep decisions tight, documents useful, and delivery focused on the next measurable business move.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
