// Projects, in the order they appear on /projects. The first one spans the full width.
// Each project also gets its own page at /projects/<id>/.
//
//   kind     the gray line under the title on its card
//   year     shown on the card next to the status
//   meta     the gray line under the title on its page
//   links    buttons at the top of its page: [label, url]
//   stats    big numbers at the top of its page: [number, label]
//   sections the page body: [heading, html], written as Situation, Task, Action, Result.
//            Workday lists its projects newest first, so add the next box above the current one.
module.exports = [
  {
    id: "workday",
    name: "Workday",
    short: "Workday",
    subtitle: "Workday Developer · BYU Office of Information Technology",
    kind: "Workday Developer · BYU Office of Information Technology",
    year: "2026–now",
    status: "Current role",
    summary: "I build Workday reports, integrations, data loads, exports and automations across HR and finance. Right now I'm connecting Workday to new software for BYU's facilities department.",
    outcome: "Automating workflows with Workday Orchestrations to streamline business processes.",
    description: "David Medina's work as a Workday Developer at BYU's Office of Information Technology, including integrations for BYU's facilities department.",
    lede: "My current role, and the projects I'm building in it, newest first.",
    meta: ["Provo, Utah", "Sep 2026 – now"],
    links: [],
    linkNote: "",
    stats: [],
    sections: [
      ["Reporting, integrations and automation", `
          <p>I'm a Workday Developer on the data team at BYU's Office of Information Technology. Our team works across every part of Workday, both HR and finance: reporting, integrations, data loads, exports and automations.</p>
          <p>I work with Finance and HR stakeholders to turn what they need into technical solutions.</p>
`],
      ["Projects", `
          <!-- Newest project first: add the next one above this box. -->
          <div class="example-box">
            <p class="example-label">In progress &middot; BYU Facilities</p>
            <h3>Integrations for BYU's Facilities Department</h3>
            <dl class="star">
              <dt>Situation</dt>
              <dd>BYU's facilities department is adopting new software, and it has to work with Workday.</dd>
              <dt>Task</dt>
              <dd>Build the critical integrations between the new system and Workday.</dd>
              <dt>Action</dt>
              <dd>
                <ul class="points">
                  <li><strong>Time.</strong> Time extracts and time reconciliation.</li>
                  <li><strong>Purchasing.</strong> Purchasing, purchase order details, and general ledger reconciliation.</li>
                  <li><strong>Expenses and payments.</strong> Expense report details and invoice payments.</li>
                </ul>
              </dd>
              <dt>Result</dt>
              <dd>In progress.</dd>
            </dl>
          </div>
          <div class="example-box">
            <p class="example-label">Completed &middot; First assignment</p>
            <h3>Orchestration Rebuild</h3>
            <dl class="star">
              <dt>Situation</dt>
              <dd>When I joined the team, an existing Workday Orchestration had bugs.</dd>
              <dt>Task</dt>
              <dd>Get the Orchestration working reliably.</dd>
              <dt>Action</dt>
              <dd>Instead of patching the bugs, I rebuilt the whole Orchestration to be simpler and faster, with stronger error handling.</dd>
              <dt>Result</dt>
              <dd>The Orchestration is simpler, runs faster and handles errors better.</dd>
            </dl>
          </div>
`],
      ["What I'm learning", `
          <p>How to sit down with Finance and HR stakeholders, understand what they actually need, and turn it into something that works in Workday. I'm also learning what it takes to lead on a team.</p>
          <p class="lesson"><span class="label">What it's teaching me:</span> Good leadership starts with being the teammate you'd want to have.</p>
`],
    ],
    stack: ["Workday", "Workday Orchestrations", "Workday reporting", "API integrations"],
  },
  {
    id: "lexitrack",
    name: "LexiTrack",
    short: "LexiTrack",
    subtitle: "AI reading assessment platform",
    kind: "AI reading assessment platform",
    year: "2026",
    status: "Live",
    summary: "Students read aloud and the app scores every word, so teachers don't have to score by hand.",
    outcome: "Saves teachers 30 days of instruction time per year.",
    description: "LexiTrack, an AI reading assessment platform David Medina built for his mom's classroom: situation, task, action and result.",
    lede: "A web app that listens to students read aloud and scores every word, so teachers get reading fluency results without testing each student by hand.",
    meta: ["Personal project", "2026"],
    links: [["Try the live demo", "https://lexitrackedu.com"], ["View the code", "https://github.com/dmedin42/lexitrack"]],
    linkNote: "Sandbox Mode, no account needed",
    stats: [["30 days", "of instruction time saved per school year"]],
    sections: [
      ["Situation", `
          <p>My mom is a teacher. One day she was telling me about the hard parts of her year, and aside from the usual students acting out, she mentioned something I thought I could solve. Testing each student's reading fluency took so much time that she had less left for instruction and tutoring, especially for the students who needed less help and were ready to go further.</p>
          <p>A fluency check means pulling students out one at a time, listening to each one read a passage, and marking every missed word by hand.</p>
`],
      ["Task", `
          <p>Give her that time back by automating the fluency checks, so she could spend it teaching and give her strongest readers the attention they needed to excel. Because it would run in a real classroom, it also had to meet the school district's requirements and protect student data.</p>
`],
      ["Action", `
          <p>I built LexiTrack. A student joins with their class code on any device and reads a passage aloud. The recording goes to a server function that calls Azure's pronunciation assessment, which scores every word and every sound. The teacher sees accuracy, words per minute, and growth over time, with nothing to score by hand.</p>
          <ul class="points">
            <li><strong>Sound-level insight.</strong> Because every sound is scored, a teacher can see exactly what each student mispronounces. If several students struggle with the same sound, LexiTrack groups them so she can teach them together.</li>
            <li><strong>Teacher tools.</strong> A class dashboard, each student's history and progress charts, benchmark tracking, spoken comprehension retells, and parent reports.</li>
            <li><strong>Built for schools.</strong> I worked with my mom's school district to understand the legal limits and requirements for running it in her classroom. Row-level security means a teacher only ever sees their own classes, and the Azure key stays on the server.</li>
            <li><strong>A real sandbox.</strong> Sandbox Mode gives every visitor their own sample class with ten weeks of reading history, and deletes it after 24 hours.</li>
          </ul>
`],
      ["Result", `
          <p>LexiTrack was used in my mom's classroom. I worked out the time it saved from how often she tested reading fluency and how long it took each week, then added it up over the school year: about 30 days of instruction time.</p>
          <p class="lesson"><span class="label">What it taught me:</span> How speech recognition really works, down to the individual sounds a student says, and that putting software in a classroom means working with the district and its rules as much as writing code.</p>
`],
    ],
    stack: ["React", "TypeScript", "Supabase", "Postgres", "Edge Functions", "Azure AI Speech", "Vercel", "Vitest"],
  },
  {
    id: "twofold",
    name: "TwoFold",
    short: "TwoFold",
    subtitle: "AI-powered food waste reduction app",
    kind: "AI-powered food waste reduction app",
    year: "2025",
    status: "Live",
    summary: "Tracks a home pantry automatically: what's in it, what's about to expire, and recipes that use it up.",
    outcome: "Reduced household food waste by 50%.",
    description: "TwoFold, an AI-powered food waste reduction app David Medina built for his own household: situation, task, action and result.",
    lede: "A kitchen app that knows what's in your pantry, warns you before it expires, and turns what's about to go bad into dinner.",
    meta: ["Personal project", "2025"],
    links: [["Try the live demo", "https://twofoldkitchen.com"], ["View the code", "https://github.com/dmedin42/twofold"]],
    linkNote: "Explore as a guest, no account needed",
    stats: [["50%", "less food wasted in our household"]],
    sections: [
      ["Situation", `
          <p>I don't like wasting food. Groceries get pushed to the back of the fridge, forgotten, and found after they've gone bad. My wife was constantly telling her AI assistant what groceries we had so it could suggest ideas for dinner.</p>
`],
      ["Task", `
          <p>Build one place to manage our household's kitchen: an app that already knows what we have, even the things we forgot we bought, and helps us use it before it goes bad.</p>
`],
      ["Action", `
          <p>I built TwoFold, a web app that installs like a phone app and works offline.</p>
          <ul class="points">
            <li><strong>Snap to stock.</strong> Take a photo of your grocery haul or your receipt, and AI picks out every item. Receipts took a lot of fine-tuning to get right.</li>
            <li><strong>Expiry prediction.</strong> When a date isn't visible, TwoFold predicts when each item will expire, so you can cook whatever is going bad first.</li>
            <li><strong>Hands-off inventory.</strong> Make a recipe and its ingredients come out of your pantry automatically.</li>
            <li><strong>Clean recipes.</strong> Paste a recipe link or video, and TwoFold pulls the recipe out from under the ads, reformats it into easy steps, and builds the grocery list.</li>
            <li><strong>Waste tracking.</strong> It estimates what the groceries you throw out cost, so you can see how much money is going to waste.</li>
            <li><strong>Group events.</strong> Describe a potluck or group dinner and it sets up the event, sends invites, and tracks RSVPs and who's bringing what.</li>
            <li><strong>Reliable AI.</strong> Each AI feature runs in its own server function with its own key and retries on its own when Gemini is busy.</li>
          </ul>
`],
      ["Result", `
          <p>TwoFold cut our household's food waste in half. It also taught me the most about what not to do.</p>
          <p class="lesson"><span class="label">What it taught me:</span> Having everything isn't always the best solution. I kept adding features until the app was hard to manage from a user's point of view. When friends tested it, they thought it was an interesting idea, but didn't know what to do with it because there was so much going on.</p>
`],
    ],
    stack: ["React", "TypeScript", "Supabase", "Postgres", "Realtime", "Edge Functions", "Google Gemini", "PWA", "Vercel"],
  },
  {
    id: "study-smarter-ai",
    name: "Study Smarter AI",
    short: "Study Smarter AI",
    subtitle: "AI study companion connected to Canvas",
    kind: "AI study companion connected to Canvas",
    year: "2026",
    status: "In use",
    summary: "Gives every assignment an AI tutor, then turns finished work into spaced-repetition reviews.",
    outcome: "Reduces my study load right before quizzes and tests.",
    description: "Study Smarter AI, a Canvas-connected AI tutor and spaced-repetition app David Medina built for his own classes: situation, task, action and result.",
    lede: "An AI tutor connected to Canvas that turns each assignment I finish into spaced-repetition reviews, so there's less to cram right before a quiz or test.",
    meta: ["Personal project", "2026"],
    links: [],
    linkNote: "",
    stats: [],
    sections: [
      ["Situation", `
          <p>Before a quiz or test, studying tends to pile up: material from weeks earlier has to be relearned all at once.</p>
`],
      ["Task", `
          <p>Spread my studying out over time, for every assignment in every class, so there's less to cram right before a quiz or test.</p>
`],
      ["Action", `
          <p>I built Study Smarter AI and connected it to Canvas. It gives me an AI tutor for each of my assignments, and when I complete one, the AI schedules spaced-repetition reviews of that material for the days ahead.</p>
          <ul class="points">
            <li><strong>Canvas sync.</strong> Pulls in my assignments and courses, keeps due dates current when they change in Canvas, and sorts work into this week and next week.</li>
            <li><strong>An AI tutor for every assignment.</strong> Each review opens with the tutor asking questions about what that assignment covered.</li>
            <li><strong>A daily cap.</strong> At most five reviews a day, with yesterday's assignments first and then the most overdue, so reviewing never piles up. Anything past the cap waits in a folded list I can open early.</li>
            <li><strong>Course concepts.</strong> When I prep an assignment for review, it suggests related concepts from that course.</li>
          </ul>
`],
      ["Result", `
          <p>I use it for my own classes. Because the reviews are spread out ahead of time, my study load right before quizzes and tests is lighter.</p>
`],
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Canvas LMS API", "Generative AI", "Spaced repetition"],
  },
  {
    id: "tech-transfer",
    name: "Web Applications for the BYU Tech Transfer Office",
    short: "BYU Tech Transfer web apps",
    subtitle: "Technology Commercialization Analyst · BYU Tech Transfer Office",
    kind: "Including CloseChase, licensed to TeamOzy",
    year: "2025–26",
    status: "Licensed",
    summary: "Full-stack apps and 80+ prototypes I built while managing 55+ university technologies.",
    outcome: "CloseChase is licensed to TeamOzy and live in beta.",
    description: "Web applications David Medina built at the BYU Tech Transfer Office, including CloseChase, licensed to TeamOzy: situation, task, action and result.",
    lede: "Full-stack web apps I built and deployed while managing a portfolio of 55+ university technologies, including one I took from our backlog to a license.",
    meta: ["Provo, Utah", "Sep 2025 – Sep 2026", "1 yr"],
    links: [],
    linkNote: "",
    stats: [["55+", "university technologies in my portfolio"], ["80+", "apps and prototypes built"], ["1 license", "CloseChase, licensed to TeamOzy"]],
    sections: [
      ["Situation", `
          <p>I wanted to move into information systems and work closer to technology, and a friend thought the Tech Transfer Office would be a good fit. As a Technology Commercialization Analyst, I managed a portfolio of 55+ university technologies and worked with researchers, entrepreneurs and industry partners to bring them to market. Our product backlog was full of ideas that hadn't been built yet.</p>
`],
      ["Task", `
          <p>Turn ideas from the backlog into working software that partners could see and use, and help bring the strongest ones to market.</p>
`],
      ["Action", `
          <p>I built more than 80 apps and prototypes with Claude AI, Supabase, SQL and Git.</p>
          <div class="example-box">
            <p class="example-label">Example I licensed</p>
            <h3>CloseChase: Document Collection for Bookkeeping Firms</h3>
            <p>CloseChase lets a bookkeeping firm request, collect and track the documents it needs from clients through one secure upload link, and clients don't need an account.</p>
            <p>It started as an idea sitting in our backlog. It wasn't mine originally, but I thought it could be really useful for small firms, and maybe bigger ones too, so I built it. Through the tech transfer network I met TeamOzy, a technology company out of Africa. I demoed the product, we talked through what it could become, and we built onto it together.</p>
            <ul class="stack" aria-label="Built with"><li>React</li><li>JavaScript</li></ul>
            <p class="card-links"><a href="https://teamozy.org/products/closechase" target="_blank" rel="noopener">Live beta</a><span class="note">Free to try during the beta</span></p>
          </div>
          <p>The most complete of the other apps are full MVPs, each with sign-in, a real database, and every organization's data kept private:</p>
          <ul class="points">
            <li><strong>DocChase.</strong> Tax season for small CPA firms: every client's status in one pipeline, a checklist of missing documents, one-click email and text reminders, and a tracker for extension deadlines.</li>
            <li><strong>EvidenceChase.</strong> Boutique consultancies request evidence from their clients' teams, who upload it through a secure link without logging in.</li>
            <li><strong>SurveyStack.</strong> Land surveying firms take a parcel inquiry from quote to accepted job, logging municipal contacts and referral sources along the way.</li>
            <li><strong>DeepWell.</strong> Water well service companies see emergencies first, with each well's full history and overdue follow-ups on one dashboard.</li>
            <li><strong>TurnoverOps.</strong> Short-term rental hosts assign cleaners, cleaners confirm and upload proof photos, and the dashboard flags today's turnovers most at risk of falling through.</li>
          </ul>
          <p>For earlier ideas, I built quick, clickable prototypes with sample data so we could see what a product might look like, like inspection tools for fire doors and warehouse mezzanines, and CRMs for dental practices and specialty contractors.</p>
`],
      ["Result", `
          <p>CloseChase is licensed to TeamOzy, which has run it ever since. It's live in beta and free to try while the beta runs.</p>
          <p class="lesson"><span class="label">What it taught me:</span> Listen to the people you're building for, then turn their vision into something that's uniquely theirs and useful.</p>
`],
    ],
    stack: ["Claude AI", "Supabase", "Postgres", "SQL", "Git", "React", "JavaScript"],
  },
];
