import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PreviewPage } from "@/components/preview/preview-page";
import { getLead, leads } from "@/data/leads";

export function generateStaticParams(): { slug: string }[] {
  return leads.map((lead) => ({ slug: lead.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/previews/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const lead = getLead(slug);

  if (!lead) {
    return { title: "Preview not found" };
  }

  const title = `${lead.name} · ${lead.trade} in ${lead.serviceArea}`;
  const description = `${lead.intro} Rated ${lead.rating.toFixed(1)}★ from ${lead.reviews} Google reviews.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function LeadPreviewPage({
  params,
}: PageProps<"/previews/[slug]">) {
  const { slug } = await params;
  const lead = getLead(slug);

  if (!lead) {
    notFound();
  }

  return <PreviewPage lead={lead} />;
}
