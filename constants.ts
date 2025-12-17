
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Cpu, 
  Languages, 
  Award, 
  Terminal,
  Layers,
  BrainCircuit,
  Users,
  Settings,
  AppWindow,
  Zap,
  Wrench,
  Database,
  Monitor,
  BookOpen,
  Microscope,
  FileDown,
  Phone,
  Mail,
  Linkedin as LinkedinIcon,
  MapPin,
  Calendar,
  Rss,
  Lightbulb,
  Search,
  CheckCircle2,
  Rocket,
  Sparkles,
  Command,
  Bot,
  Mic,
  X,
  Activity,
  Sliders,
  Target,
  Trophy,
  QrCode,
  Smartphone,
  Box,
  Fingerprint,
  ClipboardCheck,
  Play
} from 'lucide-react';

export const I18N = {
  it: {
    nav: {
      home: "Home",
      experience: "Esperienza",
      education: "Formazione",
      skills: "Skills",
      projects: "Progetti",
      contact: "Contatti"
    },
    hero: {
      badge: "Ingegnere Meccatronico",
      tagline: "Progetto l'intersezione tra bit e atomi.",
      cta_primary: "Iniziamo un progetto",
      cta_secondary: "Esperienze",
      cta_cv: "Scarica CV",
      words: ["Ingegnere Meccatronico", "Sviluppatore iOS", "Automation Expert", "Industrial Designer", "Problem Solver"]
    },
    cv: {
      objective: "Il mio obiettivo è applicare le mie conoscenze ed esperienze in ingegneria informatica, meccanica ed elettrica per progettare e sviluppare soluzioni innovative. Sono sempre alla ricerca di opportunità di crescita e ruoli stimolanti.",
      contactTitle: "CONTATTO",
      skillsTitle: "COMPETENZE",
      softSkillsTitle: "SOFT SKILLS",
      languagesTitle: "LINGUE",
      expTitle: "ESPERIENZE PROFESSIONALI",
      eduTitle: "FORMAZIONE",
      certTitle: "CERTIFICAZIONI",
      languagesList: ["Italiano - Madrelingua", "Inglese - B2 Certificato"]
    },
    projects: {
      title: "Case Studies",
      subtitle: "Analisi tecnica di soluzioni reali tra ingegneria e software.",
      items: [
        {
          id: "novartis-automation",
          title: "Standardizzazione GMP Pharma",
          category: "Automazione Industriale",
          tech: ["GMP", "SAP", "Audit Trail"],
          icon: "Briefcase",
          problem: "Necessità di garantire l'integrità dei dati e la compliance regolatoria.",
          solution: "Implementazione di protocolli di qualifica IQ/OQ/PQ.",
          results: "Compliance 100% durante gli audit."
        }
      ]
    },
    experience: {
      title: "Esperienze Professionali",
      subtitle: "Un percorso tra automazione industriale, analisi dati e robotica.",
      items: [
        {
          id: "novartis",
          company: "Novartis",
          role: "Ingegnere dell’automazione",
          period: "Gennaio 2025 – Ottobre 2025",
          description: "Esperienza all’avanzamento di progetti di automazione industriale e robotica. Redazione documentazione di qualifica (IQ, OQ, PQ, URS) e gestione di Audit Trail e data integrity in ambito GMP. Collaborazione interfunzionale per garantire compliance e performance.",
          tags: ["Automation", "GMP", "SAP", "Robotics"]
        },
        {
          id: "telus",
          company: "Telus Digital",
          role: "Analista Dati",
          period: "2024 - 2025",
          description: "Attività di analisi e ottimizzazione dei risultati di ricerca per migliorare un sistema di intelligenza artificiale, con focus sull'ecosistema Siri.",
          tags: ["AI", "Data Analysis", "Siri Ecosystem", "Quality Assurance"]
        }
      ]
    },
    education: {
      title: "Formazione & Certificazioni",
      subtitle: "Costruire basi solide tra Napoli e l'ecosistema Apple.",
      items: [
        {
          id: "unina",
          school: "Università di Napoli Federico II",
          degree: "Ingegneria Meccatronica",
          period: "2022 - 2025",
          description: "Percorso accademico focalizzato sull'integrazione di sistemi meccanici, elettronici e informatici."
        },
        {
          id: "apple",
          school: "Apple Developer Academy",
          degree: "iOS Development & Design",
          period: "2023 - 2024",
          description: "Sviluppo di applicazioni per l'ecosistema iOS con approccio Challenge Based Learning."
        },
        {
          id: "accenture",
          school: "Accenture",
          degree: "Workshop Digital Skills & Mobile",
          period: "2023",
          description: "Corso intensivo su competenze digitali, metodologie agili e sviluppo mobile."
        },
        {
          id: "cert-excel",
          school: "Certificazioni Professionali",
          degree: "Excel Base ad Avanzato",
          period: "2023",
          description: "Padronanza di tabelle pivot, macro, analisi dati complessa e automazione fogli di calcolo."
        },
        {
          id: "sbordone",
          school: "Liceo Scientifico Francesco Sbordone",
          degree: "Diploma di Maturità Scientifica",
          period: "2015 - 2020",
          description: "Focus su matematica, fisica e scienze naturali."
        }
      ]
    },
    skills: {
      title: "Tech Stack & Competenze",
      categories: [
        { title: "Engineering", icon: "Cpu", skills: ["Sistemi Embedded", "CAD SolidWorks", "Autodesk Fusion", "MATLAB/Simulink"] },
        { title: "Software", icon: "Code2", skills: ["C / C++", "Swift / SwiftUI", "Python", "Git / GitHub"] },
        { title: "Tools", icon: "Terminal", skills: ["Controllo PID", "Analisi Dati", "Excel Avanzato", "SAP"] },
        { title: "Design", icon: "Layers", skills: ["UI/UX Design", "Graphic Design", "Industrial Design"] },
        { title: "Soft Skills", icon: "Users", skills: ["Problem Solving", "Lavoro di Squadra", "Pensiero Critico", "Adattabilità"] },
        { title: "Certificazioni", icon: "Award", skills: ["Accenture Digital Skills", "Apple Search Ads", "Accenture Mobile", "Excel Specialist"] }
      ]
    },
    contact: {
      title: "Lavoriamo insieme.",
      subtitle: "Interessato a una collaborazione? Scegli l'opzione che meglio si adatta alle tue esigenze.",
      qr_title: "Save my Contact",
      qr_subtitle: "Inquadra per salvare i miei riferimenti direttamente in rubrica.",
      form: {
        name: "Nome",
        email: "Email",
        interest: "Interesse",
        message: "Messaggio",
        send: "Invia Richiesta",
        success: "Messaggio inviato correttamente!",
        interests: [
          "Opportunità lavorativa",
          "Collaborazione Progetto",
          "Consulenza Tecnica",
          "Altro"
        ]
      },
      location: "Italia, NA"
    }
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      badge: "Mechatronic Engineer",
      tagline: "Designing at the intersection of bits and atoms.",
      cta_primary: "Let's start a project",
      cta_secondary: "Experience",
      cta_cv: "Download CV",
      words: ["Mechatronic Engineer", "iOS Developer", "Automation Expert", "Industrial Designer", "Problem Solver"]
    },
    cv: {
      objective: "My goal is to apply my knowledge and experience in computer, mechanical and electrical engineering to design and develop innovative solutions.",
      contactTitle: "CONTACT",
      skillsTitle: "COMPETENCIES",
      softSkillsTitle: "SOFT SKILLS",
      languagesTitle: "LANGUAGES",
      expTitle: "PROFESSIONAL EXPERIENCE",
      eduTitle: "EDUCATION",
      certTitle: "CERTIFICATIONS",
      languagesList: ["Italian - Native", "English - B2 Certified"]
    },
    projects: {
      title: "Case Studies",
      subtitle: "Technical analysis of real-world solutions across engineering and software.",
      items: [
        {
          id: "novartis-automation",
          title: "GMP Pharma Standardization",
          category: "Industrial Automation",
          tech: ["GMP", "SAP", "Audit Trail"],
          icon: "Briefcase",
          problem: "Regulatory compliance needs.",
          solution: "Qualification protocols implementation.",
          results: "100% compliance during audits."
        }
      ]
    },
    experience: {
      title: "Work Experience",
      subtitle: "A journey through industrial automation, data analysis, and robotics.",
      items: [
        {
          id: "novartis",
          company: "Novartis",
          role: "Automation Engineer",
          period: "January 2025 – October 2025",
          description: "Advancing industrial automation and robotics projects. Qualification documentation (IQ, OQ, PQ) and data integrity management in GMP environment.",
          tags: ["Automation", "GMP", "SAP", "Robotics"]
        },
        {
          id: "telus",
          company: "Telus Digital",
          role: "Data Analyst",
          period: "2024 - 2025",
          description: "Analyzing and optimizing search results to improve AI systems, specifically within the Siri ecosystem.",
          tags: ["AI", "Data Analysis", "Siri Ecosystem", "Quality Assurance"]
        }
      ]
    },
    education: {
      title: "Education & Certifications",
      subtitle: "Building solid foundations between Naples and the Apple ecosystem.",
      items: [
        {
          id: "unina",
          school: "University of Naples Federico II",
          degree: "Mechatronic Engineering",
          period: "2022 - 2025",
          description: "Academic path focused on the integration of mechanical, electronic, and computer systems."
        },
        {
          id: "apple",
          school: "Apple Developer Academy",
          degree: "iOS Development & Design",
          period: "2023 - 2024",
          description: "App development for the iOS ecosystem using Challenge Based Learning."
        },
        {
          id: "accenture",
          school: "Accenture",
          degree: "Digital Skills & Mobile Workshop",
          period: "2023",
          description: "Intensive course on digital competencies, agile methodologies, and mobile development."
        },
        {
          id: "cert-excel",
          school: "Professional Certifications",
          degree: "Excel Basic to Advanced",
          period: "2023",
          description: "Mastery of pivot tables, macros, complex data analysis, and spreadsheet automation."
        },
        {
          id: "sbordone",
          school: "Liceo Scientifico Francesco Sbordone",
          degree: "Scientific High School Diploma",
          period: "2015 - 2020",
          description: "Focus on mathematics, physics, and natural sciences."
        }
      ]
    },
    skills: {
      title: "Tech Stack & Skills",
      categories: [
        { title: "Engineering", icon: "Cpu", skills: ["Embedded Systems", "SolidWorks", "Fusion 360", "MATLAB"] },
        { title: "Software", icon: "Code2", skills: ["C / C++", "SwiftUI", "Python", "Git"] },
        { title: "Tools", icon: "Terminal", skills: ["PID Control", "Data Analysis", "Advanced Excel", "SAP"] },
        { title: "Design", icon: "Layers", skills: ["UI/UX Design", "Graphic Design", "Industrial Design"] },
        { title: "Soft Skills", icon: "Users", skills: ["Problem Solving", "Teamwork", "Critical Thinking", "Adaptability"] },
        { title: "Certs", icon: "Award", skills: ["Accenture Digital", "Apple Search Ads", "Advanced Excel"] }
      ]
    },
    contact: {
      title: "Let's work together.",
      subtitle: "Interested in collaborating? Choose the option that best fits your needs.",
      qr_title: "Save my Contact",
      qr_subtitle: "Scan to save my details directly into your address book.",
      form: {
        name: "Name",
        email: "Email",
        interest: "Interest",
        message: "Message",
        send: "Send Request",
        success: "Message sent successfully!",
        interests: [
          "Job Opportunity",
          "Project Collaboration",
          "Technical Consulting",
          "Other"
        ]
      },
      location: "Italy, NA"
    }
  }
};

