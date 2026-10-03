'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CircleArrowOutUpRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react'

const products = [
  { number: '01', name: 'Valves', detail: 'Butterfly, ball, gate, globe and check valves.', accent: 'red' },
  { number: '02', name: 'Actuation & control', detail: 'Actuators, solenoids and control components.', accent: 'gold' },
  { number: '03', name: 'Pumps & equipment', detail: 'Pumps, hydraulic hand pumps and related equipment.', accent: 'red' },
  { number: '04', name: 'Piping & flow components', detail: 'Associated equipment for complete flow-control requirements.', accent: 'gold' },
]

const industries = [
  { name: 'Oil & gas', description: 'Equipment for critical isolation, regulation and maintenance requirements.', image: '/industrial-valve-hero.png' },
  { name: 'Marine & offshore', description: 'Flow-control equipment suited to demanding marine and offshore environments.', image: '/industrial-valve-hero.png' },
  { name: 'Industrial', description: 'Practical supply support for plants, utilities and operational systems.', image: '/industrial-valve-hero.png' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF9F6] text-[#171717]">
      <header className="sticky top-0 z-40 border-b border-[#E8E5DF]/90 bg-[#FAF9F6]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3" aria-label="Al Marsah home">
            <span className="relative flex h-9 w-9 items-end justify-center overflow-hidden rounded-t-[18px] bg-[#EF5350] pb-1.5">
              <span className="h-5 w-4 rounded-t-full border-[3px] border-b-0 border-[#FFD43B]" />
            </span>
            <span className="leading-none">
              <span className="block text-[15px] font-bold tracking-[-0.03em]">AL MARSAH</span>
              <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.18em] text-[#66635F]">Oil Field Services</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {['Capabilities', 'Products', 'Industries', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] font-medium text-[#66635F] transition-colors hover:text-[#171717]">{item}</a>
            ))}
            <a href="#contact" className="rounded-lg bg-[#EF5350] px-4 py-2.5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0">Request a quote</a>
          </nav>

          <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E8E5DF] lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu">
            <Menu size={20} strokeWidth={1.7} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF9F6] p-5 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-bold">AL MARSAH</span>
            <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E8E5DF]" onClick={closeMenu} aria-label="Close navigation menu"><X size={20} /></button>
          </div>
          <nav className="mt-20 flex flex-col gap-7" aria-label="Mobile navigation">
            {['Capabilities', 'Products', 'Industries', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="text-3xl font-semibold tracking-[-0.04em]">{item}</a>
            ))}
            <a href="#contact" onClick={closeMenu} className="mt-6 flex w-fit items-center gap-3 rounded-lg bg-[#EF5350] px-5 py-3 font-semibold text-white">Request a quote <ArrowRight size={18} /></a>
          </nav>
        </div>
      )}

      <section id="top" className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-[1280px] items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:px-12 lg:py-16">
        <div className="max-w-[560px]">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EF5350]">Abu Dhabi, UAE · Industrial supply</p>
          <h1 className="max-w-[580px] text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.065em]">Flow-control equipment, ready for demanding applications.</h1>
          <p className="mt-7 max-w-[480px] text-[17px] leading-7 text-[#66635F]">Specialist supply of valves, actuators, pumps and related equipment for oil & gas, marine, offshore and industrial applications.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#EF5350] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0">Request a quote <ArrowRight size={17} /></a>
            <a href="#products" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-[#D7D3CC] px-5 text-sm font-semibold text-[#292725] transition-colors hover:border-[#171717]">Explore products <ArrowDownRight size={16} /></a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-[#E8E5DF] pt-5 text-[12px] text-[#66635F]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF0EF] text-[#EF5350]"><Check size={14} strokeWidth={2.5} /></span>
            <span>Stock-oriented support for operational, maintenance and project requirements.</span>
          </div>
        </div>

        <div className="relative min-h-[390px] overflow-hidden rounded-[16px] bg-[#292725] sm:min-h-[520px]">
          <Image src="/industrial-valve-hero.png" alt="Industrial valve and actuator assembly in a warehouse" fill priority className="object-cover opacity-90" sizes="(max-width: 1024px) 100vw, 55vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
            <div><p className="text-[11px] uppercase tracking-[0.18em] text-white/65">Equipment focus</p><p className="mt-2 text-lg font-medium">Valves, actuation and control</p></div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35"><CircleArrowOutUpRight size={19} strokeWidth={1.5} /></span>
          </div>
          <span className="absolute right-6 top-6 h-3 w-3 rounded-full bg-[#FFD43B] sm:right-8 sm:top-8" aria-hidden="true" />
        </div>
      </section>

      <section className="border-y border-[#E8E5DF] bg-white">
        <div className="mx-auto grid max-w-[1280px] divide-y divide-[#E8E5DF] px-5 sm:px-8 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-12">
          {[['01', 'UAE-based', 'Abu Dhabi presence'], ['02', 'Stockist', 'Practical product availability'], ['03', 'Technical', 'Application support where needed'], ['04', 'Focused', 'Flow-control equipment']].map(([number, title, text]) => (
            <div key={number} className="flex items-center gap-4 py-6 md:block md:px-6 md:py-8 first:md:pl-0 last:md:pr-0">
              <span className="font-mono text-[11px] text-[#EF5350]">{number}</span><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-[12px] text-[#92908B]">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="max-w-[620px]"><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EF5350]">What we do</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Supply that starts with the requirement.</h2><p className="mt-5 max-w-[520px] text-base leading-7 text-[#66635F]">From selecting the right equipment to confirming what is available, Al Marsah keeps the process practical and technically grounded.</p></div>
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="hidden lg:block"><div className="h-full min-h-[320px] rounded-[16px] bg-[#FFF0EF] p-8"><div className="flex h-full flex-col justify-between"><span className="text-[100px] font-semibold leading-none tracking-[-0.1em] text-[#EF5350]/20">03</span><div><p className="text-sm font-semibold">A considered supply partner</p><p className="mt-2 max-w-[250px] text-sm leading-6 text-[#66635F]">Product knowledge, availability awareness and clear communication at every handoff.</p></div></div></div></div>
          <div className="divide-y divide-[#E8E5DF] border-y border-[#E8E5DF]">
            {[['Product supply', 'Valves, actuators, pumps and associated flow-control equipment.'], ['Application support', 'Product selection, configuration and technical assistance where supported.'], ['Industrial availability', 'Stock-oriented supply for operational, maintenance and project requirements.']].map(([title, text], i) => (
              <div key={title} className="group flex gap-6 py-7 sm:gap-10"><span className="pt-1 font-mono text-[11px] text-[#EF5350]">0{i + 1}</span><div className="flex-1"><h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3><p className="mt-2 max-w-[430px] text-sm leading-6 text-[#66635F]">{text}</p></div><ArrowRight className="mt-1 text-[#92908B] transition-transform group-hover:translate-x-1 group-hover:text-[#EF5350]" size={20} /></div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#292725] text-white">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-12 lg:py-36">
          <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFD43B]">Product index</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">The equipment your requirement calls for.</h2><p className="mt-5 max-w-[360px] text-base leading-7 text-white/60">A focused range of flow-control equipment for maintenance, operations and project supply.</p><a href="#contact" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#FFD43B] hover:text-white">Discuss a requirement <ArrowRight size={17} /></a></div>
          <div className="border-y border-white/15">
            {products.map((product, i) => <button key={product.name} className="group flex w-full items-center gap-5 border-b border-white/15 py-6 text-left last:border-b-0" onMouseEnter={() => setActiveProduct(i)} onFocus={() => setActiveProduct(i)}><span className={`font-mono text-[11px] ${product.accent === 'red' ? 'text-[#EF5350]' : 'text-[#FFD43B]'}`}>{product.number}</span><span className="flex-1 text-xl font-medium tracking-[-0.03em] sm:text-2xl">{product.name}</span><span className="hidden max-w-[240px] text-right text-[12px] leading-5 text-white/50 sm:block">{product.detail}</span><ArrowRight className="text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-[#FFD43B]" size={20} /></button>)}
            <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-[12px] text-white/45"><span>{products[activeProduct].detail}</span><span className="font-mono">{String(activeProduct + 1).padStart(2, '0')} / 04</span></div>
          </div>
        </div>
      </section>

      <section id="industries" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div className="max-w-[650px]"><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EF5350]">Where it matters</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Equipment matched to the environment.</h2></div><p className="max-w-[280px] text-sm leading-6 text-[#66635F]">Different operating contexts call for different considerations. We keep that context in view.</p></div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">{industries.map((industry, i) => <article key={industry.name} className={`group relative overflow-hidden rounded-[16px] ${i === 0 ? 'md:mt-12' : i === 2 ? 'md:-mt-6' : ''}`}><div className="relative aspect-[0.82] bg-[#292725]"><Image src={industry.image} alt={`${industry.name} industrial application`} fill className="object-cover opacity-75 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" sizes="(max-width: 768px) 100vw, 33vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/10 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-6 text-white"><h3 className="text-2xl font-semibold tracking-[-0.04em]">{industry.name}</h3><p className="mt-3 text-sm leading-6 text-white/70">{industry.description}</p></div></div></article>)}</div>
      </section>

      <section className="border-y border-[#E8E5DF] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12 lg:py-32">
          <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EF5350]">Technical confidence</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">The details matter.</h2></div>
          <div><p className="max-w-[600px] text-lg leading-8 text-[#66635F]">When a requirement is specific, the right documentation and product context make the difference. Ask us about applicable standards, materials and technical references for the equipment you need.</p><div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">{['API 607', 'API 609', 'EN 10204', 'ABS'].map((item) => <div key={item} className="rounded-xl bg-[#FAF9F6] p-4"><span className="block text-xl font-semibold tracking-[-0.04em]">{item}</span><span className="mt-2 block text-[11px] leading-4 text-[#92908B]">Where applicable</span></div>)}</div><p className="mt-5 text-[12px] text-[#92908B]">References are product-specific and should be confirmed against the equipment requirement.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EF5350]">From requirement to supply</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">A clear route to the right equipment.</h2></div><div className="relative"><div className="absolute left-[15px] top-4 hidden h-[calc(100%-32px)] w-px bg-[#E8E5DF] sm:block" />{[['01', 'Share the requirement', 'Tell us the equipment, service and application context.'], ['02', 'Technical confirmation', 'We clarify the product fit and any relevant documentation.'], ['03', 'Availability and supply', 'We confirm what can be supplied and the next practical step.']].map(([number, title, text]) => <div key={number} className="relative flex gap-6 border-b border-[#E8E5DF] py-6 first:pt-0 last:border-b-0"><span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF0EF] font-mono text-[10px] text-[#EF5350]">{number}</span><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 max-w-[420px] text-sm leading-6 text-[#66635F]">{text}</p></div></div>)}</div></div></section>

      <section id="about" className="bg-[#FFF0EF]"><div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:px-12 lg:py-32"><div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EF5350]">About Al Marsah</p><h2 className="mt-5 max-w-[680px] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">A specialist supplier with a practical view of industry.</h2><p className="mt-6 max-w-[580px] text-base leading-7 text-[#66635F]">Based in Abu Dhabi, Al Marsah supplies valves, actuators, pumps and related flow-control equipment to customers working across oil & gas, marine, offshore and industrial environments.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C93F3D]">Talk to the team <ArrowRight size={17} /></a></div><div className="grid grid-cols-2 gap-3"><div className="rounded-[16px] bg-[#EF5350] p-6 text-white"><MapPin size={20} strokeWidth={1.5} /><p className="mt-16 text-lg font-semibold">Abu Dhabi</p><p className="mt-1 text-sm text-white/70">United Arab Emirates</p></div><div className="mt-10 rounded-[16px] bg-white p-6"><span className="text-5xl font-semibold tracking-[-0.08em] text-[#EF5350]">01</span><p className="mt-14 text-sm font-semibold">Clear point of contact</p><p className="mt-1 text-sm leading-5 text-[#66635F]">For the next requirement.</p></div></div></div></section>

      <section id="contact" className="bg-[#292725] text-white"><div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-32"><div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFD43B]">Request a quote</p><h2 className="mt-5 max-w-[760px] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Need a valve, actuator or flow-control component?</h2><p className="mt-6 max-w-[480px] text-base leading-7 text-white/60">Tell us what you are looking for and include the application or specification where available.</p></div><a href="mailto:info@almarsah.ae" className="inline-flex min-h-14 items-center justify-between gap-8 rounded-lg bg-[#EF5350] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Request a quote <ArrowRight size={18} /></a></div></section>

      <footer className="bg-[#171717] text-white/70"><div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto_auto] lg:px-12"><div><div className="flex items-center gap-3 text-white"><span className="relative flex h-8 w-8 items-end justify-center overflow-hidden rounded-t-[16px] bg-[#EF5350] pb-1"><span className="h-4 w-3.5 rounded-t-full border-[2px] border-b-0 border-[#FFD43B]" /></span><span className="text-sm font-bold">AL MARSAH</span></div><p className="mt-5 max-w-[260px] text-sm leading-6">Valves, actuators, pumps and flow-control equipment for demanding applications.</p></div><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm"><a href="#capabilities" className="hover:text-white">Capabilities</a><a href="#products" className="hover:text-white">Products</a><a href="#industries" className="hover:text-white">Industries</a><a href="#about" className="hover:text-white">About</a></div></div><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Contact</p><div className="mt-5 flex flex-col gap-3 text-sm"><a href="mailto:info@almarsah.ae" className="flex items-center gap-2 hover:text-white"><Mail size={15} /> info@almarsah.ae</a><a href="tel:+971000000000" className="flex items-center gap-2 hover:text-white"><Phone size={15} /> Contact the team</a><span className="flex items-center gap-2"><MapPin size={15} /> Abu Dhabi, UAE</span></div></div></div><div className="mx-auto flex max-w-[1280px] justify-between border-t border-white/10 px-5 py-5 text-[11px] text-white/40 sm:px-8 lg:px-12"><span>© 2026 Al Marsah Oil Field Services and Trading Company L.L.C.</span><span className="hidden sm:block">Industrial supply, clearly handled.</span></div></footer>
    </main>
  )
}

