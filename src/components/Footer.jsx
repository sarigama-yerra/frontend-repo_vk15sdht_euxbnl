import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 bg-slate-950 text-center text-slate-400">
      <p>© {year} Syed Mehar. All rights reserved.</p>
    </footer>
  )
}

export default Footer
