import Image from "next/image";

export function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-2.5 sm:gap-3"
      aria-label="Gondal Digital Agency home"
    >
      <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl sm:size-13">
        <Image
          src="/assets/gondal-logo-mark.png"
          alt=""
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      </span>
      <span className="leading-tight">
        <span className="block font-[var(--font-display)] text-lg font-semibold tracking-wide text-[var(--text-white)] sm:text-2xl">
          Gondal
        </span>
        <span className="block text-[11px] font-semibold tracking-[0.02em] text-[var(--text-white)]/85 sm:text-sm">
          Digital Agency
        </span>
      </span>
    </a>
  );
}
