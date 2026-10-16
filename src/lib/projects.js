const same = (en) => ({ en, fr: en, ar: en });
export const projects = [
  {
    id: "cyberlens",
    title: "CyberLens",
    tagline: same(
      "A passive web security platform that maps a domain's public attack surface and turns findings into prioritized, evidence-backed results.",
    ),
    description: same(
      "A zero-dependency Node.js platform that discovers a domain's subdomains, DNS, certificates and technologies, runs 33 passive checks mapped to OWASP Top 10:2025, WSTG, ASVS and CWE, scores the risk, verifies fixes by re-scanning and exports PDF reports.",
    ),
    tech: ["Node.js", "SQLite", "Vanilla JS", "OWASP", "TOTP MFA", "PDF reports"],
    metrics: [
      { label: same("Checks"), value: "33" },
      { label: same("Tests"), value: "39" },
      { label: same("Mode"), value: "Passive" },
    ],
    images: [
      "/projects/cyberlens-1.webp",
      "/projects/cyberlens-2.webp",
      "/projects/cyberlens-3.webp",
      "/projects/cyberlens-4.webp",
    ],
    cover: "from-[color:var(--pink)] to-[color:var(--berry)]",
    accent: "rose",
    overview: same(
      "CyberLens discovers what a domain exposes, checks passive security controls, prioritizes what to fix first, verifies fixes with evidence and watches for regressions.",
    ),
    problem: same(
      "Security findings are only useful when the person receiving them can understand what happened and what to do next.",
    ),
    research: same(
      "The project is shaped around a practical security workflow: test, identify, prioritize and explain.",
    ),
    design: same(
      "A visual dashboard/reporting layer keeps severity, affected areas and recommendations easy to scan.",
    ),
    development: same(
      "A modular monolith on Node.js with no npm dependencies, using the built-in node:sqlite. Every outbound request goes through one validated path with SSRF protection, and accounts use hashed sessions, CSRF protection, login rate limits and TOTP multi-factor authentication.",
    ),
    challenges: same(
      "Keeping the scope realistic while still demonstrating meaningful security engineering skills.",
    ),
    solution: same(
      "A pipeline of discovery, 33 passive checks, a deterministic Security Score and a separate Risk Priority model. Findings only resolve when a re-scan no longer shows the evidence, and scans can be compared and monitored over time.",
    ),
    results: same(
      "A security engineering project backed by 39 automated tests, including SSRF regression tests, with workspaces, API tokens, scheduled monitoring and redacted PDF reports. It is passive by design and does not test authentication or injection.",
    ),
  },
  {
    id: "swap",
    live: "https://swap-com.vercel.app/",
    title: "SWAP",
    tagline: same(
      "A skill-trading web app where people exchange what they know, hour for hour, instead of money.",
    ),
    description: same(
      "Declare what you can teach and what you want to learn, get matched, propose a swap, chat, schedule the session and settle an hour-credit ledger between both people.",
    ),
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    metrics: [
      { label: same("Type"), value: "Web app" },
      { label: same("Backend"), value: "Supabase" },
      { label: same("Status"), value: "Live" },
    ],
    cover: "from-[color:var(--apricot)] to-[color:var(--pink)]",
    accent: "gold",
    overview: same(
      "SWAP turns learning into a two-way exchange: offer a skill, discover someone who can teach you another.",
    ),
    problem: same(
      "People often want to learn something new but lack an easy way to find someone willing to exchange knowledge.",
    ),
    research: same(
      "The concept was shaped around simple discovery, clear profiles and low-friction matching.",
    ),
    design: same(
      "A friendly interface with strong cards, clear categories and a visual language designed to feel approachable.",
    ),
    development: same(
      "A Vite, React and TypeScript front end on a Supabase backend: Postgres with Row Level Security, authentication, avatar storage and realtime chat. Versioned SQL migrations handle swap confirmation, review integrity, notifications and the credit ledger.",
    ),
    challenges: same(
      "Keeping a social marketplace useful without overwhelming the user with too many choices.",
    ),
    solution: same("A focused flow: discover → compare skills → choose a swap → connect."),
    results: same(
      "A live product with real accounts, matching, realtime chat, ratings and notifications, showing product thinking, UI/UX and a secured full-stack implementation.",
    ),
  },
  {
    id: "foliora",
    live: "https://foliora-book.vercel.app/",
    title: "Foliora",
    tagline: same(
      "An enchanted digital library designed around the feeling of discovering a great book.",
    ),
    description: same(
      "A book discovery and reading community: browse and search books, keep reading lists and favorites, set reading goals, write reviews, follow other readers and chat in reading groups in real time.",
    ),
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: same("Type"), value: "Web app" },
      { label: same("Backend"), value: "Supabase" },
      { label: same("Status"), value: "Live" },
    ],
    cover: "from-[color:var(--lavender)] to-[color:var(--pink)]",
    accent: "lavender",
    overview: same(
      "Foliora explores how a digital library can feel like a place rather than a database.",
    ),
    problem: same("Traditional book interfaces can feel functional but emotionally flat."),
    research: same(
      "The direction focused on visual hierarchy, browsing comfort and creating a memorable identity.",
    ),
    design: same(
      "Editorial typography, soft color, playful details and a strong sense of atmosphere drive the interface.",
    ),
    development: same(
      "Built with the Next.js App Router and TypeScript on Supabase for authentication, Postgres with Row Level Security and realtime group chat. User-written content is sanitized, and the interface uses Framer Motion for its atmosphere.",
    ),
    challenges: same("Balancing decoration with readability and keeping the interface practical."),
    solution: same(
      "A layered visual system where expressive elements frame — rather than compete with — the content.",
    ),
    results: same(
      "A live, full-stack reading community that combines a distinctive visual identity with accounts, profiles, groups and realtime chat.",
    ),
  },
  {
    id: "piczzly",
    live: "https://piczzly.vercel.app/",
    title: "Piczzly",
    tagline: same("A small puzzle game that turns any picture into a playful jigsaw."),
    description: same(
      "Pick an image from the built-in gallery or upload your own photo, choose a difficulty, drag and rotate the pieces into place, and celebrate when the puzzle is complete.",
    ),
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "dnd-kit"],
    metrics: [
      { label: same("Type"), value: "Game" },
      { label: same("Input"), value: "Gallery + upload" },
      { label: same("Status"), value: "Live" },
    ],
    cover: "from-[color:var(--green)] to-[color:var(--apricot)]",
    accent: "gold",
    overview: same(
      "Piczzly is a compact experiment in turning image-based content into a playable puzzle loop.",
    ),
    problem: same(
      "The goal was to make a tiny game that is immediately understandable and satisfying to interact with.",
    ),
    research: same(
      "The experience was kept deliberately small so the core interaction could stay central.",
    ),
    design: same(
      "Bright cards, clear controls and playful feedback keep the experience lightweight.",
    ),
    development: same(
      "Built with React, TypeScript and Vite. Puzzle generation and game state run entirely in the browser, with dnd-kit handling drag and drop and a confetti celebration at the end.",
    ),
    challenges: same(
      "Making the generated puzzle feel varied without making the rules complicated.",
    ),
    solution: same(
      "A simple game loop with image selection, puzzle generation, progress and completion feedback.",
    ),
    results: same(
      "A complete small game that is live, responsive and fun to play, showing logic, interaction design and the ability to ship.",
    ),
  },
  {
    id: "nutriai",
    title: "NutriAI",
    tagline: same(
      "A self-hosted Android nutrition companion with an AI chef that knows what is in your cupboard.",
    ),
    description: same(
      "Track your pantry, plan meals, find recipes, manage a budget and shopping lists, and ask Nutty, the AI chef, what to cook. The app interface is in French.",
    ),
    tech: ["React", "Capacitor", "Android", "Node.js", "AI chat"],
    metrics: [
      { label: same("Platform"), value: "Android" },
      { label: same("Backend"), value: "Self-hosted" },
      { label: same("Status"), value: "Building" },
    ],
    images: [
      "/projects/nutriai-1.webp",
      "/projects/nutriai-3.webp",
      "/projects/nutriai-4.webp",
      "/projects/nutriai-5.webp",
      "/projects/nutriai-7.webp",
    ],
    cover: "from-[color:var(--green)] to-[color:var(--lavender)]",
    accent: "lavender",
    overview: same(
      "NutriAI brings planning, food information and conversational assistance into one mobile experience.",
    ),
    problem: same(
      "Nutrition tools can become complicated quickly, so the interface needs to make everyday decisions feel simple.",
    ),
    research: same(
      "The concept focuses on reducing friction between deciding what to eat and actually making a plan.",
    ),
    design: same(
      "A soft, friendly mobile visual language with clear sections and a conversational area for AI assistance.",
    ),
    development: same(
      "A React app packaged for Android with Capacitor, plus its own Node.js API with a local JSON database. Nutty uses any OpenAI-compatible API or Ollama, with a built-in offline chef as a fallback.",
    ),
    challenges: same(
      "Moving from a generated prototype toward a self-hosted, independently runnable application.",
    ),
    solution: same(
      "A modular mobile app with a pantry, meal plans, recipes, shopping, budget and nutrition tracking, built around a friendly mascot and a chat with the AI chef.",
    ),
    results: same(
      "An independent Android app with no dependency on a hosted app builder or backend-as-a-service, covering UX, frontend debugging, Android packaging and self-hosting.",
    ),
  },
  {
    id: "lp-solver",
    live: "https://lp-solver-app.vercel.app/",
    title: "LP Solver",
    tagline: same(
      "A linear programming solver that makes every step of the simplex method visible.",
    ),
    description: same(
      "Enter an objective and constraints, see the standard, canonical and dual forms, follow each simplex tableau with exact fractions, explore the feasible region in 2D and 3D, and run sensitivity analysis.",
    ),
    tech: ["React", "TypeScript", "Vite", "Plotly.js", "Tailwind CSS"],
    code: "https://github.com/RAOUNEKK/LP",
    metrics: [
      { label: same("Method"), value: "Simplex" },
      { label: same("Views"), value: "2D + 3D" },
      { label: same("Status"), value: "Live" },
    ],
    cover: "from-[color:var(--lavender)] to-[color:var(--apricot)]",
    accent: "lavender",
    overview: same(
      "LP Solver provides an interactive way to enter and explore linear programming problems.",
    ),
    problem: same(
      "Optimization exercises can be difficult to reason about when the mathematical steps are disconnected from the computation.",
    ),
    research: same(
      "The project connects the mathematical model with a clear sequence of inputs, solving and results.",
    ),
    design: same(
      "The interface prioritizes structured forms, readable equations and an understandable result state.",
    ),
    development: same(
      "The solver is written from scratch in TypeScript with exact fraction arithmetic, Big-M handling and detection of infeasible and unbounded problems. Plotly.js draws the 2D and 3D feasible regions.",
    ),
    challenges: same(
      "Representing constraints and objective functions in a way that is both flexible and understandable.",
    ),
    solution: same("A guided input flow followed by a structured solution/result view."),
    results: same(
      "A live tool that connects the mathematics with the computation, showing algorithmic thinking and a clear interface for technical logic.",
    ),
  },
];
export function getProject(id) {
  return projects.find((project) => project.id === id);
}
