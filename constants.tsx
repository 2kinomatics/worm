
import { GradeLevel, Resource, JournalEntry } from './types';

export const TEXT = {
  navHome: "Нүүр",
  navLibrary: "Номын сан",
  navVolunteer: "Сайн дурынхан",
  navProfile: "Хувийн мэдээлэл",
  heroTitle: "Анир",
  heroTag1: "Баталгаажсан ангиуд",
  heroTag2: "Үе тэнгийн зөвлөгөө",
  heroTag3: "Нээлттэй эх сурвалж",
  heroSubtitle: "Суралцах ирээдүй",
  missionTitle: "Монгол сурагчдад зориулсан нээлттэй боловсролын гүүр.",
  missionDesc: "Мэдлэг эрэлхийлэхэд нэг ч сурагч хоцрохгүй байхын тулд үе тэнгийн зөвлөгчид болон бэлтгэсэн эх сурвалжуудыг холбож байна.",
  impactTitle: "Нөлөөллийн тайлан 2024",
  impactSub: "Талын даяарх бидний өсөлтийг хянах.",
  libraryTitle: "Эрдэм шинжилгээний номын сан",
  librarySub: "Бүх түвшний сурагчдад зориулсан баталгаажсан Монгол сургалтын хөтөлбөрийн материалууд.",
  searchPlaceholder: "Хичээл, сэдэв эсвэл түлхүүр үгээр хайх...",
  volunteerTitle: "Туршлага хуримтлуул.",
  volunteerSub: "Өөртэйгөө адил сурагчдад тусал.",
  joinButton: "Одоо нэгдэх",
  profileTitle: "Хувийн мэдээлэл",
  profileSub: "Сурагчийн үнэмлэх",
};

export const MOCK_RESOURCES: Resource[] = [
  { id: '1', title: 'Гурван гишүүнтийг үржигдэхүүн болгон задлах', subject: 'Algebra 1', level: GradeLevel.GRADE_9, type: 'Text', duration: '20м', progress: 100, subTopic: 'Олон гишүүнт' },
  { id: '2', title: 'Үелэх систем', subject: 'Inorganic Chemistry', level: GradeLevel.GRADE_10, type: 'Quiz', duration: '15м', progress: 80, subTopic: 'Элементүүд' },
  { id: '3', title: 'Пифагорын теорем', subject: 'Geometry', level: GradeLevel.GRADE_8, type: 'Image', duration: '10м', progress: 100, subTopic: 'Гурвалжин' },
  { id: '4', title: 'Шекспирийн сонетууд', subject: 'Classical Literature', level: GradeLevel.GRADE_10, type: 'Text', duration: '25м', progress: 10, subTopic: 'Яруу найраг' },
  { id: '5', title: 'Нүүрстөрөгчийн нэгдлүүд', subject: 'Organic Chemistry', level: GradeLevel.GRADE_12, type: 'Quiz', duration: '30м', progress: 0, subTopic: 'Нүүрсустөрөгч' },
  { id: '6', title: 'Эсийн хуваагдал', subject: 'Biology', level: GradeLevel.GRADE_9, type: 'Text', duration: '20м', progress: 0, subTopic: 'Митоз' },
  { id: '7', title: 'Эртний иргэншил', subject: 'World History', level: GradeLevel.GRADE_7, type: 'Text', duration: '40м', progress: 0, subTopic: 'Месопотами' },
  { id: '8', title: 'Дифференциалчлалын үндэс', subject: 'Calculus', level: GradeLevel.GRADE_12, type: 'Text', duration: '35м', progress: 0, subTopic: 'Хязгаар' },
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
  { word: "Билигт", translation: "Мэргэн ухаан", language: "Монгол", pronunciation: "Би-лигт", sentence: "Жинхэнэ билигт нь насан туршийн нээлттэй суралцахаас ирдэг." },
  { word: "Эрдэм", translation: "Мэдлэг / Чадвар", language: "Монгол", pronunciation: "Эр-дэм", sentence: "Эрдмийн зам нь алхам алхмаар суралцах замаар бүтээгддэг." },
  { word: "Сургаал", translation: "Зааварчилгаа", language: "Монгол", pronunciation: "Сур-гаал", sentence: "Мэргэн сургаал нь сурагчийг ямар ч бэрхшээлийг даван туулахад чиглүүлж чадна." },
  { word: "Нөхөрлөл", translation: "Найз нөхөд", language: "Монгол", pronunciation: "Нө-хөр-лөл", sentence: "Манай нийгэмлэг нөхөрлөлийн хүч дээр тогтдог." },
];

export const NAV_ITEMS = [
  { id: 'home', labelKey: 'navHome' },
  { id: 'resources', labelKey: 'navLibrary' },
  { id: 'tutor-apply', labelKey: 'navVolunteer' },
  { id: 'profile', labelKey: 'navProfile' },
];
