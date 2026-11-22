import Link from "next/link";
import { MapPin, Phone, Star, TreePine } from "lucide-react";

import type { Lead } from "@/types/lead";

import { NAV_ITEMS } from "./nav-items";

export function PreviewFooter({ lead }: { lead: Lead }) {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <TreePine className="size-5" aria-hidden />
              </span>
              <span className="text-lg font-bold text-foreground">
                {lead.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {lead.trade} serving {lead.serviceArea}. Free estimates and honest,
              dependable work.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden />
              <span className="font-semibold text-foreground">
                {lead.rating.toFixed(1)}★
              </span>
              from {lead.reviews} Google reviews
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" aria-hidden />
                {lead.serviceArea}
              </li>
              {lead.phoneHref ? (
                <li>
                  <a
                    href={lead.phoneHref}
                    className="flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <Phone className="size-4 text-primary" aria-hidden />
                    {lead.phoneDisplay}
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    href="#quote"
                    className="flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <Phone className="size-4 text-primary" aria-hidden />
                    Request a free quote
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {lead.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Website preview by{" "}
            <Link
              href="/previews"
              className="font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Lake Sites
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
