import pigeonSafety from "@/assets/pigeon-safety.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import cricketNets2 from "@/assets/cricket-nets-2.jpg";
import invisibleGrill from "@/assets/invisible-grill.jpg";
import invisibleGrill2 from "@/assets/invisible-grill-2.jpg";
import sportsNets from "@/assets/sports-nets.jpg";
import swimmingPool from "@/assets/swimming-pool.jpg";
import carParking from "@/assets/car-parking.jpg";
import carParking2 from "@/assets/car-parking-2.jpg";
import coconutTree2 from "@/assets/coconut-tree-2.jpg";
import kidsSafety from "@/assets/kids-safety.jpg";
import kidsSafety2 from "@/assets/kids-safety-2.jpg";
import constructionSafety from "@/assets/construction-safety.jpg";
import buildingSafety from "@/assets/building-safety.jpg";
import ductArea from "@/assets/duct-area.jpg";
import staircaseSafety from "@/assets/staircase-safety.jpg";
import sportsBallStop from "@/assets/sports-ball-stop.jpg";
import terraceCricket from "@/assets/terrace-cricket.jpg";
import terraceTop from "@/assets/terrace-top.jpg";
import balconyHanger from "@/assets/balcony-hanger.jpg";
import sportsInstallation from "@/assets/sports-installation.jpg";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  image: string;
  description: string;
  details: string[];
  benefits: string[];
  category: "safety" | "bird" | "sports" | "other";
}

