import { Star } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Wraps children in a scroll-reveal container. The actual animation is driven
 * by `useRevealOnScroll`, which toggles `data-revealed` once in view.
 */
export function Reveal({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className?: string;
  /** Optional stagger delay in ms, applied as an inline-free utility. */
  delay?: 0 | 75 | 150 | 225 | 300;
}) {
  const delayClass =
    delay === 75
      ? "[animation-delay:75ms]"
      : delay === 150
        ? "[animation-delay:150ms]"
        : delay === 225
          ? "[animation-delay:225ms]"
          : delay === 300
            ? "[animation-delay:300ms]"
            : undefined;

  return (
    <div data-reveal className={cn(delayClass, className)}>
      {children}
    </div>
  );
}

export function StarRating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  const full = Math.round(rating);
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < full
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted-foreground/40",
          )}
          aria-hidden
        />
      ))}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
