/**
 * Shared TypeScript contracts for the Lake Sites preview kit.
 *
 * Every preview page is rendered from one `Lead` record, so the whole kit
 * stays consistent. Keep this strict — no `any`.
 */

/** Visual accent system applied per trade via a scoped `theme-*` class. */
export type AccentTheme = "forest" | "industrial" | "sunset" | "steel";

/** Which Lucide icon a service card should render. */
export type ServiceIconName =
  | "tree-removal"
  | "tree-trimming"
  | "stump-grinding"
  | "storm-damage"
  | "land-clearing"
  | "risk-assessment"
  | "site-excavation"
  | "foundation"
  | "trenching"
  | "drainage"
  | "demolition"
  | "lawn-care"
  | "landscape-design"
  | "mulching"
  | "seasonal-cleanup"
  | "hardscaping"
  | "snow-removal"
  | "engine-repair"
  | "brake-service"
  | "fleet-repair"
  | "oil-change"
  | "tire-service"
  | "suspension";

export interface Service {
  readonly title: string;
  readonly description: string;
  readonly icon: ServiceIconName;
}

export interface TrustPoint {
  readonly icon: "shield" | "badge" | "star" | "clock" | "map" | "thumbs";
  readonly label: string;
  readonly sublabel: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

/** One illustrative, clearly-generic quote. Never a fabricated named person. */
export interface Testimonial {
  readonly quote: string;
  /** Deliberately generic attribution, e.g. "Verified Google review". */
  readonly attribution: string;
}

export interface GalleryItem {
  readonly label: string;
  /** Tailwind gradient utility classes for the placeholder block. */
  readonly tone: string;
}

export interface Lead {
  readonly slug: string;
  readonly name: string;
  /** Human-readable trade, e.g. "Tree Service". */
  readonly trade: string;
  /** Short tagline shown in the hero. */
  readonly tagline: string;
  /** One or two sentence hero description. */
  readonly intro: string;
  readonly serviceArea: string;
  /** Compact list of towns/areas for the service-area section. */
  readonly serviceAreaList: readonly string[];
  readonly rating: number;
  readonly reviews: number;
  /** Display phone, e.g. "(412) 525-5901". Null when the lead has no phone. */
  readonly phoneDisplay: string | null;
  /** tel: href, e.g. "tel:+14125255901". Null when no phone. */
  readonly phoneHref: string | null;
  readonly accent: AccentTheme;
  readonly services: readonly Service[];
  readonly trust: readonly TrustPoint[];
  readonly faqs: readonly FaqItem[];
  readonly gallery: readonly GalleryItem[];
  readonly testimonial: Testimonial | null;
  /**
   * Internal flag — when true the data entry carries a VERIFY note for the
   * freelancer to confirm before pitching. Not rendered on the page.
   */
  readonly verify: boolean;
}
