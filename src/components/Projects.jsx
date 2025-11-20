import React from 'react'
import { Code2, Smartphone, Globe, Cpu } from 'lucide-react'

const items = [
  {
    title: 'E‑commerce Platform',
    desc: 'Headless storefront with blazing-fast product search and secure checkout.',
    icon: <Globe className="w-5 h-5" />,
    tags: ['Next.js', 'Stripe', 'MongoDB']
  },
  {
    title: 'Wellness Mobile App',
    desc: 'Cross‑platform app with offline mode, analytics, and push notifications.',
    icon: <Smartphone className="w-5 h-5" />,
    tags: ['React Native', 'Expo', 'Firebase']
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Real‑time dashboards with role‑based access and custom charting.',
    icon: <Code2 className="w-5 h-5" />,
    tags: ['React', 'D3.js', 'WebSockets']
  },
  {
    title: 'AI Feature Prototypes',
    desc: 'Rapid prototypes integrating LLMs to streamline workflows.',
    icon: <Cpu className="w-5 h-5" />,
    tags: ['Python', 'FastAPI', 'OpenAI']
  }
]

const Projects = () => {
  return (
    <section id="work" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="text-slate-300 mt-2">A snapshot of products I’ve built or led end‑to‑end.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="group rounded-2xl p-5 bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
              <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center">
                {it.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-1 text-slate-300 text-sm">{it.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-slate-800/60 text-slate-300 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
