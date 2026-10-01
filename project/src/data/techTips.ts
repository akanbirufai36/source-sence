export type TechTip = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  category: 'Android' | 'Computer' | 'Smartphone' | 'Useful Websites' | 'Apps' | 'Digital Productivity';
  readTime: string;
};

export const techTipCategories = [
  'Android',
  'Computer',
  'Smartphone',
  'Useful Websites',
  'Apps',
  'Digital Productivity',
] as const;

export const techTips: TechTip[] = [
  {
    id: 'android-battery',
    title: 'Stop Android Battery Drain in 5 Minutes',
    excerpt: 'Find the hidden apps eating your battery and lock them down with built-in settings.',
    body: 'Open Settings > Battery > Battery Usage. Sort by "App usage since full charge" to spot rogue apps. For anything you rarely use, tap it and select "Restricted" under battery management. Turn off background usage for social apps you don\'t need real-time alerts from. Finally, enable Adaptive Battery if your phone supports it — it learns your habits and idles rarely-used apps automatically.',
    category: 'Android',
    readTime: '3 min',
  },
  {
    id: 'android-storage',
    title: 'Free Up 10GB on Android Without Losing Photos',
    excerpt: 'Use Google Files and smart cache clearing to reclaim space safely.',
    body: 'Install Google Files (or open the built-in Files app). Run "Clean" — it safely identifies duplicates, large files, and junk caches. Move photos to Google Photos with "Free up space" mode, which keeps cloud copies and removes local duplicates. Clear the cache (not data) of bulky apps like Spotify and TikTok from Settings > Apps. Uninstall apps you haven\'t opened in 90 days — you can reinstall with progress intact for most games.',
    category: 'Android',
    readTime: '4 min',
  },
  {
    id: 'computer-speed',
    title: 'Make a Slow PC Feel New Again',
    excerpt: 'A no-cost routine to speed up Windows without installing "optimizers".',
    body: 'Open Task Manager > Startup and disable everything you don\'t need at boot. Run "Disk Cleanup" and clear old Windows update files. Enable Storage Sense to auto-clear temp files weekly. If you have an HDD, defragment it; if an SSD, leave it alone. Uninstall trialware and bloatware that shipped with the PC. Finally, add more RAM if you\'re under 8GB — it\'s the single biggest cheap upgrade.',
    category: 'Computer',
    readTime: '5 min',
  },
  {
    id: 'computer-shortcuts',
    title: '20 Keyboard Shortcuts That Save Hours a Week',
    excerpt: 'The shortcuts power users actually use, not the ones nobody remembers.',
    body: 'Win+V opens clipboard history (Windows). Ctrl+Shift+T reopens a closed tab. Win+Arrow snaps windows to halves. Win+D shows desktop. Ctrl+L jumps to the address bar. Alt+Tab switches apps. Win+Number opens the pinned taskbar app in that slot. F2 renames a selected file. Ctrl+F finds on any page. Win+Shift+S opens the screenshot tool. Practice five at a time until they\'re muscle memory.',
    category: 'Computer',
    readTime: '4 min',
  },
  {
    id: 'smartphone-night-mode',
    title: 'The Night Mode Settings That Actually Help You Sleep',
    excerpt: 'Blue light filters are just the start — here\'s the full wind-down setup.',
    body: 'Enable Night Light (Android) or Night Shift (iOS) on a sunset-to-sunrise schedule. Turn on Dark Mode system-wide. Set Do Not Disturb from 10pm to 7am with only favorite contacts allowed through. Disable lock-screen notifications for social apps. In display settings, lower brightness below 30% in the evening. Consider a grayscale mode for the last hour — it makes your phone noticeably less compelling.',
    category: 'Smartphone',
    readTime: '3 min',
  },
  {
    id: 'smartphone-data-saver',
    title: 'Cut Your Mobile Data Usage in Half',
    excerpt: 'Built-in data saver modes plus per-app controls that actually work.',
    body: 'Enable Data Saver in Settings > Network (Android) or Low Data Mode (iOS). In your most-used apps, turn off autoplay video on cellular. In Spotify and YouTube, set "Limit mobile data usage" and download playlists on Wi-Fi. In Maps, download offline areas for your home city. In Instagram and TikTok, switch to "Data Saver" in app settings. Check your usage after a week — most people see a 40-60% drop.',
    category: 'Smartphone',
    readTime: '4 min',
  },
  {
    id: 'websites-remove-bg',
    title: 'Remove Image Backgrounds Free in Seconds',
    excerpt: 'No Photoshop needed — these web tools do it in one click.',
    body: 'Go to remove.bg and upload any image — it returns a clean PNG instantly, free for standard resolution. For higher resolution without paying, use Adobe Express\' free background remover with a free account. For batch jobs, try Photoroom\'s web app. All three work in a browser, no install required, and the results rival paid tools.',
    category: 'Useful Websites',
    readTime: '2 min',
  },
  {
    id: 'websites-wayback',
    title: 'See Any Website\'s Old Versions with the Wayback Machine',
    excerpt: 'A free archive that lets you view pages as they were years ago.',
    body: 'Visit web.archive.org and paste any URL. You\'ll see a calendar of every snapshot the Internet Archive captured. Click a date to view the site as it looked then. Useful for finding deleted content, old pricing, or broken links that used to work. You can also request a fresh archive of any page with "Save Page Now".',
    category: 'Useful Websites',
    readTime: '2 min',
  },
  {
    id: 'apps-notion',
    title: 'Use Notion as Your Second Brain',
    excerpt: 'A simple setup for capturing notes, tasks, and references in one place.',
    body: 'Start with one "Inbox" database for quick captures. Add a "Tasks" database with a Today / This Week / Later view. Create a "Reference" database for articles, links, and snippets. Use the Notion Web Clipper to save pages straight into your Inbox. Review weekly: move inbox items to their proper home, promote tasks, and archive finished items. Keep it simple — complexity is what kills personal systems.',
    category: 'Apps',
    readTime: '5 min',
  },
  {
    id: 'apps-pocket',
    title: 'Save Articles to Read Later Without Losing Them',
    excerpt: 'Stop leaving 200 tabs open — use a read-later app instead.',
    body: 'Install Pocket or Instapaper. When you find a long article, share it to the app instead of leaving a tab open. Both strip ads and reformat text for comfortable reading. Tag articles by topic so you can find them later. Set a weekly "read later" reminder — most people save far more than they read, so prune regularly.',
    category: 'Apps',
    readTime: '3 min',
  },
  {
    id: 'productivity-pomodoro',
    title: 'The Pomodoro Method, Done Right',
    excerpt: '25 minutes on, 5 off — but the real trick is how you handle breaks.',
    body: 'Set a timer for 25 minutes and work on a single task. When it rings, take a real 5-minute break — stand up, look out a window, get water. After four rounds, take a longer 15-30 minute break. The key rule: if you\'re interrupted mid-session, either note it and keep going, or restart the timer — don\'t half-work. Track completed sessions to see your real capacity. Most people manage 8-12 focused sessions a day.',
    category: 'Digital Productivity',
    readTime: '4 min',
  },
  {
    id: 'productivity-inbox-zero',
    title: 'Reach Inbox Zero Without Losing Important Mail',
    excerpt: 'A folder system that keeps your inbox empty and your mail findable.',
    body: 'Create four folders: Action, Waiting, Reference, Archive. Process mail top to bottom, one at a time. If it needs a reply under 2 minutes, reply now. If longer, move to Action. If you\'re waiting on someone, move to Waiting. Anything you might need later goes to Reference. Everything else gets archived. Never leave read mail in the inbox — decide once, move once. Check Action daily and Waiting weekly.',
    category: 'Digital Productivity',
    readTime: '5 min',
  },
];
