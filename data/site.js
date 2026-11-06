// All the site's content lives here. Edit this file to change what the pages say;
// the EJS views only handle layout.

module.exports = {
  name: "David Medina",
  location: "Provo, Utah",
  description: "David Medina is a BYU Information Systems student focused on systems consulting, enterprise systems, and automation.",

  links: {
    email: "d.medina2332@gmail.com",
    linkedin: "https://www.linkedin.com/in/davidmedina42",
    github: "https://github.com/dmedin42",
    resume: "/resume.pdf",
  },

  // Photos: drop files into public/images/. Missing photos show a placeholder.
  photos: {
    headshot: "/images/headshot.jpg",
    about: "/images/about.jpg",
  },

  home: {
    tagline: "Information Systems student at BYU, focused on systems consulting, enterprise systems, and automation.",
    intro: "I like the space between a business problem and the system that solves it. Right now I build Workday automations for BYU's Office of Information Technology. Graduating December 2027.",
    focus: [
      { emoji: "🤝", title: "Systems consulting", text: "Turning what stakeholders need into technical solutions." },
      { emoji: "🏢", title: "Enterprise systems", text: "Workday, Workday Orchestration, integrations, and reporting." },
      { emoji: "⚙️", title: "Automation", text: "Full-stack apps and workflows that take manual work off people's plates." },
    ],
    featuredProject: "lexitrack",
  },

  story: [
    "I am a junior in Information Systems at BYU's Marriott School of Business, with an emphasis in systems consulting. I like the space between a business problem and the system that solves it: sitting down with the people who do the work, figuring out what they need, and then building it.",
    "Right now I build Workday automations for BYU's Office of Information Technology. Before that I spent a year at BYU's Tech Transfer Office, and two years in Recife, Brazil, managing finances for an organization of 200+ volunteers.",
  ],

  skills: [
    { label: "Enterprise systems", items: "Workday, Workday Orchestration, API integrations, business process automation, reporting" },
    { label: "Development", items: "Python, JavaScript, Next.js, HTML/CSS, SQL, Git, Supabase" },
    { label: "Data and analytics", items: "Tableau, advanced Excel, VBA, Claude AI" },
    { label: "Consulting", items: "Stakeholder management, process improvement, project management" },
  ],

  // CliftonStrengths Top 5, each tied to something I've actually done.
  strengths: {
    top5: ["Competition", "Achiever", "Relator", "Deliberative", "Arranger"],
    highlights: [
      { label: "Competition and Achiever", text: "I set a high bar and outwork it, like generating $48,000 in revenue in my first 45 days at Lease End." },
      { label: "Relator", text: "I build lasting working relationships, like the ones with researchers and industry partners behind 55+ technologies at the Tech Transfer Office." },
      { label: "Deliberative", text: "I check the details before I act, which mattered when auditing a R$3.5M annual budget in Brazil." },
      { label: "Arranger", text: "I fit people and systems together, turning what Finance and HR need into Workday automations." },
    ],
  },

  education: [
    { title: "Bachelor of Science, Information Systems", year: "Dec 2027", detail: "Brigham Young University, Marriott School of Business · Systems Consulting emphasis" },
  ],
  recognition: "DECA National Finalist · Advanced STEM Diploma",

  jobs: [
    {
      title: "Workday Developer",
      org: "BYU Office of Information Technology",
      dates: "Sep 2026 to present",
      summary: "Work with Finance and HR stakeholders to turn business needs into technical solutions, and automate their workflows with Workday Orchestrations.",
    },
    {
      title: "Technology Commercialization Analyst",
      org: "BYU Tech Transfer Office",
      dates: "Sep 2025 to Sep 2026",
      summary: "Managed a portfolio of 55+ university technologies, coordinating with researchers, entrepreneurs, and industry partners. Developed and deployed full-stack web applications, including CloseChase, which I helped license to TeamOzy.",
    },
    {
      title: "Financial Advisor",
      org: "Lease End",
      dates: "May 2025 to Sep 2025",
      summary: "Generated $48,000 in revenue in my first 45 days by consulting customers through their lease buyouts.",
    },
    {
      title: "Finance Secretary and Volunteer Representative",
      org: "The Church of Jesus Christ of Latter-day Saints, Recife, Brazil",
      dates: "Jul 2022 to Jul 2024",
      summary: "Oversaw an annual budget of more than R$3.5M and managed financial operations in Oracle for 200+ representatives, covering auditing, resource allocation, and budget administration.",
    },
  ],

  // To add a link, fill in demo and/or code. Leave them out and no link shows.
  projects: [
    {
      id: "lexitrack",
      name: "LexiTrack: AI Reading Assessment Platform",
      summary: "A progressive web app that automates pronunciation assessments, so teachers no longer score each student's reading by hand.",
      outcome: "Saves teachers 30 days of instruction time per year.",
      stack: ["Azure Speech Assessment", "Supabase", "Vercel"],
      demo: "https://lexitrackedu.com",
      code: "https://github.com/dmedin42/lexitrack",
      demoNote: "Try Sandbox Mode, no account needed",
    },
    {
      id: "pantry",
      name: "TwoFold: AI-Powered Food Waste Reduction App",
      summary: "A progressive web app that tracks a home pantry automatically: what is in it, what is about to expire, and recipes that use it up.",
      outcome: "Reduced household food waste by 50%.",
      stack: ["Gemini AI", "Supabase", "Vercel"],
      demo: "https://twofoldkitchen.com",
      code: "https://github.com/dmedin42/twofold",
      demoNote: "Try it as a guest, no account needed",
    },
    {
      id: "tto",
      name: "Web Applications for the BYU Tech Transfer Office",
      summary: "Full-stack web applications developed and deployed at the BYU Tech Transfer Office, where I managed a portfolio of 55+ university technologies.",
      stack: ["Claude AI", "Supabase", "SQL", "Git"],
      // A highlighted example shown inside this card.
      example: {
        label: "Example I licensed",
        name: "CloseChase: Document Collection for Bookkeeping Firms",
        summary: "A web app that lets bookkeeping firms request, collect, and track the documents they need from clients through one secure upload link, with no client account required. I built it at the BYU Tech Transfer Office and facilitated its licensing.",
        outcome: "Licensed to TeamOzy and live in beta.",
        stack: ["Claude AI", "Supabase", "SQL", "Git"],
        demo: "https://teamozy.org/products/closechase",
        demoLabel: "Live beta",
        demoNote: "Free to try during the beta",
      },
    },
  ],
};
