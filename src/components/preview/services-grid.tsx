import type { Lead } from "@/types/lead";

import { Reveal, SectionHeading } from "./primitives";
import { ServiceIcon } from "./service-icon";

export function ServicesGrid({ lead }: { lead: Lead }) {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={`${lead.trade} done right`}
            description={`Everything ${lead.name} offers across ${lead.serviceArea} — honest work, free estimates, and a clean job site every time.`}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lead.services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={([0, 75, 150, 225, 300] as const)[i % 5]}
            >
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ServiceIcon name={service.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
