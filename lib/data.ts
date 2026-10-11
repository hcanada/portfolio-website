export const profile = {
  name: "Harly Canada",
  role: "Full-Stack Developer",
  location: "Cebu, Philippines",
  intro: [
    "I'm a full-stack developer from Cebu, Philippines. I build SaaS products and internal business tools, frontend to backend.",
    "Right now I'm at StoryChat, an AI chatbot platform, working on payments, analytics, and performance.",
  ],
  about: [
    "Full-Stack Developer with 2+ years of experience building SaaS products and internal business tools, covering both frontend and backend. My work includes an AI chatbot platform and a workflow-based management system, where I handled payment integrations, analytics, automated notifications, reporting, and ongoing performance improvements. I enjoy turning business requirements into reliable, easy-to-use applications.",
    "I'm now expanding into GoHighLevel, learning to set up CRM pipelines, automations, and funnels. My coding background lets me pick up the technical side quickly, including custom integrations and API connections that go beyond standard no-code setups.",
  ],
  links: {
    github: "https://github.com/hcanada",
    linkedin: "https://www.linkedin.com/in/h-canada/",
  },
};

export type ExperienceGroup = {
  title?: string;
  points: string[];
};

export type Experience = {
  company: string;
  url?: string;
  role: string;
  period: string;
  location?: string;
  groups: ExperienceGroup[];
};

export const experience: Experience[] = [
  {
    company: "StoryChat",
    url: "https://storychat.app",
    role: "Full-Stack Developer",
    period: "Feb 2026 – Present",
    groups: [
      {
        points: [
          "Build new features and fix production bugs across the full MERN stack, from product requirements to release.",
          "Integrated Creem, cryptocurrency, and Shopify payment gateways, giving customers more ways to pay.",
          "Fixed a cross-provider webhook vulnerability that could trigger improper subscription downgrades.",
          "Cut filter response time by 90% with a database index, so results no longer need a full scan and rank before limiting.",
          "Set up PostHog analytics to track user behavior and guide feature and UX decisions.",
        ],
      },
    ],
  },
  {
    company: "Mercedes-Benz Group Services Phils., Inc.",
    role: "Full-Stack Developer",
    period: "Jul 2024 – May 2025",
    location: "Cebu City",
    groups: [
      {
        title: "Leave Management System",
        points: [
          "Designed and built a web-based leave system: employees apply, track status, and view balances, while managers review requests in a separate interface.",
          "Built a multi-level approval workflow for team leads and HR, with automated email notifications on every update.",
          "Supported 10+ leave types, document uploads for sick-leave verification, and leave history with usage analytics.",
          "Built a reporting module by leave type, department, and employee so HR can track trends and compliance.",
        ],
      },
      {
        title: "Applications maintenance and support",
        points: [
          "Delivered bug fixes, feature updates, and performance tuning based on business requirements.",
          "Built RESTful APIs for real-time reporting, reducing manual work for users and management.",
          "Worked with senior developers in an Agile team: stand-ups, sprint tasks, debugging, and optimization.",
        ],
      },
    ],
  },
];

export type Project = {
  name: string;
  initials: string;
  // Optional square logo in /public. Initials show until the file exists.
  logo?: string;
  description: string;
  url?: string;
  // Shown instead of a link when the project is not public.
  label?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "StoryChat",
    initials: "SC",
    logo: "/projects/storychat.png",
    description:
      "AI chatbot platform. I build new features, fix bugs, and work on payments, subscriptions, analytics, and performance.",
    url: "https://storychat.app",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    name: "Leave Management System",
    initials: "LM",
    description:
      "Internal HR tool for Mercedes-Benz Group Services Phils., Inc. Employees request leave, and managers and HR approve and track it.",
    label: "Internal",
    stack: ["React", "ASP.NET", "SQL Server"],
  },
  {
    name: "Hatag",
    initials: "H",
    logo: "/projects/hatag.png",
    description: "Give away items for free and find giveaways near you.",
    url: "https://hatag.vercel.app",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
];

export type StackGroup = {
  name: string;
  items: string[];
  note?: string;
};

export const stack: StackGroup[] = [
  {
    name: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "ASP.NET MVC",
      "Entity Framework",
      "REST APIs",
      "Python",
    ],
  },
  {
    name: "Database",
    items: ["MongoDB", "PostgreSQL", "Supabase", "SQL Server"],
  },
  {
    name: "Integrations & tools",
    items: ["PostHog", "Shopify", "Creem", "Webhooks", "Git", "GitHub"],
  },
  {
    name: "Automation & CRM",
    items: ["GoHighLevel"],
    note: "Currently learning",
  },
];
