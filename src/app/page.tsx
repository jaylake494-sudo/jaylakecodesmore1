import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <div>
        <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Lake Sites · Jason Lake
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Website previews for local PA businesses
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Interactive concept landing pages for local tree, excavation,
          landscaping, and auto-repair businesses.
        </p>
      </div>
      <Link
        href="/previews"
        className="inline-flex h-12 items-center gap-2 rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:translate-y-px"
      >
        Browse the previews
        <ArrowRight className="size-5" aria-hidden />
      </Link>
    </main>
  );
}
