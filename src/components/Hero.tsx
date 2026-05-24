import { useEffect, useState } from 'react'

const words = ['Ship Faster', 'Scale Smarter', 'Build Better', 'Move Quicker']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length)
        setVisible(true)
      }, 350)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background mesh gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] rounded-full bg-pink-600/6 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(130,140,248,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(130,140,248,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        {/* Badge */}
        <div className="animate-fade-in-down inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-slow" />
          Now in public beta — free for teams up to 5
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] mb-6">
          <span className="block text-white">Your team can</span>
          <span
            className={`block text-gradient transition-all duration-350 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transition: 'opacity 0.35s ease, transform 0.35s ease' }}
          >
            {words[wordIndex]}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-in-up text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: '0.1s' }}
        >
          Streamline unifies your workflow, automates the mundane, and gives your
          team a single source of truth — so you spend less time managing and more
          time making.
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animationDelay: '0.2s' }}
        >
          <button className="group relative w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-gradient-brand bg-[length:200%] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 text-base">
            <span className="relative z-10">Start for free</span>
            <svg
              className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="group w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-800/50 transition-all duration-200 text-base flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch demo
          </button>
        </div>

        {/* Social proof */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: '0.35s' }}
        >
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {['Vercel', 'Linear', 'Notion', 'Figma', 'Stripe'].map((brand) => (
              <span key={brand} className="text-lg font-bold text-slate-300 tracking-tight">{brand}</span>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div
          className="animate-fade-in-up mt-20 relative mx-auto max-w-4xl"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/80 backdrop-blur overflow-hidden shadow-2xl shadow-black/50 card-glow">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/60">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="flex-1 mx-4 h-6 rounded-md bg-slate-800/80 text-xs text-slate-500 flex items-center px-3">app.streamline.io/dashboard</span>
            </div>
            {/* Dashboard mockup */}
            <div className="p-6 grid grid-cols-12 gap-4 min-h-[280px] sm:min-h-[340px]">
              {/* Sidebar */}
              <div className="col-span-2 sm:col-span-2 space-y-2">
                {['Dashboard', 'Projects', 'Tasks', 'Team', 'Reports'].map((item, i) => (
                  <div
                    key={item}
                    className={`h-7 rounded-lg text-xs font-medium flex items-center px-2 ${
                      i === 0
                        ? 'bg-brand-500/20 text-brand-300 border border-brand-500/30'
                        : 'text-slate-500'
                    }`}
                  >
                    <span className="hidden sm:inline">{item}</span>
                    <span className="sm:hidden w-4 h-4 rounded bg-slate-700" />
                  </div>
                ))}
              </div>
              {/* Main area */}
              <div className="col-span-10 space-y-4">
                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Tasks done', value: '248', trend: '+12%', color: 'brand' },
                    { label: 'Active projects', value: '14', trend: '+3', color: 'purple' },
                    { label: 'Team velocity', value: '94%', trend: '+8%', color: 'pink' },
                  ].map(({ label, value, trend, color }) => (
                    <div key={label} className="rounded-xl bg-slate-800/60 border border-slate-700/40 p-3">
                      <p className="text-[10px] text-slate-500 mb-1">{label}</p>
                      <p className="text-lg font-bold text-white">{value}</p>
                      <p className={`text-[10px] font-medium text-${color}-400`}>{trend}</p>
                    </div>
                  ))}
                </div>
                {/* Activity bar chart */}
                <div className="rounded-xl bg-slate-800/40 border border-slate-700/30 p-4">
                  <p className="text-xs text-slate-500 mb-3">Weekly activity</p>
                  <div className="flex items-end gap-1.5 h-16">
                    {[35, 55, 40, 75, 60, 88, 65].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md bg-brand-500/30 relative overflow-hidden">
                        <div
                          className="absolute bottom-0 inset-x-0 rounded-t-md bg-gradient-to-t from-brand-500 to-brand-400"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1.5 mt-1">
                    {['M','T','W','T','F','S','S'].map((d, i) => (
                      <p key={i} className="flex-1 text-center text-[9px] text-slate-600">{d}</p>
                    ))}
                  </div>
                </div>
                {/* Task list items */}
                <div className="space-y-1.5">
                  {[
                    { text: 'Design review — Q3 campaign', done: true },
                    { text: 'Ship authentication module', done: true },
                    { text: 'Deploy staging environment', done: false },
                  ].map(({ text, done }) => (
                    <div key={text} className="flex items-center gap-2 text-xs">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${done ? 'bg-brand-500 border-brand-500' : 'border-slate-600'}`}>
                        {done && <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <span className={done ? 'line-through text-slate-600' : 'text-slate-400'}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow below card */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-brand-600/20 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  )
}
