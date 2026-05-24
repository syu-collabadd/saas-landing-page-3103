import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const tiers = [
  {
    name: 'Starter',
    monthly: 0,
    annual: 0,
    description: 'Perfect for small teams getting started.',
    cta: 'Get started free',
    ctaStyle: 'outline' as const,
    features: [
      'Up to 5 members',
      '3 active projects',
      '5 GB storage',
      'Basic analytics',
      'Community support',
      '200+ integrations',
    ],
    unavailable: ['AI automation', 'SSO & SAML', 'Audit logs', 'Priority support'],
    highlight: false,
  },
  {
    name: 'Pro',
    monthly: 29,
    annual: 19,
    description: 'For growing teams that need more power.',
    cta: 'Start Pro trial',
    ctaStyle: 'gradient' as const,
    badge: 'Most popular',
    features: [
      'Unlimited members',
      'Unlimited projects',
      '100 GB storage',
      'Advanced analytics',
      'AI automation',
      '200+ integrations',
      'Priority support',
      'Custom workflows',
    ],
    unavailable: ['SSO & SAML', 'Audit logs'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    monthly: 99,
    annual: 79,
    description: 'For organizations with advanced security needs.',
    cta: 'Contact sales',
    ctaStyle: 'outline' as const,
    features: [
      'Unlimited everything',
      '1 TB storage',
      'Advanced analytics',
      'AI automation',
      '200+ integrations',
      'SSO & SAML',
      'Audit logs',
      'Dedicated support',
      'SLA guarantee',
      'Custom contracts',
    ],
    unavailable: [],
    highlight: false,
  },
]

function CheckIcon({ dim }: { dim?: boolean }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 ${dim ? 'text-slate-600' : 'text-brand-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      {dim
        ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        : <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />}
    </svg>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const { ref, inView } = useInView()

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/6 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-600/6 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Simple, transparent<br />
            <span className="text-gradient">pricing that scales</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            No surprises. No hidden fees. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-slate-800/60 border border-slate-700/50">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!annual ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-slate-300'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${annual ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-slate-300'}`}
            >
              Annual
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                -35%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} annual={annual} delay={i * 100} parentInView={inView} />
          ))}
        </div>

        {/* Trust badges */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-8 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {[
            { icon: '🔒', text: 'SOC 2 Type II' },
            { icon: '🌍', text: 'GDPR Compliant' },
            { icon: '↩️', text: '30-day money back' },
            { icon: '⚡', text: '99.9% uptime SLA' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-slate-500">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  tier,
  annual,
  delay,
  parentInView,
}: {
  tier: typeof tiers[0]
  annual: boolean
  delay: number
  parentInView: boolean
}) {
  const price = annual ? tier.annual : tier.monthly

  return (
    <div
      className={`relative rounded-2xl border p-7 transition-all duration-700 hover:-translate-y-1 ${
        tier.highlight
          ? 'border-brand-500/40 bg-gradient-to-b from-brand-500/10 to-slate-900/80 shadow-xl shadow-brand-600/10 scale-[1.02] md:scale-[1.04]'
          : 'border-slate-700/40 bg-slate-900/60'
      } card-glow-hover ${parentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-brand text-white shadow-md shadow-brand-600/30">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
        <p className="text-sm text-slate-400">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-end gap-1">
          <span className="text-5xl font-black text-white">${price}</span>
          <span className="text-slate-400 pb-1.5">/mo</span>
        </div>
        {annual && price > 0 && (
          <p className="text-xs text-emerald-400 mt-1">
            Billed annually — save ${(tier.monthly - tier.annual) * 12}/yr
          </p>
        )}
        {price === 0 && <p className="text-xs text-slate-500 mt-1">Free forever</p>}
      </div>

      {/* CTA */}
      <button
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 mb-7 ${
          tier.ctaStyle === 'gradient'
            ? 'bg-gradient-brand bg-[length:200%] hover:bg-[position:100%_0] text-white shadow-md shadow-brand-600/30 hover:shadow-brand-500/50 hover:-translate-y-0.5'
            : 'border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white hover:bg-slate-800/50'
        }`}
      >
        {tier.cta}
      </button>

      {/* Divider */}
      <div className="border-t border-slate-800 mb-6" />

      {/* Features */}
      <ul className="space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
            <CheckIcon />
            {f}
          </li>
        ))}
        {tier.unavailable.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
            <CheckIcon dim />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
