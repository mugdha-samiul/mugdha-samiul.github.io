import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Samiul Islam Mugdha",
  initials: "SM",
  url: "https://mugdha-samiul.github.io",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  description:
    "Lecturer in Software Engineering at Daffodil International University. I work on AI for software engineering, LLM-based software testing, and trustworthy AI evaluation.",
  summary:
    "I am a Lecturer in the Department of Software Engineering at [Daffodil International University](https://daffodilvarsity.edu.bd/), Dhaka, and a remote Research Assistant at [Concordia University](https://www.concordia.ca/) supervised by Prof. Yuhong Yan. I received my B.Sc. in Software Engineering from [Shahjalal University of Science and Technology](https://www.sust.edu/) in 2025.\n\nMy work sits at the intersection of **AI for Software Engineering** and **Trustworthy AI**. I study LLM-based software testing and debugging, using program analysis and mutation testing to make AI-assisted testing more targeted and less wasteful, alongside LLM evaluation, AI reliability, and human-centered AI systems.\n\nI am currently applying for PhD positions.",
  avatarUrl: "/headshot.jpg",
  cvUrl: "/cv.pdf", // TODO: add the PDF at public/cv.pdf, or point this at your Google Drive CV link.
  skills: [
    { name: "Python", icon: Python },
    { name: "C#", icon: Csharp },
    { name: "Typescript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Postman" },
    { name: "Git" },
    { name: "Mutation Testing" },
    { name: "Program Analysis" },
    { name: "LLM Evaluation" },
    { name: "Prompt Design" },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mugdhasamiul@gmail.com",
    tel: "+880 1962-353752",
    affiliation:
      "Department of Software Engineering, Daffodil International University, Dhaka, Bangladesh",
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
        "LLM-based software testing and debugging, using program analysis and mutation testing to make AI-assisted software engineering more targeted and less wasteful.",
    },
    {
      title: "LLM-Based Testing",
      description:
        "Cost-aware pipelines for LLM-generated unit tests, evaluated through mutation testing, and LLM-based detection of test smells in existing test suites.",
    },
    {
      title: "Trustworthy AI",
      description:
        "LLM evaluation and AI reliability: measuring expert alignment, evidence grounding, calibration, and robustness so AI systems can be trusted in real-world decisions.",
    },
  ],

  publications: [
    {
      title:
        "Inclusiveness Detection in Bangla Textbooks: Exploring LLMs and Advanced Prompting Techniques",
      authors:
        "Ridwanur Rashid Siam*, Samiul Islam Mugdha*, Md Kamruzzaman Kamrul, Abdus Salam Azad, Sayma Sultana Chowdhury. (*Equal contribution.)",
      venue: "IEEE Rev-AI 2026",
      venueHref: "https://rev-ai.org/index.html",
      status: "Published",
      description:
        "Developed the BanglaEduInclusive benchmark and evaluated GPT-4o, Gemini-1.5-Flash, and Mistral Large 2.1 for inclusiveness detection using advanced prompting techniques.",
      tags: ["LLM Evaluation", "Prompting", "Bangla NLP", "Benchmark"],
      links: [
        {
          type: "Paper",
          href: "https://ieeexplore.ieee.org/document/11622053",
        },
        // TODO: add a Code repository link for this paper, or delete this entry.
        // TODO: add a direct PDF link for this paper, or delete this entry.
      ],
    },
    {
      title:
        "Clus-Test: A Cluster-Aware Multi-Layer Pipeline for Cost-Aware LLM-Based Python Unit Test Generation Using Mutation Testing",
      authors: "Author list omitted to preserve double-blind review.",
      venue: "ICCIT 2026",
      venueHref: "https://iccit.org.bd/2026/",
      status: "Under review",
      description:
        "A cluster-aware pipeline for cost-efficient LLM-generated Python unit tests, evaluated through mutation testing. Cuts per-task cost by 67% on average while matching a full-budget baseline's mutation score.",
      tags: ["LLM Testing", "Mutation Testing", "Python", "Cost-Aware"],
      links: [
        // TODO: add Paper / Code / PDF links once the paper is public (currently under double-blind review).
      ],
    },
    {
      title: "Trustworthy Evaluation of LLM-Assisted Venture Screening",
      authors: "Author list omitted to preserve double-blind review.",
      // TODO: venue conflict in the old site. _old/index.html said "ACM FAccT 2027
      // (Prepared for Submission)"; _old/portfolio.html said "Under review — ACM ICAIF 2026".
      // Pick the correct venue and status, then fix the three fields below.
      venue: "TODO: confirm venue (ACM FAccT 2027 or ACM ICAIF 2026)",
      venueHref: "https://facctconference.org/",
      status: "TODO: confirm status (Prepared for submission or Under review)",
      description:
        "An evidence-grounded LLM pipeline for venture screening, audited for expert alignment, evidence grounding, calibration, and robustness.",
      tags: ["Trustworthy AI", "LLM Evaluation", "Calibration", "Robustness"],
      links: [
        // TODO: add Paper / Code / PDF links once the paper is public.
      ],
    },
    {
      title:
        "Test Smell Detection: A Comparison Between LLMs and Prevalent C# Smell Detection Tools",
      authors: "TODO: add the author list for this paper.",
      venue: "Ongoing research",
      venueHref: undefined,
      status: "In progress",
      description:
        "An LLM-based test smell detection approach for C# projects, compared against existing static analysis tools for test quality and maintainability.",
      tags: ["Test Smells", "C#", "Static Analysis", "LLM Testing"],
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
      logoUrl: "",
      start: "Sep 2025",
      end: "Present",
      description:
        "Teach Software Quality Assurance and Testing, its lab component, and Software Architecture. Contributed to the departmental committee developing the Software Quality Assurance specialization and designed the \"Agile Testing\" course.",
    },
    {
      company: "Concordia University",
      href: "https://www.concordia.ca/",
      badges: [],
      location: "Montreal, Canada (Remote)",
      title: "Research Assistant, supervised by Prof. Yuhong Yan",
      logoUrl: "",
      start: "May 2026",
      end: "Present",
      description:
        "Research trustworthy LLM-assisted venture screening and financial decision support. Contribute to literature-driven prompt design and an evidence-grounded pipeline for mixed-format venture proposals. Develop evaluation frameworks measuring expert alignment, evidence grounding, calibration, reliability, and robustness.",
    },
    {
      company: "Daffodil International University",
      href: "https://daffodilvarsity.edu.bd/",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Undergraduate Thesis Supervisor",
      logoUrl: "",
      start: "Aug 2026",
      end: "Present",
      description:
        "Supervising an undergraduate thesis in the Department of Software Engineering.",
    },
    {
      company: "Shahjalal University of Science and Technology",
      href: "https://www.sust.edu/",
      badges: [],
      location: "Sylhet, Bangladesh",
      title: "Research Mentor, Department of Software Engineering",
      logoUrl: "",
      start: "May 2026",
      end: "Present",
      description:
        "Mentor three undergraduate research groups on LLM-based software testing, Bangla bias detection, and low-resource tokenization. Guide research-question formulation, literature review, framework design, experimental planning, implementation, and manuscript development.",
    },
    {
      company: "Shahjalal University of Science and Technology",
      href: "https://www.sust.edu/",
      badges: [],
      location: "Sylhet, Bangladesh",
      title: "Undergraduate Thesis Researcher",
      logoUrl: "",
      start: "2024",
      end: "2025",
      description:
        "Co-developed a Bangla textbook inclusiveness benchmark of 3,877 sentences across 338 context-preserving paragraphs, annotated by 40 participants. Evaluated GPT-4o, Gemini-1.5-Flash, and Mistral Large 2.1 across three prompting strategies; GPT-4o with chain-of-thought reached 0.763 accuracy and 0.787 F1. Co-led dataset construction, experimentation, and manuscript preparation.",
    },
    {
      company: "Dynamic Solution Innovators Ltd",
      href: "https://www.dsinnovators.com/",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Junior Software Engineer Intern",
      logoUrl: "",
      start: "Nov 2024",
      end: "May 2025",
      description:
        "Developed and tested responsive frontend components using React, Next.js, TypeScript, Tailwind CSS, Bootstrap, and Postman. Collaborated through Git-based version control and code integration across projects.",
    },
  ],
  education: [
    {
      school: "Shahjalal University of Science and Technology",
      href: "https://www.sust.edu/",
      degree:
        "B.Sc. in Software Engineering — CGPA 3.84/4.00 (final two-semester GPA 3.96/4.00)",
      logoUrl: "",
      start: "2020",
      end: "2025",
    },
    {
      school: "Notre Dame College",
      href: "#", // TODO: add the Notre Dame College website URL, or drop this link.
      degree: "Higher Secondary Certificate",
      logoUrl: "",
      start: "2017",
      end: "2019",
    },
  ],

  teaching: {
    courses: [
      {
        title: "Software Quality Assurance and Testing",
        institution: "Daffodil International University",
        dates: "Sep 2025 – Present",
      },
      {
        title: "Software Quality Assurance and Testing — Lab",
        institution: "Daffodil International University",
        dates: "Sep 2025 – Present",
      },
      {
        title: "Software Architecture",
        institution: "Daffodil International University",
        dates: "Sep 2025 – Present",
      },
    ],
    curriculum: [
      "Contributed to the departmental committee developing the Software Quality Assurance specialization",
      "Designed the \"Agile Testing\" course",
    ],
  },

  service: [
    {
      role: "Software Quality Assurance specialization committee",
      institution: "Daffodil International University",
      dates: "Sep 2025 – Present",
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
