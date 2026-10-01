import { Radar, Twitter, Youtube, Instagram, Music2 } from 'lucide-react';
import { Link } from '@/router';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'AI Tools', path: '/ai-tools' },
  { label: 'Tech Tips', path: '/tech-tips' },
  { label: 'Cybersecurity', path: '/cybersecurity' },
  { label: 'Student Hub', path: '/student-hub' },
  { label: 'Resources', path: '/resources' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const socials = [
  { icon: Music2, label: 'TikTok', href: 'https://www.tiktok.com' },
  { icon: Twitter, label: 'X', href: 'https://x.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-ink-900/50">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-electric-700">
                <Radar className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Source<span className="text-electric-400">Sense</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Reliable information. Smarter technology.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all hover:border-electric-400/40 hover:bg-electric-500/10 hover:text-electric-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Explore</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-400 transition-colors hover:text-electric-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Categories</h3>
            <ul className="space-y-2.5">
              <li><Link to="/ai-tools" className="text-sm text-slate-400 hover:text-electric-400">AI Tools Directory</Link></li>
              <li><Link to="/tech-tips" className="text-sm text-slate-400 hover:text-electric-400">Tech Tips Library</Link></li>
              <li><Link to="/cybersecurity" className="text-sm text-slate-400 hover:text-electric-400">Security Guides</Link></li>
              <li><Link to="/student-hub" className="text-sm text-slate-400 hover:text-electric-400">Student Resources</Link></li>
              <li><Link to="/resources" className="text-sm text-slate-400 hover:text-electric-400">Useful Websites</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Stay Updated</h3>
            <p className="mb-4 text-sm text-slate-400">Get the latest AI tools and tech tips delivered to you.</p>
            <Link to="/contact" className="btn-ghost w-full text-sm">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SourceSense. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for students and everyday internet users.
          </p>
        </div>
      </div>
    </footer>
  );
}
