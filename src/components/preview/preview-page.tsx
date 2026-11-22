"use client";

import type { AccentTheme, Lead } from "@/types/lead";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

import { FaqAccordion } from "./faq-accordion";
import { Gallery } from "./gallery";
import { Hero } from "./hero";
import { PreviewFooter } from "./preview-footer";
import { PreviewHeader } from "./preview-header";
import { QuoteForm } from "./quote-form";
import { ServiceArea } from "./service-area";
import { ServicesGrid } from "./services-grid";
import { StickyBar } from "./sticky-bar";
import { TestimonialBand } from "./testimonial-band";
import { TrustBand } from "./trust-band";

const THEME_CLASS: Record<AccentTheme, string> = {
  forest: "theme-forest",
  industrial: "theme-industrial",
  sunset: "theme-sunset",
  steel: "theme-steel",
};

/**
 * Data-driven preview. One shared, themeable template renders any `Lead`.
 * This is the single client boundary that wires up scroll-reveal and hosts
 * all the interactive sections (nav, gallery lightbox, FAQ, form, sticky bar).
 */
export function PreviewPage({ lead }: { lead: Lead }) {
  useRevealOnScroll();

  return (
    <div className={THEME_CLASS[lead.accent]}>
      <div className="flex min-h-screen flex-col bg-background">
        <PreviewHeader lead={lead} />
        <main className="flex-1 pb-16 md:pb-0">
          <Hero lead={lead} />
          <TrustBand lead={lead} />
          <ServicesGrid lead={lead} />
          <Gallery lead={lead} />
          <TestimonialBand lead={lead} />
          <ServiceArea lead={lead} />
          <FaqAccordion lead={lead} />
          <QuoteForm lead={lead} />
        </main>
        <PreviewFooter lead={lead} />
        <StickyBar lead={lead} />
      </div>
    </div>
  );
}
