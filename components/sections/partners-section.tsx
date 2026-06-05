import { partners } from "@/data/site";

export function PartnersSection() {
  return (
    <section className="border-y border-white/10 bg-[#080809] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-gray)]">
          Platforms and partners
        </p>
        <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-semibold text-[var(--text-white)]"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
