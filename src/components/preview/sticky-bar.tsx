"use client";

import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { Lead } from "@/types/lead";

/**
 * Sticky bottom bar on mobile. Shows "Call now" when a phone exists, otherwise
 * "Get a free quote". Appears once the hero scrolls out of view.
 */
export function StickyBar({ lead }: { lead: Lead }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-md transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      {lead.phoneHref ? (
        <a
          href={lead.phoneHref}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-md active:translate-y-px"
        >
          <Phone className="size-5" aria-hidden />
          Call now · {lead.phoneDisplay}
        </a>
      ) : (
        <a
          href="#quote"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-md active:translate-y-px"
        >
          Get a free quote
          <ArrowRight className="size-5" aria-hidden />
        </a>
      )}
    </div>
  );
}
