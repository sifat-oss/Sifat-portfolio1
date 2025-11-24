import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    content: 'mdsifatss79@gmail.com',
    link: 'mailto:mdsifatss79@gmail.com'
  },
  {
    icon: '📱',
    title: 'Phone',
    content: '+880 1964992612',
    link: 'tel:+880 1964992612'
  },
  {
    icon: '📍',
    title: 'Location',
    content: 'Dhaka, Bangladesh',
    link: null
  }
]

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/md-sifat-hossain-4854a0244/',
    color: 'from-blue-600 to-blue-400'
  },
  {
    name: 'GitHub',
    icon: '🔗',
    url: 'https://github.com/sifat-oss',
    color: 'from-gray-700 to-gray-500'
  },
  {
    name: 'Twitter',
    icon: '🐦',
    url: 'https://twitter.com/',
    color: 'from-sky-500 to-blue-500'
  },
  {
    name: 'Facebook',
    icon: '👥',
    url: 'https://www.facebook.com/shahriarahmedsif',
    color: 'from-blue-600 to-blue-800'
  }
]

export default function Contact(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-4">Hire Me for Your Project</h1>
        <p className="text-white/70 text-base max-w-2xl mx-auto">
          I'm available for freelance web development projects! Whether you need a business website, 
          e-commerce platform, or custom web application, I can bring your ideas to life.
        </p>
      </motion.div>

      {/* Services & Pricing */}
      <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.1}}
        className="mb-12"
      >
        <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 border border-accent/30">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">💼 Professional Web Development Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Service 1 */}
            <div className="bg-navy-2 rounded-lg p-6 border border-white/10">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-bold text-white mb-2">Business Website</h3>
              <p className="text-white/70 text-sm mb-4">Professional portfolio, company website, or landing page</p>
              <div className="text-accent font-bold text-xl">৳50,000 - ৳1,00,000</div>
              <div className="text-white/50 text-xs">Starting price</div>
            </div>

            {/* Service 2 */}
            <div className="bg-navy-2 rounded-lg p-6 border border-white/10">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="text-lg font-bold text-white mb-2">E-Commerce Site</h3>
              <p className="text-white/70 text-sm mb-4">Full online store with payment gateway & admin panel</p>
              <div className="text-accent font-bold text-xl">৳1,50,000 - ৳3,50,000</div>
              <div className="text-white/50 text-xs">Starting price</div>
            </div>

            {/* Service 3 */}
            <div className="bg-navy-2 rounded-lg p-6 border border-white/10">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold text-white mb-2">Custom Web App</h3>
              <p className="text-white/70 text-sm mb-4">Full-stack application with advanced features</p>
              <div className="text-accent font-bold text-xl">৳50,000+</div>
              <div className="text-white/50 text-xs">Custom quote</div>
            </div>
          </div>

          <div className="bg-navy/50 rounded-lg p-6 border border-accent/20">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <span>✨</span> What's Included:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Responsive Design (Mobile & Desktop)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Modern UI/UX Design</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Fast Loading Speed</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>SEO Optimization</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Contact Forms & Integrations</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>1 Month Free Support</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Info Cards */}
        <motion.div
          initial={{opacity:0, x:-30}}
          animate={{opacity:1, x:0}}
          transition={{delay:0.2}}
          className="lg:col-span-1 space-y-6"
        >
          {/* Contact Information */}
          <div className="bg-navy-2 rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span>📞</span> Contact Information
            </h2>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{opacity:0, y:10}}
                  animate={{opacity:1, y:0}}
                  transition={{delay:0.3 + i * 0.1}}
                  className="flex items-start gap-4 p-4 bg-navy/50 rounded-lg hover:bg-navy/70 transition-colors"
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <h3 className="font-semibold text-accent mb-1 text-sm">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-white/80 hover:text-accent transition-colors text-sm"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-white/80 text-sm">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-navy-2 rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span>🌐</span> Connect With Me
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{opacity:0, scale:0.9}}
                  animate={{opacity:1, scale:1}}
                  transition={{delay:0.5 + i * 0.1}}
                  whileHover={{scale:1.05, y:-5}}
                  className={`flex flex-col items-center gap-2 p-4 bg-gradient-to-br ${social.color} rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all`}
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="text-xs">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability Badge */}
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.9}}
            className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-xl p-6 border border-green-500/30"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-white text-sm">Available for Hire</h3>
            </div>
            <p className="text-white/70 text-xs">
              💰 Accepting freelance projects now! Fill the form to get a free quote for your website.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{opacity:0, x:30}}
          animate={{opacity:1, x:0}}
          transition={{delay:0.3}}
          className="lg:col-span-2"
        >
          <div className="bg-navy-2 rounded-xl p-8 border border-white/10 h-full">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>✉️</span> Request a Quote
            </h2>
            <p className="text-white/70 text-sm mb-6">
              Fill out the form below with your project details. I'll review your requirements and 
              send you a detailed quote within 24 hours. All inquiries are free!
            </p>
            <ContactForm />
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay:1}}
        className="text-center bg-gradient-to-br from-gold/20 to-accent/10 rounded-xl p-8 border border-gold/30"
      >
        <h3 className="text-2xl font-bold text-white mb-3">💎 Ready to Start Your Project?</h3>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto text-base">
          I build professional websites that help businesses grow online. From simple landing pages 
          to complex web applications, I deliver quality work at affordable prices.
        </p>
        <div className="bg-navy/50 rounded-lg p-6 max-w-3xl mx-auto mb-6">
          <h4 className="font-bold text-white mb-4">🚀 My Process:</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-accent font-bold mb-1">1. Contact</div>
              <div className="text-white/70">Fill the form above</div>
            </div>
            <div>
              <div className="text-accent font-bold mb-1">2. Discussion</div>
              <div className="text-white/70">We discuss your needs</div>
            </div>
            <div>
              <div className="text-accent font-bold mb-1">3. Quote</div>
              <div className="text-white/70">Get pricing & timeline</div>
            </div>
            <div>
              <div className="text-accent font-bold mb-1">4. Develop</div>
              <div className="text-white/70">I build your website</div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/projects"
            className="px-6 py-2.5 bg-accent text-navy font-semibold rounded-lg hover:bg-accent/90 transition-all hover:scale-105 flex items-center gap-2 text-sm"
          >
            <span>💼</span> View My Work
          </a>
          <a
            href="mailto:mdsifatss79@gmail.com?subject=Website Development Inquiry"
            className="px-6 py-2.5 bg-navy-2 text-white font-semibold rounded-lg hover:bg-navy-2/70 transition-all hover:scale-105 border border-accent/30 flex items-center gap-2 text-sm"
          >
            <span>📧</span> Email Directly
          </a>
        </div>
      </motion.div>
    </section>
  )
}
