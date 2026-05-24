import { useEffect, useState } from 'react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing',  href: '#pricing' },
  { label: 'About',    href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-lg shadow-brand-600/30 group-hover:shadow-brand-500/50 transition-shadow">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-white">Streamline</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-all"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2">
            Sign in
          </button>
          <button
            onClick={() => handleNav('#pricing')}
            className="hidden md:block px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-brand bg-[length:200%] hover:bg-[position:100%_0] transition-all duration-500 shadow-md shadow-brand-600/30 hover:shadow-brand-500/50"
          >
            Get started
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5 items-end">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-slate-950/95 backdrop-blur-md border-b border-slate-800/60`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#pricing')}
            className="mt-2 w-full px-4 py-3 text-sm font-semibold text-white rounded-lg bg-gradient-brand text-center"
          >
            Get started free
          </button>
        </div>
      </div>
    </header>
  )
}
