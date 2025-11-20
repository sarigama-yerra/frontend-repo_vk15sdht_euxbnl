import React, { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/testimonials`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setError('Could not load testimonials')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What clients say</h2>
          <p className="text-slate-300 mt-2">A few words from teams I’ve partnered with.</p>
        </div>

        {loading && <p className="text-slate-400">Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-white font-semibold leading-tight">{t.name}</p>
                  <p className="text-slate-300 text-xs">{t.role} • {t.company}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="mt-3 text-slate-200 text-sm">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
