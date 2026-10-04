/* ==========================================================
   TECHNOVATION — THE FIVE REALMS · site content
   Edit THIS file to update the site. Nothing else needs changing.
   Empty string "" = "Coming soon" is shown automatically.
   ========================================================== */

window.TV = {
  fest: {
    name: "TECHNOVATION",
    edition: "’26",
    theme: "The Five Realms",
    dept: "Department of Mechatronics Engineering",
    college: "Mahatma Gandhi Institute of Technology",
    collegeShort: "MGIT",
    place: "Gandipet, Hyderabad",
    dates: "16 & 17 October 2026",
    // Countdown target (IST). TODO: 9:15 AM is NOT confirmed yet. Update startsAt + startLabel when the schedule is final.
    startsAt: "2026-10-16T09:15:00+05:30",
    startLabel: "Friday, 16 October · 9:15 AM IST",
    // After this the countdown switches to a thank-you message (end of Day 2 by default).
    endsAt: "2026-10-17T23:59:59+05:30",
    blurb:
      "The Mechatronics department’s celebration of robotics, automation and engineering ideas at MGIT, with technical competitions, workshops and fun non-technical events."
  },

  // Google Form links. Paste a link to switch the button from "Opens soon" to live.
  forms: {
    volunteer: "" // MGIT student volunteers (separate form)
  },

  // Optional: drop a file at assets/audio/theme.mp3 to replace the generated soundtrack.
  soundtrackFile: "assets/audio/theme.mp3",

  about: {
    mgit:
      "An autonomous engineering college in Gandipet, Hyderabad, established in 1997 by the Chaitanya Bharathi Educational Society. Affiliated to JNTU Hyderabad, MGIT holds an A++ grade from NAAC, and its eligible UG programmes are NBA accredited.",
    dept:
      "Mechatronics combines mechanical design, electronics, embedded control and software to build intelligent machines such as robots, drones and automation systems. Our department hosts Technovation.",
    stats: [
      { v: "1997", k: "Year established" },
      { v: "A++", k: "NAAC grade" },
      { v: "11", k: "UG engineering programmes" },
      { v: "~4,000", k: "Students on campus" }
    ],
    vision: "To inspire curiosity in robotics, automation and cross-disciplinary engineering.",
    mission: "To give students one platform to learn, build and compete with real machines.",
    values: "Teamwork, integrity, curiosity and a strong hands-on work ethic.",
    impact: "Turning classroom ideas into working prototypes and building confidence."
  },

  pillars: [
    { k: "Compete", d: "13 events across robotics, drones, quizzes and more." },
    { k: "Learn", d: "Pick up new skills at the hands-on robotics workshop." },
    { k: "Showcase", d: "Present your projects, papers and posters to a live audience." },
    { k: "Connect", d: "Meet and team up with students from other campuses." }
  ],

  // Fest-wide roadmap. date "" => Coming soon
  festRoadmap: [
    { t: "Registrations open", d: "", note: "Google Form links go live on each trial page." },
    { t: "Registrations close", d: "", note: "" },
    { t: "Day 1 · The Gates Open", d: "16 Oct 2026", note: "MGIT, Gandipet" },
    { t: "Day 2 · The Final Trials", d: "17 Oct 2026", note: "MGIT, Gandipet" },
    { t: "Results & honours", d: "", note: "" }
  ],

  realms: [
    {
      id: "earth", name: "Earth", sanskrit: "Prithvi", pillar: "Mechanical",
      epithet: "Realm of Iron and Stone",
      line: "Structure, mass and motion. Chassis, gears and the machines that hold their ground.",
      color: "#c08a4a", glyph: "earth"
    },
    {
      id: "fire", name: "Fire", sanskrit: "Agni", pillar: "Electrical & Electronics",
      epithet: "Realm of the Living Spark",
      line: "Energy and power. Circuits, current and the spark that brings a machine to life.",
      color: "#ef6a33", glyph: "fire"
    },
    {
      id: "water", name: "Water", sanskrit: "Jala", pillar: "Control Systems",
      epithet: "Realm of the Returning Tide",
      line: "Feedback and balance. Like water finding its level, a controller always returns to its set point.",
      color: "#3aa7b4", glyph: "water"
    },
    {
      id: "air", name: "Air", sanskrit: "Vayu", pillar: "Sensors & Actuators",
      epithet: "Realm of the Unseen Touch",
      line: "Perception and response. Sensors that feel the world and actuators that move through it.",
      color: "#a9c8de", glyph: "air"
    },
    {
      id: "ether", name: "Ether", sanskrit: "Akasha", pillar: "Software & Intelligence",
      epithet: "Realm of the Silent Code",
      line: "The invisible medium that holds everything. Code, logic, ideas and the knowledge behind every build.",
      color: "#9a7cf0", glyph: "ether"
    }
  ],

  /* Trials (events). All events are paid.
     Fill fee / prize / venue / time / team / form when final.
     flow: [] => roadmap shows sealed "Coming soon" stages. */
  trials: [
    { id: "rover", realm: "earth", type: "Technical", name: "Rover Challenge", icon: "rover",
      desc: "Rovers take on different surfaces and terrain.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },
    { id: "robo-wars", realm: "earth", type: "Technical", name: "Robo Wars", icon: "robowars",
      desc: "Custom-built robots clash head to head in the arena.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },
    { id: "sumo", realm: "earth", type: "Non-technical", name: "Sumo Wrestling", icon: "sumo",
      desc: "Go head to head in the ring and push your rival out.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },

    { id: "robotics-workshop", realm: "fire", type: "Technical", name: "Robotics Workshop", icon: "workshop",
      desc: "A hands-on session to build and program robots.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },
    { id: "project-expo", realm: "fire", type: "Technical", name: "Project Expo", icon: "expo",
      desc: "Students showcase working projects and prototypes.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },
    { id: "period-cramps", realm: "fire", type: "Non-technical", name: "Period Cramps Simulator", icon: "pulse",
      desc: "Experience period cramps first-hand to build awareness and empathy.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },

    { id: "line-follower", realm: "water", type: "Technical", name: "Line Following Robot Race", icon: "linebot",
      desc: "Autonomous bots race across alternating surfaces.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },
    { id: "robothon", realm: "water", type: "Technical", name: "Robothon", icon: "robothon",
      desc: "Teams take on a robotics challenge together in a two-day hardware hackathon.", fee: "", prize: "", venue: "", time: "", team: "", form: "",
      flow: [
        { day: "Day 1", steps: ["Registration & kickoff of the event", "Problem statement release", "Build phase begins", "Mentor check-ins"] },
        { day: "Day 2", steps: ["Build phase continues", "Testing & integration", "Final demos", "Judging & results"] }
      ] },

    { id: "drone", realm: "air", type: "Technical", name: "Drone Flying Competition", icon: "drone",
      desc: "Pilot drones through precision flying courses.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },

    { id: "paper", realm: "ether", type: "Technical", name: "Paper Presentation", icon: "scroll",
      desc: "Present original research and technical ideas.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },
    { id: "poster", realm: "ether", type: "Technical", name: "Poster Presentation", icon: "poster",
      desc: "Explain engineering work visually on a poster.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },
    { id: "quiz", realm: "ether", type: "Non-technical", name: "Quizzes", icon: "quiz",
      desc: "Rapid-fire rounds to test your knowledge against the room.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] },
    { id: "guess-the-song", realm: "ether", type: "Non-technical", name: "Guess the Song", icon: "music",
      desc: "Test your music memory and name the tune before time runs out.", fee: "", prize: "", venue: "", time: "", team: "", form: "", flow: [] }
  ],

  contacts: [
    { role: "Faculty Coordinator", name: "P Shashidhar", phone: "+91 70958 43401" },
    { role: "Student Convenor", name: "K Navdeep", phone: "+91 79818 71998" },
    { role: "Student Convenor", name: "BVS Saranya", phone: "+91 90144 75127" },
    { role: "Sponsorship Lead", name: "Ganesh Dubey", phone: "+91 90632 85308" }
  ],
  address: "Department of Mechatronics Engineering, Mahatma Gandhi Institute of Technology, Gandipet, Hyderabad – 500075, Telangana",
  website: "https://mgit.ac.in",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Mahatma+Gandhi+Institute+of+Technology+Gandipet+Hyderabad",

  // Fill when finalised.
  sponsors: [],   // e.g. { name: "Acme", tier: "Gold", logo: "assets/sponsors/acme.png", url: "" }
  socials: []     // e.g. { name: "Instagram", url: "https://instagram.com/..." }
};
