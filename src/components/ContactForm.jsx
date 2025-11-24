import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send to EmailJS (Free email service - you need to set this up)
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_gezqkli', // Your EmailJS service ID
          template_id: '19je095', // Your EmailJS template ID
          user_id: 'WyNeBbSvohX6vVjqM', // Your EmailJS public key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'mdsifatss79@gmail.com' // Your email
          }
        })
      })

      if (response.ok) {
        // Also save to local storage as backup
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
        submissions.push({
          ...formData,
          timestamp: new Date().toISOString(),
          id: Date.now()
        })
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions))
        
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Show success for 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      
      // Fallback: Save to localStorage even if email fails
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now(),
        status: 'pending'
      })
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions))
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:mdsifatss79@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      setSubmitStatus('fallback')
      // Open email client after a short delay
      setTimeout(() => {
        window.location.href = mailtoLink
      }, 1000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-white/80 font-medium mb-2 text-sm">Your Name *</label>
          <motion.input 
            whileFocus={{scale:1.01}}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-navy/50 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder:text-white/40" 
            placeholder="John Doe" 
          />
        </div>
        
        {/* Email */}
        <div>
          <label className="block text-white/80 font-medium mb-2 text-sm">Your Email *</label>
          <motion.input 
            whileFocus={{scale:1.01}}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-navy/50 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder:text-white/40" 
            placeholder="john@example.com" 
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-white/80 font-medium mb-2 text-sm">Subject *</label>
        <motion.input 
          whileFocus={{scale:1.01}}
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-navy/50 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder:text-white/40" 
          placeholder="Project Inquiry" 
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-white/80 font-medium mb-2 text-sm">Message *</label>
        <motion.textarea 
          whileFocus={{scale:1.01}}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full bg-navy/50 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder:text-white/40 resize-none" 
          rows="6" 
          placeholder="Tell me about your project or inquiry..."
        ></motion.textarea>
      </div>

      {/* Submit Button */}
      <div className="flex items-center gap-4">
        <motion.button 
          whileHover={{scale:1.02, boxShadow: '0 10px 30px rgba(0,180,216,0.4)'}}
          whileTap={{scale:0.98}}
          type="submit" 
          disabled={isSubmitting}
          className={`px-5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-2 text-sm ${
            isSubmitting 
              ? 'bg-accent/50 text-navy/50 cursor-not-allowed' 
              : 'bg-accent text-navy hover:bg-accent/90'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <span>📨</span> Send Message
            </>
          )}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{opacity:0, x:-10}}
            animate={{opacity:1, x:0}}
            className="flex items-center gap-2 text-green-500 font-medium"
          >
            <span>✓</span> Message sent successfully!
          </motion.div>
        )}
        
        {submitStatus === 'fallback' && (
          <motion.div
            initial={{opacity:0, x:-10}}
            animate={{opacity:1, x:0}}
            className="flex items-center gap-2 text-yellow-500 font-medium text-sm"
          >
            <span>📧</span> Opening your email client...
          </motion.div>
        )}
      </div>

      <p className="text-white/50 text-sm">
        * All fields are required. I'll send you a detailed quote with pricing and timeline within 24 hours. 
        Free consultation included!
      </p>
    </form>
  )
}
