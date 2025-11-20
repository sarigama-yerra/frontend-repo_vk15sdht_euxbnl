import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-950/40 border-b border-white/10">
        <div className="container mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-white">Syed Mehar</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Projects />
        <div id="testimonials"><Testimonials /></div>
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/923408133982?text=${encodeURIComponent('Hi Syed, I came across your portfolio and would love to discuss a project.')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-xl hover:bg-emerald-600 transition z-50"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white"><path d="M19.11 17.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.49-.15-.7.15-.2.3-.8.97-.98 1.17-.18.2-.36.22-.66.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.47-1.74-1.65-2.03-.17-.3-.02-.47.13-.62.13-.12.3-.31.45-.46.15-.15.2-.25.3-.42.1-.17.05-.32-.02-.47-.07-.15-.7-1.68-.96-2.31-.25-.6-.5-.52-.7-.53-.18-.01-.39-.01-.6-.01-.2 0-.53.07-.81.37-.28.3-1.07 1.05-1.07 2.56 0 1.5 1.1 2.95 1.25 3.15.15.2 2.17 3.3 5.26 4.63.74.32 1.32.51 1.77.65.74.24 1.42.21 1.95.13.6-.09 1.77-.72 2.02-1.41.25-.7.25-1.29.18-1.41-.07-.12-.26-.2-.55-.35zM16.02 5C9.93 5 5 9.92 5 15.99c0 2.02.58 3.92 1.58 5.53L5 27l5.58-1.46a10.97 10.97 0 0 0 5.44 1.39c6.08 0 11.01-4.93 11.01-10.99C27.02 9.92 22.09 5 16.02 5zm0 19.95c-1.9 0-3.66-.55-5.15-1.5l-.37-.23-3.05.8.82-2.98-.24-.38a8.93 8.93 0 0 1-1.45-4.85c0-4.96 4.05-9 9.06-9 4.99 0 9.06 4.04 9.06 9 0 4.97-4.06 9.02-9.06 9.02z"/></svg>
      </a>
    </div>
  )
}

export default App
