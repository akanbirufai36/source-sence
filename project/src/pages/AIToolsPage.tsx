import { useMemo, useState } from 'react';
import { Search, ArrowRight, Cpu, SlidersHorizontal } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { aiTools, aiToolCategories, type AITool } from '@/data/aiTools';

const pricingFilters = ['All', 'Free', 'Freemium', 'Paid'] as const;

export function AIToolsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');
  const [pricing, setPricing] = useState<string>('All');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return aiTools.filter((t) => {
      const matchesQuery = !q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
      const matchesCategory = category === 'All' || t.category === category;
      const matchesPricing =
        pricing === 'All' ||
        (pricing === 'Free' && t.pricing === 'Free') ||
        (pricing === 'Freemium' && t.pricing === 'Freemium') ||
        (pricing === 'Paid' && t.pricing === 'Paid');
      return matchesQuery && matchesCategory && matchesPricing;
    });
  }, [query, category, pricing]);

  return (
    <div>
      <PageHeader
        eyebrow="AI Tools Directory"
        title={<>Find the right <span className="gradient-text">AI tool</span> for the job</>}
        subtitle="A searchable, filterable directory of AI tools across study, research, writing, productivity, design, video, and coding."
      />

      <div className="container-page pb-20">
        {/* Search & Filters */}
        <Reveal>
          <div className="glass-card p-5 sm:p-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools by name or description..."
                className="w-full rounded-xl border border-white/10 bg-ink-900 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-electric-400/50 focus:outline-none focus:ring-1 focus:ring-electric-400/30"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-400">Category:</span>
              {['All', ...aiToolCategories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    category === cat
                      ? 'bg-electric-500 text-white'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-400">Pricing:</span>
              {pricingFilters.map((p) => (
                <button
                  key={p}
                  onClick={() => setPricing(p)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    pricing === p
                      ? 'bg-electric-500 text-white'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-sm text-slate-500">
          Showing <span className="text-white font-medium">{filtered.length}</span> {filtered.length === 1 ? 'tool' : 'tools'}
        </p>

        {/* Tool Cards */}
        {filtered.length === 0 ? (
          <div className="mt-12 text-center">
            <Cpu className="mx-auto h-12 w-12 text-slate-600" />
            <p className="mt-4 text-slate-400">No tools match your filters. Try a different search.</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool, i) => (
              <Reveal key={tool.id} delay={(i % 3) * 80}>
                <ToolCard tool={tool} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: AITool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card card-hover group flex h-full flex-col p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400">
          <Cpu className="h-6 w-6" />
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            tool.pricing === 'Free'
              ? 'bg-accent-green/10 text-accent-green'
              : tool.pricing === 'Freemium'
              ? 'bg-electric-500/10 text-electric-400'
              : 'bg-accent-amber/10 text-accent-amber'
          }`}
        >
          {tool.pricing}
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-white">{tool.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{tool.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400">{tool.category}</span>
        <span className="flex items-center gap-1 text-sm font-medium text-electric-400 transition-colors group-hover:text-electric-300">
          Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}
