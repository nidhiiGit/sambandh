import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Newspaper, Target } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const principles = [
  ['Media understanding', 'Our public-relations approach is grounded in long-standing experience with journalism and media relationships.'],
  ['Regional insight', 'We work across North East India and understand the importance of Siliguri and Guwahati as regional business centres.'],
  ['Integrated communication', 'PR, advertising and events can work together when the message, audience and media plan are aligned.'],
]

export default function About() {
  return (
    <PageWrapper>
      <section className="bg-cream pt-36 pb-20 md:pt-44">
        <div className="container-xl grid grid-cols-1 gap-10 lg:grid-cols-[1fr_.8fr] lg:items-start">
          <div><span className="eyebrow">About Sambandh</span><h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] text-charcoal md:text-7xl">Built on media knowledge. <em className="text-brand-purple">Driven by connection.</em></h1></div>
          <div className="space-y-4 lg:pt-8">
            <p className="text-base leading-8 text-ink-500">Sambandh Advertising is led by <strong className="text-charcoal">Raj Kumar Sharma</strong>, a journalist and communications professional with <strong className="text-charcoal">25+ years of experience</strong> in journalism and communication.</p>
            <p className="text-base leading-8 text-ink-500">That media-first experience is combined with creative thinking, strategic communication and a strong understanding of the region to help organisations build visibility, credibility and lasting connections.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-charcoal text-white"><div className="container-xl grid grid-cols-1 gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center"><div><span className="eyebrow text-brand-orange">Our story</span><h2 className="mt-5 font-display text-4xl font-semibold md:text-5xl">A regional agency with a strong media foundation.</h2><p className="mt-6 max-w-2xl text-sm leading-8 text-white/60">Sambandh is led by Raj Kumar Sharma, a journalist with 25+ years of experience in journalism and communication. His media-first perspective informs the agency’s approach to client relationships, reputation and communication.</p><p className="mt-4 max-w-2xl text-sm leading-8 text-white/60">The agency provides public relations, advertising, event management, news monitoring, designing and printing, with a strong focus on the North East market.</p></div><div className="rounded-3xl border border-white/10 bg-white/[.04] p-8"><div className="grid grid-cols-2 gap-6"><div><p className="font-display text-4xl font-semibold text-brand-orange">25+</p><p className="mt-1 text-xs uppercase tracking-widest text-white/40">years</p></div><div><p className="font-display text-4xl font-semibold">5</p><p className="mt-1 text-xs uppercase tracking-widest text-white/40">services</p></div><div><p className="font-display text-4xl font-semibold">1</p><p className="mt-1 text-xs uppercase tracking-widest text-white/40">director</p></div><div><p className="font-display text-4xl font-semibold">NE</p><p className="mt-1 text-xs uppercase tracking-widest text-white/40">India focus</p></div></div></div></div></section>

      <section className="section-pad bg-white"><div className="container-xl"><span className="eyebrow">What guides us</span><div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink-200 bg-ink-200 md:grid-cols-3">{principles.map(([title,desc],i)=><div key={title} className="bg-white p-8 md:p-10"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">{i===0?<Newspaper size={20}/>:i===1?<MapPin size={20}/>:<Target size={20}/>}</span><h3 className="mt-7 font-display text-2xl font-semibold text-charcoal">{title}</h3><p className="mt-3 text-sm leading-7 text-ink-500">{desc}</p></div>)}</div></div></section>

      <section className="section-pad bg-cream"><div className="container-xl flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div><span className="eyebrow">Next step</span><h2 className="mt-4 font-display text-4xl font-semibold text-charcoal md:text-5xl">Let’s work on the communication that matters.</h2></div><Link to="/contact" className="btn-primary shrink-0">Contact Sambandh <ArrowRight size={16}/></Link></div></section>
    </PageWrapper>
  )
}
