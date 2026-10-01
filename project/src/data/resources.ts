export type ResourceLink = {
  name: string;
  url: string;
  description: string;
};

export type ResourceCategory = {
  id: string;
  title: string;
  icon: string;
  description: string;
  links: ResourceLink[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'learning',
    title: 'Learning & Courses',
    icon: 'GraduationCap',
    description: 'Free and low-cost platforms to learn new skills.',
    links: [
      { name: 'Khan Academy', url: 'https://www.khanacademy.org', description: 'Free lessons from K-12 through college level.' },
      { name: 'Coursera', url: 'https://www.coursera.org', description: 'University courses, free to audit.' },
      { name: 'edX', url: 'https://www.edx.org', description: 'Courses from Harvard, MIT, and more.' },
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org', description: 'Free coding bootcamp with certifications.' },
      { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu', description: 'MIT course materials, free and open.' },
    ],
  },
  {
    id: 'research',
    title: 'Research & Reference',
    icon: 'BookOpen',
    description: 'Tools for finding and organizing information.',
    links: [
      { name: 'Google Scholar', url: 'https://scholar.google.com', description: 'Search academic literature.' },
      { name: 'Wikipedia', url: 'https://www.wikipedia.org', description: 'The free encyclopedia — great as a starting point.' },
      { name: 'Zotero', url: 'https://www.zotero.org', description: 'Free reference manager.' },
      { name: 'Internet Archive', url: 'https://archive.org', description: 'Free books, movies, software, and the Wayback Machine.' },
      { name: 'WorldCat', url: 'https://www.worldcat.org', description: 'Find books in libraries near you.' },
    ],
  },
  {
    id: 'productivity',
    title: 'Productivity & Organization',
    icon: 'LayoutDashboard',
    description: 'Apps to plan, focus, and get things done.',
    links: [
      { name: 'Notion', url: 'https://www.notion.so', description: 'All-in-one notes, tasks, and docs.' },
      { name: 'Todoist', url: 'https://todoist.com', description: 'Simple, powerful task manager.' },
      { name: 'Trello', url: 'https://trello.com', description: 'Visual kanban boards for projects.' },
      { name: 'Google Keep', url: 'https://keep.google.com', description: 'Quick notes and lists.' },
      { name: 'Pomofocus', url: 'https://pomofocus.io', description: 'Free Pomodoro timer in your browser.' },
    ],
  },
  {
    id: 'design',
    title: 'Design & Creativity',
    icon: 'Palette',
    description: 'Tools for creating visuals, presentations, and media.',
    links: [
      { name: 'Canva', url: 'https://www.canva.com', description: 'Design anything with templates.' },
      { name: 'Figma', url: 'https://www.figma.com', description: 'Free collaborative design tool.' },
      { name: 'remove.bg', url: 'https://www.remove.bg', description: 'Remove image backgrounds free.' },
      { name: 'Unsplash', url: 'https://unsplash.com', description: 'Free high-quality stock photos.' },
      { name: 'Pexels', url: 'https://www.pexels.com', description: 'Free stock photos and videos.' },
    ],
  },
  {
    id: 'safety',
    title: 'Online Safety & Privacy',
    icon: 'ShieldCheck',
    description: 'Tools to protect your accounts and data.',
    links: [
      { name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com', description: 'Check if your email appears in data breaches.' },
      { name: 'Bitwarden', url: 'https://bitwarden.com', description: 'Free, open-source password manager.' },
      { name: 'Authy', url: 'https://authy.com', description: 'Free 2FA authenticator app.' },
      { name: 'Privacy Badger', url: 'https://privacybadger.org', description: 'Browser extension that blocks trackers.' },
      { name: 'ProtonMail', url: 'https://proton.me/mail', description: 'Free encrypted email.' },
    ],
  },
  {
    id: 'utilities',
    title: 'Everyday Utilities',
    icon: 'Wrench',
    description: 'Handy tools for common tasks.',
    links: [
      { name: 'PDF24', url: 'https://tools.pdf24.org', description: 'Free PDF tools — merge, split, convert.' },
      { name: 'TinyPNG', url: 'https://tinypng.com', description: 'Compress images without quality loss.' },
      { name: 'Squoosh', url: 'https://squoosh.app', description: 'Advanced image compression in-browser.' },
      { name: 'VirusTotal', url: 'https://www.virustotal.com', description: 'Scan files and URLs for malware.' },
      { name: 'Temp Mail', url: 'https://temp-mail.org', description: 'Disposable email for one-time signups.' },
    ],
  },
];
