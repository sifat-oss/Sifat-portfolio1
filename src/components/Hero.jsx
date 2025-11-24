import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16 min-h-[85vh] flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <div className="space-y-4">
          <motion.div
            initial={{opacity:0, x:-50}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.8}}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold border border-accent/30">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.8, delay:0.1}}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent via-cyan-400 to-gold bg-clip-text text-transparent animate-gradient-x">
              Md Sifat Hossain
            </span>
          </motion.h1>

          <motion.div
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.8, delay:0.2}}
            className="space-y-2"
          >
            <p className="text-2xl md:text-3xl font-bold text-white">
              MERN Stack Developer
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
              I build professional websites and web applications for businesses. From e-commerce stores 
              to custom web solutions - quality work at affordable prices. <span className="text-accent font-semibold">Starting at ৳15,000</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.8, delay:0.4}}
            className="flex flex-wrap gap-4 items-center"
          >
            <motion.div whileHover={{scale:1.08, y:-2}} whileTap={{scale:0.95}}>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-cyan-500 text-navy font-semibold hover:shadow-2xl hover:shadow-accent/50 transition-all text-base">
                <span>💰</span> Get a Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{scale:1.08, y:-2}} whileTap={{scale:0.95}}>
              <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-accent text-accent hover:bg-accent hover:text-navy transition-all font-semibold text-base backdrop-blur-sm">
                <span>🚀</span> View Projects
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.6}}
            className="flex flex-wrap gap-6 items-center pt-4"
          >
            <div className="flex items-center gap-2 text-white/70">
              <span className="text-gold text-2xl">💰</span>
              <span className="text-base">Affordable Prices</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span className="text-green-400 text-2xl">✓</span>
              <span className="text-base">Professional Work</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span className="text-accent text-2xl">⚡</span>
              <span className="text-base">Fast Delivery</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{opacity:0, scale:0.8, rotateY: 20}}
          animate={{opacity:1, scale:1, rotateY: 0}}
          transition={{duration:1, delay:0.3}}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Floating Skill Badges */}
            <motion.div
              animate={{y: [-10, 10, -10]}}
              transition={{duration: 3, repeat: Infinity}}
              className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg z-10"
            >
              React.js
            </motion.div>
            <motion.div
              animate={{y: [10, -10, 10]}}
              transition={{duration: 3.5, repeat: Infinity}}
              className="absolute -bottom-4 -left-8 bg-gradient-to-br from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg z-10"
            >
              Node.js
            </motion.div>
            <motion.div
              animate={{y: [-15, 15, -15]}}
              transition={{duration: 4, repeat: Infinity}}
              className="absolute -top-4 -right-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg z-10"
            >
              MongoDB
            </motion.div>
            <motion.div
              animate={{y: [15, -15, 15]}}
              transition={{duration: 3.2, repeat: Infinity}}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg z-10"
            >
              Express.js
            </motion.div>

            {/* Main Profile Image */}
            <div className="relative w-64 h-80 lg:w-72 lg:h-[22rem] rounded-2xl overflow-hidden border-4 border-accent/40 shadow-2xl shadow-accent/30 group-hover:shadow-accent/60 transition-all duration-500 group-hover:scale-105 animate-float bg-gradient-to-br from-navy-2 to-navy">
              <img 
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Md Sifat Hossain - MERN Stack Developer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="h-full bg-gradient-to-br from-accent/20 to-gold/10 flex items-center justify-center">
                      <div class="text-center p-6">
                        <div class="text-7xl mb-4">💻</div>
                        <p class="text-white font-bold text-2xl mb-2">MERN Stack Developer</p>
                        <p class="text-white/80 text-sm">MongoDB • Express • React • Node</p>
                      </div>
                    </div>
                  `;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-3 left-3 right-3 backdrop-blur-sm bg-navy-2/80 p-3 rounded-lg border border-accent/30">
                <p className="text-white font-bold text-xs">💼 Hire Me for Your Project</p>
                <div className="flex gap-2 mt-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-white/70 text-xs">Available now • Starting ৳15,000</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
