export enum SectionType {
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  SKILLS = 'skills',
  CONTACT = 'contact'
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags?: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
