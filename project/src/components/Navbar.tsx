import { useEffect, useState } from 'react';
import { Menu, X, Search, Radar } from 'lucide-react';
import { Link, useRouter } from '@/router';
import { SearchModal } from './SearchModal';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'AI Tools', path: '/ai-tools' },
  { label: 'Tech Tips', path: '/tech-tips' },
  { label: 'Cybersecurity', path: '/cybersecurity' },
  { label: 'Student Hub', path: '/student-hub' },
  { label: 'Resources', path: '/resources' },
  { label: 'About', path: '/about' },
];

export function Navbar() {
  const { path } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between lg:h-18">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 shadow-glow transition-transform group-hover:scale-105">
              <Radar className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Source<span className="text-electric-400">Sense</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = path === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    active ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-electric-400" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen ? 'max-h-[500px] border-t border-white/5' : 'max-h-0'
          }`}
        >
          <div className="container-page bg-ink-950/95 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = path === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      active ? 'bg-electric-500/10 text-electric-400' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
