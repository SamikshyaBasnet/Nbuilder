/* =========================================================
   NATIVE BUILDERS — Static Data Constants
   Centralized location for all static content
   ========================================================= */

// ── COMPANY INFO ──
export const COMPANY = {
  name: "Native Builders",
  tagline: "Building Dreams Into Reality",
  shortDesc:
    "Kathmandu, Nepal's trusted partner for construction, design, and project management.",
  fullDesc:
    "Native Builders is a full-service construction and design firm based in Kathmandu, Nepal. Founded in 2021, we've grown from a small contracting team to one of the region's most trusted names — delivering 500+ projects across residential, commercial, and industrial sectors.",
  founded: "2021",
  location: "Kathmandu, Nepal",
  officeAddress: "Native Builders Office, Kathmandu, Nepal",
};

// ── CONTACT INFORMATION ──
export const CONTACT = {
  phones: [
    { number: "9843369116", display: "98433 69116", primary: true },
    { number: "9812898151", display: "98128 98151" },
  ],
  email: "info@nativebuilders.in",
  whatsapp: "9779843369116", // with country code, no +

  workingHours: {
    weekdays: "Sun – Fri: 10:00 AM – 7:00 PM",
    weekend: "Saturday: 10:00 AM – 3:00 PM",
  },

  socialMedia: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
};

// ── SEO METADATA ──
export const SEO = {
  title: "Native Builders | Construction & Design Experts Kathmandu, Nepal",
  description:
    "Leading construction company in Kathmandu, Nepal. 500+ projects, 15+ years experience. Services: Construction, Municipal Approvals, Interior Design, Project Management.",
  keywords:
    "construction company kathmandu nepal, builders in delhi, interior design, municipal drawing, construction supervision, project management delhi",
  ogImage: "/og-image.jpg", // Add your image to /public folder
};

// ── NAVIGATION LINKS ──
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// ── HERO STATS ──
export const HERO_STATS = [
  { num: "500+", label: "Projects Done" },
  { num: "15+", label: "Years Experience" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "50+", label: "Expert Team" },
];

// ── SERVICES ──
export const SERVICES = [
  {
    id: "construction",
    icon: "🏗️",
    num: "01",
    title: "Construction & Supervision",
    desc: "Full project execution from foundation to finish with expert on-site supervision, quality control, and safety management at every stage.",
    tags: ["Residential", "Commercial", "Industrial"],
  },
  {
    id: "municipal",
    icon: "📐",
    num: "02",
    title: "Design / Municipal Drawing & Pass",
    desc: "Architectural plans, structural drawings, and complete municipal approval documentation. We handle all permits so you don't have to worry.",
    tags: ["Blueprints", "Approvals", "Permits"],
  },
  {
    id: "interior",
    icon: "🎨",
    num: "03",
    title: "Interior, Exterior & Landscape",
    desc: "Transform every space with thoughtful interior design, striking exterior finishes, and beautifully curated landscape planning.",
    tags: ["Interior", "Exterior", "Garden"],
  },
  {
    id: "survey",
    icon: "📏",
    num: "04",
    title: "Survey & DPR Preparation",
    desc: "Precise land surveys and Detailed Project Reports with accurate measurements, technical specifications, and compliance documentation.",
    tags: ["Land Survey", "DPR", "Analysis"],
  },
  {
    id: "estimation",
    icon: "💰",
    num: "05",
    title: "Estimation, Costing & Valuation",
    desc: "Transparent project estimates, detailed BOQ preparation, and professional property valuation with zero hidden surprises.",
    tags: ["BOQ", "Valuation", "Costing"],
  },
  {
    id: "management",
    icon: "🏢",
    num: "06",
    title: "Project Management",
    desc: "End-to-end project management ensuring timely delivery, strict cost control, and consistent quality benchmarks throughout.",
    tags: ["Timeline", "Quality", "Delivery"],
  },
];

// ── TICKER ITEMS (scrolling strip) ──
export const TICKER_ITEMS = [
  "Construction & Supervision",
  "Municipal Drawing & Pass",
  "Interior & Exterior Design",
  "Survey & DPR Preparation",
  "Estimation & Valuation",
  "Project Management",
  "Landscape Design",
  "Structural Engineering",
];

// ── ABOUT FEATURES ──
export const ABOUT_FEATURES = [
  {
    icon: "🏆",
    title: "Award-Winning Quality",
    desc: "Recognized for excellence in construction craftsmanship.",
  },
  {
    icon: "📜",
    title: "Fully Licensed",
    desc: "Municipal & government certified across all services.",
  },
  {
    icon: "💎",
    title: "Premium Materials",
    desc: "ISI certified materials — no compromises, ever.",
  },
  {
    icon: "🤝",
    title: "Transparent Process",
    desc: "Clear contracts, fair pricing, zero surprises.",
  },
];

