export interface Pillar {
  title: string;
  description: string;
  outcomes: string[];
  skills: string[];
}

export interface StudyStage {
  id: string;
  title: string;
  duration: string;
  focus: string[];
  outcomes: string[];
  practices: string[];
}

export interface Resource {
  name: string;
  link: string;
  provider: string;
  description: string;
  format: 'course' | 'article' | 'book' | 'newsletter' | 'toolkit' | 'video' | 'community';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface ToolCategory {
  name: string;
  description: string;
  tools: Array<{
    name: string;
    link: string;
    note: string;
  }>;
}

export interface PracticeRoutine {
  label: string;
  description: string;
  cadence: string;
}
