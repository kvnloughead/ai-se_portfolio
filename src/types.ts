export interface Profile {
  name: string;
  title: string;
  blurb: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  locationUrl: string;
  locationText: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  /** One paragraph per entry. */
  description: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}
