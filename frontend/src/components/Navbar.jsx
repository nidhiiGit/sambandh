import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/directors', label: 'Leadership' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [menuOpen])

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/92 py-3 shadow-lg shadow-charcoal/5 backdrop-blur-xl' : 'bg-white/70 py-4 backdrop-blur-md'}`}>
        <div className="container-xl flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3" aria-label="Sambandh Advertising home">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-ink-100 bg-white shadow-sm">
              <img src="/logo.jpeg" alt="Sambandh logo" className="h-full w-full object-contain" />
            </div>
            <div className="leading-none">
              <span className="block font-display text-lg font-bold tracking-tight text-charcoal">Sambandh</span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[.2em] text-brand-purple">Advertising & PR</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ to, label }) => <NavLink key={to} to={to} className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? 'text-brand-purple' : 'text-ink-500 hover:text-charcoal'}`}>{label}</NavLink>)}
            <Link to="/contact" className="btn-primary px-5 py-3 text-xs">Let's Talk <ArrowUpRight size={15} /></Link>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-charcoal md:hidden" aria-label="Toggle navigation">{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-charcoal px-8 pt-28 md:hidden">
          <nav className="flex flex-col gap-7">{navLinks.map(({ to, label }, i) => <motion.div key={to} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .05 }}><NavLink to={to} className={({ isActive }) => `font-display text-4xl font-semibold ${isActive ? 'text-brand-orange' : 'text-white/80'}`}>{label}</NavLink></motion.div>)}</nav>
          <div className="absolute bottom-10 left-8 right-8 border-t border-white/10 pt-6"><p className="text-xs uppercase tracking-[.2em] text-white/40">Advertising • PR • Events • Media</p><a href="tel:+919800033930" className="mt-2 block text-sm text-white/70">+91 98000 33930</a></div>
        </motion.div>}
      </AnimatePresence>
    </>
  )
}
