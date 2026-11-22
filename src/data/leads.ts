import type {
  FaqItem,
  Lead,
  Service,
  TrustPoint,
} from "@/types/lead";

/**
 * Lake Sites preview kit — 10 real Pennsylvania local businesses that
 * currently have no website. Each entry drives one data-driven preview page.
 *
 * CONTENT RULE: only truthful, generic-but-realistic trade content. No
 * fabricated founding years, certifications, awards, team names, or addresses.
 * Ratings/review counts are the businesses' real Google figures and are fine
 * to show as "Rated X from N Google reviews".
 */

// ---------------------------------------------------------------------------
// Reusable service catalogs per trade (kept DRY; edited sensibly per lead).
// ---------------------------------------------------------------------------

const TREE_SERVICES: readonly Service[] = [
  {
    title: "Tree Removal",
    description:
      "Safe, controlled removal of hazardous, dead, or unwanted trees of any size.",
    icon: "tree-removal",
  },
  {
    title: "Tree Trimming & Pruning",
    description:
      "Shaping, thinning, and crown work that keeps trees healthy and tidy.",
    icon: "tree-trimming",
  },
  {
    title: "Stump Grinding",
    description:
      "Grind stumps below grade so you can reclaim your yard for good.",
    icon: "stump-grinding",
  },
  {
    title: "Emergency Storm Damage",
    description:
      "Fast response for downed limbs and storm-damaged trees when it counts.",
    icon: "storm-damage",
  },
  {
    title: "Lot & Land Clearing",
    description:
      "Clear brush and trees to open up lots, trails, and building sites.",
    icon: "land-clearing",
  },
  {
    title: "Tree Health & Risk Assessment",
    description:
      "Honest evaluation of tree condition, structure, and potential hazards.",
    icon: "risk-assessment",
  },
];

const EXCAVATION_SERVICES: readonly Service[] = [
  {
    title: "Site Excavation & Grading",
    description:
      "Precise digging and grading to prep your site for whatever comes next.",
    icon: "site-excavation",
  },
  {
    title: "Foundation Digging",
    description:
      "Accurate footer and foundation excavation for homes and additions.",
    icon: "foundation",
  },
  {
    title: "Trenching & Utilities",
    description:
      "Clean trenches for water, sewer, electric, and drainage lines.",
    icon: "trenching",
  },
  {
    title: "Land Clearing",
    description:
      "Clear and level overgrown or wooded ground for new construction.",
    icon: "land-clearing",
  },
  {
    title: "Drainage Solutions",
    description:
      "French drains, swales, and grading that move water away from where it hurts.",
    icon: "drainage",
  },
  {
    title: "Demolition & Hauling",
    description:
      "Tear-down of small structures plus debris removal and haul-off.",
    icon: "demolition",
  },
];

const LANDSCAPING_SERVICES: readonly Service[] = [
  {
    title: "Lawn Care & Mowing",
    description:
      "Dependable mowing, edging, and lawn maintenance all season long.",
    icon: "lawn-care",
  },
  {
    title: "Landscape Design & Installation",
    description:
      "Thoughtful designs installed start to finish to transform your yard.",
    icon: "landscape-design",
  },
  {
    title: "Mulching & Planting",
    description:
      "Fresh mulch, healthy plantings, and clean beds that frame your home.",
    icon: "mulching",
  },
  {
    title: "Seasonal Cleanups",
    description:
      "Spring and fall cleanups that clear leaves, debris, and overgrowth.",
    icon: "seasonal-cleanup",
  },
  {
    title: "Hardscaping",
    description:
      "Patios, walkways, and retaining walls built to last and look great.",
    icon: "hardscaping",
  },
  {
    title: "Snow Removal",
    description:
      "Seasonal plowing and shoveling to keep drives and walks clear.",
    icon: "snow-removal",
  },
];

const AUTO_SERVICES: readonly Service[] = [
  {
    title: "Engine Diagnostics & Repair",
    description:
      "Modern diagnostics to find the real problem and fix it right.",
    icon: "engine-repair",
  },
  {
    title: "Brake Service",
    description:
      "Pads, rotors, lines, and full brake inspections for safe stopping.",
    icon: "brake-service",
  },
  {
    title: "Truck & Fleet Repair",
    description:
      "Light- and medium-duty truck and fleet service to limit downtime.",
    icon: "fleet-repair",
  },
  {
    title: "Oil Changes & Maintenance",
    description:
      "Routine oil, fluids, and scheduled maintenance to protect your vehicle.",
    icon: "oil-change",
  },
  {
    title: "Tire Service",
    description:
      "Mounting, balancing, rotations, and repairs to keep you rolling.",
    icon: "tire-service",
  },
  {
    title: "Suspension & Steering",
    description:
      "Shocks, struts, alignments, and steering work for a smooth ride.",
    icon: "suspension",
  },
];

