import { Radar, Eye, Lightbulb, Lock, TrendingUp, Users, Target, Heart } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { Link } from '@/router';

const values = [
  { icon: Eye, title: 'Clarity', description: 'We translate complex technology into language anyone can understand and act on.' },
  { icon: Lightbulb, title: 'Practicality', description: 'Every tip, tool, and guide is something you can actually use today — not theory.' },
  { icon: Lock, title: 'Responsibility', description: 'We promote safe, ethical, and responsible use of technology and information.' },
  { icon: TrendingUp, title: 'Relevance', description: 'We keep pace with a fast-changing digital world so you never fall behind.' },
];

export function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About SourceSense"
        title={<>Making technology <span className="gradient-text">easier to understand</span></>}
        subtitle="SourceSense exists to make technology and information easier to understand and use responsibly — for students and everyday internet users alike."
      />

      <div className="container-page pb-20">
        {/* Mission */}
        <Reveal>
          <div className="glass-card relative overflow-hidden p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-electric-500/10 blur-[80px]" />
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 shadow-glow">
                  <Radar className="h-6 w-6 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                The internet is full of powerful tools and information — but finding what's trustworthy,
                understanding how it works, and using it safely is harder than ever. SourceSense bridges that gap.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                We curate AI tools that are genuinely useful, write tech tips that solve real problems, provide
                beginner-friendly cybersecurity guidance, and collect resources that help students and everyday
                users navigate the digital world with confidence. No hype, no jargon, no noise — just reliable
                information and smarter technology.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, value: 'For Everyone', label: 'Students & everyday users' },
            { icon: Target, value: '6 Areas', label: 'AI, tips, safety, students, resources' },
            { icon: Heart, value: '100% Free', label: 'All content is free to access' },
            { icon: TrendingUp, value: 'Growing', label: 'Regularly updated content' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass-card card-hover h-full p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 font-display text-xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Values */}
        <div className="mt-16">
          <Reveal>
            <h2 className="section-title text-center">What We Value</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="glass-card card-hover h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-electric-700/10 text-electric-400">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 text-center">
            <h2 className="font-display text-2xl font-bold text-white">Have a question or suggestion?</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-400">
              We'd love to hear from you. Reach out and we'll get back to you.
            </p>
            <Link to="/contact" className="btn-primary mt-6">
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
