"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { Lead } from "@/types/lead";

import { Reveal, SectionHeading } from "./primitives";

export function FaqAccordion({ lead }: { lead: Lead }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            className="mx-auto text-center"
          />
        </Reveal>

        <div className="mt-12 space-y-3">
          {lead.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={([0, 75, 150, 225] as const)[i % 4]}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-card shadow-sm transition-colors",
                    isOpen ? "border-primary/40" : "border-border",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/50"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
