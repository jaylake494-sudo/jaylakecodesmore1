"use client";

import { Menu, Phone, TreePine, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { Lead } from "@/types/lead";

import { NAV_ITEMS } from "./nav-items";

export function PreviewHeader({ lead }: { lead: Lead }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <TreePine className="size-5" aria-hidden />
          </span>
          <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            {lead.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          {lead.phoneHref ? (
            <a
              href={lead.phoneHref}
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-accent-strong hover:shadow-md active:translate-y-px"
            >
              <Phone className="size-4" aria-hidden />
              {lead.phoneDisplay}
            </a>
          ) : (
            <a
              href="#quote"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-accent-strong hover:shadow-md active:translate-y-px"
            >
              Get a free quote
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-0 top-0 origin-top bg-background p-4 shadow-xl transition-all duration-300",
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0",
          )}
        >
          <div className="mb-2 flex h-12 items-center justify-between">
            <span className="text-base font-bold text-foreground">
              {lead.name}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-muted"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 border-t border-border pt-3">
            {lead.phoneHref ? (
              <a
                href={lead.phoneHref}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-base font-semibold text-primary-foreground"
              >
                <Phone className="size-5" aria-hidden />
                Call {lead.phoneDisplay}
              </a>
            ) : (
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-base font-semibold text-primary-foreground"
              >
                Get a free quote
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
