import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Megaphone, Newspaper, CalendarDays,
  Radar, Palette, HeartPulse, GraduationCap, Building2, Plane,
  Hotel, Landmark, CarFront, CheckCircle2
} from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const services = [
  {
    number: '01', icon: <Newspaper size={22} />, title: 'Public Relations',
    desc: 'Media relations, strategic communication and reputation building designed to earn credible visibility.',
  },
  {
    number: '02', icon: <Megaphone size={22} />, title: 'Advertising',
    desc: 'Print and electronic media campaigns planned around reach, relevance and efficient media spend.',
  },
  {
    number: '03', icon: <CalendarDays size={22} />, title: 'Event Management',
    desc: 'Seminars, press conferences, launches and promotional events managed from planning to execution.',
  },
  {
    number: '04', icon: <Radar size={22} />, title: 'News Monitoring',
    desc: 'Industry, competitor, product and media tracking that keeps decision-makers informed.',
  },
  {
    number: '05', icon: <Palette size={22} />, title: 'Designing & Printing',
    desc: 'Newsletters, brochures, magazines, annual reports and production handled under one roof.',
  },
]

const sectors = [
  { icon: <HeartPulse />, title: 'Healthcare' },
  { icon: <GraduationCap />, title: 'Education' },
  { icon: <Building2 />, title: 'Real Estate' },
  { icon: <Plane />, title: 'Aviation' },
  { icon: <Hotel />, title: 'Hospitality' },
  { icon: <Landmark />, title: 'Government' },
  { icon: <CarFront />, title: 'Automobile' },
]


const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sambandhpr.in/#business',
      name: 'Sambandh Advertising',
      url: 'https://sambandhpr.in/',
      telephone: '+91 98000 33930',
      description: 'Advertising and public relations agency serving North East India with PR, advertising, event management, news monitoring, designing and printing services.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Namita Sadan, Ground Floor, Road No. 3, Pabitra Nagar, Champasari',
        addressLocality: 'Siliguri',
        addressRegion: 'West Bengal',
        postalCode: '734003',
        addressCountry: 'IN',
      },
      areaServed: ['West Bengal', 'Assam', 'Tripura', 'Arunachal Pradesh', 'Nagaland', 'Mizoram', 'Manipur', 'Meghalaya', 'Sikkim', 'Bihar', 'Jharkhand', 'Odisha'],
    },
    ...services.map((service) => ({
      '@type': 'Service',
      name: service.title,
      provider: { '@id': 'https://sambandhpr.in/#business' },
      areaServed: 'North East India',
    })),
  ],
}

