export type StudentResource = {
  id: string;
  title: string;
  description: string;
  category: 'AI Prompts' | 'Research Tools' | 'Study Techniques' | 'Digital Literacy' | 'Productivity Tools' | 'Useful Free Websites';
  link?: string;
};

export const studentCategories = [
  'AI Prompts',
  'Research Tools',
  'Study Techniques',
  'Digital Literacy',
  'Productivity Tools',
  'Useful Free Websites',
] as const;

export const studentResources: StudentResource[] = [
  {
    id: 'prompt-explain',
    title: 'The "Explain Like I\'m a Beginner" Prompt',
    description: 'Ask any AI: "Explain [topic] like I\'m a complete beginner, using a real-world analogy, then give me 3 questions to check my understanding." Perfect for breaking down hard concepts.',
    category: 'AI Prompts',
  },
  {
    id: 'prompt-study-plan',
    title: 'The Study-Plan Generator Prompt',
    description: '"I have an exam on [subject] in [X] days. I can study [Y] hours per day. Create a day-by-day plan with topics, practice questions, and review days." Gets a structured schedule instantly.',
    category: 'AI Prompts',
  },
  {
    id: 'prompt-quiz-me',
    title: 'The Active-Recall Quiz Prompt',
    description: '"Act as my tutor. Ask me one question at a time about [topic], wait for my answer, then tell me if I\'m right and explain. Increase difficulty as I improve." Turns passive reading into active practice.',
    category: 'AI Prompts',
  },
  {
    id: 'prompt-summarize',
    title: 'The Paper-Summarizer Prompt',
    description: '"Summarize this paper in 5 bullet points: the question, method, key finding, limitation, and why it matters. Use plain language." Great for getting through dense academic reading.',
    category: 'AI Prompts',
  },
  {
    id: 'research-google-scholar',
    title: 'Google Scholar',
    description: 'Free search of scholarly literature across disciplines. Set up alerts for your topic and use "Cited by" to find newer related work.',
    category: 'Research Tools',
    link: 'https://scholar.google.com',
  },
  {
    id: 'research-zotero',
    title: 'Zotero',
    description: 'Free reference manager that collects, organizes, and cites sources. Browser extension captures PDFs and metadata with one click.',
    category: 'Research Tools',
    link: 'https://www.zotero.org',
  },
  {
    id: 'research-connected-papers',
    title: 'Connected Papers',
    description: 'Paste a paper and get a visual graph of related work. The fastest way to map a research area.',
    category: 'Research Tools',
    link: 'https://www.connectedpapers.com',
  },
  {
    id: 'study-feynman',
    title: 'The Feynman Technique',
    description: 'Explain a concept in plain language as if teaching a beginner. Wherever you get stuck or use jargon, that\'s the gap in your understanding. Go back, fill it, and try again.',
    category: 'Study Techniques',
  },
  {
    id: 'study-spaced-repetition',
    title: 'Spaced Repetition',
    description: 'Review material at increasing intervals (1 day, 3 days, 1 week, 2 weeks) instead of cramming. Use Anki or Quizlet — they schedule reviews automatically based on what you forget.',
    category: 'Study Techniques',
  },
  {
    id: 'study-cornell-notes',
    title: 'Cornell Note-Taking',
    description: 'Split your page: narrow left column for keywords/questions, wide right for notes, bottom for a summary. Cover the right and quiz yourself from the left column.',
    category: 'Study Techniques',
  },
  {
    id: 'literacy-fact-check',
    title: 'The SIFT Method for Fact-Checking',
    description: 'Stop. Investigate the source. Find better coverage. Trace claims to the original. Four quick habits that stop most misinformation in its tracks.',
    category: 'Digital Literacy',
  },
  {
    id: 'literacy-lateral-reading',
    title: 'Lateral Reading',
    description: 'Don\'t evaluate a site by staying on it. Open new tabs and see what trusted sources say about it. This is what professional fact-checkers do.',
    category: 'Digital Literacy',
  },
  {
    id: 'literacy-spot-ai',
    title: 'Spotting AI-Generated Content',
    description: 'Look for overly fluent text with no real sources, perfect grammar with vague specifics, images with warped text or extra fingers, and videos with lip-sync mismatches. Verify surprising claims independently.',
    category: 'Digital Literacy',
  },
  {
    id: 'prod-notion',
    title: 'Notion (Free for Students)',
    description: 'All-in-one workspace for notes, tasks, and databases. The free Education plan unlocks unlimited file uploads for verified students.',
    category: 'Productivity Tools',
    link: 'https://www.notion.so',
  },
  {
    id: 'prod-todoist',
    title: 'Todoist',
    description: 'Clean task manager with natural-language input ("read chapter 4 tomorrow at 3pm"). The free tier handles most student workflows.',
    category: 'Productivity Tools',
    link: 'https://todoist.com',
  },
  {
    id: 'prod-focus-keeper',
    title: 'Focus Keeper / Pomofocus',
    description: 'Free Pomodoro timers that track your focus sessions. Pomofocus runs in the browser with no signup.',
    category: 'Productivity Tools',
    link: 'https://pomofocus.io',
  },
  {
    id: 'free-libretext',
    title: 'LibreTexts',
    description: 'Free, open-access textbooks across science, math, and social sciences. A real alternative to expensive course materials.',
    category: 'Useful Free Websites',
    link: 'https://libretexts.org',
  },
  {
    id: 'free-khan',
    title: 'Khan Academy',
    description: 'Free video lessons and practice exercises from early math through college-level economics and biology.',
    category: 'Useful Free Websites',
    link: 'https://www.khanacademy.org',
  },
  {
    id: 'free-coursera',
    title: 'Coursera (Free Audit)',
    description: 'Audit thousands of university courses for free. You won\'t get a certificate, but you get full access to videos and readings.',
    category: 'Useful Free Websites',
    link: 'https://www.coursera.org',
  },
];