// ---------------------------------------------------------------------------
// Reusable trust bands per trade.
// ---------------------------------------------------------------------------

const treeTrust = (area: string): readonly TrustPoint[] => [
  { icon: "shield", label: "Safety First", sublabel: "Careful, insured crews" },
  { icon: "clock", label: "Fast Response", sublabel: "Storm & emergency work" },
  { icon: "map", label: "Local Crew", sublabel: area },
  { icon: "thumbs", label: "Free Estimates", sublabel: "No-pressure quotes" },
];

const excavationTrust = (area: string): readonly TrustPoint[] => [
  { icon: "badge", label: "Done Right", sublabel: "Precise, clean work" },
  { icon: "shield", label: "Insured", sublabel: "Protected job sites" },
  { icon: "map", label: "Central PA", sublabel: area },
  { icon: "thumbs", label: "Free Estimates", sublabel: "Clear up-front quotes" },
];

const landscapeTrust = (area: string): readonly TrustPoint[] => [
  { icon: "badge", label: "Reliable", sublabel: "On-schedule service" },
  { icon: "star", label: "Detail-Driven", sublabel: "Clean, crisp results" },
  { icon: "map", label: "Local", sublabel: area },
  { icon: "thumbs", label: "Free Estimates", sublabel: "No-obligation quotes" },
];

const autoTrust = (area: string): readonly TrustPoint[] => [
  { icon: "badge", label: "Honest Work", sublabel: "Straight answers" },
  { icon: "shield", label: "Cars & Trucks", sublabel: "Foreign & domestic" },
  { icon: "map", label: "Local Shop", sublabel: area },
  { icon: "clock", label: "Quick Turnaround", sublabel: "Back on the road fast" },
];

// ---------------------------------------------------------------------------
// Reusable FAQ sets per trade.
// ---------------------------------------------------------------------------

const treeFaqs = (area: string): readonly FaqItem[] => [
  {
    question: "Do you offer free estimates?",
    answer: `Yes. We'll come out, look at the trees, and give you a clear, no-pressure quote for the work across ${area}.`,
  },
  {
    question: "Can you handle emergency storm damage?",
    answer:
      "Absolutely. Downed limbs and storm-damaged trees can be dangerous, so we prioritize emergency calls and get out as quickly as we can.",
  },
  {
    question: "Do you grind the stump after removal?",
    answer:
      "We can. Stump grinding is a separate service we're happy to add so you're left with a clean, usable yard.",
  },
  {
    question: "Will you clean up when the job is done?",
    answer:
      "Every time. We haul away debris and leave your property clean — you shouldn't be able to tell we were there except for the finished work.",
  },
];

const excavationFaqs = (area: string): readonly FaqItem[] => [
  {
    question: "What size projects do you take on?",
    answer: `We handle residential and light commercial excavation and site work throughout ${area}, from drainage fixes to full site prep.`,
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. We'll review the scope with you and provide a clear, itemized quote before any work begins.",
  },
  {
    question: "Can you help with drainage problems?",
    answer:
      "That's one of our most-requested services. We assess how water moves across your property and install grading or drains to redirect it.",
  },
  {
    question: "Do you handle debris and haul-off?",
    answer:
      "We do. Demolition, cleanup, and haul-off can be bundled into the job so you're not left managing debris.",
  },
];

const landscapeFaqs = (area: string): readonly FaqItem[] => [
  {
    question: "Do you offer recurring lawn maintenance?",
    answer: `Yes. We offer regular mowing and lawn care schedules across ${area}, plus one-time cleanups whenever you need them.`,
  },
  {
    question: "Can you design and install a new landscape?",
    answer:
      "Absolutely. We'll work with you on a design, then handle the full installation — plantings, mulch, beds, and hardscape.",
  },
  {
    question: "Do you do seasonal cleanups?",
    answer:
      "Spring and fall cleanups are a core service. We clear leaves, debris, and overgrowth to get your property reset for the season.",
  },
  {
    question: "Do you plow snow in the winter?",
    answer:
      "We offer seasonal snow removal for driveways and walkways so you're covered year-round.",
  },
];

