import {
  GraduationCap,
  BookOpen,
  LayoutDashboard,
  Palette,
  ShieldCheck,
  Wrench,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { resourceCategories } from '@/data/resources';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  BookOpen,
  LayoutDashboard,
  Palette,
  ShieldCheck,
  Wrench,
};

export function ResourcesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Resources"
        title={<>Curated <span className="gradient-text">useful websites</span> & digital resources</>}
        subtitle="A hand-picked collection of the best free and useful websites, organized by category so you can find what you need fast."
      />

      <div className="container-page pb-20">
        <div className="space-y-16">
          {resourceCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] ?? BookOpen;
            return (
              <div key={cat.id}>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-electric-700/10 text-electric-400">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-white">{cat.title}</h2>
                      <p className="mt-1 text-sm text-slate-400">{cat.description}</p>
                    </div>
                  </div>
                </Reveal>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.links.map((link, i) => (
                    <Reveal key={link.name} delay={(i % 3) * 60}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card card-hover group flex h-full items-start gap-4 p-5"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-white transition-colors group-hover:text-electric-300">
                              {link.name}
                            </h3>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-600 transition-colors group-hover:text-electric-400" />
                          </div>
                          <p className="mt-1 text-sm text-slate-400">{link.description}</p>
                        </div>
                      </a>
                    </Reveal>
                  ))}
                </div>
                {idx < resourceCategories.length - 1 && (
                  <div className="mt-16 h-px bg-white/5" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