export default function Home() {
  return (
    <PageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-cream pt-28 md:pt-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-purple/10 blur-3xl" />
        <div className="absolute -left-24 top-72 h-72 w-72 rounded-full bg-brand-teal/10 blur-3xl" />

        <div className="container-xl grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-12 py-12 lg:grid-cols-[1.08fr_.92fr] lg:py-16">
          <div className="relative z-10 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
              <span className="eyebrow">Advertising • Public Relations • Events</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .1 }}
              className="mt-6 font-display text-[3.4rem] font-semibold leading-[.98] tracking-[-.045em] text-charcoal sm:text-6xl md:text-7xl lg:text-[5.8rem]"
            >
              Make your brand <span className="text-brand-gradient">matter.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7, delay: .25 }}
              className="mt-7 max-w-2xl font-body text-base leading-8 text-ink-600 md:text-lg"
            >
              Sambandh is a North East India advertising and PR agency helping organisations earn attention,
              build credibility and communicate with the audiences that matter.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }} className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Start a Conversation <ArrowRight size={17} /></Link>
              <Link to="/services" className="btn-soft">Explore Services <ArrowUpRight size={17} /></Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink-200 pt-7">
              <div><strong className="font-display text-2xl text-charcoal">25+</strong><span className="ml-2 text-xs uppercase tracking-wider text-ink-400">years experience</span></div>
              <div><strong className="font-display text-2xl text-charcoal">5</strong><span className="ml-2 text-xs uppercase tracking-wider text-ink-400">core services</span></div>
              <div><strong className="font-display text-2xl text-charcoal">25+</strong><span className="ml-2 text-xs uppercase tracking-wider text-ink-400">years in journalism</span></div>
              <div><strong className="font-display text-2xl text-charcoal">NE India</strong></div>
            </motion.div>
          </div>

          {/* Brand visual — richer colour treatment keeps the logo as the hero focal point */}
          <motion.div
            initial={{ opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: .8, delay: .2 }}
            className="relative z-10 mx-auto w-full max-w-[560px]"
          >
            <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-brand-purple via-[#3f2869] to-[#1d1730] p-2 shadow-[0_35px_90px_rgba(79,45,127,.30)] md:p-3">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-orange/35 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-brand-teal/40 blur-3xl" />
              <div className="pointer-events-none absolute right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-brand-purple/50 blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[.08] p-5 backdrop-blur-sm md:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[.25em] text-white/55">Sambandh</p>
                    <p className="mt-1 font-display text-lg font-semibold text-white">Media • Marketing • Relations</p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-white/80">25+ YEARS</span>
                </div>

                <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-[1.4rem] bg-white p-7 shadow-2xl md:min-h-[405px] md:p-10">
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-brand-purple/10 via-brand-teal/10 to-brand-orange/15 blur-2xl" />
                  <img src="/logo.jpeg" alt="Sambandh Advertising logo — Connecting Brands with People" className="relative h-auto w-full max-w-[390px] object-contain drop-shadow-[0_20px_30px_rgba(35,20,60,.18)]" />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-center"><span className="block text-[9px] font-bold uppercase tracking-widest text-white/45">PR</span><span className="mt-1 block text-xs font-semibold text-white">Reputation</span></div>
                  <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-center"><span className="block text-[9px] font-bold uppercase tracking-widest text-white/45">MEDIA</span><span className="mt-1 block text-xs font-semibold text-white">Visibility</span></div>
                  <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-center"><span className="block text-[9px] font-bold uppercase tracking-widest text-white/45">EVENTS</span><span className="mt-1 block text-xs font-semibold text-white">Experience</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIRECTOR / EXPERIENCE BANNER */}
      <section className="relative overflow-hidden bg-charcoal py-16 text-white md:py-20">
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-purple/30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-brand-teal/20 blur-3xl" />
        <div className="container-xl relative grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <span className="eyebrow text-brand-orange">Experience behind the communication</span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">25+ years of journalism, media knowledge and communication.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">Sambandh is led by <strong className="text-white">Raj Kumar Sharma</strong>, a journalist with more than 25 years of experience. His media-first perspective shapes how we understand stories, audiences, reputation and communication.</p>
            <Link to="/directors" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-orange">Meet Raj Kumar Sharma <ArrowRight size={16} /></Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[.06] p-7 backdrop-blur-sm md:p-9">
            <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-white/40">Director</p>
            <p className="mt-3 font-display text-3xl font-semibold">Raj Kumar Sharma</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-4"><p className="font-display text-2xl font-semibold text-brand-orange">25+</p><p className="mt-1 text-xs text-white/50">years experience</p></div>
              <div className="rounded-2xl bg-white/10 p-4"><p className="font-display text-2xl font-semibold text-brand-teal">5</p><p className="mt-1 text-xs text-white/50">core services</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-charcoal text-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <span className="eyebrow text-brand-orange">What we do</span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">Five capabilities.<br /><em className="text-brand-orange">One connected strategy.</em></h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/60 lg:justify-self-end">From earned media to paid visibility, live experiences to intelligence, our services are designed to work together—not in silos.</p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="group bg-charcoal p-7 md:p-8 hover:bg-white/[.05]">
                <div className="flex items-center justify-between">
                  <span className="text-brand-orange">{service.icon}</span>
                  <span className="font-mono text-xs text-white/30">{service.number}</span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{service.desc}</p>
                <Link to="/services" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">View service <ArrowUpRight size={14} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTHCARE / INDUSTRIES */}
      <section className="section-pad bg-cream">
        <div className="container-xl grid grid-cols-1 gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">Who we work with</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal md:text-6xl">Sector-aware communication wins attention.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-ink-500">Healthcare is the priority audience for this digital presence, while our communications capabilities also support education, real estate, aviation, hospitality, government and automobile organisations.</p>
            <div className="mt-8 rounded-2xl border border-brand-teal/20 bg-white p-6 shadow-sm">
              <div className="flex gap-4"><CheckCircle2 className="mt-0.5 shrink-0 text-brand-teal" size={20} /><p className="text-sm leading-6 text-ink-600"><strong className="text-charcoal">Healthcare-first messaging:</strong> build trust, communicate clearly and handle reputation-sensitive stories with care.</p></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {sectors.map((sector, i) => <div key={sector.title} className={`rounded-2xl border p-6 ${i === 0 ? 'border-brand-purple bg-brand-purple text-white shadow-xl shadow-brand-purple/20' : 'border-ink-200 bg-white text-charcoal'}`}><span className={i === 0 ? 'text-white' : 'text-brand-purple'}>{sector.icon}</span><p className="mt-6 font-display text-lg font-semibold">{sector.title}</p><p className={`mt-1 text-xs ${i === 0 ? 'text-white/65' : 'text-ink-400'}`}>{i === 0 ? 'Priority sector' : 'Sector expertise'}</p></div>)}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="max-w-2xl"><span className="eyebrow">Our approach</span><h2 className="mt-4 font-display text-4xl font-semibold text-charcoal md:text-5xl">Clear brief. Smart plan. Consistent execution.</h2></div>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[['01','Understand','Start with your audience, business context, market and communication objective.'],['02','Strategise','Choose the right mix of PR, advertising, events, monitoring and creative production.'],['03','Deliver','Execute with media awareness, local insight and a focus on measurable business communication.']].map(([n,t,d]) => <div key={n} className="border-t-2 border-brand-purple pt-6"><span className="font-mono text-xs text-brand-orange">{n}</span><h3 className="mt-4 font-display text-2xl font-semibold text-charcoal">{t}</h3><p className="mt-3 text-sm leading-7 text-ink-500">{d}</p></div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gradient-to-br from-brand-purple via-[#3f2869] to-charcoal text-white">
        <div className="container-xl flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl"><span className="eyebrow text-brand-orange">Start a conversation</span><h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">Have a story worth putting into the world?</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">Tell us what you are trying to achieve. We’ll help shape the communication around it.</p></div>
          <Link to="/contact" className="btn-light shrink-0">Talk to Sambandh <ArrowRight size={17} /></Link>
        </div>
      </section>
    </PageWrapper>
  )
}
