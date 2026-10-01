import {
  ArrowRight,
  Cpu,
  BookOpen,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Zap,
  Eye,
  CheckCircle2,
  Lightbulb,
  Lock,
  TrendingUp,
} from 'lucide-react';
import { Link } from '@/router';
import { Reveal } from '@/components/Reveal';
import { aiTools } from '@/data/aiTools';
import { techTips } from '@/data/techTips';
import { cyberTopics } from '@/data/cyberTopics';

const whyItems = [
  {
    icon: Eye,
    title: 'Verified & Trustworthy',
    description: 'Every resource is reviewed for accuracy and reliability — not just scraped from the web.',
  },
  {
    icon: Lightbulb,
    title: 'Built for Real People',
    description: 'No jargon, no gatekeeping. We explain technology in plain language anyone can follow.',
  },
  {
    icon: Lock,
    title: 'Safety First',
    description: 'Practical, beginner-friendly security advice that actually keeps you safe online.',
  },
  {
    icon: TrendingUp,
    title: 'Always Current',
    description: 'AI tools and tech tips are updated regularly so you never waste time on outdated info.',
  },
];

export function HomePage() {
  const featuredTools = aiTools.filter((t) => t.featured).slice(0, 3);
  const latestTips = techTips.slice(0, 3);
  const cyberPreview = cyberTopics.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20" />
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-electric-500/10 blur-[120px]" />

        <div className="container-page relative">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/20 bg-electric-500/5 px-4 py-1.5 text-sm font-medium text-electric-300">
                <Sparkles className="h-4 w-4" />
                Your guide to the digital world
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Make Technology Work <br className="hidden sm:block" />
                <span className="gradient-text">Smarter for You.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                Discover useful AI tools, practical tech tips, trustworthy resources, and simple digital safety advice.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/ai-tools" className="btn-primary group">
                  Explore AI Tools
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/tech-tips" className="btn-ghost group">
                  Learn Tech Tips
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Stats bar */}
          <Reveal delay={400}>
            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: '24+', label: 'AI Tools' },
                { value: '12+', label: 'Tech Tips' },
                { value: '6', label: 'Security Guides' },
                { value: '18+', label: 'Student Resources' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured AI Tools */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex items-end justify-between">
            <Reveal>
              <div>
                <span className="eyebrow">
                  <Cpu className="h-3.5 w-3.5" /> AI Tools
                </span>
                <h2 className="section-title mt-3">Featured AI Tools</h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/ai-tools" className="hidden items-center gap-1 text-sm font-medium text-electric-400 hover:text-electric-300 sm:flex">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool, i) => (
              <Reveal key={tool.id} delay={i * 80}>
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
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      tool.pricing === 'Free' ? 'bg-accent-green/10 text-accent-green'
                      : tool.pricing === 'Freemium' ? 'bg-electric-500/10 text-electric-400'
                      : 'bg-accent-amber/10 text-accent-amber'
                    }`}>
                      {tool.pricing}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{tool.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{tool.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">{tool.category}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-electric-400 transition-colors group-hover:text-electric-300">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tech Tips */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex items-end justify-between">
            <Reveal>
              <div>
                <span className="eyebrow">
                  <BookOpen className="h-3.5 w-3.5" /> Tech Tips
                </span>
                <h2 className="section-title mt-3">Latest Tech Tips</h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/tech-tips" className="hidden items-center gap-1 text-sm font-medium text-electric-400 hover:text-electric-300 sm:flex">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestTips.map((tip, i) => (
              <Reveal key={tip.id} delay={i * 80}>
                <Link to="/tech-tips" className="glass-card card-hover group flex h-full flex-col p-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-electric-500/10 px-2.5 py-1 text-xs font-medium text-electric-400">
                      {tip.category}
                    </span>
                    <span className="text-xs text-slate-500">{tip.readTime} read</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white group-hover:text-electric-300 transition-colors">
                    {tip.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{tip.excerpt}</p>
                  <span className="mt-5 flex items-center gap-1 text-sm font-medium text-electric-400">
                    Read tip <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity & Online Safety */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="glass-card relative overflow-hidden p-8 sm:p-12">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-electric-500/10 blur-[80px]" />
              <div className="relative">
                <span className="eyebrow">
                  <ShieldCheck className="h-3.5 w-3.5" /> Cybersecurity
                </span>
                <h2 className="section-title mt-3">Cybersecurity & Online Safety</h2>
                <p className="mt-4 max-w-2xl text-slate-400">
                  Beginner-friendly guides to help you spot scams, protect your accounts, and stay private online.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {cyberPreview.map((topic, i) => (
                    <Reveal key={topic.id} delay={i * 80}>
                      <Link to="/cybersecurity" className="group flex h-full flex-col rounded-xl border border-white/5 bg-ink-900/50 p-5 transition-all hover:border-electric-400/20 hover:bg-ink-800/50">
                        <ShieldCheck className="h-6 w-6 text-electric-400" />
                        <h3 className="mt-3 font-semibold text-white">{topic.title}</h3>
                        <p className="mt-1.5 text-sm text-slate-400">{topic.excerpt}</p>
                      </Link>
                    </Reveal>
                  ))}
                </div>

                <Link to="/cybersecurity" className="btn-primary mt-8 group">
                  Explore Security Guides
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Student Resources */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="eyebrow">
                  <GraduationCap className="h-3.5 w-3.5" /> Student Hub
                </span>
                <h2 className="section-title mt-3">Student Resources</h2>
                <p className="mt-4 text-slate-400">
                  AI prompts, research tools, study techniques, and free websites curated for students who want to learn smarter.
                </p>
              </div>
              <Link to="/student-hub" className="btn-ghost group">
                Visit Student Hub
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Sparkles, title: 'AI Prompts', desc: 'Ready-to-use prompts for studying, research, and writing.' },
              { icon: BookOpen, title: 'Research Tools', desc: 'Find, organize, and cite academic sources efficiently.' },
              { icon: Zap, title: 'Study Techniques', desc: 'Proven methods like spaced repetition and active recall.' },
              { icon: Eye, title: 'Digital Literacy', desc: 'Fact-check, evaluate sources, and spot misinformation.' },
              { icon: TrendingUp, title: 'Productivity Tools', desc: 'Apps and systems to plan, focus, and get things done.' },
              { icon: CheckCircle2, title: 'Useful Free Websites', desc: 'Hand-picked free resources for learning and life.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <Link to="/student-hub" className="glass-card card-hover group flex h-full items-start gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-electric-300 transition-colors">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why SourceSense */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">
                <Sparkles className="h-3.5 w-3.5" /> Why SourceSense
              </span>
              <h2 className="section-title mt-3">Why SourceSense?</h2>
              <p className="mt-4 text-slate-400">
                We exist to make technology and information easier to understand and use responsibly — for students and everyday internet users alike.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="glass-card card-hover h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-electric-700/10 text-electric-400">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-electric-400/20 bg-gradient-to-br from-ink-800 to-ink-900 p-10 text-center sm:p-16">
              <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-electric-500/15 blur-[100px]" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  Ready to make technology work for you?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-slate-400">
                  Explore our curated directory of AI tools, tech tips, and security guides — all in one place.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link to="/ai-tools" className="btn-primary group">
                    Browse AI Tools
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/contact" className="btn-ghost">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
