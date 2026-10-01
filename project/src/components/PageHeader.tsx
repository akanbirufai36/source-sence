import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <div className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" />
      <div className="container-page relative">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{subtitle}</p>
        </Reveal>
      </div>
    </div>
  );
}
