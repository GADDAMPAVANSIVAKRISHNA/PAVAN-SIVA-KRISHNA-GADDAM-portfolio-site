// Mock data sourced from resume + GitHub. Frontend-only for now.

export const profile = {
  name: "Pavan Siva Krishna Gaddam",
  shortName: "Pavan",
  initials: "PSK",
  roles: [
    "Full Stack Developer",
    "AI / ML Enthusiast",
    "Computer Science Student",
    "Problem Solver",
  ],
  tagline:
    "I craft scalable web experiences and intelligent systems — turning ideas into clean, production-ready code.",
  about:
    "Motivated Full Stack Developer and Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at Mohan Babu University. I build responsive interfaces with React.js and reliable backends with Node.js, Django and Python. I enjoy turning complex problems into simple, scalable products — from lost & found campus apps to NLP-driven assistants.",
  email: "gddmpvn24@gmail.com",
  phone: "+91 8519804479",
  location: "India",
  resumeUrl: "https://customer-assets.emergentagent.com/job_1e6a6384-01af-443b-ba65-8c476d95186c/artifacts/83j0q1i3_GADDAM%20PAVAN%20SIVA%20KRISHNA%20%28resume%29.pdf",
  socials: {
    github: "https://github.com/GADDAMPAVANSIVAKRISHNA",
    linkedin: "https://www.linkedin.com/in/pavan-siva-krishna-gaddam-7912052b2",
    email: "mailto:gddmpvn24@gmail.com",
  },
  stats: [
    { label: "CGPA", value: "8.8" },
    { label: "Projects", value: "6+" },
    { label: "Internships", value: "2" },
    { label: "Certifications", value: "3" },
  ],
};

export const skills = {
  Languages: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 82 },
    { name: "Java", level: 60 },
    { name: "SQL", level: 78 },
  ],
  Frontend: [
    { name: "React.js", level: 85 },
    { name: "HTML5", level: 92 },
    { name: "CSS3", level: 88 },
    { name: "TypeScript", level: 70 },
  ],
  Backend: [
    { name: "Node.js", level: 80 },
    { name: "Django", level: 78 },
    { name: "REST APIs", level: 85 },
    { name: "JWT Auth", level: 80 },
  ],
  "Database & Tools": [
    { name: "PostgreSQL", level: 75 },
    { name: "MongoDB", level: 72 },
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code / PyCharm", level: 92 },
  ],
  "AI / ML": [
    { name: "NLTK / NLP", level: 78 },
    { name: "Pandas / NumPy", level: 82 },
    { name: "Jupyter / Colab", level: 88 },
    { name: "Scikit-learn", level: 70 },
  ],
};

export const experience = [
  {
    role: "AI & Machine Learning Intern",
    company: "AICTE",
    period: "Apr 2025 – Jun 2025",
    type: "Internship",
    description:
      "Selected for the AICTE AI/ML virtual internship. Built foundational understanding of machine learning pipelines, model evaluation strategies and applied AI workflows.",
    points: [
      "Implemented an NLP-based chatbot as the capstone deliverable",
      "Worked on intent classification, keyword extraction and rule-based logic",
      "Improved chatbot reliability through structured prompt and response design",
    ],
  },
  {
    role: "AI & Data Analytics Intern",
    company: "Shell India · Edunet Foundation",
    period: "Feb 2025 – Mar 2025",
    type: "Internship",
    description:
      "Industry-led training programme by Shell in collaboration with Edunet Foundation focusing on data-driven problem solving and analytics modelling.",
    points: [
      "Hands-on training on data preprocessing and exploratory analysis",
      "Built analytical models to derive insights from real-world datasets",
      "Earned a verified completion certificate from Shell India",
    ],
  },
];

