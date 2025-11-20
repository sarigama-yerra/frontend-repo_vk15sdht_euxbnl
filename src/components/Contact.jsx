import React, { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'portfolio' })
      })

      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ loading: false, success: 'Thanks! I will get back to you shortly.', error: null })
      setForm({ name: '', email: '', company: '', budget: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Something went wrong' })
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="text-slate-300 mt-2">Tell me about your project—timeline, goals, and what success looks like.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="col-span-1 px-4 py-3 rounded-xl bg-white/5 text-white placeholder-slate-400 ring-1 ring-white/10" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          <input className="col-span-1 px-4 py-3 rounded-xl bg-white/5 text-white placeholder-slate-400 ring-1 ring-white/10" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input className="col-span-1 px-4 py-3 rounded-xl bg-white/5 text-white placeholder-slate-400 ring-1 ring-white/10" name="company" placeholder="Company (optional)" value={form.company} onChange={handleChange} />
          <input className="col-span-1 px-4 py-3 rounded-xl bg-white/5 text-white placeholder-slate-400 ring-1 ring-white/10" name="budget" placeholder="Budget (optional)" value={form.budget} onChange={handleChange} />
          <textarea className="col-span-1 sm:col-span-2 h-40 px-4 py-3 rounded-xl bg-white/5 text-white placeholder-slate-400 ring-1 ring-white/10" name="message" placeholder="Project details" value={form.message} onChange={handleChange} required />

          <button type="submit" disabled={status.loading} className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition">
            {status.loading ? (<><Loader2 className="animate-spin" size={18} /> Sending...</>) : (<><Send size={18} /> Send message</>)}
          </button>
        </form>

        {status.success && <p className="mt-4 text-emerald-400">{status.success}</p>}
        {status.error && <p className="mt-4 text-red-400">{status.error}</p>}
      </div>
    </section>
  )
}

export default Contact
