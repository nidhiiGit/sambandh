import { ArrowRight, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Directors() {
  return (
    <>
      <section className="bg-charcoal pt-36 pb-20 text-white md:pt-44">
        <div className="container-xl">
          <span className="eyebrow text-brand-orange">Leadership</span>
          <h1 className="mt-6 font-display text-5xl font-semibold md:text-7xl">
            One leadership team. <em className="text-brand-orange">One clear direction.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
            Sambandh is led by Raj Kumar Sharma, a journalist with 25+ years of experience in journalism and communication. He brings a media-first perspective to the agency’s work and client relationships.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-xl max-w-5xl">
          <div className="grid grid-cols-1 gap-10 rounded-3xl border border-ink-200 bg-white p-8 md:grid-cols-[160px_1fr] md:p-12">
            <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-brand-purple text-white">
              <UserRound size={54} strokeWidth={1.6} />
            </div>
            <div>
              <p className="eyebrow">Director</p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-charcoal">Raj Kumar Sharma</h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-ink-500">
                Raj Kumar Sharma is the Director of Sambandh Advertising and a journalist with 25+ years of experience in journalism and communication. His experience brings a practical understanding of media, stories, audiences and reputation to the agency’s work across North East India.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-brand-purple/10 px-4 py-2 text-xs font-bold text-brand-purple">Director</span>
                <span className="rounded-full bg-brand-teal/10 px-4 py-2 text-xs font-bold text-brand-teal">Journalist</span>
                <span className="rounded-full bg-brand-orange/10 px-4 py-2 text-xs font-bold text-brand-orange">25+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-charcoal p-8 text-white md:p-10">
            <p className="eyebrow text-brand-orange">Work with Sambandh</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">Have a communication challenge?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
              Tell us what you are trying to achieve. Our team can help shape the right PR, advertising, event, monitoring or design solution.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-extrabold text-charcoal">
              Contact Sambandh <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