export const projects = [
  {
    title: "Found-It — Lost & Found Portal",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Vercel", "Render"],
    description:
      "A full-stack lost & found platform for university students with secure JWT auth, real-time item listings and a fully responsive UI. Frontend deployed on Vercel, backend on Render.",
    highlights: [
      "JWT-based secure authentication & registration",
      "RESTful APIs for real-time item handling",
      "Dynamic search & filtering for fast item discovery",
      "Mobile-first responsive design",
    ],
    repo: "https://github.com/GADDAMPAVANSIVAKRISHNA/Found-It-MBU-Portal",
    accent: "cyan",
    year: "2025",
  },
  {
    title: "Global Skill Genome",
    category: "AI Platform",
    tags: ["TypeScript", "AI", "React", "Recommendation"],
    description:
      "An AI-powered platform that maps every individual's unique 'Skill DNA' by analyzing education, projects and certifications — then suggests personalized learning paths and skill-gap fixes.",
    highlights: [
      "AI-driven skill profiling engine",
      "Personalized learning path recommendations",
      "Skill-gap analysis dashboard",
      "Modern TypeScript-based architecture",
    ],
    repo: "https://github.com/GADDAMPAVANSIVAKRISHNA/Global-Skill-Genome",
    accent: "violet",
    year: "2025",
  },
  {
    title: "NLP-Based Chatbot System",
    category: "AI / NLP",
    tags: ["Python", "NLTK", "NLP", "AICTE"],
    description:
      "An intelligent rule-based chatbot built with Python and NLTK. Modular architecture handles diverse user query variations with pattern matching and intent classification.",
    highlights: [
      "Pattern-matching + rule-based logic engine",
      "Refined keyword extraction & intent classification",
      "Real-time conversational response simulation",
      "Tested across multiple input scenarios",
    ],
    repo: "https://github.com/GADDAMPAVANSIVAKRISHNA/ChatBot-using-NLP-_AICTE-project",
    accent: "emerald",
    year: "2025",
  },
  {
    title: "Prodigy InfoTech ML Internship",
    category: "Machine Learning",
    tags: ["Python", "ML", "Jupyter"],
    description:
      "Collection of machine-learning tasks completed during the Prodigy InfoTech internship — covering regression, classification and exploratory data analysis in Python.",
    highlights: [
      "End-to-end ML task implementations",
      "Data cleaning & feature engineering",
      "Model training & evaluation in Jupyter",
    ],
    repo: "https://github.com/GADDAMPAVANSIVAKRISHNA/Prodigy-Info-Tech-Internship",
    accent: "amber",
    year: "2024",
  },
  {
    title: "Python Complete Learning Journey",
    category: "Open Source",
    tags: ["Python", "OOP", "NumPy", "Pandas"],
    description:
      "A structured repository documenting my full Python journey — from fundamentals to OOP, file handling, NumPy and Pandas — built as a learning reference for fellow students.",
    highlights: [
      "Covers fundamentals → advanced OOP",
      "Hands-on NumPy & Pandas notebooks",
      "Clean, well-commented learning notes",
    ],
    repo: "https://github.com/GADDAMPAVANSIVAKRISHNA/PYTHON-complete-learning-journey",
    accent: "sky",
    year: "2024",
  },
  {
    title: "College Login Portal UI",
    category: "Frontend",
    tags: ["HTML", "CSS", "Responsive"],
    description:
      "A clean, responsive college-portal login UI built with pure HTML & CSS — minimal dependencies, sharp typography and a focus on accessible form design.",
    highlights: [
      "Pure HTML + CSS, no frameworks",
      "Responsive form layout",
      "Accessible & semantic markup",
    ],
    repo: "https://github.com/GADDAMPAVANSIVAKRISHNA/College-Login-Website-Index.htms-Style.css-",
    accent: "rose",
    year: "2024",
  },
];

export const certifications = [
  {
    name: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    year: "2025",
    skills: ["Agentforce", "AI Agents", "Salesforce Platform"],
  },
  {
    name: "Object-Oriented Programming in Python",
    issuer: "Infosys Springboard",
    year: "2024",
    skills: ["Python", "OOP", "Software Design"],
  },
  {
    name: "Introduction to Agile Methodology",
    issuer: "Infosys Springboard",
    year: "2024",
    skills: ["Agile", "Scrum", "Project Management"],
  },
  {
    name: "AI & Data Analytics Internship",
    issuer: "Shell India · Edunet Foundation",
    year: "2025",
    skills: ["Data Analytics", "Python", "Modeling"],
  },
  {
    name: "AI & Machine Learning Internship",
    issuer: "AICTE",
    year: "2025",
    skills: ["Machine Learning", "NLP", "Python"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    specialization: "Artificial Intelligence & Machine Learning",
    school: "Mohan Babu University",
    period: "2023 – 2027",
    score: "CGPA: 8.8 / 10",
    description:
      "Core CS curriculum with deep focus on AI/ML, data structures, OOP, databases and full-stack web development. Active in coding projects and research-driven coursework.",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
