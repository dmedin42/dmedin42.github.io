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

  // About page intro, quick facts, and the "How I Got Here" timeline.
  story: [
    "I'm a junior in Information Systems at BYU's Marriott School of Business, with an emphasis in systems consulting. I like the space between a business problem and the system that solves it: sitting down with the people who do the work, figuring out what they need, and then building it.",
    "I grew up in Riverton, Utah. Here's how I got from selling candy at recess to building integrations for BYU's Workday system.",
  ],
  facts: [
    { emoji: "💼", text: "Workday Developer at BYU" },
    { emoji: "🎓", text: "Information Systems, graduating Dec 2027" },
    { emoji: "🇧🇷", text: "Speaks Portuguese" },
    { emoji: "💍", text: "Married to McKinna" },
  ],
  // Each chapter is a list of blocks: paragraphs ("p", or "html" for a paragraph
  // with a link), lessons, and photos, shown in order.
  journey: [
    {
      date: "Growing up", place: "Riverton, Utah", title: "Playing up",
      blocks: [
        { p: "As a kid I was always moving: basketball in the winter and summer, football in the fall, and soccer in the spring until spring football won me over. My brother and I are close, so during football season I played up with the older boys. I was smaller than almost everyone on the field, so I had to level up my game and work harder just to keep up." },
        { p: "I started my first business in elementary school. I found I could buy the good candy in bulk from a liquidator and sell it to my classmates. I was in the Chinese immersion program, so I had the same classmates every year, which gave me loyal customers. I made good money and built up a respectable inventory, until the business got big enough that the principal had to step in." },
        { lesson: "Playing up with people bigger than you is the fastest way to get better." },
      ],
    },
    {
      date: "2021 – 2022", place: "Senior year, CTEC Business", title: "Choosing the harder year",
      blocks: [
        { p: "During my junior year I met McKinna, who's now my wife. I also knew most of my friends would graduate and move away the next year. So instead of a relaxed senior year, I decided to do something I loved. I enrolled in CTEC's business program, taking finance, business management, economics and marketing, and joined DECA with my classmates." },
        { p: "DECA wasn't in my plan, but it came with a real opportunity: a business case for a real company, Whitaker Construction, a utilities and earthwork contractor in Brigham City. I built a solution to their problem and presented it to them and at competition. It won at Districts and Regionals and took me to Nationals in Atlanta." },
        { photo: "/images/story/deca-nationals.jpg", width: 840, height: 1120, alt: "David with two DECA teammates in front of a large steel sculpture at DECA Nationals in Atlanta", caption: "DECA Nationals in Atlanta" },
        { lesson: "The best opportunities usually aren't in the plan. Say yes anyway." },
      ],
    },
    {
      date: "2022 – 2024", place: "Recife, Brazil", title: "Learning to be counted on",
      blocks: [
        { p: "After graduating in 2022, I served a two-year mission for The Church of Jesus Christ of Latter-day Saints in Recife, Brazil. I lived among the people and learned Portuguese from them. I worked harder than I'd imagined I could, made some of the best friends of my life, and fell in love with chocolate-stuffed-crust pizza. (It sounds gross. It isn't.)" },
        { p: "As finance secretary, I managed the mission's budget of more than R$3.5M a year. That covered the missionaries' cards, the mission president's and office expenses, and the reports on all of it. I also reworked unclear contracts with landlords so both sides knew exactly where they stood." },
        { lesson: "Being trusted with other people's money means being someone they can count on, every time.", label: "What the job taught me" },
        { photo: "/images/story/brazil.jpg", width: 624, height: 832, alt: "David in a suit and missionary name tag outside a lit temple at night in Brazil", caption: "Serving in Brazil" },
        { p: "One man stuck with me. He wasn't looking for religion, but he was lonely, so I invited him to church. He said no. He did take a Book of Mormon, but when we came back, he had written “ESTE LIVRO É FALSO” (“this book is fake”) on it in permanent marker. I told him his feelings made sense, read a passage with him, and invited him to read and pray about it once more. The next time we visited, he had torn out the page he'd written on, and he was embarrassed about it." },
        { lesson: "Approach change with charity and understanding. If I were in his shoes, I'd probably feel the same way.", label: "What he taught me" },
      ],
    },
    {
      date: "2025", place: "Lease End", title: "Only the next sale",
      blocks: [
        { p: "I'd worked in fast food since I was 15, and I was ready for something that would challenge me and teach me a lot. Lease End, which helps drivers buy out their car leases, was still fairly small and building its phone sales team, so I applied. I was surrounded by mentors and people who pushed me to do well. In my first 45 days I brought in $48,000 in revenue." },
        { p: "The reason was simple: I only worked on things that helped me get the next sale. Everything else could wait." },
        { lesson: "Focus on the work that delivers the most value." },
      ],
    },
    {
      date: "2025 – 2026", place: "BYU Tech Transfer Office", title: "From backlog to license",
      blocks: [
        { p: "I wanted to move into information systems and work closer to technology, and a friend thought the Tech Transfer Office would be a good fit. I interviewed, got the job, and was trusted with far more than I expected. I managed a portfolio of 55+ university technologies, worked with researchers, entrepreneurs and industry partners, and built full-stack web apps." },
        { html: '<a href="https://teamozy.org/products/closechase" target="_blank" rel="noopener">CloseChase</a> started as an idea sitting in our product backlog. It wasn\'t mine originally, but I thought it could be really useful for small firms, and maybe bigger ones too, so I built it. Through the tech transfer network I met TeamOzy, a technology company out of Africa. I demoed the product and we talked through what it could become. We built onto it together and licensed it, and TeamOzy has run it ever since. It\'s live in beta today.' },
        { lesson: "Listen to the people you're building for, then turn their vision into something that's uniquely theirs and useful." },
      ],
    },
    {
      date: "2026 – now", place: "BYU Office of Information Technology", title: "My first big project",
      blocks: [
        { p: "Today I'm a Workday Developer on OIT's data team. Our team touches every part of Workday, both HR and finance, and handles everything beyond the standard reports: integrations, data loads, exports and automations." },
        { p: "I started by fixing bugs in Workday Orchestrations and building reports for stakeholders, including historical I-9 reports. My first big project is connecting Workday to new software that BYU's facilities department is adopting. I'm building the critical integrations for their new system: time extracts and time reconciliation, purchasing and general ledger reconciliation, expense report and purchase order details, and invoice payments. The rest come next." },
        { p: "I'm the newest member of the team, but I've been recognized more often than anyone since I joined, for diving in, working hard and learning fast. I think that's because I've worked hard to be a good teammate to them first." },
        { lesson: "Good leadership starts with being the teammate you'd want to have, even when you're the newest one on the team.", label: "What it's teaching me" },
      ],
    },
    {
      date: "What's next", title: "Still playing up",
      blocks: [
        { p: "I graduate with my BS in Information Systems in December 2027, and I'm planning to continue into BYU's Master of Information Systems Management (MISM) program. Along the way, I'm looking for internships and opportunities where I can keep growing, keep learning, and take on more than people expect." },
      ],
    },
  ],
  cta: {
    title: "Want to work together?",
    text: "I'm looking for internships and roles where I can keep learning and take on real responsibility. If you think I'd be a good fit for your team, let's talk.",
  },

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
  certifications: [
    { name: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org", date: "Oct 2026", url: "https://scrum.org/certificates/1358691" },
    { name: "EY Technology Risk Virtual Job Simulation", issuer: "Forage", date: "Oct 2026" },
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
