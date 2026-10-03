'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDownRight, ArrowRight, Check, CircleArrowOutUpRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react'

const products = [
  ['Valves', 'Butterfly, ball, gate, globe and check valves.'],
  ['Actuation & control', 'Actuators, solenoids and control components.'],
  ['Pumps & equipment', 'Pumps, hydraulic hand pumps and related equipment.'],
  ['Piping & flow components', 'Associated equipment for complete flow-control requirements.'],
]

const industries = [
  { name: 'Oil & gas', description: 'Equipment for critical isolation, regulation and maintenance requirements.', image: '/industrial-valve-hero.png' },
  { name: 'Marine & offshore', description: 'Flow-control equipment suited to demanding marine and offshore environments.', image: '/offshore-equipment.png' },
  { name: 'Industrial', description: 'Practical supply support for plants, utilities and operational systems.', image: '/plant-equipment.png' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const pageRef = useRef<HTMLElement>(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !pageRef.current) return

    const context = gsap.context(() => {
      gsap.from('.hero-copy > *', { opacity: 0, y: 22, duration: 0.7, stagger: 0.08, ease: 'power3.out' })
      gsap.from('.hero-media', { opacity: 0, x: 28, scale: 0.98, duration: 0.9, delay: 0.12, ease: 'power3.out' })
      gsap.to('.hero-image', {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: { trigger: '.hero-media', start: 'top bottom', end: 'bottom top', scrub: true },
      })
      gsap.utils.toArray<HTMLElement>('.scroll-reveal').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 82%', once: true },
        })
      })
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <main ref={pageRef} className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/90 bg-background/95 backdrop-blur-sm">
        <div className="shell flex h-[72px] items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Al Marsah home">
            <span className="brand-mark"><span /></span>
            <span className="leading-none"><span className="block text-[15px] font-bold tracking-[-0.03em]">AL MARSAH</span><span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.18em] text-muted">Oil Field Services</span></span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {['Capabilities', 'Products', 'Industries', 'About'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>)}
            <a href="#contact" className="button button-primary">Request a quote</a>
          </nav>
          <button className="icon-button lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu" aria-expanded={menuOpen}><Menu size={20} /></button>
        </div>
      </header>

      {menuOpen && <div className="fixed inset-0 z-50 bg-background p-5 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="flex items-center justify-between"><span className="text-[15px] font-bold">AL MARSAH</span><button className="icon-button" onClick={closeMenu} aria-label="Close navigation menu"><X size={20} /></button></div>
        <nav className="mt-20 flex flex-col gap-7" aria-label="Mobile navigation">
          {['Capabilities', 'Products', 'Industries', 'About'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="text-3xl font-semibold tracking-[-0.04em]">{item}</a>)}
          <a href="#contact" onClick={closeMenu} className="button button-primary mt-6 w-fit">Request a quote <ArrowRight size={18} /></a>
        </nav>
      </div>}

      <section id="top" className="hero-section shell grid min-h-[calc(100dvh-72px)] items-center gap-10 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:py-16">
        <div className="hero-copy reveal"><p className="eyebrow">Industrial flow-control supply</p><h1 className="hero-title mt-6 max-w-[760px]">Flow-control equipment, ready for demanding applications.</h1><p className="hero-description mt-7 max-w-[500px]">Specialist supply of valves, actuators, pumps and related equipment for oil & gas, marine, offshore and industrial applications.</p><div className="mt-9 flex flex-wrap items-center gap-3"><a href="#contact" className="button button-primary">Request a quote <ArrowRight size={17} /></a><a href="#products" className="button button-secondary">Explore products <ArrowDownRight size={16} /></a></div><div className="hero-note mt-12 flex items-start gap-4 border-t border-border pt-5 text-[12px] text-muted"><span className="check-mark"><Check size={14} /></span><span>Stock-oriented support for operational, maintenance and project requirements.</span></div></div>
        <div className="hero-media reveal reveal-delay relative min-h-[430px] overflow-hidden rounded-[1.25rem] sm:min-h-[580px]"><div className="hero-media-frame absolute inset-3 z-10 rounded-[.9rem] border border-white/20" /><Image src="/industrial-valve-hero.png" alt="Industrial valve and actuator assembly in a warehouse" fill priority className="hero-image object-cover opacity-90" sizes="(max-width: 1024px) 100vw, 58vw" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-90" /><div className="hero-media-meta absolute bottom-6 left-6 right-6 flex items-end justify-between text-white sm:bottom-9 sm:left-9 sm:right-9"><div><p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Equipment focus</p><p className="mt-2 text-lg font-medium">Valves, actuation and control</p></div><span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-black/10"><CircleArrowOutUpRight size={19} /></span></div></div>
      </section>

      <section className="proof-strip scroll-reveal border-y border-border bg-surface"><div className="shell grid divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">{[['01', 'Location', 'Abu Dhabi, UAE'], ['02', 'Product range', 'Flow-control equipment'], ['03', 'Support', 'Requirement-led assistance'], ['04', 'Focus', 'Industrial applications']].map(([number, title, text]) => <div key={number} className="flex items-center gap-4 py-6 md:block md:px-6 md:py-8 first:md:pl-0 last:md:pr-0"><span className="font-mono text-[11px] text-accent">{number}</span><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-[12px] text-muted">{text}</p></div></div>)}</div></section>

      <section id="capabilities" className="scroll-reveal shell section-space"><div className="max-w-[620px]"><p className="eyebrow">What we do</p><h2 className="section-title">Supply that starts with the requirement.</h2><p className="section-copy">From selecting the right equipment to confirming what is available, Al Marsah keeps the process practical and technically grounded.</p></div><div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div className="hidden lg:block"><div className="h-full min-h-[320px] rounded-[16px] bg-accent-soft p-8"><div className="flex h-full flex-col justify-between"><span className="text-[100px] font-semibold leading-none tracking-[-0.1em] text-accent/20">03</span><div><p className="text-sm font-semibold">A considered supply partner</p><p className="mt-2 max-w-[250px] text-sm leading-6 text-muted">Product knowledge, availability awareness and clear communication at every handoff.</p></div></div></div></div><div className="divide-y divide-border border-y border-border">{[['Product supply', 'Valves, actuators, pumps and associated flow-control equipment.'], ['Application support', 'Product selection, configuration and technical assistance where supported.'], ['Industrial availability', 'Stock-oriented supply for operational, maintenance and project requirements.']].map(([title, text], i) => <div key={title} className="group flex gap-6 py-7 sm:gap-10"><span className="pt-1 font-mono text-[11px] text-accent">0{i + 1}</span><div className="flex-1"><h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3><p className="mt-2 max-w-[430px] text-sm leading-6 text-muted">{text}</p></div><ArrowRight className="mt-1 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" size={20} /></div>)}</div></div></section>

      <section id="products" className="scroll-reveal bg-ink text-white"><div className="shell grid gap-14 py-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:py-36"><div><p className="eyebrow text-gold">Product index</p><h2 className="section-title">The equipment your requirement calls for.</h2><p className="section-copy text-white/60">A focused range of flow-control equipment for maintenance, operations and project supply.</p><a href="#contact" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white">Discuss a requirement <ArrowRight size={17} /></a></div><div className="border-y border-white/15">{products.map(([name, detail], i) => <button key={name} className="product-row group flex min-h-[84px] w-full items-center gap-5 border-b border-white/15 py-6 text-left last:border-b-0" onMouseEnter={() => setActiveProduct(i)} onFocus={() => setActiveProduct(i)} aria-pressed={activeProduct === i}><span className="font-mono text-[11px] text-accent">0{i + 1}</span><span className="flex-1 text-xl font-medium tracking-[-0.03em] sm:text-2xl">{name}</span><span className="hidden max-w-[240px] text-right text-[12px] leading-5 text-white/50 sm:block">{detail}</span><ArrowRight className="text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-gold" size={20} /></button>)}<div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-[12px] text-white/45"><span>{products[activeProduct][1]}</span><span className="font-mono">{String(activeProduct + 1).padStart(2, '0')} / 04</span></div></div></div></section>

      <section id="industries" className="industry-section scroll-reveal shell section-space"><div className="max-w-[650px]"><p className="eyebrow">Where it matters</p><h2 className="section-title">Equipment matched to the environment.</h2><p className="section-copy">Different operating contexts call for different considerations. We keep that context in view.</p></div><div className="mt-14 grid gap-5 md:grid-cols-3">{industries.map((industry, i) => <article key={industry.name} className={`group relative overflow-hidden rounded-[16px] ${i === 0 ? 'md:mt-12' : i === 2 ? 'md:-mt-6' : ''}`}><div className="relative aspect-[0.82] bg-ink"><Image src={industry.image} alt={`${industry.name} industrial application`} fill className="object-cover opacity-75 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" sizes="(max-width: 768px) 100vw, 33vw" /><div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-6 text-white"><h3 className="text-2xl font-semibold tracking-[-0.04em]">{industry.name}</h3><p className="mt-3 text-sm leading-6 text-white/70">{industry.description}</p></div></div></article>)}</div></section>

      <section className="scroll-reveal border-y border-border bg-surface"><div className="shell grid gap-14 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:py-32"><div><p className="eyebrow">Technical confidence</p><h2 className="section-title">The details matter.</h2></div><div><p className="max-w-[600px] text-lg leading-8 text-muted">When a requirement is specific, the right documentation and product context make the difference. Ask us about applicable standards, materials and technical references for the equipment you need.</p><div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">{['Materials', 'Dimensions', 'Documentation', 'Service fit'].map((item) => <div key={item} className="rounded-xl bg-background p-4"><span className="block text-xl font-semibold tracking-[-0.04em]">{item}</span><span className="mt-2 block text-[11px] leading-4 text-muted">Confirm for each requirement</span></div>)}</div><p className="mt-5 text-[12px] text-muted">Technical references and documentation are confirmed against the specific equipment requirement.</p></div></div></section>

      <section className="scroll-reveal shell section-space"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="eyebrow">From requirement to supply</p><h2 className="section-title">A clear route to the right equipment.</h2></div><div className="relative"><div className="absolute left-[15px] top-4 hidden h-[calc(100%-32px)] w-px bg-border sm:block" />{[['01', 'Share the requirement', 'Tell us the equipment, service and application context.'], ['02', 'Technical confirmation', 'We clarify the product fit and any relevant documentation.'], ['03', 'Availability and supply', 'We confirm what can be supplied and the next practical step.']].map(([number, title, text]) => <div key={number} className="relative flex gap-6 border-b border-border py-6 first:pt-0 last:border-b-0"><span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-[10px] text-accent">{number}</span><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 max-w-[420px] text-sm leading-6 text-muted">{text}</p></div></div>)}</div></div></section>

      <section id="about" className="scroll-reveal bg-accent-soft"><div className="shell grid items-center gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:py-32"><div><p className="eyebrow">About Al Marsah</p><h2 className="max-w-[680px] section-title">A specialist supplier with a practical view of industry.</h2><p className="mt-6 max-w-[580px] text-base leading-7 text-muted">Based in Abu Dhabi, Al Marsah supplies valves, actuators, pumps and related flow-control equipment to customers working across oil & gas, marine, offshore and industrial environments.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">Talk to the team <ArrowRight size={17} /></a></div><div className="grid grid-cols-2 gap-3"><div className="rounded-[16px] bg-accent p-6 text-white"><MapPin size={20} /><p className="mt-16 text-lg font-semibold">Abu Dhabi</p><p className="mt-1 text-sm text-white/70">United Arab Emirates</p></div><div className="mt-10 rounded-[16px] bg-surface p-6"><span className="text-5xl font-semibold tracking-[-0.08em] text-accent">01</span><p className="mt-14 text-sm font-semibold">Clear point of contact</p><p className="mt-1 text-sm leading-5 text-muted">For the next requirement.</p></div></div></div></section>

      <section id="contact" className="scroll-reveal bg-ink text-white"><div className="shell grid gap-12 py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:py-32"><div><p className="eyebrow text-gold">Request a quote</p><h2 className="mt-5 max-w-[760px] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Need a valve, actuator or flow-control component?</h2><p className="mt-6 max-w-[480px] text-base leading-7 text-white/60">Tell us what you are looking for and include the application or specification where available.</p></div><a href="mailto:info@almarsah.ae" className="button button-primary min-h-14">Request a quote <ArrowRight size={18} /></a></div></section>

      <footer className="bg-ink text-white/70"><div className="shell grid gap-12 py-16 md:grid-cols-[1.1fr_.9fr] md:items-end"><div><div className="flex items-center gap-3 text-white"><span className="brand-mark small"><span /></span><span className="text-sm font-bold">AL MARSAH</span></div><p className="mt-8 max-w-[560px] text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl">Bring the requirement. We&apos;ll help clarify the next practical step.</p></div><div className="md:justify-self-end"><p className="footer-label">Start a conversation</p><div className="mt-5 flex flex-col gap-3 text-sm"><a href="mailto:info@almarsah.ae" className="flex items-center gap-2"><Mail size={15} /> info@almarsah.ae</a><a href="tel:+971000000000" className="flex items-center gap-2"><Phone size={15} /> Contact the team</a><span className="flex items-center gap-2"><MapPin size={15} /> Abu Dhabi, UAE</span></div></div></div><div className="shell flex flex-col gap-2 border-t border-white/10 py-5 text-[11px] text-white/40 sm:flex-row sm:justify-between"><span>© 2026 Al Marsah Oil Field Services and Trading</span><span>Industrial supply, clearly handled.</span></div></footer>
    </main>
  )
}
