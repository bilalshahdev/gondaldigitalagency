import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { caseStudies } from "@/data/site";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="overflow-hidden border-y border-white/10 bg-[#070708] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Featured case studies"
            title="Our proven global impact."
            description="Richer thumbnail cards now mirror the black, gold, and image-led reference layout."
          />
          <a href="#contact" className="text-sm font-semibold text-[var(--gold-light)]">
            View All →
          </a>
        </div>
        <div className="mt-10 grid gap-5">
          {caseStudies.map((study) => (
            <Card
              key={study.brand}
              className="grid overflow-hidden p-0 md:grid-cols-[0.92fr_1.08fr_auto]"
            >
              <div className="relative min-h-[260px] overflow-hidden md:min-h-full">
                <Image
                  src={study.image}
                  alt={`${study.title} case study visual`}
                  width={1536}
                  height={1024}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/10 to-black/55" />
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                  {study.brand}
                </p>
                <h3 className="mt-4 max-w-xl font-[var(--font-display)] text-3xl font-semibold leading-tight text-[var(--text-white)]">
                  {study.title}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--text-gray)]">
                  {study.detail}
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex text-sm font-semibold text-[var(--gold-light)]"
                >
                  View Case Study →
                </a>
              </div>
              <div className="flex items-end justify-start p-7 md:min-w-44 md:justify-center">
                <div>
                  <p className="font-[var(--font-display)] text-5xl font-semibold text-[var(--gold-light)]">
                    {study.metric}
                  </p>
                  <p className="mt-2 text-sm text-[var(--text-white)]">{study.metricLabel}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
