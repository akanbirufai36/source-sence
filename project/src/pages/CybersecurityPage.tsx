import { useState } from 'react';
import {
  ShieldAlert,
  GlobeLock,
  Fish,
  KeyRound,
  UserCheck,
  EyeOff,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  type LucideIcon,
} from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { Modal } from '@/components/Modal';
import { cyberTopics, type CyberTopic } from '@/data/cyberTopics';

const iconMap: Record<string, LucideIcon> = {
  ShieldAlert,
  GlobeLock,
  Fish,
  KeyRound,
  UserCheck,
  EyeOff,
};

export function CybersecurityPage() {
  const [selected, setSelected] = useState<CyberTopic | null>(null);

  return (
    <div>
      <PageHeader
        eyebrow="Cybersecurity & Online Safety"
        title={<>Stay safe <span className="gradient-text">online</span> — the beginner's guide</>}
        subtitle="Learn to spot scams, recognize phishing, protect your accounts, and keep your personal information private."
      />

      <div className="container-page pb-20">
        {/* Disclaimer */}
        <Reveal>
          <div className="flex items-start gap-4 rounded-2xl border border-accent-amber/20 bg-accent-amber/5 p-5">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-accent-amber" />
            <div>
              <h3 className="font-semibold text-accent-amber">Educational Disclaimer</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                SourceSense provides educational information to help you understand online safety. Always verify
                important security information through official sources such as your bank, your device manufacturer,
                or government cybersecurity agencies. We are not responsible for any actions taken based on this content.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Topic Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cyberTopics.map((topic, i) => {
            const Icon = iconMap[topic.icon] ?? ShieldAlert;
            return (
              <Reveal key={topic.id} delay={(i % 3) * 80}>
                <button
                  onClick={() => setSelected(topic)}
                  className="glass-card card-hover group flex h-full flex-col p-6 text-left"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-electric-700/10 text-electric-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white transition-colors group-hover:text-electric-300">
                    {topic.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{topic.excerpt}</p>
                  <span className="mt-5 flex items-center gap-1 text-sm font-medium text-electric-400">
                    Learn more <ArrowLeft className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Topic Detail Modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (() => {
          const Icon = iconMap[selected.icon] ?? ShieldAlert;
          return (
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-400">{selected.excerpt}</p>
              </div>

              <div className="mt-6 space-y-5">
                {selected.sections.map((s, i) => (
                  <div key={i}>
                    <h4 className="font-display text-base font-semibold text-white">{s.heading}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-electric-400/20 bg-electric-500/5 p-5">
                <h4 className="flex items-center gap-2 font-semibold text-electric-300">
                  <CheckCircle2 className="h-4 w-4" /> Quick Checklist
                </h4>
                <ul className="mt-3 space-y-2">
                  {selected.checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                <button
                  onClick={() => setSelected(null)}
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to topics
                </button>
              </div>
            </div>
          );
        })()}
      </Modal>
    </div>
  );
}
