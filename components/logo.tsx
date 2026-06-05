export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Gondal Digital Agency home">
      <span className="grid size-11 place-items-center rounded-2xl border border-[var(--gold-border)] bg-[rgba(212,175,55,0.1)] font-[var(--font-display)] text-2xl font-semibold text-[var(--gold-light)] shadow-[0_0_28px_rgba(212,175,55,0.2)]">
        G
      </span>
      <span className="leading-tight">
        <span className="block font-[var(--font-display)] text-base font-semibold text-[var(--text-white)]">
          Gondal
        </span>
        <span className="block text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-gray)]">
          Digital Agency
        </span>
      </span>
    </a>
  );
}