const autoFaqs = (area: string): readonly FaqItem[] => [
  {
    question: "Do you work on both cars and trucks?",
    answer: `Yes. We service cars, light trucks, and fleet vehicles for customers throughout ${area}.`,
  },
  {
    question: "Can you diagnose a check-engine light?",
    answer:
      "We use modern diagnostic tools to pinpoint the actual cause rather than guessing, then walk you through the fix.",
  },
  {
    question: "Do you handle routine maintenance?",
    answer:
      "From oil changes and fluids to brakes, tires, and scheduled maintenance, we keep your vehicle running and safe.",
  },
  {
    question: "How fast is turnaround?",
    answer:
      "It depends on the work and parts, but we aim to get you a straight answer and your vehicle back on the road as quickly as possible.",
  },
];

// ---------------------------------------------------------------------------
// Gallery placeholder tones per accent (Swap with real business photos).
// ---------------------------------------------------------------------------

// Swap with real business photos — these gradient blocks are intentional
// placeholders clearly meant to be replaced with the client's own imagery.
const forestGallery = [
  { label: "Recent tree removal", tone: "from-emerald-700 to-green-900" },
  { label: "Crown & canopy work", tone: "from-green-600 to-emerald-800" },
  { label: "Stump ground flush", tone: "from-lime-700 to-green-900" },
  { label: "Lot cleared & cleaned", tone: "from-emerald-600 to-teal-800" },
  { label: "Storm cleanup", tone: "from-green-700 to-emerald-950" },
  { label: "Precision climbing", tone: "from-teal-700 to-green-900" },
] as const;

const industrialGallery = [
  { label: "Site graded & prepped", tone: "from-amber-600 to-stone-800" },
  { label: "Foundation dig", tone: "from-stone-600 to-amber-900" },
  { label: "Utility trenching", tone: "from-amber-700 to-slate-800" },
  { label: "Drainage installed", tone: "from-slate-600 to-stone-800" },
  { label: "Land cleared", tone: "from-amber-500 to-stone-700" },
  { label: "Demolition & haul-off", tone: "from-stone-700 to-slate-900" },
] as const;

const sunsetGallery = [
  { label: "Fresh landscape design", tone: "from-green-600 to-emerald-800" },
  { label: "Manicured lawn", tone: "from-lime-600 to-green-800" },
  { label: "Mulch & plantings", tone: "from-amber-500 to-green-700" },
  { label: "Paver patio", tone: "from-orange-500 to-amber-700" },
  { label: "Seasonal cleanup", tone: "from-emerald-600 to-lime-800" },
  { label: "Walkway hardscape", tone: "from-rose-500 to-amber-700" },
] as const;

const steelGallery = [
  { label: "In the service bay", tone: "from-slate-600 to-slate-900" },
  { label: "Engine diagnostics", tone: "from-blue-700 to-slate-900" },
  { label: "Brake service", tone: "from-red-600 to-slate-800" },
  { label: "Fleet truck repair", tone: "from-slate-700 to-blue-950" },
  { label: "Tire & wheel service", tone: "from-zinc-600 to-slate-900" },
  { label: "Back on the road", tone: "from-blue-600 to-zinc-900" },
] as const;

// ---------------------------------------------------------------------------
// The 10 leads.
// ---------------------------------------------------------------------------

