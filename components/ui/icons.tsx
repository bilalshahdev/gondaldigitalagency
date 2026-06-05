import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 2v5" />
      <path d="M12 17v5" />
      <path d="m4.9 4.9 3.5 3.5" />
      <path d="m15.6 15.6 3.5 3.5" />
      <path d="M2 12h5" />
      <path d="M17 12h5" />
      <path d="m4.9 19.1 3.5-3.5" />
      <path d="m15.6 8.4 3.5-3.5" />
    </svg>
  );
}

export function TrendIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20" />
      <path d="M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

export function MegaphoneIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m3 11 18-5v12L3 14v-3Z" />
      <path d="M11.6 15.5 13 21l-4-1-1.4-5.5" />
    </svg>
  );
}

export function SearchGrowthIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 5 5" />
      <path d="M8 11.5 10 9l2 2 2.5-3" />
    </svg>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 22a10 10 0 1 1 7.5-3.4c-.8.9-2 .7-3.1.7h-1.1c-.9 0-1.7.7-1.7 1.6 0 .6-.5 1.1-1.6 1.1Z" />
      <circle cx="7.5" cy="10.5" r=".7" />
      <circle cx="11" cy="7.5" r=".7" />
      <circle cx="15.5" cy="9.5" r=".7" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 6h17l-2 9H7L5 3H2" />
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M10 10h6" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z" />
      <path d="M20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z" />
      <path d="M15 20h-3" />
    </svg>
  );
}