export const services: Service[] = [
  {
    slug: "balcony-safety-nets",
    title: "Balcony Safety Nets",
    shortTitle: "Balcony Nets",
    icon: "🏢",
    image: kidsSafety2,
    description: "Protect your balcony from accidents. Ideal for children, pets, and elderly safety. Strong, transparent nets that don't block your view or airflow.",
    details: [
      "High-tensile HDPE/Nylon material with UV stabilization",
      "Custom-fit installation for any balcony size or shape",
      "Transparent design maintains aesthetic appeal",
      "Weather-resistant and long-lasting (5-10 years warranty)",
      "Non-corrosive hooks and fixtures",
      "Professional installation by trained technicians"
    ],
    benefits: ["Child safety", "Pet protection", "Unobstructed views", "Weather resistant", "Easy maintenance"],
    category: "safety",
  },
  {
    slug: "kids-safety-nets",
    title: "Children Safety Nets",
    shortTitle: "Kids Nets",
    icon: "👶",
    image: kidsSafety,
    description: "Specially designed to prevent kids from slipping or climbing through railings. Safe, non-toxic, and highly durable materials ensure complete peace of mind.",
    details: [
      "Child-proof mesh size prevents fingers and toes from getting stuck",
      "Non-toxic materials safe for children",
      "High load-bearing capacity",
      "Smooth edges with no sharp points",
      "Certified safety standards compliance",
      "Quick installation with minimal disruption"
    ],
    benefits: ["100% child-safe", "Non-toxic materials", "High durability", "Smooth finish", "Peace of mind"],
    category: "safety",
  },
  {
    slug: "pets-safety-nets",
    title: "Pets Safety Nets",
    shortTitle: "Pets Nets",
    icon: "🐕",
    image: invisibleGrill,
    description: "Keep your pets safe from falling or escaping. Scratch-resistant and pet-friendly materials designed specifically for animal safety.",
    details: [
      "Scratch-resistant and bite-proof materials",
      "Suitable for all pet sizes — cats, dogs, birds",
      "Invisible design doesn't affect home aesthetics",
      "UV-resistant for outdoor installations",
      "Easy to clean and maintain",
      "Custom sizing available"
    ],
    benefits: ["Scratch resistant", "Pet-friendly", "All pet sizes", "UV resistant", "Custom fit"],
    category: "safety",
  },
  {
    slug: "pigeon-safety-nets",
    title: "Pigeon Safety Nets / Bird Protection Nets",
    shortTitle: "Pigeon Nets",
    icon: "🐦",
    image: pigeonSafety,
    description: "Stop pigeons and birds from entering your space. Keeps your balcony clean and hygienic with professional-grade bird netting solutions.",
    details: [
      "Fine mesh prevents all bird species from entering",
      "UV-stabilized HDPE material for long life",
      "Invisible from distance — maintains building aesthetics",
      "Prevents bird droppings, feathers, and nesting",
      "Hygienic solution for homes and offices",
      "Available in multiple colors to match building exterior"
    ],
    benefits: ["Complete bird-proofing", "Hygienic", "Invisible design", "Long-lasting", "Multiple colors"],
    category: "bird",
  },
  {
    slug: "bird-spikes",
    title: "Bird Spikes / Anti-Bird Spikes",
    shortTitle: "Bird Spikes",
    icon: "🕊",
    image: carParking,
    description: "Prevents birds from sitting on ledges, AC units, and railings. Long-lasting and rust-proof spikes for comprehensive bird deterrence.",
    details: [
      "Stainless steel and polycarbonate options available",
      "Rust-proof and weather-resistant",
      "Humane bird deterrent — no harm to birds",
      "Easy installation on any surface",
      "Covers ledges, AC units, parapets, and signage",
      "Low maintenance and long-lasting"
    ],
    benefits: ["Rust-proof", "Humane", "Easy install", "All surfaces", "Low maintenance"],
    category: "bird",
  },
  {
    slug: "building-safety-nets",
    title: "Building Safety Nets",
    shortTitle: "Building Nets",
    icon: "🏗",
    image: buildingSafety,
    description: "Used for high-rise buildings to prevent falling objects and accidents. Perfect for apartments and construction areas with comprehensive coverage.",
    details: [
      "Heavy-duty nets for high-rise buildings",
      "Prevents objects from falling to lower floors",
      "ISI standard compliant materials",
      "Custom fabrication for any building size",
      "Fire-retardant options available",
      "Professional rigging and installation"
    ],
    benefits: ["Heavy-duty", "ISI compliant", "Custom sizes", "Fire-retardant", "Professional install"],
    category: "safety",
  },
  {
    slug: "construction-safety-nets",
    title: "Construction Safety Nets",
    shortTitle: "Construction Nets",
    icon: "🧱",
    image: constructionSafety,
    description: "Essential safety solution for construction sites. Protects workers and pedestrians from debris with industrial-grade netting.",
    details: [
      "Meets all construction safety regulations",
      "Debris containment and fall protection",
      "Available in various mesh sizes",
      "Quick deployment and removal",
      "Reusable for multiple projects",
      "Bulk pricing for contractors"
    ],
    benefits: ["Regulation compliant", "Debris containment", "Quick deploy", "Reusable", "Bulk pricing"],
    category: "safety",
  },
  {
    slug: "industrial-safety-nets",
    title: "Industrial Safety Nets",
    shortTitle: "Industrial Nets",
    icon: "🏭",
    image: sportsInstallation,
    description: "Heavy-duty nets designed for factories and industrial areas. Ensures worker safety and accident prevention in demanding environments.",
    details: [
      "Industrial-grade materials for heavy loads",
      "Chemical and heat resistant options",
      "Compliant with OSHA and industrial safety standards",
      "Custom engineering for specific requirements",
      "Regular inspection and maintenance services",
      "Emergency replacement available"
    ],
    benefits: ["Industrial grade", "Chemical resistant", "OSHA compliant", "Custom engineering", "Maintenance service"],
    category: "safety",
  },
  {
    slug: "swimming-pool-safety-nets",
    title: "Swimming Pool Safety Nets",
    shortTitle: "Pool Nets",
    icon: "🏊",
    image: swimmingPool,
    description: "Prevents accidental falls into pools, especially for kids and pets. Removable and strong design for complete pool safety.",
    details: [
      "Load-bearing capacity to support a child or pet",
      "Easy to remove and reinstall",
      "UV and chlorine resistant materials",
      "Custom fit for any pool shape",
      "Quick-drain mesh prevents water accumulation",
      "Lockable anchoring system"
    ],
    benefits: ["Child-proof", "Removable", "Chlorine resistant", "Custom fit", "Lockable"],
    category: "safety",
  },
  {
    slug: "cricket-practice-nets",
    title: "Cricket Practice Nets / Sports Nets",
    shortTitle: "Cricket Nets",
    icon: "🏏",
    image: cricketNets2,
    description: "Perfect for cricket practice and sports training. High-quality nets for long-lasting performance and professional training environments.",
    details: [
      "Professional-grade netting for serious practice",
      "High impact resistance for fast bowling",
      "Available in multiple sizes and configurations",
      "Portable and permanent installation options",
      "UV stabilized for outdoor use",
      "Used by academies and professional teams"
    ],
    benefits: ["Professional grade", "High impact", "Multiple sizes", "Portable option", "UV stabilized"],
    category: "sports",
  },
  {
    slug: "sports-ball-stop-nets",
    title: "Sports Ball Stop Nets",
    shortTitle: "Ball Stop Nets",
    icon: "⚽",
    image: sportsBallStop,
    description: "High-quality ball stop netting for football, cricket, and all sports. Prevents balls from leaving the playing area.",
    details: [
      "Heavy-duty construction for all ball sports",
      "Height options from 10ft to 40ft",
      "Wind-resistant design",
      "Quick installation on poles or structures",
      "Available for football, cricket, tennis, and more",
      "Institutional and residential options"
    ],
    benefits: ["All sports", "Variable heights", "Wind resistant", "Quick install", "Durable"],
    category: "sports",
  },
  {
    slug: "terrace-top-nets",
    title: "Terrace Top Nets",
    shortTitle: "Terrace Nets",
    icon: "🏡",
    image: terraceTop,
    description: "Covers open terrace areas for safety and bird protection. Maintains airflow while ensuring complete protection.",
    details: [
      "Full terrace coverage with single or multi-panel installation",
      "Bird-proof and debris-proof",
      "Allows sunlight and air circulation",
      "Strong enough to walk on for maintenance",
      "Custom cut for any terrace layout",
      "Includes all hardware and fixtures"
    ],
    benefits: ["Full coverage", "Bird-proof", "Air circulation", "Walk-on strength", "Custom fit"],
    category: "safety",
  },
  {
    slug: "staircase-safety-nets",
    title: "Staircase Safety Nets",
    shortTitle: "Staircase Nets",
    icon: "🪜",
    image: staircaseSafety,
    description: "Prevents accidents in open staircases. Ideal for homes and commercial buildings with open stairwell designs.",
    details: [
      "Custom-fitted for any staircase design",
      "Prevents children and pets from falling",
      "Transparent and unobtrusive",
      "Easy to install and remove",
      "Complies with building safety codes",
      "Available in multiple colors"
    ],
    benefits: ["Custom fitted", "Child-safe", "Transparent", "Easy install", "Code compliant"],
    category: "safety",
  },
  {
    slug: "coconut-tree-safety-nets",
    title: "Coconut Tree Safety Nets",
    shortTitle: "Coconut Nets",
    icon: "🌳",
    image: coconutTree2,
    description: "Protects people and property from falling coconuts. Strong and weather-resistant nets for complete safety under coconut trees.",
    details: [
      "Heavy-duty nets to catch falling coconuts",
      "Weather and UV resistant materials",
      "Easy harvesting access design",
      "Covers single or multiple trees",
      "Long-lasting (5+ years)",
      "Professional installation around trees"
    ],
    benefits: ["Heavy-duty", "Weather resistant", "Easy access", "Multi-tree", "Long-lasting"],
    category: "safety",
  },
  {
    slug: "car-parking-safety-nets",
    title: "Car Parking Safety Nets",
    shortTitle: "Parking Nets",
    icon: "🚗",
    image: carParking2,
    description: "Ensures safety in parking areas by preventing falling objects. Protects vehicles and people in open and covered parking structures.",
    details: [
      "Protects vehicles from falling debris and bird droppings",
      "Heavy load-bearing capacity",
      "UV and weather resistant",
      "Custom sizing for any parking area",
      "Easy access design for maintenance",
      "Fire-retardant options available"
    ],
    benefits: ["Vehicle protection", "Heavy-duty", "Weather proof", "Custom sized", "Fire-retardant"],
    category: "safety",
  },
  {
    slug: "invisible-grills",
    title: "Invisible Grills",
    shortTitle: "Invisible Grills",
    icon: "🧰",
    image: invisibleGrill2,
    description: "Modern alternative to traditional grills with strong stainless-steel wires, elegant look, high safety, and rust-resistant properties. Perfect for balconies and windows.",
    details: [
      "316-grade stainless steel wires",
      "Nearly invisible from outside",
      "Each wire holds up to 250kg load",
      "Rust-resistant and maintenance-free",
      "Modern aesthetic appeal",
      "Child and pet safety certified"
    ],
    benefits: ["SS 316 grade", "Invisible look", "250kg per wire", "Rust-free", "Maintenance-free"],
    category: "other",
  },
  {
    slug: "duct-area-safety-nets",
    title: "Duct Area Safety Nets",
    shortTitle: "Duct Nets",
    icon: "🧵",
    image: ductArea,
    description: "Covers open duct spaces to prevent accidents and bird entry. Essential for apartment buildings with open duct areas.",
    details: [
      "Custom-fitted for duct openings",
      "Prevents bird nesting in ducts",
      "Fire-retardant materials available",
      "Easy maintenance access",
      "Durable in all weather conditions",
      "Clean and professional finish"
    ],
    benefits: ["Custom fit", "Bird-proof", "Fire-retardant", "Easy access", "Professional finish"],
    category: "safety",
  },
  {
    slug: "open-area-safety-nets",
    title: "Open Area Safety Nets",
    shortTitle: "Open Area Nets",
    icon: "🏞",
    image: sportsNets,
    description: "Used for large open spaces to ensure safety and protection. Versatile netting solutions for residential and commercial open areas.",
    details: [
      "Large-area coverage capability",
      "Versatile application for multiple purposes",
      "Strong and durable construction",
      "Weather-resistant materials",
      "Custom engineering for unique spaces",
      "Competitive bulk pricing"
    ],
    benefits: ["Large coverage", "Versatile", "Strong", "Weather-proof", "Competitive pricing"],
    category: "safety",
  },
  {
    slug: "balcony-hangers",
    title: "Balcony Hangers",
    shortTitle: "Balcony Hangers",
    icon: "👕",
    image: balconyHanger,
    description: "Premium ceiling-mounted balcony hangers for drying clothes efficiently. Space-saving, rust-proof, and designed for Indian balconies.",
    details: [
      "Ceiling-mounted pulley system for easy operation",
      "Stainless steel rods — rust-proof and long-lasting",
      "Adjustable height to suit your needs",
      "Space-saving design for small balconies",
      "Supports heavy wet clothes without sagging",
      "Professional installation with concealed fittings"
    ],
    benefits: ["Rust-proof", "Space-saving", "Easy to use", "Heavy-duty", "Professional install"],
    category: "other",
  },
];

export const safetyServices = services.filter(s => s.category === "safety");
export const birdServices = services.filter(s => s.category === "bird");
export const sportsServices = services.filter(s => s.category === "sports");

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
