import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KNOWLEDGE_BASE = {
  name: "Md Sifat Hossain",
  role: "MERN Stack Developer",
  education: "BSc in Software Engineering (CGPA: 3.25) from Daffodil International University",
  email: "contactto9sifat@gmail.com",
  phone: "+880 1964992612",
  location: "Dhaka, Bangladesh",
  linkedin: "https://www.linkedin.com/in/md-sifat-hossain-4854a0244/",
  github: "https://github.com/sifat-oss",
  portfolio: "https://sifat-oss.github.io/Sifat-portfolio1/",
  
  skills: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript", "Tailwind CSS", "REST API", "JWT", "Git", "Flutter", "Dart"],
  
  pricing: {
    businessWebsite: { min: 50000, max: 100000, timeline: "2-4 weeks" },
    ecommerce: { min: 150000, max: 350000, timeline: "4-8 weeks" },
    customApp: { min: 200000, max: 500000, timeline: "6-12 weeks" },
    hourlyRate: 2000
  },
  
  projects: [
    {
      name: "CycleZen",
      description: "E-commerce platform for bicycle enthusiasts with shopping cart, authentication, and admin dashboard",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"]
    },
    {
      name: "Sarisabari Tottho Seba",
      description: "Mobile service app providing access to hospitals, police, fire stations, and digital GD filing",
      tech: ["Flutter", "Dart", "Node.js", "MongoDB", "Google Maps API"]
    },
    {
      name: "Sifat E-Commerce",
      description: "Multi-product e-commerce platform with payment gateway and admin panel",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe", "Redux"]
    },
    {
      name: "CampusCart",
      description: "Student marketplace for buying and selling items within university campus",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"]
    }
  ],
  
  experience: [
    {
      title: "Customer Support Executive & Website Data Analyst",
      company: "Ranstech Solutions",
      duration: "2023 - Present",
      responsibilities: "Customer support, data analysis, website management"
    }
  ]
}

