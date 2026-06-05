import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ClientPresenceSection } from "@/components/sections/client-presence-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <div className="page-scale min-h-screen overflow-x-hidden bg-[var(--bg-black)]">
      <SiteHeader />
      <main>
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <ClientPresenceSection />
        <CaseStudiesSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </div>
  );
}
