import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
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
    { name: "C" },
    { name: "C++" },
    { name: "Java", icon: Java },
    { name: "JavaScript" },
    { name: "TypeScript", icon: Typescript },
    { name: "SQL", icon: Postgresql },
    { name: "PyTorch" },
    { name: "Hugging Face Transformers" },
    { name: "LLM APIs" },
    { name: "NumPy" },
    { name: "Pandas" },
    { name: "Git / GitHub", icon: Icons.github },
    { name: "Linux" },
    { name: "Docker", icon: Docker },
    { name: "LaTeX" },
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
    {
      title: "Formal Verification",
      description:
        "Exploring formal verifiers as critics for LLM-generated code, where verifier errors are fed back to the model to repair its output.",
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
        "Clus-Test: A Cluster-Aware Multi-Layer Framework for Cost-Efficient Mutation-Guided LLM Unit Test Generation",
      authors: "Author list omitted to preserve double-blind review.",
      venue: "ICCIT 2026",
      venueHref: "https://iccit.org.bd/2026/",
      status: "Under review",
      description:
        "A pipeline that generates unit tests with LLMs at lower cost. It starts with cheaper models and moves to more expensive ones, using clustering and a stopping rule that triggers when progress plateaus. On 182 EvoEval problems, it used 67% fewer tokens than the baseline with a similar mutation score (94.3% vs. 93.7%, Wilcoxon p = 0.21).",
      tags: ["Mutation Testing", "LLM Test Generation", "Clustering", "EvoEval"],
      links: [],
    },
    {
      title:
        "Trustworthy LLM-Assisted Venture Screening: Auditing, Diagnosing, and Improving Expert Alignment",
      authors: "Author list omitted to preserve double-blind review.",
      venue: "Structuring the Unstructured: AI in Private Markets @ ICAIF '26",
      venueHref:
        "https://ai-private-markets.github.io/ai-for-private-market-workshop/#about",
      status: "Accepted",
      description:
        "An evidence-grounded LLM pipeline for venture screening. We audited how closely it agrees with expert judgments, diagnosed where it falls short, and tested ways to improve that agreement. Accepted at the AI in Private Markets workshop at ICAIF '26; being prepared for submission to [Canadian AI 2027](https://www.caiac.ca/en/conferences/canadianai-2027/home).",
      tags: ["Trustworthy AI", "LLM Evaluation", "Expert Alignment"],
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
        "Taught core software courses such as Software Quality Assurance and Testing, Software Testing Lab, and Software Architecture to 600+ students. Working with undergraduate students on research projects, including experiments and paper writing. Contributed to organizing the \"AI-Driven QA Boot-camp\" and \"AI-Augmented Software Testing\" workshop, both with 400+ attendees, and to the departmental committee building the curriculum for the Agile Testing course.",
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
      company: "Shahjalal University of Science and Technology",
      href: "https://www.sust.edu/",
      badges: [],
      location: "Sylhet, Bangladesh",
      title: "Research Mentor, Department of Software Engineering",
      logoUrl: "/sust.png",
      start: "Jun 2026",
      end: "Present",
      description:
        "Mentoring multiple undergraduate research groups on projects including cost-efficient LLM test generation (Clus-Test, submitted to ICCIT 2026), bias detection in Bangla LLMs using counterexamples, AI-assisted formal verification, and low-resource tokenization for Bangla.",
    },
    {
      company: "Shahjalal University of Science and Technology",
      href: "https://www.sust.edu/",
      badges: [],
      location: "Sylhet, Bangladesh",
      title:
        "Research Assistant, BanglaEduInclusive Corpus Project (PI: Prof. Husne Ara Chowdhury)",
      logoUrl: "/sust.png",
      start: "Oct 2026",
      end: "Sep 2027",
      description:
        "Building a large-scale dataset from Bangla educational content across multiple parameters of inclusiveness, extending the published Rev-AI 2026 paper. Supported by the SUST Research Center's Promotional Research Grant (2026–2027).",
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
        "Developed an online bidding system and an internal HR management tool. Built customized UI by extending shadcn/ui components, integrated with the backend team's APIs, and fixed frontend bugs. Used Next.js, TypeScript, Tailwind CSS, Bootstrap, Odoo, JavaScript, Docker, Postman, and Spring Boot across the projects.",
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
      logoUrl: "/ndc.png",
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
        "Contributed to building the curriculum for the Agile Testing course",
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
