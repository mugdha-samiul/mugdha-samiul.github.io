import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";
import { Docker } from "@/components/ui/svgs/docker";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Samiul Islam Mugdha",
  initials: "SM",
  url: "https://mugdha-samiul.github.io",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  description:
    "Lecturer in Software Engineering at Daffodil International University. I work on AI for software engineering, LLM-based software testing, and trustworthy AI evaluation.",
  summary:
    "I am a Lecturer in the Department of Software Engineering at [Daffodil International University](https://daffodilvarsity.edu.bd/), Dhaka, and a remote Research Assistant at [Concordia University](https://www.concordia.ca/) supervised by [Dr. Yuhong Yan](https://users.encs.concordia.ca/~yuhong/). I received my B.Sc. in Software Engineering from [Shahjalal University of Science and Technology](https://www.sust.edu/) in 2025.\n\nMy work sits at the intersection of **AI for Software Engineering** and **Trustworthy AI**. I study LLM-based software testing and debugging, using program analysis and mutation testing to make AI-assisted testing more targeted and less wasteful, and I evaluate how reliably LLM systems align with expert judgment. I also work on low-resource NLP, building Bangla benchmarks and auditing how well LLMs judge low-resource text.\n\nI am currently applying for PhD positions.",
  avatarUrl: "/headshot.jpg",
  cvUrl:
    "https://drive.google.com/file/d/1ogjmhiNxE4OzzcbjFsVQIjk8-CTtBQRT/view?usp=sharing",
  skills: [
    { name: "Python", icon: Python },
    { name: "Typescript", icon: Typescript },
    { name: "Java", icon: Java },
    { name: "SQL", icon: Postgresql },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Docker", icon: Docker },
    { name: "Git / GitHub", icon: Icons.github },
    { name: "C" },
    { name: "C++" },
    { name: "JavaScript" },
    { name: "PyTorch" },
    { name: "Hugging Face Transformers" },
    { name: "NumPy" },
    { name: "Pandas" },
    { name: "Matplotlib" },
    { name: "Jupyter Notebook" },
    { name: "REST APIs" },
    { name: "Postman" },
    { name: "Linux" },
    { name: "LaTeX" },
    { name: "Mutation Testing" },
    { name: "Program Analysis" },
    { name: "LLM Evaluation" },
    { name: "Prompt Design" },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mugdhasamiul@gmail.com",
    tel: "+880 1962-353752",
    affiliation: "Dhaka, Bangladesh",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mugdha-samiul",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samiul-islam-mugdha-1642b2234/",
        icon: Icons.linkedin,
        navbar: true,
      },
      "Google Scholar": {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=y6fyp4IAAAAJ&hl=en",
        icon: Icons.googleScholar,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mugdhasamiul@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  researchInterests: [
    {
      title: "AI for Software Engineering",
      description:
        "LLM-based software testing and debugging. I use program analysis and mutation testing to make LLM-generated test suites targeted and cost-aware instead of wasteful.",
    },
    {
      title: "Trustworthy AI",
      description:
        "Auditing LLM systems on the axes that decide whether they can be relied on: expert alignment, evidence grounding, score calibration, ranking reliability, and robustness.",
    },
    {
      title: "LLM Evaluation for Low-Resource Languages",
      description:
        "Benchmark construction and LLM-as-a-judge reliability for Bangla, measuring how closely model judgments track human annotation on text that is thinly represented in pretraining data.",
    },
  ],

  publications: [
    {
      title:
        "Inclusiveness Detection in Bangla Textbooks: Exploring LLMs and Advanced Prompting Techniques",
      authors:
        "R. R. Siam*, S. I. Mugdha*, M. K. Kamrul, A. S. Azad, and S. S. Chowdhury. (*Equal contribution.)",
      venue: "IEEE Rev-AI 2026",
      venueHref: "https://rev-ai.org/index.html",
      status: "Published",
      description:
        "Developed BanglaEduInclusive, a benchmark of 3,877 human-annotated sentences, and evaluated GPT-4o, Gemini-1.5-Flash, and Mistral Large 2.1 for inclusiveness detection using advanced prompting. GPT-4o with chain-of-thought reached 0.763 accuracy and 0.787 F1.",
      tags: ["LLM Evaluation", "Prompting", "Bangla NLP", "Benchmark"],
      links: [
        {
          type: "Paper",
          href: "https://ieeexplore.ieee.org/document/11622053",
        },
      ],
    },
    {
      title:
        "Claus-Test-HumanEval: A Cluster-Aware Multi-Layer Pipeline for Cost-Aware LLM-Based Python Unit Test Generation Using Mutation Testing",
      authors: "Author list omitted to preserve double-blind review.",
      venue: "ICCIT 2026",
      venueHref: "https://iccit.org.bd/2026/",
      status: "Under review",
      description:
        "A cluster-aware pipeline for cost-efficient LLM-generated Python unit tests, evaluated through mutation testing. On EvoEval across four subsets it matches the full-budget baseline's mutation score (94.3% vs. 93.7%) while cutting per-task cost by 67% on average.",
      tags: ["LLM Testing", "Mutation Testing", "Python", "Cost-Aware"],
      links: [],
    },
    {
      title:
        "Trustworthy LLM-Assisted Venture Screening: Auditing Expert Alignment, Evidence Grounding, and Cross-Domain Calibration",
      authors: "Author list omitted to preserve double-blind review.",
      venue: "Structuring the Unstructured: AI in Private Markets @ ICAIF '26",
      venueHref:
        "https://ai-private-markets.github.io/ai-for-private-market-workshop/#about",
      status: "Accepted",
      description:
        "An evidence-grounded LLM pipeline for venture screening, audited for expert alignment, evidence grounding, calibration, and robustness. Accepted at the AI in Private Markets workshop at ICAIF '26; being prepared for submission to [Canadian AI 2027](https://www.caiac.ca/en/conferences/canadianai-2027/home).",
      tags: ["Trustworthy AI", "LLM Evaluation", "Calibration", "Robustness"],
      links: [],
    },
  ],

  work: [
    {
      company: "Daffodil International University",
      href: "https://daffodilvarsity.edu.bd/",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Lecturer, Department of Software Engineering",
      logoUrl: "/diu.svg",
      start: "Sep 2025",
      end: "Present",
      description:
        "Teach Software Quality Assurance and Testing, its lab component, and Software Architecture to 600+ students. Contributed to the departmental committee developing the Software Quality Assurance major and designed the \"Agile Testing\" course. Received training in AI Education, Outcome-Based Education (OBE), Bloom's Taxonomy, and Leadership.",
    },
    {
      company: "Concordia University",
      href: "https://www.concordia.ca/",
      badges: [],
      location: "Montreal, Canada (Remote)",
      title: "Research Assistant, supervised by Dr. Yuhong Yan",
      logoUrl: "/concordia.png",
      start: "May 2026",
      end: "Present",
      description:
        "Conduct research on trustworthy LLM-assisted venture screening and financial decision support. Contribute to literature-driven prompt design and an evidence-grounded pipeline for mixed-format venture proposals. Evaluate expert alignment, evidence grounding, score calibration, ranking reliability, and robustness.",
    },
    {
      company: "Dynamic Solution Innovators Ltd",
      href: "https://www.dsinnovators.com/",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Junior Software Engineer Intern",
      logoUrl: "/dsi.svg",
      start: "Nov 2024",
      end: "May 2025",
      description:
        "Engineered responsive frontend features for production systems, including an online bidding platform and an internal HR management tool. Tested components and integrated APIs in an agile development team. Used React, Next.js, TypeScript, Tailwind CSS, Bootstrap, and Postman for development and testing.",
    },
  ],
  education: [
    {
      school: "Shahjalal University of Science and Technology",
      href: "https://www.sust.edu/",
      degree: "B.Sc. in Software Engineering — CGPA 3.84/4.00",
      logoUrl: "/sust.png",
      start: "2020",
      end: "2025",
    },
    {
      school: "Notre Dame College",
      href: "https://www.ndc.edu.bd/",
      degree: "Higher Secondary Certificate — GPA 5.00/5.00",
      logoUrl: "",
      start: "2017",
      end: "2019",
    },
  ],

  teaching: {
    courses: [
      {
        title: "Software Quality Assurance and Testing (Theory)",
        institution: "Daffodil International University · 330+ students",
        dates: "Fall 2025, Summer 2026, Fall 2026",
      },
      {
        title: "Software Quality Assurance and Testing (Lab)",
        institution: "Daffodil International University · 350+ students",
        dates: "Fall 2025, Summer 2026, Fall 2026",
      },
      {
        title: "Software Architecture and System Design",
        institution: "Daffodil International University · 200+ students",
        dates: "Spring 2026",
      },
      {
        title: "Computer Fundamentals (Lab)",
        institution: "Daffodil International University · 50+ students",
        dates: "Spring 2026",
      },
    ],
  },

  service: [
    {
      role: "Software Quality Assurance specialization committee",
      institution: "Daffodil International University",
      dates: "December 2025",
      description:
        "Contributed to developing the specialization and designed the \"Agile Testing\" course",
    },
    {
      role: "Treasurer, Copernicus Astronomical Memorial",
      institution: "Shahjalal University of Science and Technology",
      dates: "2023 – 2024",
    },
    {
      role: "Convenor, SUST Astro Carnival",
      institution: "Shahjalal University of Science and Technology",
      dates: "2023",
    },
    {
      role: "Publication Secretary, SWE Society",
      institution: "Shahjalal University of Science and Technology",
      dates: "2023 – 2024",
    },
  ],
} as const;
