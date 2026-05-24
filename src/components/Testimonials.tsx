import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    quote: "Streamline cut our project kickoff time in half. Everything we need is in one place — no more Slack hunting or spreadsheet chaos.",
    author: "Maya Chen",
    role: "VP Engineering",
    company: "Vercel",
    avatar: "MC",
    color: "brand",
  },
  {
    quote: "The AI automation alone is worth the price. It handles status updates we used to spend 45 minutes on every morning.",
    author: "James Torres",
    role: "Head of Product",
    company: "Linear",
    avatar: "JT",
    color: "purple",
  },
  {
    quote: "Best onboarding of any tool we've ever adopted. Our team was up and running in a day, not weeks.",
    author: "Sarah Kim",
    role: "CTO",
    company: "Notion",
    avatar: "SK",
    color: "pink",
  },
]

const colorMap: Record<string, string> = {
  brand:  'bg-brand-500/20 text-brand-300',
  purple: 'bg-purple-500/20 text-purple-300',
  pink:   'bg-pink-500/20 text-pink-300',
}

export default function Testimonials() {
  const { ref, inView } = useInView()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-brand-600/5 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Loved by teams worldwide
          </h2>
          <p className="text-slate-400">Don't take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`rounded-2xl border border-slate-700/40 bg-slate-900/60 p-6 card-glow card-glow-hover transition-all duration-700 hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-5">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${colorMap[t.color]}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role} at {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {[
            { value: '12K+', label: 'Teams using Streamline' },
            { value: '94%',  label: 'Customer satisfaction' },
            { value: '3.2x', label: 'Avg. velocity increase' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-gradient mb-1">{value}</p>
              <p className="text-xs text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