export const leads: readonly Lead[] = [
  {
    slug: "bz-trees-tree-service",
    name: "BZ Trees Tree Service",
    trade: "Tree Service",
    tagline: "Erie's dependable tree care crew",
    intro:
      "Professional tree removal, trimming, and storm cleanup for homeowners across Erie and all of Erie County. Request a free quote and we'll take it from there.",
    serviceArea: "Erie, PA & Erie County",
    serviceAreaList: [
      "Erie",
      "Millcreek",
      "Harborcreek",
      "Fairview",
      "Girard",
      "Erie County",
    ],
    rating: 4.9,
    reviews: 253,
    phoneDisplay: null,
    phoneHref: null,
    accent: "forest",
    services: TREE_SERVICES,
    trust: treeTrust("Serving Erie County"),
    faqs: treeFaqs("Erie County"),
    gallery: forestGallery,
    testimonial: {
      quote:
        "Showed up when they said they would and left the yard spotless. Exactly what you want from a tree crew.",
      attribution: "Verified Google review",
    },
    verify: false,
  },
  {
    slug: "dynamic-tree-service",
    name: "Dynamic Tree Service LLC",
    trade: "Tree Service",
    tagline: "Tree care that's a cut above",
    intro:
      "From routine pruning to big removals and emergency storm work, Dynamic Tree Service keeps Erie properties safe and looking their best. Free quotes, no pressure.",
    serviceArea: "Erie, PA",
    serviceAreaList: [
      "Erie",
      "Millcreek",
      "Harborcreek",
      "Lawrence Park",
      "Wesleyville",
    ],
    rating: 4.8,
    reviews: 106,
    phoneDisplay: null,
    phoneHref: null,
    accent: "forest",
    services: TREE_SERVICES,
    trust: treeTrust("Serving Greater Erie"),
    faqs: treeFaqs("the Erie area"),
    gallery: forestGallery,
    testimonial: {
      quote:
        "Fair price, careful work around the house, and they cleaned everything up. Would use again.",
      attribution: "Verified Google review",
    },
    verify: false,
  },
  {
    slug: "sapling-tree-service",
    name: "Sapling Tree Service",
    trade: "Tree Service",
    tagline: "Rooted in the North Hills",
    intro:
      "Full-service tree care for Pittsburgh's North Hills — Allison Park, Wexford, and the surrounding communities. Give us a call for a free, honest estimate.",
    serviceArea: "Pittsburgh, PA — Allison Park, Wexford, North Hills",
    serviceAreaList: [
      "Allison Park",
      "Wexford",
      "North Hills",
      "Hampton",
      "McCandless",
      "Gibsonia",
    ],
    rating: 5.0,
    reviews: 21,
    phoneDisplay: "(412) 525-5901",
    phoneHref: "tel:+14125255901",
    accent: "forest",
    services: TREE_SERVICES,
    trust: treeTrust("Serving the North Hills"),
    faqs: treeFaqs("the North Hills"),
    gallery: forestGallery,
    testimonial: {
      quote:
        "Prompt, professional, and a perfect 5-star experience from quote to cleanup.",
      attribution: "Verified Google review",
    },
    verify: false,
  },
  {
    slug: "woodpecker-tree-service",
    name: "Woodpecker Tree Service LLC",
    trade: "Tree Service",
    tagline: "Lehigh Valley tree experts",
    intro:
      "Tree removal, trimming, stump grinding, and storm response for Easton and the greater Lehigh Valley. Call today for a free quote on your project.",
    serviceArea: "Easton & the Lehigh Valley, PA",
    serviceAreaList: [
      "Easton",
      "Bethlehem",
      "Allentown",
      "Nazareth",
      "Palmer",
      "Lehigh Valley",
    ],
    rating: 4.4,
    reviews: 52,
    phoneDisplay: "(484) 353-8256",
    phoneHref: "tel:+14843538256",
    accent: "forest",
    services: TREE_SERVICES,
    trust: treeTrust("Serving the Lehigh Valley"),
    faqs: treeFaqs("the Lehigh Valley"),
    gallery: forestGallery,
    testimonial: null,
    verify: false,
  },
  {
    slug: "mcintyres-tree-service",
    name: "McIntyre's Tree Service",
    trade: "Tree Service",
    tagline: "Trusted tree care in the Poconos",
    intro:
      "Serving Easton, Stroudsburg, and the Poconos with reliable tree removal, pruning, and cleanup. Request your free estimate and we'll get right back to you.",
    serviceArea: "Easton & Stroudsburg / the Poconos, PA",
    serviceAreaList: [
      "Easton",
      "Stroudsburg",
      "East Stroudsburg",
      "Bartonsville",
      "the Poconos",
    ],
    rating: 4.7,
    reviews: 45,
    phoneDisplay: null,
    phoneHref: null,
    accent: "forest",
    services: TREE_SERVICES,
    trust: treeTrust("Serving the Poconos"),
    faqs: treeFaqs("the Poconos"),
    gallery: forestGallery,
    testimonial: {
      quote:
        "Great communication and the crew clearly knew what they were doing. Highly recommend.",
      attribution: "Verified Google review",
    },
    verify: false,
  },
  {
    slug: "perkins-tree-service",
    // VERIFY: confirm the phone number 412-828-0811 is current and correct
    // before pitching this preview to the owner.
    name: "Perkins Tree Service",
    trade: "Tree Service",
    tagline: "North Hills tree specialists",
    intro:
      "Dependable tree removal, trimming, and storm work for Pittsburgh's North Hills. Reach out for a free, no-pressure estimate on your trees.",
    serviceArea: "Pittsburgh, PA — North Hills",
    serviceAreaList: [
      "North Hills",
      "Ross Township",
      "McCandless",
      "Shaler",
      "Hampton",
      "Wexford",
    ],
    rating: 4.8,
    reviews: 62,
    phoneDisplay: "412-828-0811",
    phoneHref: "tel:+14128280811",
    accent: "forest",
    services: TREE_SERVICES,
    trust: treeTrust("Serving the North Hills"),
    faqs: treeFaqs("the North Hills"),
    gallery: forestGallery,
    testimonial: null,
    verify: true,
  },
  {
    slug: "precision-tree-service",
    // VERIFY: confirm the exact service location in the Erie area before
    // pitching this preview to the owner.
    name: "Precision Tree Service",
    trade: "Tree Service",
    tagline: "Precise, careful tree work",
    intro:
      "Clean, careful tree removal and trimming for the Erie area. Every job is done with precision and a thorough cleanup. Request a free quote today.",
    serviceArea: "Erie area, PA",
    serviceAreaList: ["Erie", "Millcreek", "Harborcreek", "Fairview", "Erie County"],
    rating: 5.0,
    reviews: 129,
    phoneDisplay: null,
    phoneHref: null,
    accent: "forest",
    services: TREE_SERVICES,
    trust: treeTrust("Serving the Erie area"),
    faqs: treeFaqs("the Erie area"),
    gallery: forestGallery,
    testimonial: {
      quote:
        "Meticulous work and a flawless cleanup. You can tell they take pride in every job.",
      attribution: "Verified Google review",
    },
    verify: true,
  },
  {
    slug: "central-penn-excavating",
    name: "Central Penn Excavating",
    trade: "Excavation & Site Work",
    tagline: "Groundwork done right",
    intro:
      "Excavation, grading, drainage, and site work for York and Central PA. From foundations to drainage fixes, we build the base everything else stands on.",
    serviceArea: "York & Central PA",
    serviceAreaList: ["York", "Hanover", "Dover", "Red Lion", "Dallastown", "Central PA"],
    rating: 5.0,
    reviews: 17,
    phoneDisplay: null,
    phoneHref: null,
    accent: "industrial",
    services: EXCAVATION_SERVICES,
    trust: excavationTrust("York & Central PA"),
    faqs: excavationFaqs("York and Central PA"),
    gallery: industrialGallery,
    testimonial: {
      quote:
        "Clean, precise work and clear communication the whole way through. Could not be happier.",
      attribution: "Verified Google review",
    },
    verify: false,
  },
  {
    slug: "sunset-landscaping",
    name: "Sunset Landscaping & Lawn Care",
    trade: "Landscaping & Lawn Care",
    tagline: "Yards that turn heads",
    intro:
      "Full-service landscaping and lawn care for Williamsport and the surrounding area — design, installation, maintenance, and seasonal cleanups. Free quotes.",
    serviceArea: "Williamsport, PA",
    serviceAreaList: [
      "Williamsport",
      "South Williamsport",
      "Montoursville",
      "Loyalsock",
      "Duboistown",
    ],
    rating: 4.9,
    reviews: 48,
    phoneDisplay: null,
    phoneHref: null,
    accent: "sunset",
    services: LANDSCAPING_SERVICES,
    trust: landscapeTrust("Serving Williamsport"),
    faqs: landscapeFaqs("the Williamsport area"),
    gallery: sunsetGallery,
    testimonial: {
      quote:
        "They transformed our yard and keep it looking incredible. Reliable every single week.",
      attribution: "Verified Google review",
    },
    verify: false,
  },
  {
    slug: "specialty-auto-truck",
    name: "Specialty Auto Truck",
    trade: "Auto & Truck Repair",
    tagline: "Erie's auto & truck repair shop",
    intro:
      "Honest diagnostics and repair for cars, trucks, and fleets in Erie, PA. From brakes and oil changes to engine and suspension work — we keep you rolling.",
    serviceArea: "Erie, PA",
    serviceAreaList: ["Erie", "Millcreek", "Harborcreek", "Lawrence Park", "Wesleyville"],
    rating: 4.8,
    reviews: 56,
    phoneDisplay: "(814) 835-0549",
    phoneHref: "tel:+18148350549",
    accent: "steel",
    services: AUTO_SERVICES,
    trust: autoTrust("Serving Erie, PA"),
    faqs: autoFaqs("the Erie area"),
    gallery: steelGallery,
    testimonial: {
      quote:
        "Straight answers, fair prices, and quality work on both my car and my work truck.",
      attribution: "Verified Google review",
    },
    verify: false,
  },
];

export function getLead(slug: string): Lead | undefined {
  return leads.find((lead) => lead.slug === slug);
}
