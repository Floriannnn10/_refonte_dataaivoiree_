import {
  CodeBracketIcon,
  ServerIcon,
  CommandLineIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  DeviceTabletIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

export const skillCategories = [
  {
    id: "frontend",
    name: "Développement Frontend",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "jQuery", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "SASS/SCSS", level: 75 },
    ],
    icon: CodeBracketIcon,
    color: "emerald",
    description: "Expertise en développement d'interfaces modernes et réactives"
  },
  {
    id: "backend",
    name: "Développement Backend",
    skills: [
      { name: "PHP", level: 90 },
      { name: "Laravel", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "API RESTful", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
    icon: ServerIcon,
    color: "blue",
    description: "Création de backends robustes et évolutifs"
  },
  {
    id: "tools",
    name: "Outils & Méthodologies",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Agile/Scrum", level: 80 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Jest/Testing", level: 70 },
      { name: "Webpack", level: 65 },
    ],
    icon: CommandLineIcon,
    color: "purple",
    description: "Maîtrise des outils modernes de développement"
  },
  {
    id: "technical",
    name: "Compétences Techniques",
    skills: [
      { name: "Responsive Design", level: 90 },
      { name: "Performance Web", level: 85 },
      { name: "SEO", level: 80 },
      { name: "PWA", level: 75 },
      { name: "Web Accessibility", level: 80 },
    ],
    icon: CpuChipIcon,
    color: "amber",
    description: "Expertise technique approfondie"
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS Basics", level: 70 },
      { name: "Heroku", level: 75 },
      { name: "Netlify", level: 80 },
      { name: "Vercel", level: 75 },
    ],
    icon: CloudIcon,
    color: "sky",
    description: "Déploiement et gestion cloud"
  },
  {
    id: "security",
    name: "Sécurité & Performance",
    skills: [
      { name: "Web Security", level: 80 },
      { name: "Authentication", level: 85 },
      { name: "Data Protection", level: 80 },
      { name: "Performance Optimization", level: 85 },
    ],
    icon: ShieldCheckIcon,
    color: "rose",
    description: "Sécurisation et optimisation des applications"
  },
  {
    id: "mobile",
    name: "Développement Mobile",
    skills: [
      { name: "React Native", level: 75 },
      { name: "Progressive Web Apps", level: 80 },
      { name: "Mobile-First Design", level: 85 },
      { name: "App Performance", level: 75 },
    ],
    icon: DeviceTabletIcon,
    color: "indigo",
    description: "Création d'applications mobiles cross-platform"
  },
  {
    id: "soft",
    name: "Soft Skills",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Travail d'équipe", level: 85 },
      { name: "Gestion de projet", level: 80 },
      { name: "Leadership", level: 75 },
    ],
    icon: ChatBubbleLeftRightIcon,
    color: "teal",
    description: "Compétences interpersonnelles et leadership"
  }
]; 