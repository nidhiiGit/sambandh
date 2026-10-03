import { Link } from 'react-router-dom'
import { MapPin, Phone, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' }, { to: '/services', label: 'Services' }, { to: '/about', label: 'About Us' }, { to: '/directors', label: 'Leadership' }, { to: '/contact', label: 'Contact' },
]
const services = ['Public Relations', 'Advertising', 'Event Management', 'News Monitoring', 'Designing & Printing']

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="brand-bar" />
      <div className="container-xl border-b border-white/10 py-14 md:flex md:items-end md:justify-between md:gap-10">
        <div className="max-w-2xl"><span className="eyebrow text-brand-orange">Let’s connect</span><h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Bring us your next communication challenge.</h2></div>
        <Link to="/contact" className="btn-light mt-7 md:mt-0">Start a conversation <ArrowUpRight size={16} /></Link>
      </div>
      <div className="container-xl grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div><Link to="/" className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white"><img src="/logo.jpeg" alt="Sambandh logo" className="h-full w-full object-contain" /></span><span className="font-display text-2xl font-bold">Sambandh</span></Link><p className="mt-5 max-w-xs text-sm leading-7 text-white/50">Advertising, public relations, events, news monitoring and design & printing for organisations across North East India.</p></div>
        <div><p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-white/35">Navigation</p><ul className="mt-5 space-y-3">{quickLinks.map(({to,label}) => <li key={to}><Link to={to} className="text-sm text-white/65 hover:text-white">{label}</Link></li>)}</ul></div>
        <div><p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-white/35">Services</p><ul className="mt-5 space-y-3">{services.map(s => <li key={s}><Link to="/services" className="text-sm text-white/65 hover:text-white">{s}</Link></li>)}</ul></div>
        <div><p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-white/35">Siliguri office</p><div className="mt-5 space-y-5 text-sm leading-6 text-white/65"><div className="flex gap-3"><MapPin size={16} className="mt-1 shrink-0 text-brand-orange" /><span>Namita Sadan, Ground Floor,<br />Road No. 3, Pabitra Nagar,<br />Champasari, Siliguri – 734003<br />West Bengal, India</span></div><div className="flex gap-3"><Phone size={16} className="mt-1 shrink-0 text-brand-orange" /><a href="tel:+919800033930" className="hover:text-white">+91 98000 33930</a></div></div></div>
      </div>
      <div className="border-t border-white/10"><div className="container-xl flex flex-col gap-2 py-6 text-xs text-white/35 md:flex-row md:justify-between"><p>© {new Date().getFullYear()} Sambandh Advertising. All rights reserved.</p><p>Serving North East India.</p></div></div>
    </footer>
  )
}
