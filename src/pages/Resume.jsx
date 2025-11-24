import React, { useState } from 'react'
import { motion } from 'framer-motion'

const resumeData = {
  contact: {
    name: 'MD. Sifat Hossain',
    title: 'Software Engineering Student | MERN Stack Developer',
    email: 'hossain35-1072@diu.edu.bd',
    phone: '+880 1609084651',
    location: 'Savar, Dhaka',
    permanentAddress: 'Sarisabari, Jamalpur, Mymensingh',
    linkedin: 'linkedin.com/in/md-sifat-hossain-4854a0244',
    github: 'github.com/sifat-oss'
  },
  
  summary: 'I am a Software Engineering student at Daffodil International University with a strong foundation in front-end development, data analysis, and project management. I have hands-on experience working on projects like BiCycle Hub, where I applied my technical skills to build user-centric solutions. Additionally, my role as a Website Data Analyst at Ranstech Solutions helped me refine my problem-solving abilities and enhance my collaboration skills. Passionate about technology, I aspire to contribute to innovative digital projects and grow into a leadership role in the tech industry.',

  education: [
    {
      degree: 'BSc in Software Engineering',
      institution: 'Daffodil International University',
      location: 'Dhaka, Bangladesh',
      period: '2022 - 2025',
      gpa: 'CGPA: 3.25/4.00'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Panchpotol Degree College',
      period: '2018 - 2020',
      group: 'Science',
      gpa: 'GPA: 4.67/5.00'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Chaperkona Mohes Chandra High School',
      period: '2016 - 2017',
      group: 'Science',
      gpa: 'GPA: 4.89/5.00'
    }
  ],

  experience: [
    {
      role: 'Customer Support Executive (Contractual)',
      company: 'Ranstech Solutions',
      period: 'Aug 2024 - Jan 2025',
      location: 'Remote',
      responsibilities: [
        'Ensured data accuracy using Google Workspace tools',
        'Resolved software issues via remote desktop tools',
        'Logged feedback in Google Sheets to enhance service quality',
        'Handled weekend and holiday shifts with flexibility',
        'Shared client insights to boost product usability',
        'Consistently met performance targets'
      ]
    },
    {
      role: 'Website Data Analyst',
      company: 'Ranstech Solutions',
      period: 'Nov 2023 - July 2024',
      location: 'Remote',
      responsibilities: [
        'Collected, analyzed, and optimized website data to enhance user experience and performance',
        'Worked closely with cross-functional teams to improve content accuracy',
        'Streamlined data processes for better efficiency'
      ]
    }
  ],

  projects: [
    {
      name: 'BiCycle Hub – Bicycle E-Shop',
      tech: 'React.js, Node.js, Express.js, MongoDB, Tailwind CSS',
      period: 'Jan 2025 - May 2025',
      role: 'Front-End Developer',
      link: 'Project Link',
      description: [
        'Developed a responsive e-commerce website for bicycles with product listings, cart functionality, and checkout simulation',
        'Implemented user-friendly interface with modern design principles'
      ]
    },
    {
      name: 'Sarisabari Tottho Seba – Local Service App',
      tech: 'Flutter, Node.js, REST API, MongoDB',
      period: 'Apr 2025 - Dec 2025',
      role: 'Developer',
      description: [
        'Currently developing a mobile app to help residents of Sarisabari Upazila access essential local services',
        'Features include hospitals, clinics, police, fire stations, and a digital GD (General Diary) feature',
        'Aiming to support and empower the local community through accessible service information'
      ]
    },
    {
      name: 'CampusCart – University Marketplace',
      tech: 'MERN Stack',
      period: 'May 2025 - Oct 2025',
      role: 'Team Project Lead / Developer',
      description: [
        'Designed a digital marketplace for university students to buy/sell used goods and services within campus',
        'This project is ongoing'
      ]
    },
    {
      name: 'Portfolio Website',
      tech: 'React.js, Tailwind CSS, Vite',
      period: 'May 2024 - Sep 2024',
      role: 'Developer',
      link: 'Project Link',
      description: [
        'Created a personal portfolio website to showcase projects like BiCycle Hub, Sifat E-Commerce, and Sarisabari Tottho Seba',
        'Highlighting front-end skills and focus on user-centered, real-world solutions'
      ]
    }
  ],

  skills: {
    'Frontend Development': ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React.js'],
    'Backend Development': ['Node.js', 'Express.js', 'Beginner Level'],
    'Database': ['MongoDB', 'Mongoose'],
    'Web Development': ['Web Analytics', 'Database Design', 'Responsive Design'],
    'Tools & Technologies': ['Git/GitHub', 'VS Code', 'Vercel', 'Google Workspace'],
    'Soft Skills': ['Problem Solving', 'Team Collaboration', 'Project Management', 'Data Analysis']
  },

  achievements: [
    {
      title: 'Project Showcasing Champion',
      description: 'Developed a responsive e-commerce platform for bicycles, featuring product listings, a shopping cart, and checkout simulation. Awarded champion in the course\'s project showcasing for innovative design and user experience.'
    }
  ],

  reference: {
    name: 'Dr. Imran Mahmud',
    designation: 'Associate Professor and Head',
    department: 'Department of Software Engineering',
    faculty: 'Faculty of Science and Information Technology',
    institution: 'Daffodil International University',
    email: 'imranmahmud@daffodilvarsity.edu.bd'
  }
}

