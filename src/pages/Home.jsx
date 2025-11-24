import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import SkillBar from '../components/SkillBar'

const PROJECTS = [
  {
    id:'cyclezen', 
    title:'CycleZen', 
    description:'Full-stack e-commerce platform for bicycles with product listing, shopping cart, user authentication, backend with Node.js & MongoDB.', 
    tech:['React','Node.js','MongoDB','Express'],
    imageUrl: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800&q=80',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id:'sarisabari', 
    title:'Sarisabari Tottho Seba', 
    description:'Service app for Sarisabari Upazila with Flutter frontend, backend API integration, hospital & police service info.', 
    tech:['Flutter','Node.js','REST API'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id:'ecommerce', 
    title:'Sifat E-Commerce', 
    description:'MERN-based multi-product e-commerce platform with dynamic product management, shopping cart, backend API, and admin panel.', 
    tech:['MERN Stack','JWT','Admin Panel'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    gradient: 'from-purple-500 to-pink-500'
  },
]

const stats = [
  { number: '15+', label: 'Projects Completed' },
  { number: '3+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Available Support' }
]

const services = [
  {
    icon: '🎨',
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React, Tailwind CSS, and modern JavaScript.',
    techs: ['React', 'Tailwind', 'JavaScript']
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    description: 'Creating robust server-side applications with Node.js, Express, and database management.',
    techs: ['Node.js', 'Express', 'MongoDB']
  },
  {
    icon: '🔗',
    title: 'API Integration',
    description: 'Seamless integration of third-party APIs and building RESTful APIs for your applications.',
    techs: ['REST API', 'JWT', 'OAuth']
  },
  {
    icon: '📱',
    title: 'Full Stack Solutions',
    description: 'End-to-end development from database design to deployment with MERN stack.',
    techs: ['MERN Stack', 'DevOps', 'Cloud']
  }
]

const testimonials = [
  {
    name: 'Local Government',
    role: 'Sarisabari Upazila',
    content: 'Excellent work on our service portal. The platform has significantly improved our ability to serve the community.',
    rating: 5
  },
  {
    name: 'E-Commerce Client',
    role: 'Business Owner',
    content: 'Professional, timely, and delivered exactly what we needed. The e-commerce platform works flawlessly.',
    rating: 5
  },
  {
    name: 'University Panel',
    role: 'DIU Showcase Judge',
    content: 'Outstanding project presentation and implementation. Well-deserved winner of the showcase competition.',
    rating: 5
  }
]

export default function Home(){
  return (
    <div>
      <Hero />

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{opacity:0, scale:0.9}}
              whileInView={{opacity:1, scale:1}}
              viewport={{once:true}}
              transition={{delay: i * 0.1}}
              className="bg-gradient-to-br from-accent/10 to-gold/5 rounded-xl p-6 text-center border border-accent/20 hover:border-accent/50 transition-all hover:scale-105"
            >
              <h3 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/10">
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-4 text-center gradient-text">What I Do</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive web development services tailored to your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay: i * 0.1}}
                className="bg-navy-2 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all group hover:scale-105"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.techs.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/10">
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed text-center mb-8">
              I am a full-stack web developer passionate about delivering end-to-end solutions that combine intuitive UI with powerful backend functionality. I focus on building scalable, maintainable applications with smooth user experiences and optimized performance.
            </p>
            <div className="bg-navy-2 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-center text-accent">Key Highlights</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Full-stack development using MERN (MongoDB, Express.js, React, Node.js)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Experience with responsive, mobile-first, and animated interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Built dynamic web apps with authentication, database integration, and API consumption</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/10">
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-2 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-accent">Frontend</h3>
              <SkillBar label="React & JavaScript" value={90} />
              <SkillBar label="HTML5 & CSS3" value={95} />
              <SkillBar label="Tailwind CSS" value={88} />
              <SkillBar label="Framer Motion & Animations" value={85} />
            </div>

            <div className="bg-navy-2 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-accent">Backend</h3>
              <SkillBar label="Node.js & Express.js" value={87} />
              <SkillBar label="REST APIs & JWT" value={90} />
              <SkillBar label="MongoDB & Mongoose" value={85} />
              <SkillBar label="Firebase" value={80} />
            </div>

            <div className="bg-navy-2 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-accent">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['Git','VS Code','Postman','Heroku','Netlify','Vercel'].map(tool => (
                  <span key={tool} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">{tool}</span>
                ))}
              </div>
            </div>

            <div className="bg-navy-2 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-accent">UI/Animation</h3>
              <div className="flex flex-wrap gap-2">
                {['Framer Motion','CSS Animations','Responsive Design','Mobile-First'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/10">
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-4 text-center gradient-text">Featured Projects</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Showcasing some of my best work in web development
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.5, delay: i * 0.1}}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects" className="inline-block px-5 py-1.5 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-navy transition-all font-semibold hover:scale-105 text-sm">
              View All Projects →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/10">
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-4 text-center gradient-text">Client Testimonials</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            What people say about working with me
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay: i * 0.15}}
                className="bg-navy-2 rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-gold text-xl">★</span>
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/10">
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
        >
          <h2 className="text-3xl font-bold mb-4 text-center gradient-text">Technologies I Use</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Modern tech stack for building scalable applications
          </p>
          <div className="bg-navy-2 rounded-xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
                  <span>💻</span> Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Vite'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm border border-accent/30 hover:bg-accent/20 transition-colors">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
                  <span>⚡</span> Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'REST API', 'Firebase'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm border border-accent/30 hover:bg-accent/20 transition-colors">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
                  <span>🛠️</span> Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Vercel', 'npm'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm border border-accent/30 hover:bg-accent/20 transition-colors">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/10">
        <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="bg-gradient-to-br from-accent/10 via-navy-2 to-gold/5 rounded-2xl p-12 text-center border border-accent/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Let's Work Together</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Ready to start your next project? I'm available for freelance work, collaborations, and full-time opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <Link to="/contact" className="px-8 py-4 rounded-lg bg-accent text-navy font-semibold hover:bg-accent/90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
                <span>📧</span> Get In Touch
              </Link>
              <a href="/resume.pdf" download className="px-8 py-4 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-navy transition-all hover:scale-105 font-semibold flex items-center gap-2">
                <span>📄</span> Download Resume
              </a>
              <Link to="/projects" className="px-8 py-4 rounded-lg bg-navy-2 text-white border border-white/20 hover:border-accent hover:text-accent transition-all hover:scale-105 font-semibold flex items-center gap-2">
                <span>💼</span> View Portfolio
              </Link>
            </div>
            <div className="flex gap-6 justify-center text-white/60 text-sm">
              <span>⚡ Fast Response</span>
              <span>✓ Quality Work</span>
              <span>🎯 On-Time Delivery</span>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
