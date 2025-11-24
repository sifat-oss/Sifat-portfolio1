import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="w-full bg-navy-2/80 backdrop-blur-md border-b border-navy-2 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <img 
              src="/profile.jpg" 
              alt="Sifat"
              className="w-9 h-9 rounded-lg object-cover shadow-lg group-hover:shadow-accent/50 transition-all group-hover:scale-110 border-2 border-accent/30"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-9 h-9 bg-gradient-to-br from-accent to-gold rounded-lg hidden items-center justify-center font-bold text-xl text-navy shadow-lg group-hover:shadow-accent/50 transition-all group-hover:scale-110">
              S
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gold rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold gradient-text">Sifat</span>
            <span className="text-[10px] text-white/60">Full Stack Developer</span>
          </div>
        </Link>
        <nav className="space-x-5 text-sm">
          <NavLink to="/" className={({isActive})=>isActive? 'text-accent':'text-white/90'}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? 'text-accent':'text-white/90'}>About</NavLink>
          <NavLink to="/projects" className={({isActive})=>isActive? 'text-accent':'text-white/90'}>Projects</NavLink>
          <NavLink to="/resume" className={({isActive})=>isActive? 'text-accent':'text-white/90'}>Resume</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'text-accent':'text-white/90'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
