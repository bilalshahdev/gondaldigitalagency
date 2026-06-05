import { Logo } from "@/components/logo";
import { Button, LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Select, Textarea } from "@/components/ui/form-field";
import { ArrowRightIcon } from "@/components/ui/icons";
import { contactInfo, footerLinks, services } from "@/data/site";

export function ContactSection() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-white/10 px-4 pb-8 pt-12 sm:px-8 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <Card className="overflow-hidden rounded-xl p-5 sm:p-10 lg:p-12">
          <div className="text-center">
            <p className="text-xs font-semibold text-[var(--text-gray)] sm:text-sm">
              Start Your Digital Transformation Today
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl font-[var(--font-display)] text-2xl font-semibold leading-tight text-[var(--text-white)] min-[390px]:text-[28px] sm:text-5xl">
              Ready to Achieve Your Business Goals?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[var(--text-gray)]">
              Get a free consultation and custom strategy for your business.
            </p>
          </div>
          <form className="mx-auto mt-7 grid max-w-5xl gap-4 sm:mt-8">
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
          <div className="mt-7 grid gap-3 text-sm text-[var(--text-gray)] sm:flex sm:flex-wrap sm:justify-center sm:gap-5">
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
        <div className="mt-10 grid gap-9 border-t border-white/10 pt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
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
