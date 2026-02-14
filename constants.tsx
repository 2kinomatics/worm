
import { GradeLevel, Resource, JournalEntry } from './types';

export const TEXT = {
  navHome: "Home",
  navLibrary: "ᠨᠣᠮ ᠤ᠋ᠨ ᠰᠠᠩ",
  navBlog: "Blog",
  navMatch: "Match",
  navVolunteer: "Volunteer",
  navStory: "Story",
  navProfile: "Profile",
  heroTitle: "Anir",
  heroTag1: "Verified Classrooms",
  heroTag2: "Peer Mentorship",
  heroTag3: "Open Resources",
  heroSubtitle: "The Future of Learning",
  missionTitle: "An open educational bridge for Mongolian scholars.",
  missionDesc: "Connecting peer mentors and curated resources to ensure no student is left behind in the pursuit of knowledge.",
  impactTitle: "Impact Report 2024",
  impactSub: "Tracking our growth across the steppes.",
  libraryTitle: "Academic Library",
  librarySub: "Verified Mongolian curriculum materials for scholars of all levels.",
  searchPlaceholder: "Search subjects, topics, or keywords...",
  matchTitle: "Peer Mentorship",
  matchSub: "Connect with a verified study partner. No account required to request help.",
  volunteerTitle: "Gain Experience.",
  volunteerSub: "Help students like yourself.",
  joinButton: "Join Now",
  aboutStory: "Our Story",
  aboutSub: "Anir: A digital bridge for Mongolian scholars, built on peer knowledge and community virtue.",
  profileTitle: "Profile",
  profileSub: "Scholar Identity",
  newsTitle: "Community Stories",
  newsSub: "Sharing insights, discoveries, and academic journeys from across Mongolia.",
};

export const MOCK_RESOURCES: Resource[] = [
  { id: '1', title: 'Factoring Trinomials', subject: 'Algebra 1', level: GradeLevel.GRADE_9, type: 'Text', duration: '20m', progress: 100, subTopic: 'Polynomials' },
  { id: '2', title: 'The Periodic Table', subject: 'Inorganic Chemistry', level: GradeLevel.GRADE_10, type: 'Quiz', duration: '15m', progress: 80, subTopic: 'Elements' },
  { id: '3', title: 'Pythagorean Theorem', subject: 'Geometry', level: GradeLevel.GRADE_8, type: 'Image', duration: '10m', progress: 100, subTopic: 'Triangles' },
  { id: '4', title: 'Shakespeare Sonnets', subject: 'Classical Literature', level: GradeLevel.GRADE_10, type: 'Text', duration: '25m', progress: 10, subTopic: 'Poetry' },
  { id: '5', title: 'Carbon Compounds', subject: 'Organic Chemistry', level: GradeLevel.GRADE_12, type: 'Quiz', duration: '30m', progress: 0, subTopic: 'Hydrocarbons' },
  { id: '6', title: 'Cell Division', subject: 'Biology', level: GradeLevel.GRADE_9, type: 'Text', duration: '20m', progress: 0, subTopic: 'Mitosis' },
  { id: '7', title: 'Ancient Civilizations', subject: 'World History', level: GradeLevel.GRADE_7, type: 'Text', duration: '40m', progress: 0, subTopic: 'Mesopotamia' },
  { id: '8', title: 'Differentiation Basics', subject: 'Calculus', level: GradeLevel.GRADE_12, type: 'Text', duration: '35m', progress: 0, subTopic: 'Limits' },
];

export const MOCK_JOURNALS: JournalEntry[] = [
  { 
    id: 'j1', 
    title: 'How technology helps us learn', 
    author: 'Elena R. (Grade 11)', 
    category: 'Community', 
    date: 'May 15, 2024', 
    readTime: '6 min',
    likes: 42,
    content: 'When we use new tools in our classrooms, it opens up so many new ways to understand the world. I love how we can explore big ideas together...',
    comments: [
      { id: 'c1', author: 'Marcus T.', text: 'I love this idea!', timestamp: '2h ago' }
    ]
  },
  { 
    id: 'j2', 
    title: 'My Journey through Math', 
    author: 'Julian M. (Grade 12)', 
    category: 'Math Tips', 
    date: 'May 10, 2024', 
    readTime: '4 min',
    likes: 28,
    content: 'Math used to be scary, but once I started looking at it like a puzzle, everything changed. Here are the tricks that helped me...',
    comments: []
  },
];

export const DAILY_WORDS = [
  { word: "Biligt", translation: "Wisdom", language: "Mongolian", pronunciation: "Bil-ig-t", sentence: "True biligt comes from a lifetime of open-minded learning." },
  { word: "Erdem", translation: "Virtue / Knowledge", language: "Mongolian", pronunciation: "Er-dem", sentence: "The path of erdem is built step by step through study." },
  { word: "Suraal", translation: "Instruction", language: "Mongolian", pronunciation: "Su-raal", sentence: "A wise suraal can guide a student through any difficulty." },
  { word: "Nuhurlul", translation: "Friendship", language: "Mongolian", pronunciation: "Nu-hur-lul", sentence: "Our community is built on the strength of nuhurlul." },
];

export const NAV_ITEMS = [
  { id: 'home', labelKey: 'navHome' },
  { id: 'resources', labelKey: 'navLibrary' },
  { id: 'news', labelKey: 'navBlog' },
  { id: 'tutor-match', labelKey: 'navMatch' },
  { id: 'tutor-apply', labelKey: 'navVolunteer' },
  { id: 'about', labelKey: 'navStory' },
  { id: 'profile', labelKey: 'navProfile' },
];
