import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Download, MessageCircle } from 'lucide-react'

const Hero = () => {
  const whatsAppHref = `https://wa.me/923408133982?text=${encodeURIComponent('Hi Syed, I came across your portfolio and would love to discuss a project.')} `

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/90" />

      <div className="relative container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl pt-28 pb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20 text-xs uppercase tracking-wider">Web & App Developer</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Syed Mehar
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300">
            7+ years crafting fast, delightful digital products. I build modern web and mobile apps with a strong focus on UX, performance, and maintainable code.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition">
              Start a project <ArrowRight size={18} />
            </a>
            <a href={whatsAppHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30 hover:bg-emerald-500/30 transition">
              Chat on WhatsApp <MessageCircle size={18} />
            </a>
            <a href="/Syed-Mehar-CV.pdf" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/60 text-slate-200 ring-1 ring-white/10 hover:bg-slate-800 transition">
              Download CV <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
