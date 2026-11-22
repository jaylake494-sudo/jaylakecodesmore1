import { MapPin, Phone } from "lucide-react";

import type { Lead } from "@/types/lead";

import { Reveal, SectionHeading } from "./primitives";

export function ServiceArea({ lead }: { lead: Lead }) {
  return (
    <section id="area" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="Proudly serving your neighborhood"
              description={`${lead.name} covers ${lead.serviceArea} and the surrounding communities. If you're nearby, reach out — we'd love to help.`}
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {lead.serviceAreaList.map((place) => (
                <span
                  key={place}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground shadow-sm"
                >
                  <MapPin className="size-3.5 text-primary" aria-hidden />
                  {place}
                </span>
              ))}
            </div>
            {lead.phoneHref ? (
              <a
                href={lead.phoneHref}
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-accent-strong active:translate-y-px"
              >
                <Phone className="size-5" aria-hidden />
                Call {lead.phoneDisplay}
              </a>
            ) : (
              <a
                href="#quote"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-accent-strong active:translate-y-px"
              >
                Get a free quote
              </a>
            )}
          </Reveal>

          {/* Stylized map placeholder — Swap with a real map embed or photo. */}
          <Reveal delay={150}>
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-muted to-accent/40 shadow-lg">
              <div
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:2rem_2rem]"
                aria-hidden
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex size-20 items-center justify-center">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/30" />
                  <span className="relative flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <MapPin className="size-7" aria-hidden />
                  </span>
                </span>
              </div>
              <div className="absolute bottom-4 left-4 rounded-xl bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow backdrop-blur">
                {lead.serviceArea}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
