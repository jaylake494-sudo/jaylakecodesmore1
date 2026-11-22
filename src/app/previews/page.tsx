import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Star } from "lucide-react";

import { StarRating } from "@/components/preview/primitives";
import { leads } from "@/data/leads";
import type { AccentTheme } from "@/types/lead";

export const metadata: Metadata = {
  title: "Lake Sites · Website Previews for Local PA Businesses",
  description:
    "Concept website previews built by Lake Sites for local Pennsylvania tree, excavation, landscaping, and auto-repair businesses.",
};

const THEME_CLASS: Record<AccentTheme, string> = {
  forest: "theme-forest",
  industrial: "theme-industrial",
  sunset: "theme-sunset",
  steel: "theme-steel",
};

export default function PreviewsIndexPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-muted/60 to-background"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Lake Sites · Jason Lake
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Website previews for local Pennsylvania businesses
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            A set of concept landing pages built for real local trades that
            don&rsquo;t have a website yet. Each one is a live, interactive
            preview — browse them below.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span className="rounded-full border border-border bg-card px-3 py-1 font-medium">
              {leads.length} previews
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-medium">
              Tree · Excavation · Landscaping · Auto
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leads.map((lead) => (
            <Link
              key={lead.slug}
              href={`/previews/${lead.slug}`}
              className={`${THEME_CLASS[lead.accent]} group block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg`}
            >
              {/* Accent banner — placeholder gradient per trade. */}
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary via-accent-strong to-accent-glow">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                <span className="absolute left-4 top-4 rounded-full bg-background/85 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  {lead.trade}
                </span>
                <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="size-5" aria-hidden />
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-lg font-bold text-foreground">
                  {lead.name}
                </h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary" aria-hidden />
                  {lead.serviceArea}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <StarRating rating={lead.rating} />
                  <span className="text-sm font-semibold text-foreground">
                    {lead.rating.toFixed(1)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({lead.reviews})
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    {lead.phoneDisplay ? (
                      <>
                        <Phone className="size-4 text-primary" aria-hidden />
                        {lead.phoneDisplay}
                      </>
                    ) : (
                      <>
                        <Star className="size-4 text-primary" aria-hidden />
                        Quote form
                      </>
                    )}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    View preview →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
