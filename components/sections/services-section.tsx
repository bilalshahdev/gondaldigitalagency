import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#080809] px-5 py-16 sm:px-8 lg:py-20">
      <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_64%)] blur-2xl sm:h-[420px] sm:w-[420px]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we do"
          title="Our Comprehensive IT Services"
          description="End-to-end digital solutions designed to grow your business and dominate your market."
        />
        <div className="relative mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="service-card group min-h-[214px] overflow-hidden rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgba(245,215,122,0.9)] sm:p-6"
              >
                <div className="relative z-10 flex items-start justify-between gap-5">
                  <h3 className="max-w-[230px] font-[var(--font-display)] text-xl font-semibold leading-[1.14] text-[var(--text-white)] sm:text-[22px]">
                    {service.title}
                  </h3>
                  <Icon className="service-icon -mt-1 size-10 shrink-0 text-[var(--gold-light)] sm:size-12" />
                </div>
                <ul className="relative z-10 mt-5 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-[13px] leading-5 text-[var(--text-gray)]"
                    >
                      <span className="mt-2 size-1 rounded-full bg-[var(--gold-light)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="relative z-10 mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--gold-light)] transition group-hover:translate-x-1"
                >
                  Learn More →
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
