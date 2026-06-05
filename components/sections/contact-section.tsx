import { Logo } from "@/components/logo";
import { Button, LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Select, Textarea } from "@/components/ui/form-field";
import { ArrowRightIcon } from "@/components/ui/icons";
import { contactInfo, footerLinks, services } from "@/data/site";

export function ContactSection() {
  return (
    <footer id="contact" className="border-t border-white/10 px-5 pb-8 pt-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Card className="overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="text-center">
            <p className="text-sm font-semibold text-[var(--text-gray)]">
              Start Your Digital Transformation Today
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold leading-tight text-[var(--text-white)] sm:text-5xl">
              Ready to Achieve Your Business Goals?
            </h2>
            <p className="mt-3 text-sm text-[var(--text-gray)]">
              Get a free consultation and custom strategy for your business.
            </p>
          </div>
          <form className="mx-auto mt-8 grid max-w-5xl gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Input aria-label="Your name" placeholder="Your Name" />
              <Input aria-label="Email address" placeholder="Email Address" type="email" />
              <Input aria-label="Phone number" placeholder="Phone Number" />
              <Select aria-label="Select service" defaultValue="">
                <option value="" disabled>
                  Select Service
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </Select>
            </div>
            <Textarea aria-label="Your message" placeholder="Your Message" />
            <Button type="button" size="lg" className="w-full">
              Request Free Consultation
            </Button>
          </form>
          <div className="mt-7 flex flex-wrap justify-center gap-5 text-sm text-[var(--text-gray)]">
            {["Free Consultation", "Custom Strategy", "24/7 Support", "100% Satisfaction"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full border border-[var(--gold-border)] text-[var(--gold)]">
                    ✓
                  </span>
                  {item}
                </span>
              ),
            )}
          </div>
        </Card>
        <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-7 text-[var(--text-gray)]">
              Empowering global businesses with innovative IT solutions that drive measurable growth and long-term success.
            </p>
          </div>
          <div>
            <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--text-white)]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href="#home" className="text-sm text-[var(--text-gray)] hover:text-[var(--gold-light)]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--text-white)]">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.title} className="text-sm text-[var(--text-gray)]">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--text-white)]">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-3">
              {contactInfo.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-gray)]">
                  <span className="size-1.5 rounded-full bg-[var(--gold)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--text-gray)]">© 2026 Gondal Digital Agency.</p>
          <LinkButton href="#home" variant="ghost" size="sm">
            Back to top <ArrowRightIcon className="-rotate-90 size-4" />
          </LinkButton>
        </div>
      </div>
    </footer>
  );
}
