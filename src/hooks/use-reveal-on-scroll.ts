"use client";

import { useEffect } from "react";

/**
 * Progressive scroll-reveal. Finds every `[data-reveal]` element inside the
 * document and sets `data-revealed="true"` as it scrolls into view, which the
 * CSS keyframe in globals.css animates. Falls back to visible when
 * IntersectionObserver is unavailable, and respects reduced-motion via CSS.
 */
export function useRevealOnScroll(): void {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
