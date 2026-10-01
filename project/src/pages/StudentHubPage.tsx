import { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Brain,
  Eye,
  Zap,
  Globe,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { studentResources, studentCategories } from '@/data/studentResources';

const iconMap: Record<string, LucideIcon> = {
  'AI Prompts': Sparkles,
  'Research Tools': BookOpen,
  'Study Techniques': Brain,
  'Digital Literacy': Eye,
  'Productivity Tools': Zap,
  'Useful Free Websites': Globe,
};

export function StudentHubPage() {
  const [category, setCategory] = useState<string>('All');

  const filtered = category === 'All' ? studentResources : studentResources.filter((r) => r.category === category);

  return (
    <div>
      <PageHeader
        eyebrow="Student Hub"
        title={<>Resources for <span className="gradient-text">students</span> who learn smarter</>}
        subtitle="AI prompts, research tools, study techniques, digital literacy guides, productivity apps, and free websites — all curated for students."
      />

      <div className="container-page pb-20">
        {/* Category Filter */}
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {['All', ...studentCategories].map((cat) => {
              const Icon = iconMap[cat] ?? GraduationCap;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                    category === cat
                      ? 'bg-electric-500 text-white'
                      : 'glass-card text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Resource Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((res, i) => {
            const Icon = iconMap[res.category] ?? GraduationCap;
            return (
              <Reveal key={res.id} delay={(i % 3) * 80}>
                <div className="glass-card card-hover group flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400">
                      {res.category}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{res.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{res.description}</p>
                  {res.link ? (
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex items-center gap-1 text-sm font-medium text-electric-400 transition-colors group-hover:text-electric-300"
                    >
                      Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <div className="mt-5 flex items-center gap-1 text-sm font-medium text-slate-500">
                      <Sparkles className="h-3.5 w-3.5" /> Ready to use
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
