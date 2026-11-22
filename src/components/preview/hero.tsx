import { ArrowRight, MapPin, Phone, Star } from "lucide-react";

import type { Lead } from "@/types/lead";

import { StarRating } from "./primitives";

export function Hero({ lead }: { lead: Lead }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative accent wash — no external images hotlinked. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] -z-10 size-[32rem] rounded-full bg-accent-glow/20 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur">
              <MapPin className="size-4 text-primary" aria-hidden />
              {lead.serviceArea}
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {lead.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl">
              {lead.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {lead.phoneHref ? (
                <a
                  href={lead.phoneHref}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-accent-strong hover:shadow-lg active:translate-y-px"
                >
                  <Phone className="size-5" aria-hidden />
                  Call {lead.phoneDisplay}
                </a>
              ) : null}
              <a
                href="#quote"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-border bg-background px-7 text-base font-semibold text-foreground shadow-sm transition-all hover:bg-muted active:translate-y-px data-[primary=true]:bg-primary data-[primary=true]:text-primary-foreground data-[primary=true]:border-transparent data-[primary=true]:shadow-md data-[primary=true]:hover:bg-accent-strong"
                data-primary={lead.phoneHref ? undefined : "true"}
              >
                Get a free quote
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              <StarRating rating={lead.rating} />
              <span className="text-sm font-semibold text-foreground">
                {lead.rating.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">
                Rated {lead.rating.toFixed(1)}★ from {lead.reviews} Google reviews
              </span>
            </div>
          </div>

          {/* Visual card — placeholder gradient, clearly meant to be swapped.
              Swap with real business photos. */}
          <div data-reveal className="[animation-delay:120ms]">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary via-accent-strong to-accent-glow shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 rounded-2xl bg-background/90 p-4 shadow-lg backdrop-blur">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Star className="size-5 fill-primary-foreground" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {lead.rating.toFixed(1)}★ · {lead.reviews} Google reviews
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {lead.trade} · {lead.serviceArea}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
