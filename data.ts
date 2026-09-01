import {
  Database,
  GitBranch,
  GitFork,
  FileCode2,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Server,
  Atom,
  Terminal,
  CodeXml,
  Palette,
  Coffee,
  Smartphone,
  Code,
  DatabaseZap,
  Triangle,
  Calculator,
  FileCode,
  Code2,
  Laptop,
  Users,
  Puzzle,
  Lightbulb,
  UserRound,
  Rocket,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";
import { getRegistryItems } from "shadcn";

export const stats = [
  { label: "Mobile App Developer Intern", value: "6M" },
  { label: "Sales & Marketing", value: "2y" },
  { label: "Admin & Accounts", value: "1y" },
  { label: "Back To Tech", value: "0" },
];

export const highlights = [
  { icon: MapPin, text: "Based in Lahad Datu, Sabah" },
  { icon: GraduationCap, text: "CS Graduate from UMPSA" },
  { icon: Laptop, text: "Business & Operations Experience" },
  { icon: Rocket, text: "Open to New Opportunities" },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "izzati.murijin@gmail.com",
    href: "mailto:izzati.murijin@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "017 - 814 4660",
    href: "tel:+60178144660",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kg Sabah Baru, Peringkat 2 PPRT, Jalan Tengah Nipah, 91111 Lahad Datu, Sabah",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/teewritescode", label: "GitHub" },
];

export const experiences = [
  {
    type: "work",
    title: "Admin & Account Assistant",
    company: "Auliah Distributors Sdn Bhd",
    period: "2025 - Present",
    description:
      "Gained practical experience in administration, accounting support, inventory, documentation, and business systems.",
    technologies: ["AutoCount Accounting", "SQL Accounting"],
  },
  {
    type: "work",
    title: "Sales & Marketing",
    company: "Ruelbiz Sdn Bhd",
    period: "2022 - 2024",
    description:
      "Developed experience in customer communication, business operations, marketing, and understanding business needs.",
    technologies: ["Microsoft Excel", "Whatsapp", "Facebook"],
  },
  {
    type: "work",
    title: "Mobile App Developer Intern ",
    company: "Tree Integrated Solution Sdn Bhd",
    period: "2021 - 2022",
    description:
      "Maintained client websites, developed an Android application and working in a professional software development environment. Gained experience in agile methodologies.",
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress", "Kotlin"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science (Software Engineering) with Honours",
    company: "University Malaysia Pahang",
    period: "2017 - 2022",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
];

export const projects = [
  {
    title: "Current Project - Personal Portfolio",
    description:
      "A personal portfolio website built from scratch to showcase my technical background professional experienced and selected projects.",
    image: "/images/p1.jpg",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    detailsUrl: "/projects/current-project",
    //demoUrl: "https://example.com",
    //githubUrl: "https://github.com",
  },
  {
    title: "Internship Project - Android Application",
    description:
      "An android application developed during my internship, gaining hands-on experience in mobile application development and working within a professional development environment.",
    image: "/images/project2.jpg",
    techStack: ["Kotlin", "Java", "XML", "Android Studio"],
    detailsUrl: "/projects/internship-project",
  },
  {
    title: "Academic Project - Puteri Tailor Web-Based System",
    description:
      "A web-based management system developed for a tailoring business to organize customer information, orders, and day-to-day operations.",
    image: "/images/project3.jpg",
    techStack: ["PHP", "HTML", "CSS", "JS", "MySQL"],
    detailsUrl: "/projects/academic-project",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
        { name: "React", icon: Atom },
        { name: "Next.js", icon: Layers },
        { name: "TypeScript", icon: Terminal },
        { name: "Tailwind CSS", icon: Palette },
        { name: "HTML5", icon: CodeXml },
        { name: "CSS3", icon: FileCode },
    ],
  },
  {
    title: "Backend & Programming",
    skills: [
        { name: "Node.js", icon: Server },
        { name: "PHP", icon: FileCode2 },
        { name: "JAVA", icon: Coffee },
        { name: "Kotlin", icon: Smartphone },
        { name: "SQL", icon: Database },
        { name: "MySQL", icon: DatabaseZap },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: GitFork },
        { name: "VS Code", icon: Code },
        { name: "Android Studio", icon: Code2 },
        { name: "Vercel", icon: Triangle },
        { name: "Autocount", icon: Calculator },
    ],
  },
];

export const values = [
  {
    title: "Technical Foundation",
    icon: Laptop,
    type: "technical",
    items: [
      "Software Engineering background",
      "Web Development (PHP, JavaScript, HTML, CSS)",
      "Mobile Development (Android, Java, XML)",
      "Database & SQL",
      "Problem-solving & logical thinking",
    ],
  },
  {
    title: "Business Experience",
    icon: Users,
    type: "business",
    items: [
      "Sales & Marketing (WhatsApp, Facebook)",
      "Administration & Documentation",
      "Accounts & Record Management",
      "Inventory & Data Management (Excel, AutoCount)",
      "Understanding real business processes",
    ],
  },
];

export const personalValues = [
  {
    title: "PROBLEM SOLVER",
    icon: Puzzle,
    description:
      "I enjoy breaking down problems and finding practical, effective solutions.",
  },
  {
    title: "ADAPTABLE",
    icon: Lightbulb,
    description:
      "Moving across different roles has taught me to learn quickly and embrace change.",
  },
  {
    title: "DETAIL ORIENTED",
    icon: UserRound,
    description:
      "I pay attention to details and value accuracy in every task I take on.",
  },
  {
    title: "GROWTH MINDED",
    icon: Rocket,
    description:
      "Always learning, improving, and looking for ways to bring more value.",
  },
];