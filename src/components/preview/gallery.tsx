"use client";

import { Image as ImageIcon, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { Lead } from "@/types/lead";

import { Reveal, SectionHeading } from "./primitives";

export function Gallery({ lead }: { lead: Lead }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  const activeItem = active === null ? null : lead.gallery[active];

  return (
    <section id="work" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Our work"
            title="A look at the job"
            description="Tap any image to enlarge. These are placeholders for now — real project photos drop right in."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {lead.gallery.map((item, i) => (
            <Reveal key={item.label} delay={([0, 75, 150] as const)[i % 3]}>
              {/* Swap with real business photos — gradient placeholder blocks. */}
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block aspect-4/3 w-full overflow-hidden rounded-2xl border border-border shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                aria-label={`Enlarge: ${item.label}`}
              >
                <span
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                    item.tone,
                  )}
                />
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.22),transparent_55%)]" />
                <span className="absolute left-3 top-3 flex size-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur">
                  <ImageIcon className="size-4" aria-hidden />
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-left text-sm font-semibold text-white">
                  {item.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      {activeItem ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.label}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="size-6" />
          </button>
          <figure
            className="w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={cn(
                "relative flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br shadow-2xl",
                activeItem.tone,
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.22),transparent_55%)]" />
              <ImageIcon className="size-16 text-white/70" aria-hidden />
            </div>
            <figcaption className="mt-4 text-center text-base font-medium text-white">
              {activeItem.label}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
