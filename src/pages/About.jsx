import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { number: '3.25', label: 'CGPA', icon: '📊' },
  { number: '15+', label: 'Projects', icon: '💻' },
  { number: '2+', label: 'Years Coding', icon: '⚡' },
  { number: '100%', label: 'Dedication', icon: '🎯' }
]

const journey = [
  {
    year: '2024',
    title: 'University Project Showcase Champion',
    description: 'Won first place in university-wide competition',
    icon: '🏆',
    color: 'from-gold to-yellow-500'
  },
  {
    year: '2023',
    title: 'Started Freelance Development',
    description: 'Built CycleZen e-commerce & Sarisabari service portal',
    icon: '🚀',
    color: 'from-accent to-cyan-500'
  },
  {
    year: '2022',
    title: 'Began Software Engineering',
    description: 'Started BSc at Daffodil International University',
    icon: '🎓',
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: 'Earlier',
    title: 'College Debate Champion',
    description: 'Developed critical thinking and communication skills',
    icon: '🗣️',
    color: 'from-green-500 to-teal-500'
  }
]

const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React.js', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Responsive Design', 'Framer Motion']
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'REST API', 'JWT Auth', 'Server Architecture']
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['MongoDB', 'Mongoose', 'Database Design', 'Query Optimization']
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: ['Git/GitHub', 'VS Code', 'Postman', 'npm/yarn', 'Vite', 'Firebase']
  }
]

export default function About(){
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section with Profile */}
      <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        className="text-center mb-16"
      >
        <div className="inline-block mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent/40 shadow-xl shadow-accent/20">
            <img 
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Sifat"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%2300B4D8" width="100" height="100"/%3E%3Ctext y="50" x="50" text-anchor="middle" dy=".3em" fill="white" font-size="40" font-family="Arial">S%3C/text%3E%3C/svg%3E'
              }}
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-4">Md Sifat Hossain</h1>
        <p className="text-2xl text-white/90 mb-3">MERN Stack Developer</p>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          Software Engineering student passionate about building scalable web applications
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.2}}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{opacity:0, scale:0.9}}
            animate={{opacity:1, scale:1}}
            transition={{delay:0.3 + i * 0.1}}
            className="bg-gradient-to-br from-navy-2 to-navy-2/50 rounded-xl p-4 text-center border border-accent/20 hover:border-accent/50 transition-all hover:scale-105"
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
            <div className="text-white/60 text-xs">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* About Me */}
      <motion.div
        ref={ref1}
        initial={{opacity:0, y:30}}
        animate={inView1 ? {opacity:1, y:0} : {}}
        className="bg-gradient-to-br from-navy-2 to-navy rounded-xl p-8 mb-16 border border-accent/20"
      >
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-4xl">👨‍💻</span> About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-white/80 leading-relaxed">
          <div>
            <p className="mb-4">
              I'm a passionate <span className="text-accent font-semibold">Software Engineering student</span> at Daffodil International University with a strong focus on full-stack web development using the MERN stack.
            </p>
            <p>
              My journey in tech has been marked by hands-on project experience, winning the <span className="text-gold font-semibold">University Project Showcase 2024</span>, and building real-world applications that solve actual problems.
            </p>
          </div>
          <div>
            <p className="mb-4">
              I specialize in creating <span className="text-accent font-semibold">responsive, scalable web applications</span> with modern technologies like React, Node.js, MongoDB, and Express.js.
            </p>
            <p>
              Beyond coding, my background as a debate champion has honed my <span className="text-accent font-semibold">communication and problem-solving skills</span>, making me a well-rounded developer.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Journey Timeline */}
        <motion.div
          ref={ref2}
          initial={{opacity:0, x:-30}}
          animate={inView2 ? {opacity:1, x:0} : {}}
          className="bg-navy-2 rounded-xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🚀</span> My Journey
          </h2>
          <div className="space-y-6">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{opacity:0, x:-20}}
                animate={inView2 ? {opacity:1, x:0} : {}}
                transition={{delay:0.1 * i}}
                className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-cyan-500 flex items-center justify-center text-xs">
                  {item.icon}
                </div>
                <div className="text-accent text-sm font-semibold mb-1">{item.year}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref2}
          initial={{opacity:0, x:30}}
          animate={inView2 ? {opacity:1, x:0} : {}}
          className="bg-navy-2 rounded-xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">⚡</span> Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{opacity:0, y:20}}
                animate={inView2 ? {opacity:1, y:0} : {}}
                transition={{delay:0.1 * i}}
                className="bg-navy/50 rounded-lg p-5 border border-accent/10 hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-bold text-accent">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Education & Achievements */}
      <motion.div
        ref={ref3}
        initial={{opacity:0, y:30}}
        animate={inView3 ? {opacity:1, y:0} : {}}
        className="bg-gradient-to-br from-navy-2 to-navy rounded-xl p-8 border border-accent/20"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🎓</span> Education
            </h2>
            <div className="bg-navy/50 rounded-lg p-6 border border-accent/10">
              <h3 className="text-xl font-bold text-accent mb-2">BSc in Software Engineering</h3>
              <p className="text-white/80 font-medium mb-1">Daffodil International University</p>
              <p className="text-white/60 text-sm mb-3">2022 - Present | Dhaka, Bangladesh</p>
              <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold border border-accent/30">
                CGPA: 3.25/4.00
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🏆</span> Key Achievements
            </h2>
            <div className="space-y-3">
              <div className="bg-navy/50 rounded-lg p-4 border border-gold/20 hover:border-gold/40 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🥇</span>
                  <div>
                    <h4 className="font-bold text-gold">University Project Champion</h4>
                    <p className="text-white/70 text-sm">First place in 2024 showcase</p>
                  </div>
                </div>
              </div>
              <div className="bg-navy/50 rounded-lg p-4 border border-accent/20 hover:border-accent/40 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h4 className="font-bold text-accent">3+ Projects Delivered</h4>
                    <p className="text-white/70 text-sm">Full-stack applications in production</p>
                  </div>
                </div>
              </div>
              <div className="bg-navy/50 rounded-lg p-4 border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🗣️</span>
                  <div>
                    <h4 className="font-bold text-green-400">Debate Champion</h4>
                    <p className="text-white/70 text-sm">College-level competition winner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.8}}
        className="mt-12 text-center"
      >
        <p className="text-white/70 mb-6">Interested in working together?</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/resume.pdf"
            download
            className="px-5 py-1.5 bg-accent text-navy font-semibold rounded-lg hover:bg-accent/90 transition-all hover:scale-105 flex items-center gap-2 text-sm"
          >
            <span>📄</span> Download Resume
          </a>
          <a
            href="/contact"
            className="px-5 py-1.5 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-navy transition-all hover:scale-105 flex items-center gap-2 text-sm"
          >
            <span>💬</span> Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  )
}
