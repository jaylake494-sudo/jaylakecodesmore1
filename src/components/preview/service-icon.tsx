import {
  Axe,
  BrickWall,
  CircleDot,
  CloudLightning,
  Disc3,
  Droplets,
  Flower2,
  Fuel,
  Gauge,
  Hammer,
  Leaf,
  type LucideIcon,
  Pickaxe,
  Scissors,
  Settings,
  Shovel,
  Snowflake,
  Sprout,
  TreePine,
  Trash2,
  Truck,
  Wrench,
} from "lucide-react";

import type { ServiceIconName } from "@/types/lead";

const ICONS: Record<ServiceIconName, LucideIcon> = {
  "tree-removal": TreePine,
  "tree-trimming": Scissors,
  "stump-grinding": Sprout,
  "storm-damage": CloudLightning,
  "land-clearing": Axe,
  "risk-assessment": Leaf,
  "site-excavation": Pickaxe,
  foundation: BrickWall,
  trenching: Shovel,
  drainage: Droplets,
  demolition: Hammer,
  "lawn-care": Leaf,
  "landscape-design": Flower2,
  mulching: Sprout,
  "seasonal-cleanup": Trash2,
  hardscaping: BrickWall,
  "snow-removal": Snowflake,
  "engine-repair": Settings,
  "brake-service": Disc3,
  "fleet-repair": Truck,
  "oil-change": Fuel,
  "tire-service": CircleDot,
  suspension: Wrench,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Gauge;
  return <Icon className={className} aria-hidden />;
}
