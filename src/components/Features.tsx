import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    color: 'brand',
    title: 'Unified Workspace',
    desc: 'One place for projects, tasks, docs, and conversations. No more app switching or context lost in Slack threads.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'purple',
    title: 'AI Automation',
    desc: 'Intelligent workflows that learn from your team. Auto-assign tasks, summarize meetings, and draft updates — all on autopilot.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'pink',
    title: 'Real-time Analytics',
    desc: 'Beautiful dashboards that surface what matters. Track velocity, spot blockers early, and show stakeholders the full picture.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'emerald',
    title: 'Team Collaboration',
    desc: 'Built for how modern teams work. Async-first, with live presence when you need it and clear ownership at every step.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: 'amber',
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II, SSO, SAML, and audit logs. Your data stays yours — with granular permissions and end-to-end encryption.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'cyan',
    title: '200+ Integrations',
    desc: "GitHub, Figma, Slack, Jira, Notion — connect everything your team already uses. If we don't have it, use our open API.",
  },
]

const colorMap: Record<string, string> = {
  brand:   'from-brand-500/20 to-brand-600/5   border-brand-500/20   text-brand-400',
  purple:  'from-purple-500/20 to-purple-600/5  border-purple-500/20  text-purple-400',
  pink:    'from-pink-500/20 to-pink-600/5      border-pink-500/20    text-pink-400',
  emerald: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-400',
  amber:   'from-amber-500/20 to-amber-600/5    border-amber-500/20   text-amber-400',
  cyan:    'from-cyan-500/20 to-cyan-600/5      border-cyan-500/20    text-cyan-400',
}

function FeatureCard({ feature, delay }: { feature: typeof features[0]; delay: number }) {
  const { ref, inView } = useInView()
  const colors = colorMap[feature.color]

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative rounded-2xl border bg-slate-900/60 p-6 card-glow card-glow-hover transition-all duration-500 hover:-translate-y-1 cursor-default ${colors.split(' ').slice(2).join(' ')} ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {/* Gradient top-left glow */}
      <div className={`absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-br ${colors.split(' ').slice(0, 2).join(' ')} blur-2xl opacity-60 pointer-events-none`} />

      <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${colors.split(' ').slice(0, 2).join(' ')} border ${colors.split(' ')[2]} mb-4 ${colors.split(' ')[3]} group-hover:scale-110 transition-transform duration-300`}>
        {feature.icon}
      </div>

      <h3 className="relative text-base font-semibold text-white mb-2">{feature.title}</h3>
      <p className="relative text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
    </div>
  )
}

export default function Features() {
  const { ref: headRef, inView: headInView } = useInView()

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-brand-600/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block px-3 py-1 mb-4 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold uppercase tracking-widest">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Everything your team needs,<br />
            <span className="text-gradient">nothing you don't</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Streamline is deliberately designed — powerful where it counts, simple everywhere else.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 80} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className={`mt-16 rounded-2xl border border-brand-500/20 bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-pink-500/10 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 delay-300 ${headInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Ready to see it in action?</h3>
            <p className="text-slate-400 text-sm">Join 12,000+ teams already using Streamline.</p>
          </div>
          <button className="flex-shrink-0 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-brand bg-[length:200%] hover:bg-[position:100%_0] transition-all duration-500 shadow-md shadow-brand-600/30 hover:-translate-y-0.5 whitespace-nowrap">
            Start free trial
          </button>
        </div>
      </div>
    </section>
  )
}
