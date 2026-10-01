import { useState, type FormEvent } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2, Mailbox } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title={<>Get in <span className="gradient-text">touch</span></>}
        subtitle="Have a question, suggestion, or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you."
      />

      <div className="container-page pb-20">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <Reveal className="lg:col-span-2">
            <div className="glass-card h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 shadow-glow">
                <Mailbox className="h-6 w-6 text-white" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-white">Let's talk</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Whether you've found a great AI tool we should feature, have a tech tip to share, or want to
                suggest a security topic — we're listening.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/10 text-electric-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <p className="text-sm text-slate-400">fedralrolex2@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/10 text-electric-400">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Response time</p>
                    <p className="text-sm text-slate-400">Usually within 2 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal className="lg:col-span-3" delay={100}>
            <form onSubmit={handleSubmit} className="glass-card p-8">
              {status === 'success' && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-accent-green/20 bg-accent-green/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-green" />
                  <div>
                    <p className="font-medium text-accent-green">Message sent successfully!</p>
                    <p className="mt-0.5 text-sm text-slate-400">Thanks for reaching out. We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-accent-rose/20 bg-accent-rose/5 p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-rose" />
                  <div>
                    <p className="font-medium text-accent-rose">Failed to send message</p>
                    <p className="mt-0.5 text-sm text-slate-400">{errorMsg}</p>
                  </div>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                    <User className="h-4 w-4 text-slate-500" /> Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === 'submitting'}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-white placeholder:text-slate-500 transition-colors focus:border-electric-400/50 focus:outline-none focus:ring-1 focus:ring-electric-400/30 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                    <Mail className="h-4 w-4 text-slate-500" /> Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'submitting'}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-white placeholder:text-slate-500 transition-colors focus:border-electric-400/50 focus:outline-none focus:ring-1 focus:ring-electric-400/30 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                    <MessageSquare className="h-4 w-4 text-slate-500" /> Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === 'submitting'}
                    placeholder="Tell us what's on your mind..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-white placeholder:text-slate-500 transition-colors focus:border-electric-400/50 focus:outline-none focus:ring-1 focus:ring-electric-400/30 disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || !name.trim() || !email.trim() || !message.trim()}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
