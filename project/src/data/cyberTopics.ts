export type CyberTopic = {
  id: string;
  title: string;
  icon: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
  checklist: string[];
};

export const cyberTopics: CyberTopic[] = [
  {
    id: 'scam-detection',
    title: 'Scam Detection',
    icon: 'ShieldAlert',
    excerpt: 'Spot the warning signs of online scams before you lose money or data.',
    sections: [
      {
        heading: 'Common red flags',
        body: 'Urgency ("act now or lose access"), unsolicited contact, requests for gift cards or crypto, promises of free money, and anyone who pressures you to act before you can think. Legitimate organizations never demand instant payment or threaten you over the phone.',
      },
      {
        heading: 'Verify before you trust',
        body: 'If a message claims to be from your bank, close the message and contact the bank directly using the number on the back of your card. Never call the number in the suspicious message. Real companies expect you to verify — scammers depend on you not checking.',
      },
    ],
    checklist: [
      'Pause before responding to any urgent message',
      'Verify through an official channel, not the contact info in the message',
      'Never pay with gift cards, crypto, or wire transfers to strangers',
      'Report scams to your local consumer protection authority',
    ],
  },
  {
    id: 'fake-websites',
    title: 'Fake Websites',
    icon: 'GlobeLock',
    excerpt: 'How to tell a real site from a convincing clone built to steal your details.',
    sections: [
      {
        heading: 'Check the URL carefully',
        body: 'Scammers register look-alike domains like "paypa1.com" or "arnazon.net". Look for misspellings, extra hyphens, or unusual country codes. Bookmark the real sites you use for banking and shopping so you never type the URL by hand.',
      },
      {
        heading: 'Look for the padlock',
        body: 'A padlock icon means the connection is encrypted — but it does NOT mean the site is legitimate. Anyone can get a certificate. The padlock is necessary but not sufficient. Combine it with URL checking and reputation checks.',
      },
    ],
    checklist: [
      'Read the URL character by character before entering login details',
      'Bookmark important sites instead of typing their addresses',
      'Be wary of sites found through ads or email links',
      'Check reviews on independent sites, not testimonials on the page itself',
    ],
  },
  {
    id: 'phishing',
    title: 'Phishing',
    icon: 'Fish',
    excerpt: 'Recognize phishing emails and texts that try to trick you into giving up credentials.',
    sections: [
      {
        heading: 'How phishing works',
        body: 'Phishing messages impersonate trusted brands to steal usernames, passwords, or payment info. They often link to fake login pages or ask you to "confirm" account details. The goal is to capture what you type.',
      },
      {
        heading: 'Don\'t click, navigate',
        body: 'Instead of clicking a link in an email, go to the service directly by typing the address or using your bookmark. If the message is real, the notification will be waiting in your account. If not, you\'ve avoided the trap.',
      },
    ],
    checklist: [
      'Never enter passwords after clicking an email link',
      'Hover over links to preview the real destination',
      'Check the sender\'s full email address, not just the display name',
      'Forward suspicious emails to the brand\'s official abuse address',
    ],
  },
  {
    id: 'password-security',
    title: 'Password Security',
    icon: 'KeyRound',
    excerpt: 'Create strong passwords you don\'t have to remember — and never reuse.',
    sections: [
      {
        heading: 'Use a password manager',
        body: 'A password manager generates and remembers unique, long passwords for every account. You only memorize one strong master password. Bitwarden, 1Password, and Apple Passwords are solid options. This single step prevents the vast majority of account takeovers.',
      },
      {
        heading: 'Length beats complexity',
        body: 'A 16-character passphrase like "purple-elephant-window-42" is stronger than "P@ssw0rd!" and easier to remember. Length is what defeats brute-force cracking. Every account should have a different password.',
      },
    ],
    checklist: [
      'Install a password manager today',
      'Generate a unique password for every account',
      'Use passphrases of 16+ characters for your master password',
      'Replace your oldest reused passwords first',
    ],
  },
  {
    id: 'account-protection',
    title: 'Account Protection',
    icon: 'UserCheck',
    excerpt: 'Lock down your accounts with two-factor authentication and recovery settings.',
    sections: [
      {
        heading: 'Turn on 2FA everywhere',
        body: 'Two-factor authentication requires a second proof (a code from an app or a security key) in addition to your password. Use an authenticator app like Authy or Google Authenticator — SMS codes are better than nothing but can be intercepted. A hardware key like YubiKey is the gold standard.',
      },
      {
        heading: 'Secure your recovery options',
        body: 'An attacker who controls your email can reset every password you have. Secure your primary email with 2FA and a unique password. Review your recovery phone number and backup codes regularly.',
      },
    ],
    checklist: [
      'Enable 2FA on email, banking, and social accounts first',
      'Use an authenticator app over SMS where possible',
      'Store backup codes offline in a safe place',
      'Review connected apps and revoke ones you don\'t recognize',
    ],
  },
  {
    id: 'online-privacy',
    title: 'Online Privacy',
    icon: 'EyeOff',
    excerpt: 'Reduce how much of your personal data is collected, sold, and exposed.',
    sections: [
      {
        heading: 'Minimize what you share',
        body: 'Every account, app, and form collects data. Use a secondary email for signups, avoid giving your real birthdate when it isn\'t legally required, and think twice before granting camera, location, or contacts permissions to a new app.',
      },
      {
        heading: 'Check your social privacy settings',
        body: 'Most platforms default to more sharing than you\'d want. Review who can see your posts, who can tag you, and whether your profile is searchable. Turn off ad personalization where offered. Audit these settings every few months as platforms change defaults.',
      },
    ],
    checklist: [
      'Use a separate email for non-essential signups',
      'Review app permissions monthly',
      'Audit social media privacy settings quarterly',
      'Consider a VPN on public Wi-Fi',
    ],
  },
];