export const PROFILE = {
  name: "Fabio Festa",
  email: "fabiofesta0807@gmail.com",
  phone: "+39 3200264084",
  linkedin: "linkedin.com/in/fabio-festa-a8164b23a",
  linkedinFull: "https://www.linkedin.com/in/fabio-festa-a8164b23a/",
  location: "Italia, NA",
  birthDate: "08/07/2001"
};

export const VCARD_STRING = `BEGIN:VCARD
VERSION:3.0
FN:Fabio Festa
TEL;TYPE=CELL:+393200264084
EMAIL:fabiofesta0807@gmail.com
URL:https://www.linkedin.com/in/fabio-festa-a8164b23a
TITLE:Mechatronic Engineer
END:VCARD`;

export const ICONS = {
  Briefcase,
  GraduationCap,
  Code2,
  Cpu,
  Languages,
  Award,
  Terminal,
  Layers,
  BrainCircuit,
  Users,
  Settings,
  AppWindow,
  Zap,
  Wrench,
  Database,
  Monitor,
  BookOpen,
  Microscope,
  FileDown,
  Phone,
  Mail,
  LinkedinIcon,
  MapPin,
  Calendar,
  Rss,
  Lightbulb,
  Search,
  CheckCircle2,
  Rocket,
  Sparkles,
  Command,
  Bot,
  Mic,
  X,
  Activity,
  Sliders,
  Target,
  Trophy,
  QrCode,
  Smartphone,
  Box,
  Fingerprint,
  ClipboardCheck,
  Play
};
