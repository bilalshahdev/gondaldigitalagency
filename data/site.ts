import {
  CartIcon,
  CodeIcon,
  GlobeIcon,
  HeadsetIcon,
  MegaphoneIcon,
  PaletteIcon,
  SearchGrowthIcon,
  SparkIcon,
  TrendIcon,
} from "@/components/ui/icons";

export const navItems = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Case Studies", href: "#case-studies", id: "case-studies" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const stats = [
  { value: "$2M+", label: "Revenue Generated", icon: TrendIcon },
  { value: "120+", label: "Global Clients", icon: GlobeIcon },
  { value: "18", label: "Countries Served", icon: SparkIcon },
  { value: "340%", label: "Average ROI", icon: TrendIcon },
];

export const services = [
  {
    title: "Software & Web Development",
    bullets: [
      "Custom Web Dev",
      "E-Commerce Stores (Shopify, WooCommerce)",
      "Mobile Apps (Android & iOS)",
    ],
    icon: CodeIcon,
  },
  {
    title: "Digital Marketing",
    bullets: [
      "Social Media Management",
      "Paid Ads (Facebook, Google, TikTok, YouTube)",
      "Content Creation",
    ],
    icon: MegaphoneIcon,
  },
  {
    title: "SEO Services",
    bullets: ["On Page & Off-Page SEO", "Local SEO (GMB Optimization)", "Technical Audits"],
    icon: SearchGrowthIcon,
  },
  {
    title: "Graphic & Video Design",
    bullets: ["Logo & Brand Identity", "UI/UX Design", "Video Editing & Motion Graphics"],
    icon: PaletteIcon,
  },
  {
    title: "E-Commerce Services",
    bullets: ["Amazon FBA Account Management", "Etsy & eBay Shop Setup", "Product Listing & SEO"],
    icon: CartIcon,
  },
  {
    title: "IT Solutions",
    bullets: ["IT Consultation", "Domain & Hosting", "Cloud & Server (AWS, Azure)", "CRM & ERP Setup"],
    icon: HeadsetIcon,
  },
];

export const partners = ["Shopify", "Meta", "Google", "Amazon", "HubSpot", "Clutch"];

export const caseStudies = [
  {
    brand: "Aurum Commerce",
    title: "E-Commerce Store Transformation",
    metric: "130%",
    metricLabel: "Sales Increase",
    detail: "increase in sales within 60 days through strategic marketing and store optimization.",
    image: "/assets/case-ecommerce.png",
  },
  {
    brand: "Northline CRM",
    title: "Lead Generation & Conversion Mastery",
    metric: "300%",
    metricLabel: "Conversion Increase",
    detail: "higher conversion rate with targeted ads and optimized landing pages.",
    image: "/assets/case-leads.png",
  },
];

export const process = [
  "Discovery and offer mapping",
  "Design systems and funnel architecture",
  "Launch, measure, and iterate",
];

export const footerLinks = ["About Us", "Services", "Case Studies", "Pricing", "Contact Us"];

export const contactInfo = [
  "info@gondaldigitalagency.com",
  "+92 300 1234567",
  "Lahore, Pakistan",
  "www.gondaldigitalagency.com",
];
