import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Newspaper, Megaphone, CalendarDays, Radar, Palette } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const services = [
  {
    icon: <Newspaper size={28} />, tag: '01', title: 'Public Relations', tagline: 'Earn trust. Earn attention.',
    description: 'Sambandh brings long-standing media understanding to public relations—helping organisations build stronger relationships with media and communicate their stories with clarity.',
    offerings: ['Media relations', 'Press outreach & publicity', 'Corporate image management', 'Annual PR planning', 'Product & brand publicity', 'Media opportunity planning'],
  },
  {
    icon: <Megaphone size={28} />, tag: '02', title: 'Advertising', tagline: 'Reach the right audience.',
    description: 'Plan and execute advertising across print and electronic media with a focus on meaningful reach, strong creative communication and planned expenditure.',
    offerings: ['Print advertising', 'Electronic media advertising', 'Campaign planning', 'Media planning & buying', 'Brand promotion', 'Corporate advertising'],
  },
  {
    icon: <CalendarDays size={28} />, tag: '03', title: 'Event Management', tagline: 'From brief to execution.',
    description: 'We manage promotional and corporate events end to end, creating organised experiences that support visibility, stakeholder engagement and publicity.',
    offerings: ['Seminars', 'Press conferences', 'Product launches', 'Corporate events', 'Promotional events', 'Brand activations'],
  },
  {
    icon: <Radar size={28} />, tag: '04', title: 'News Monitoring', tagline: 'Know what is happening.',
    description: 'Track relevant media, competitors, products, market movements and industry developments so your team can respond with better information.',
    offerings: ['News monitoring', 'Industry tracking', 'Competitor monitoring', 'Product & brand tracking', 'Media coverage analysis', 'Market intelligence'],
  },
  {
    icon: <Palette size={28} />, tag: '05', title: 'Designing & Printing', tagline: 'Make every communication count.',
    description: 'In-house design and production support for business communications, from newsletters and brochures to magazines and annual reports.',
    offerings: ['Newsletters', 'Brochures', 'Magazines', 'Corporate annual reports', 'Creative layouts', 'Printing & production'],
  },
]

export default function Services() {
  return (
    <PageWrapper>
      <section className="bg-charcoal pt-36 pb-20 text-white md:pt-44">
        <div className="container-xl">
          <span className="eyebrow text-brand-orange">Our Services</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] md:text-7xl">Communication built for <em className="text-brand-orange">real markets.</em></h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">Five connected capabilities for organisations that need visibility, credibility, engagement and informed decision-making.</p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-xl space-y-8">
          {services.map(({ icon, tag, title, tagline, description, offerings }, i) => (
            <motion.article key={title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55 }} className="grid grid-cols-1 overflow-hidden rounded-3xl border border-ink-200 bg-white lg:grid-cols-[.9fr_1.1fr]">
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between"><span className="text-brand-purple">{icon}</span><span className="font-mono text-xs text-ink-300">{tag}</span></div>
                <h2 className="mt-10 font-display text-4xl font-semibold text-charcoal">{title}</h2>
                <p className="mt-2 font-display text-lg italic text-brand-orange">{tagline}</p>
                <p className="mt-6 text-sm leading-7 text-ink-500">{description}</p>
                <Link to="/contact" className="btn-primary mt-8">Discuss a requirement <ArrowRight size={16} /></Link>
              </div>
              <div className="bg-[#f7f4fb] p-8 md:p-12">
                <p className="eyebrow text-ink-400">What we cover</p>
                <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {offerings.map(item => <li key={item} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm font-semibold text-ink-600"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />{item}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
