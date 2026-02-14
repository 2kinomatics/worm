
export type AppView = 'home' | 'resources' | 'tutor-match' | 'tutor-apply' | 'settings' | 'auth' | 'profile' | 'news' | 'about';

export enum GradeLevel {
  GRADE_7 = 'Grade 7',
  GRADE_8 = 'Grade 8',
  GRADE_9 = 'Grade 9',
  GRADE_10 = 'Grade 10',
  GRADE_11 = 'Grade 11',
  GRADE_12 = 'Grade 12'
}

export type SubjectCategory = 
  | 'Algebra 1' 
  | 'Geometry' 
  | 'Calculus' 
  | 'Inorganic Chemistry' 
  | 'Organic Chemistry' 
  | 'Biology' 
  | 'World History' 
  | 'Classical Literature';

export interface Resource {
  id: string;
  title: string;
  subject: SubjectCategory;
  level: GradeLevel;
  type: 'Quiz' | 'Text' | 'Image';
  duration: string;
  progress: number;
  subTopic?: string;
  thumbnail?: string;
}

export interface JournalComment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  author: string;
  category: string;
  date: string;
  content: string;
  likes: number;
  readTime: string;
  comments: JournalComment[];
}

export interface UserProgress {
  lastResource: string;
  completedDates: string[]; // ISO Strings
  subjectStats: Record<string, number>;
}

export interface User {
  id: string;
  name: string;
  age?: number;
  phoneNumber: string;
  isTutor: boolean;
  gradeLevel: GradeLevel;
}
