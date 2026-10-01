import { useMemo, useState } from 'react';
import { Search, ArrowRight, Cpu, BookOpen, Shield, GraduationCap, LayoutGrid } from 'lucide-react';
import { Modal } from './Modal';
import { Link } from '@/router';
import { aiTools } from '@/data/aiTools';
import { techTips } from '@/data/techTips';
import { cyberTopics } from '@/data/cyberTopics';
import { studentResources } from '@/data/studentResources';

type SearchResult = {
  type: string;
  title: string;
  subtitle: string;
  path: string;
  icon: typeof Search;
};

const iconMap: Record<string, typeof Search> = {
  'AI Tools': Cpu,
  'Tech Tips': BookOpen,
  'Cybersecurity': Shield,
  'Student Hub': GraduationCap,
  'Resources': LayoutGrid,
};

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');

  const results = useMemo<SearchResult[]>(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    const out: SearchResult[] = [];

    for (const tool of aiTools) {
      if (tool.name.toLowerCase().includes(q) || tool.description.toLowerCase().includes(q)) {
        out.push({ type: 'AI Tools', title: tool.name, subtitle: tool.description, path: '/ai-tools', icon: iconMap['AI Tools'] });
      }
    }
    for (const tip of techTips) {
      if (tip.title.toLowerCase().includes(q) || tip.excerpt.toLowerCase().includes(q)) {
        out.push({ type: 'Tech Tips', title: tip.title, subtitle: tip.excerpt, path: '/tech-tips', icon: iconMap['Tech Tips'] });
      }
    }
    for (const topic of cyberTopics) {
      if (topic.title.toLowerCase().includes(q) || topic.excerpt.toLowerCase().includes(q)) {
        out.push({ type: 'Cybersecurity', title: topic.title, subtitle: topic.excerpt, path: '/cybersecurity', icon: iconMap['Cybersecurity'] });
      }
    }
    for (const res of studentResources) {
      if (res.title.toLowerCase().includes(q) || res.description.toLowerCase().includes(q)) {
        out.push({ type: 'Student Hub', title: res.title, subtitle: res.description, path: '/student-hub', icon: iconMap['Student Hub'] });
      }
    }
    return out.slice(0, 12);
  }, [query]);

  return (
    <Modal open={open} onClose={onClose} title="Search SourceSense">
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search AI tools, tech tips, security guides..."
          className="w-full rounded-xl border border-white/10 bg-ink-900 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-electric-400/50 focus:outline-none focus:ring-1 focus:ring-electric-400/30"
        />
      </div>

      {query && results.length === 0 && (
        <p className="py-8 text-center text-slate-400">No results for "{query}"</p>
      )}

      {!query && (
        <div className="py-8 text-center text-slate-500">
          <Search className="mx-auto mb-3 h-8 w-8 opacity-40" />
          <p className="text-sm">Start typing to search across all content</p>
        </div>
      )}

      <div className="space-y-2">
        {results.map((r, i) => {
          const Icon = r.icon;
          return (
            <Link
              key={i}
              to={r.path}
              onClick={onClose}
              className="flex items-start gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-electric-400/20 hover:bg-white/5"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-electric-500/10 text-electric-400">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-white">{r.title}</p>
                <p className="truncate text-sm text-slate-400">{r.subtitle}</p>
                <p className="mt-1 text-xs font-medium text-electric-400">{r.type}</p>
              </div>
              <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-slate-600" />
            </Link>
          );
        })}
      </div>
    </Modal>
  );
}