function generateResponse(message) {
  const msg = message.toLowerCase()
  
  // Greetings
  if (msg.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
    return `Hello! I'm Sifat's AI assistant. I can help you learn about Sifat's skills, projects, and experience. What would you like to know?`
  }
  
  // Who/About
  if (msg.match(/who are you|about you|tell me about|introduce/)) {
    return `I'm ${KNOWLEDGE_BASE.name}, a ${KNOWLEDGE_BASE.role} from ${KNOWLEDGE_BASE.location}. I specialize in building full-stack web applications using the MERN stack. I graduated with a BSc in Software Engineering from DIU with a CGPA of 3.25.`
  }
  
  // Skills
  if (msg.match(/skills|technologies|tech stack|what do you know|programming/)) {
    return `My technical skills include: ${KNOWLEDGE_BASE.skills.slice(0, 8).join(', ')}, and more. I'm proficient in both frontend and backend development, with expertise in building scalable web applications.`
  }
  
  // Projects
  if (msg.match(/projects|portfolio|work|built|developed/)) {
    const projectList = KNOWLEDGE_BASE.projects.slice(0, 3).map(p => 
      `• ${p.name}: ${p.description}`
    ).join('\n')
    return `Here are some of my key projects:\n\n${projectList}\n\nYou can explore all my projects in the Projects section!`
  }
  
  // Specific project
  if (msg.match(/cyclezen/)) {
    const project = KNOWLEDGE_BASE.projects[0]
    return `${project.name} is ${project.description}. Built with ${project.tech.join(', ')}. It features product catalog, shopping cart, user authentication, and admin dashboard.`
  }
  
  if (msg.match(/sarisabari|tottho seba/)) {
    const project = KNOWLEDGE_BASE.projects[1]
    return `${project.name} is ${project.description}. Built with ${project.tech.join(', ')}. This mobile app helps the local community access essential services easily.`
  }
  
  // Experience
  if (msg.match(/experience|job|work experience|current work|working/)) {
    const exp = KNOWLEDGE_BASE.experience[0]
    return `I'm currently working as a ${exp.title} at ${exp.company} since 2023. My responsibilities include ${exp.responsibilities}.`
  }
  
  // Pricing & Project Costs
  if (msg.match(/price|cost|pricing|how much|budget|rate|charge|fee|payment/)) {
    return `My project pricing depends on complexity and requirements:\n\n🌐 Business Website: ৳50,000 - ৳1,00,000 (2-4 weeks)\n• Portfolio, corporate site, landing pages\n• Responsive design, SEO optimized\n\n🛒 E-Commerce Platform: ৳1,50,000 - ৳3,50,000 (4-8 weeks)\n• Full online store with payment gateway\n• Admin dashboard, inventory management\n\n⚙️ Custom Web Application: ৳2,00,000 - ৳5,00,000+ (6-12 weeks)\n• Complex features, real-time functionality\n• API integrations, custom workflows\n\n💰 Hourly Rate: ৳2,000/hour\n\nFinal pricing is determined after understanding your specific needs. Let's discuss your project! Contact: ${KNOWLEDGE_BASE.email}`
  }
  
  // Timeline & Delivery
  if (msg.match(/timeline|time|duration|how long|when|delivery|deadline/)) {
    return `Project timelines vary based on complexity:\n\n⏱️ Business Website: 2-4 weeks\n⏱️ E-Commerce: 4-8 weeks\n⏱️ Custom Application: 6-12 weeks\n\nI work in agile sprints with weekly updates. Rush delivery available for 30% extra. I provide regular demos and ensure timely delivery. Need it faster? Let's discuss your deadline! 🚀`
  }
  
  // Features & What's Included
  if (msg.match(/features|include|what do you provide|deliverables|scope/)) {
    return `Every project includes:\n\n✅ Responsive design (mobile, tablet, desktop)\n✅ Modern UI/UX with smooth animations\n✅ SEO optimization & fast loading\n✅ Clean, maintainable code\n✅ Source code & documentation\n✅ 30 days post-launch support\n✅ Basic hosting setup guidance\n✅ Admin panel (for e-commerce/CMS)\n✅ Payment gateway integration (if needed)\n✅ Security best practices\n\nAdditional features can be added based on your requirements. What specific features do you need?`
  }
  
  // Payment Terms
  if (msg.match(/payment|deposit|advance|installment|how to pay|payment method/)) {
    return `Payment terms are flexible and milestone-based:\n\n💳 Payment Structure:\n• 30% advance to start project\n• 40% after design approval\n• 30% on final delivery\n\n💰 Accepted Methods:\n• Bank transfer (bKash, Nagad, Rocket)\n• International: PayPal, Wise\n• Credit/Debit cards\n\nFor long-term projects, we can arrange monthly payments. All payments are invoice-based with proper documentation. Let's discuss what works best for you!`
  }
  
  // Negotiation & Custom Quote
  if (msg.match(/negotiate|discount|cheaper|reduce price|lower price|expensive|afford/)) {
    return `I understand budget constraints! Here's how we can work together:\n\n💡 Options:\n1. **MVP Approach**: Start with core features, add more later\n2. **Phased Development**: Break project into smaller milestones\n3. **Long-term Partnership**: Better rates for ongoing work\n4. **Referral Discount**: 10% off if you refer another client\n\nFor startups and non-profits, I offer special rates. Share your budget and requirements - let's find a solution that works! Quality is important, but I'm flexible. Contact me: ${KNOWLEDGE_BASE.email}`
  }
  
  // What Makes You Different
  if (msg.match(/why hire you|why choose|what makes you|your advantage|better than/)) {
    return `Here's why clients choose me:\n\n🏆 **Quality Code**: Clean, scalable, maintainable\n🚀 **Fast Delivery**: Agile workflow, weekly updates\n💬 **Clear Communication**: Daily updates, no surprises\n🎨 **Modern Design**: Beautiful UI that converts\n🔒 **Security First**: Best practices, secure coding\n📱 **Responsive Support**: Available for urgent fixes\n💰 **Transparent Pricing**: No hidden costs\n🎓 **Latest Tech**: Using cutting-edge MERN stack\n\nI don't just code - I build solutions that help your business grow. Let's create something amazing together! 🌟`
  }
  
  // Maintenance & Support
  if (msg.match(/maintenance|support|after launch|updates|bugs|fixes/)) {
    return `Post-launch support is crucial! Here's what I offer:\n\n🛠️ **Included (30 days free)**:\n• Bug fixes & urgent issues\n• Minor content updates\n• Performance monitoring\n\n📦 **Monthly Maintenance** (optional):\n• ৳10,000/month: Basic support + updates\n• ৳20,000/month: Priority support + feature additions\n• ৳35,000/month: Dedicated support + monthly improvements\n\n✨ **One-time Updates**:\n• Small changes: ৳2,000-5,000\n• New features: Custom quote\n\nI'm committed to your long-term success. Your website will stay updated and secure! 🔐`
  }
  
  // Technology Stack
  if (msg.match(/technology|tech stack|stack|tools|framework/)) {
    return `I build with the modern MERN stack:\n\n🎨 **Frontend**:\n• React.js (with Hooks & Context)\n• Tailwind CSS (responsive design)\n• Framer Motion (animations)\n• TypeScript (type safety)\n\n⚙️ **Backend**:\n• Node.js & Express.js\n• MongoDB (scalable database)\n• JWT Authentication\n• REST APIs\n\n🚀 **Additional**:\n• Git version control\n• Deployment (Vercel, Netlify, AWS)\n• Payment: Stripe, bKash, SSLCommerz\n• Mobile: Flutter (if needed)\n\nThis stack ensures fast, scalable, and maintainable applications! 💪`
  }
  
  // Contact
  if (msg.match(/contact|email|phone|reach|hire|available/)) {
    return `Let's discuss your project! Reach me at:\n\n📧 Email: ${KNOWLEDGE_BASE.email}\n📱 Phone: ${KNOWLEDGE_BASE.phone}\n💼 LinkedIn: ${KNOWLEDGE_BASE.linkedin}\n🌐 Portfolio: ${KNOWLEDGE_BASE.portfolio}\n\nI respond within 2-4 hours during business hours. Available for freelance projects, full-time opportunities, and consultations. Fill out the contact form and I'll send you a detailed proposal within 24 hours! 🚀`
  }
  
  // Education
  if (msg.match(/education|university|study|degree|cgpa/)) {
    return `I completed my ${KNOWLEDGE_BASE.education}. I also have HSC with GPA 4.67 and SSC with GPA 4.89.`
  }
  
  // React/Node specific
  if (msg.match(/react|frontend/)) {
    return `Yes, I'm experienced with React.js! I've built multiple projects using React with features like state management, hooks, routing, and integration with REST APIs. I also use modern tools like Tailwind CSS and Framer Motion for styling and animations.`
  }
  
  if (msg.match(/node|backend|api/)) {
    return `Absolutely! I have strong backend skills with Node.js and Express.js. I've built RESTful APIs, implemented JWT authentication, worked with MongoDB databases, and handled real-time features using Socket.io.`
  }
  
  // MongoDB/Database
  if (msg.match(/mongodb|database|db/)) {
    return `I work extensively with MongoDB for database management. I'm comfortable with schema design, queries, aggregation, indexing, and using Mongoose ODM for Node.js applications.`
  }
  
  // Availability
  if (msg.match(/available|hiring|job|opportunity|freelance/)) {
    return `Yes, I'm actively looking for opportunities! I'm open to full-time positions as a MERN Stack Developer or full-stack roles. I'm also available for freelance projects. Feel free to reach out at ${KNOWLEDGE_BASE.email}!`
  }
  
  // Location
  if (msg.match(/location|where|based|from/)) {
    return `I'm based in ${KNOWLEDGE_BASE.location}. I'm open to remote opportunities as well as on-site positions in Dhaka area.`
  }
  
  // Thanks
  if (msg.match(/thank|thanks|appreciate/)) {
    return `You're welcome! Feel free to ask if you have any other questions about Sifat's work or experience. Happy to help! 😊`
  }
  
  // Bye
  if (msg.match(/bye|goodbye|see you|talk later/)) {
    return `Goodbye! Thanks for your interest in Sifat's portfolio. Feel free to reach out anytime at ${KNOWLEDGE_BASE.email}. Have a great day! 👋`
  }
  
  // Default
  return `I can help you with information about Sifat's:\n• Skills & Technologies\n• Projects & Portfolio\n• Work Experience\n• Education\n• Contact Information\n\nWhat would you like to know?`
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: `Hi! I'm Sifat's AI assistant. Ask me anything about his skills, projects, or experience!`, sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = generateResponse(input)
      setMessages(prev => [...prev, { text: response, sender: 'bot' }])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent hover:bg-accent/90 text-navy rounded-full shadow-2xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="text-2xl"
            >
              ×
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-2xl"
            >
              💬
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-navy-2 rounded-2xl shadow-2xl border border-accent/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-accent/80 p-4 text-navy">
              <h3 className="font-bold text-lg">Chat with Sifat's AI</h3>
              <p className="text-sm opacity-90">Ask about skills, projects & experience</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-navy">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-accent text-navy rounded-br-sm'
                        : 'bg-navy-2 text-white rounded-bl-sm border border-white/10'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-navy-2 text-white p-3 rounded-2xl rounded-bl-sm border border-white/10">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-accent rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-navy-2 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-navy text-white rounded-lg border border-accent/20 focus:border-accent focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="px-4 py-2 bg-accent text-navy font-semibold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
