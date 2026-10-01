import { useMemo, useState } from 'react';
import { BookOpen, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { Modal } from '@/components/Modal';
import { techTips, techTipCategories, type TechTip } from '@/data/techTips';

export function TechTipsPage() {
  const [category, setCategory] = useState<string>('All');
  const [selected, setSelected] = useState<TechTip | null>(null);

  const filtered = useMemo(() => {
    if (category === 'All') return techTips;
    return techTips.filter((t) => t.category === category);
  }, [category]);

  return (
    <div>
      <PageHeader
        eyebrow="Tech Tips Library"
        title={<>Practical <span className="gradient-text">tech tips</span> for everyday life</>}
        subtitle="Clear, actionable guides covering Android, computers, smartphones, useful websites, apps, and digital productivity."
      />

      <div className="container-page pb-20">
        {/* Category Filter */}
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {['All', ...techTipCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat
                    ? 'bg-electric-500 text-white'
                    : 'glass-card text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tip Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tip, i) => (
            <Reveal key={tip.id} delay={(i % 3) * 80}>
              <button
                onClick={() => setSelected(tip)}
                className="glass-card card-hover group flex h-full flex-col p-6 text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-electric-500/10 px-2.5 py-1 text-xs font-medium text-electric-400">
                    {tip.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="h-3 w-3" /> {tip.readTime}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white transition-colors group-hover:text-electric-300">
                  {tip.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{tip.excerpt}</p>
                <span className="mt-5 flex items-center gap-1 text-sm font-medium text-electric-400">
                  Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tip Detail Modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-electric-500/10 px-2.5 py-1 text-xs font-medium text-electric-400">
                {selected.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Clock className="h-3 w-3" /> {selected.readTime} read
              </span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{selected.excerpt}</p>
            <div className="mt-5 space-y-4">
              {selected.body.split('\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-400">{para}</p>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
              <button
                onClick={() => setSelected(null)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" /> Back to tips
              </button>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <BookOpen className="h-3.5 w-3.5" /> SourceSense Tech Tips
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
