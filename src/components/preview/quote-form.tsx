"use client";

import { CircleCheck, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { cn } from "@/lib/utils";
import type { Lead } from "@/types/lead";

import { Reveal } from "./primitives";

type Status = "idle" | "success";

export function QuoteForm({ lead }: { lead: Lead }) {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend — this is a preview. Confirm client-side so the prospect sees
    // the interaction working. (Wire to email / CRM when the client signs on.)
    setStatus("success");
  }

  return (
    <section id="quote" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          <div className="grid lg:grid-cols-2">
            {/* Pitch side */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary via-accent-strong to-accent-glow p-8 text-primary-foreground sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.22),transparent_55%)]" />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Get a free quote
                </h2>
                <p className="mt-4 max-w-sm text-primary-foreground/90">
                  Tell us about your project and {lead.name} will get right back
                  to you. No pressure, no obligation.
                </p>
                <ul className="mt-8 space-y-3 text-sm">
                  {["Free, no-obligation estimates", "Fast, friendly response", "Honest, up-front pricing"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <CircleCheck className="size-5 shrink-0" aria-hidden />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
                {lead.phoneHref ? (
                  <a
                    href={lead.phoneHref}
                    className="mt-8 inline-flex h-12 items-center gap-2 rounded-2xl bg-background px-5 text-base font-semibold text-foreground shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <Phone className="size-5" aria-hidden />
                    Or call {lead.phoneDisplay}
                  </a>
                ) : null}
              </div>
            </div>

            {/* Form side */}
            <div className="p-8 sm:p-10">
              {status === "success" ? (
                <Reveal>
                  <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                    <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CircleCheck className="size-9" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold text-foreground">
                      Thanks{name ? `, ${name.split(" ")[0]}` : ""}!
                    </h3>
                    <p className="mt-2 max-w-sm text-muted-foreground">
                      Your request is in — {lead.name} will be in touch
                      shortly to talk through your project.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setName("");
                      }}
                      className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Send another request
                    </button>
                  </div>
                </Reveal>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Field label="Name">
                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone">
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="(814) 555-0123"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@email.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>
                  <Field label="How can we help?">
                    <textarea
                      name="message"
                      rows={4}
                      placeholder={`Tell ${lead.name} about your project…`}
                      className={cn(inputClass, "min-h-28 resize-y")}
                    />
                  </Field>
                  <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-accent-strong active:translate-y-px"
                  >
                    <Send className="size-5" aria-hidden />
                    Request my free quote
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    This is a preview form — no information is sent anywhere yet.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
