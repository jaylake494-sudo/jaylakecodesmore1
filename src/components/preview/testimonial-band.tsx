import { Quote } from "lucide-react";

import type { Lead } from "@/types/lead";

import { Reveal, StarRating } from "./primitives";

/**
 * Renders a single illustrative, generic review plus the real Google rating.
 * No fabricated named people or photos — attribution stays generic.
 */
export function TestimonialBand({ lead }: { lead: Lead }) {
  if (!lead.testimonial) return null;

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <Reveal>
          <Quote
            className="mx-auto size-10 text-primary-foreground/50"
            aria-hidden
          />
          <blockquote className="mx-auto mt-6 max-w-2xl text-2xl font-semibold leading-snug sm:text-3xl">
            &ldquo;{lead.testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-6 flex flex-col items-center gap-2">
            <StarRating rating={lead.rating} />
            <p className="text-sm font-medium text-primary-foreground/80">
              {lead.testimonial.attribution} · Rated {lead.rating.toFixed(1)}★
              from {lead.reviews} Google reviews
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