// ── COMPANY MILESTONES ──
export const MILESTONES = [
  { year: "2021", event: "Founded in Kathmandu, Nepal" },
  { year: "2022", event: "Expanded to commercial projects" },
  { year: "2023", event: "50+ projects milestone" },
  { year: "2026", event: "100+ projects delivered" },
];

// ── STATS (animated counters section) ──
export const STATS = [
  { num: 500, suffix: "+", label: "Projects Delivered", icon: "🏗️" },
  { num: 15, suffix: "+", label: "Years of Experience", icon: "📅" },
  { num: 98, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
  { num: 50, suffix: "+", label: "Expert Professionals", icon: "👷" },
  { num: 30, suffix: "+", label: "Ongoing Projects", icon: "🔧" },
  { num: 200, suffix: "+", label: "Residential Builds", icon: "🏡" },
];

// ── WHY CHOOSE US ──
export const WHY_US = [
  {
    icon: "🏆",
    title: "Award-Winning Quality",
    desc: "Recognized for excellence in construction craftsmanship and innovative design solutions.",
    num: "01",
  },
  {
    icon: "⚡",
    title: "On-Time Delivery",
    desc: "98% of projects delivered on schedule with strict timeline management protocols.",
    num: "02",
  },
  {
    icon: "🛡️",
    title: "Licensed & Certified",
    desc: "Fully licensed professionals with municipal and government certifications across all service verticals.",
    num: "03",
  },
  {
    icon: "📞",
    title: "24/7 Client Support",
    desc: "Dedicated support team always available to address your queries and project concerns.",
    num: "04",
  },
];

// ── PROJECTS ──
export const PROJECT_CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Renovation",
];

export const PROJECTS = [
  {
    id: "himshikhar-villa",
    title: "Himshikhar Villa",
    category: "Residential",
    location: "Budhanilkantha, Kathmandu",
    status: "Completed",
    emoji: "🏡",
    gradient: "linear-gradient(145deg,#0B2563,#1A3FA0)",
  },
  {
    id: "suryodaya-tower",
    title: "Suryodaya Business Tower",
    category: "Commercial",
    location: "New Baneshwor, Kathmandu",
    status: "Ongoing",
    emoji: "🏢",
    gradient: "linear-gradient(145deg,#1A3FA0,#2352BF)",
  },
  {
    id: "everest-interiors",
    title: "Everest Premium Interiors",
    category: "Interior",
    location: "Jawalakhel, Lalitpur",
    status: "Completed",
    emoji: "🛋️",
    gradient: "linear-gradient(145deg,#0B2563,#3B6FD4)",
  },
  {
    id: "heritage-newari-home",
    title: "Newari Heritage Home Renovation",
    category: "Renovation",
    location: "Bhaktapur Durbar Area",
    status: "Completed",
    emoji: "🏰",
    gradient: "linear-gradient(145deg,#A87B0A,#D4A017)",
  },
  {
    id: "annapurna-commercial",
    title: "Annapurna Commercial Complex",
    category: "Commercial",
    location: "Pokhara Lakeside",
    status: "New",
    emoji: "🏬",
    gradient: "linear-gradient(145deg,#0B2563,#1A3FA0)",
  },
  {
    id: "lakeview-pokhara",
    title: "Lakeview Residences",
    category: "Residential",
    location: "Pokhara, Kaski",
    status: "Ongoing",
    emoji: "🌊",
    gradient: "linear-gradient(145deg,#1A3FA0,#3B6FD4)",
  },
  {
    id: "himalaya-club",
    title: "Himalaya Recreation Club",
    category: "Commercial",
    location: "Butwal",
    status: "Completed",
    emoji: "🌴",
    gradient: "linear-gradient(145deg,#0F2D6B,#2352BF)",
  },
  {
    id: "studio-himal",
    title: "Studio Himal Interior",
    category: "Interior",
    location: "Thamel, Kathmandu",
    status: "Completed",
    emoji: "🎨",
    gradient: "linear-gradient(145deg,#A87B0A,#EDB830)",
  },
  {
    id: "green-valley-dharan",
    title: "Green Valley Residences",
    category: "Residential",
    location: "Dharan",
    status: "New",
    emoji: "🌿",
    gradient: "linear-gradient(145deg,#1A3FA0,#3B6FD4)",
  },
];

