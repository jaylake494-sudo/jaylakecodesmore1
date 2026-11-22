import {
  BadgeCheck,
  Clock,
  type LucideIcon,
  MapPin,
  ShieldCheck,
  Star,
  ThumbsUp,
} from "lucide-react";

import type { Lead, TrustPoint } from "@/types/lead";

import { Reveal } from "./primitives";

const TRUST_ICONS: Record<TrustPoint["icon"], LucideIcon> = {
  shield: ShieldCheck,
  badge: BadgeCheck,
  star: Star,
  clock: Clock,
  map: MapPin,
  thumbs: ThumbsUp,
};

export function TrustBand({ lead }: { lead: Lead }) {
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lead.trust.map((point, i) => {
            const Icon = TRUST_ICONS[point.icon];
            return (
              <Reveal
                key={point.label}
                delay={([0, 75, 150, 225] as const)[i % 4]}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {point.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {point.sublabel}
                    </p>
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