export default function Resume(){
  const [viewMode, setViewMode] = useState('formatted') // 'formatted' or 'pdf'

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* Header with Actions */}
      <motion.div
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        className="mb-4"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
          <div>
            <h1 className="text-2xl font-bold gradient-text mb-1">Resume</h1>
            <p className="text-white/60 text-sm">View or download my professional resume</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('formatted')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all text-sm ${
                viewMode === 'formatted' 
                  ? 'bg-accent text-navy' 
                  : 'bg-navy-2 text-white/70 hover:text-white'
              }`}
            >
              📄 Formatted
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all text-sm ${
                viewMode === 'pdf' 
                  ? 'bg-accent text-navy' 
                  : 'bg-navy-2 text-white/70 hover:text-white'
              }`}
            >
              📋 PDF
            </button>
            <a 
              href="/resume.pdf" 
              download 
              className="px-4 py-1.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all hover:scale-105 flex items-center gap-1 text-sm"
            >
              <span>⬇️</span> Download
            </a>
          </div>
        </div>
      </motion.div>

      {viewMode === 'formatted' ? (
        // Formatted Resume View
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.3}}
          className="bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-navy to-navy-2 text-white p-8">
              <h1 className="text-3xl font-bold mb-2">{resumeData.contact.name}</h1>
              <p className="text-xl text-accent mb-4">{resumeData.contact.title}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span>📧 {resumeData.contact.email}</span>
                <span>📱 {resumeData.contact.phone}</span>
                <span>🔗 {resumeData.contact.github}</span>
                <span>💼 {resumeData.contact.linkedin}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                <span>📍 Present: {resumeData.contact.location}</span>
                <span>🏠 Permanent: {resumeData.contact.permanentAddress}</span>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Professional Summary */}
              <section>
                <h2 className="text-2xl font-bold text-navy border-b-2 border-accent pb-2 mb-3">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-2xl font-bold text-navy border-b-2 border-accent pb-2 mb-3">
                  EDUCATION
                </h2>
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-700 font-medium">{edu.institution}</p>
                        {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                      </div>
                      <span className="text-gray-600 text-sm">{edu.period}</span>
                    </div>
                    <p className="text-gray-700">{edu.gpa}</p>
                    {edu.group && <p className="text-gray-600">Group: {edu.group}</p>}
                  </div>
                ))}
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-2xl font-bold text-navy border-b-2 border-accent pb-2 mb-3">
                  EXPERIENCE
                </h2>
                {resumeData.experience.map((exp, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                        <p className="text-gray-700 font-medium">{exp.company} - {exp.location}</p>
                      </div>
                      <span className="text-gray-600 text-sm">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j} className="text-gray-700 flex items-start gap-2">
                          <span className="text-accent mt-1">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-2xl font-bold text-navy border-b-2 border-accent pb-2 mb-3">
                  PROJECTS
                </h2>
                {resumeData.projects.map((project, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                        <p className="text-sm text-gray-700"><strong>Role:</strong> {project.role}</p>
                      </div>
                      <span className="text-gray-600 text-sm">{project.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Technologies:</strong> {project.tech}</p>
                    {project.link && <p className="text-sm text-accent mb-2">{project.link}</p>}
                    <ul className="space-y-1">
                      {project.description.map((desc, j) => (
                        <li key={j} className="text-gray-700 flex items-start gap-2">
                          <span className="text-accent mt-1">▸</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* Technical Skills */}
              <section>
                <h2 className="text-2xl font-bold text-navy border-b-2 border-accent pb-2 mb-3">
                  SKILLS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h3 className="font-bold text-gray-900 mb-2">{category}:</h3>
                      <p className="text-gray-700">{skills.join(' • ')}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section>
                <h2 className="text-2xl font-bold text-navy border-b-2 border-accent pb-2 mb-3">
                  ACHIEVEMENTS
                </h2>
                {resumeData.achievements.map((ach, i) => (
                  <div key={i} className="mb-3">
                    <h3 className="font-bold text-gray-900">{ach.title}</h3>
                    <p className="text-gray-700 text-sm">{ach.description}</p>
                  </div>
                ))}
              </section>

              {/* Reference */}
              <section>
                <h2 className="text-2xl font-bold text-navy border-b-2 border-accent pb-2 mb-3">
                  REFERENCE
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900">{resumeData.reference.name}</h3>
                  <p className="text-gray-700">{resumeData.reference.designation}</p>
                  <p className="text-gray-700">{resumeData.reference.department}</p>
                  <p className="text-gray-700">{resumeData.reference.faculty}</p>
                  <p className="text-gray-700">{resumeData.reference.institution}</p>
                  <p className="text-accent text-sm mt-2">📧 {resumeData.reference.email}</p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      ) : (
        // PDF View
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.3}}
          className="bg-navy-2 rounded-xl p-4 border border-white/10 overflow-hidden"
        >
          <iframe
            src="/resume.pdf"
            className="w-full h-[calc(100vh-250px)] min-h-[800px] rounded-lg bg-white"
            title="Resume PDF"
          />
          <div className="mt-4 text-center text-white/60 text-sm">
            <p>Can't view the PDF? <a href="/resume.pdf" download className="text-accent hover:underline">Download it here</a></p>
          </div>
        </motion.div>
      )}
    </section>
  )
}