// Project status colors
export const PROJECT_STATUS_COLORS = {
  Completed: "#1A3FA0",
  Ongoing: "#D4A017",
  New: "#16A34A",
};

// ── PROCESS STEPS ──
export const PROCESS_STEPS = [
  {
    num: "01",
    icon: "💬",
    title: "Free Consultation",
    desc: "Meet with our experts for a free initial consultation to understand your vision, requirements, budget, and timeline.",
  },
  {
    num: "02",
    icon: "📋",
    title: "Planning & Design",
    desc: "Our architects create detailed plans, drawings, and 3D visualizations so you can see your project before it's built.",
  },
  {
    num: "03",
    icon: "📜",
    title: "Approvals & Permits",
    desc: "We handle all municipal applications, submissions, and approvals on your behalf — stress-free and efficient.",
  },
  {
    num: "04",
    icon: "🏗️",
    title: "Construction",
    desc: "Expert execution by certified professionals with daily progress updates and rigorous quality control at every stage.",
  },
  {
    num: "05",
    icon: "🎉",
    title: "Handover & Support",
    desc: "Final walkthrough, punch-list completion, official handover, and post-completion support whenever you need it.",
  },
];

// ── TESTIMONIALS ──
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Suresh Adhikari",
    role: "Homeowner — Budhanilkantha, Kathmandu",
    avatar: "👨",
    rating: 5,
    text: "Native Builders turned our concept into a beautifully executed home. Their attention to structural integrity, finishing details, and transparent cost breakdown gave us complete confidence throughout the process. The final result exceeded our expectations in every way.",
  },
  {
    id: 2,
    name: "Anita Karki",
    role: "Entrepreneur — Lalitpur",
    avatar: "👩",
    rating: 5,
    text: "From initial design consultation to project completion, the team handled everything with precision and professionalism. Local approvals and documentation were managed efficiently, saving us significant time. I highly recommend them for any commercial construction project.",
  },
  {
    id: 3,
    name: "Ramesh Shrestha",
    role: "Property Developer — Bhaktapur",
    avatar: "👨‍💼",
    rating: 5,
    text: "Their project estimation was accurate with no unexpected costs. The design and execution quality were exceptional. We have collaborated on multiple residential developments, and their consistency in delivery makes them a reliable construction partner.",
  },
  {
    id: 4,
    name: "Mina Thapa",
    role: "Homeowner — Pokhara",
    avatar: "👩‍💼",
    rating: 5,
    text: "What impressed us most was their commitment to quality materials and disciplined project timelines. Even with technical and municipal complexities, they maintained clear communication and delivered exactly as promised. A highly dependable team.",
  },
  {
    id: 5,
    name: "Dr. Prakash Gautam",
    role: "Clinic Owner — Chitwan",
    avatar: "👨‍⚕️",
    rating: 5,
    text: "We required a clinic space built according to strict medical standards and compliance requirements. Native Builders demonstrated strong technical expertise and organized project management throughout. The completed facility meets every operational need perfectly.",
  },
];

// ── CONTACT FORM SERVICE OPTIONS ──
export const CONTACT_SERVICES = [
  "Construction & Supervision",
  "Design / Municipal Drawing & Pass",
  "Interior, Exterior & Landscape",
  "Survey & DPR Preparation",
  "Estimation, Costing & Valuation",
  "Project Management",
  "Multiple Services",
];

// ── CONTACT FORM BUDGET OPTIONS ──
export const BUDGET_RANGES = [
  "Under ₹10 Lakhs",
  "₹10 – 25 Lakhs",
  "₹25 – 50 Lakhs",
  "₹50 Lakhs – 1 Crore",
  "Above ₹1 Crore",
];

// ── CONTACT INFO CARDS ──
export const CONTACT_INFO = [
  {
    icon: "📞",
    label: "Call Us Anytime",
    values: CONTACT.phones.map((p) => p.display),
    link: `tel:${CONTACT.phones[0].number}`,
  },
  {
    icon: "📍",
    label: "Office Address",
    values: [COMPANY.officeAddress],
  },
  {
    icon: "✉️",
    label: "Email Us",
    values: [CONTACT.email],
    link: `mailto:${CONTACT.email}`,
  },
  {
    icon: "🕐",
    label: "Working Hours",
    values: [CONTACT.workingHours.weekdays, CONTACT.workingHours.weekend],
  },
];

// ── FOOTER LINKS ──
export const FOOTER_SERVICE_LINKS = SERVICES.map((s) => s.title);

export const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Projects", href: "#projects" },
  { label: "Our Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
