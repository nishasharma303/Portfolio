import { Brain, Target, TrendingUp, MessageSquare, Award, Sparkles } from 'lucide-react';

export const personalInfo = {
  name: 'Nisha Sharma',
  role: 'Full Stack Developer',
  tagline: 'Building intelligent web applications with modern technologies and AI integration',
  email: 'nishaanshu2005@gmail.com',
  phone: '+91 8210500696',
  github: 'https://github.com/nishasharma303',
  linkedin: 'https://linkedin.com/in/nisha-sharma-6061512a6/',
  cgpa: '9.39',
  projectCount: '4+',
  techCount: '10+'
};

export const skills = {
  'Languages': ['Python', 'C', 'C++', 'Java', 'JavaScript'],
  'Database': ['MySQL', 'MongoDB'],
  'Web Technologies': ['HTML', 'CSS', 'React.js', 'TailwindCSS', 'Bootstrap', 'Node.js', 'Express.js'],
  'Developer Tools': ['VSCode', 'GitHub', 'Figma', 'Postman'],
  'AI/ML': ['OpenCV', 'Computer Vision'],
};

export const projects = [
  {
    id: 1,
    title: 'Edunex',
    tagline: 'AI-Powered Collaborative Learning Platform',
    description:
      'A gamified collaborative learning platform where students ask questions, explore concepts, and learn through AI-validated answers. Includes hint-based learning, concept visualizations, and productivity-focused study tools.',
    features: [
      'AI-verified answers before posting',
      'Hint-based learning instead of direct solutions',
      'Interactive mind map visualizations',
      'Study session timer with distraction tracking',
      'Real-time leaderboard with gamification',
      'Collaborative Q&A community space'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Gemini API', 'MongoDB', 'Node.js', 'Express.js'],
    gradient: 'from-emerald-500 to-teal-600',
    icon: Brain,
    github: 'https://github.com/nishasharma303/Edunex',
    live: '#'
  },

  {
    id: 2,
    title: 'Blogify',
    tagline: 'AI Content Generation Platform',
    description:
      'An AI-powered blogging platform where users can generate high-quality blog content, browse curated articles, and engage through comments. Built with a clean, modern UI and optimized for smooth reading and writing experiences.',
    features: [
      'AI-powered blog content generation using Gemini API',
      'Browse and explore published blog posts',
      'Interactive commenting and discussion system',
      'Search and filter blogs by category or keywords',
      'Responsive, modern UI with smooth UX',
      'SEO-friendly structure and analytics-ready'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Gemini API', 'MongoDB', 'Node.js', 'Express.js'],
    gradient: 'from-amber-600 to-orange-600',
    icon: MessageSquare,
    github: 'https://github.com/nishasharma303/Blogify',
    live: '#'
  },

  {
    id: 3,
    title: 'Career-Path',
    tagline: 'Intelligent Career Guidance System',
    description:
      'An AI-powered career guidance platform that helps users discover suitable career options, receive resume insights, and generate personalized growth roadmaps using intelligent chat-driven recommendations.',
    features: [
      'AI chat assistant for career guidance',
      'Resume upload with improvement insights',
      'Personalized career roadmap generation',
      'History tracking for previous queries and suggestions',
      'Skill-gap understanding and tailored recommendations',
      'Data-driven career insights'
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Drizzle ORM', 'Clerk'],
    gradient: 'from-blue-600 to-indigo-600',
    icon: Target,
    github: 'https://github.com/nishasharma303/Career-Path',
    live: '#'
  },

  {
    id: 4,
    title: '9toThrive',
    tagline: 'AI Campus Recruitment Platform',
    description:
      'A full-stack AI-driven campus recruitment platform connecting students, recruiters, and placement cells. It streamlines job applications, drive management, resume analysis, and placement analytics through intelligent automation.',
    features: [
      'Student profiles with resume upload and skill management',
      'Apply to jobs/internships and track application status',
      'AI-powered resume insights and job-fit suggestions',
      'Recruiter dashboard for posting openings and shortlisting candidates',
      'Candidate filtering and recruiter–placement cell communication',
      'Placement cell tools for drive approval, eligibility management, and reports',
      'Analytics dashboards for placement statistics and performance tracking'
    ],
    tech: ['React.js', 'Tailwind CSS', 'MongoDB', 'OpenAI GPT-4o', 'Hugging Face', 'Express.js'],
    gradient: 'from-slate-600 to-slate-800',
    icon: TrendingUp,
    github: 'https://github.com/nishasharma303/9tothrive',
    live: '#'
  }
];


export const achievements = [
  {
    title: 'Runner Up',
    event: 'Citi Bank Hackathon 2025',
    description: 'AI-powered placement management platform',
    icon: Award,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Qualified for Round 2 (Final Round)',
    event: 'HORIZON – SRMIST 2025',
    description: 'AI-Powered Collaborative Learning Platform',
    icon: Sparkles,
    color: 'from-blue-600 to-indigo-600'
  }
];

