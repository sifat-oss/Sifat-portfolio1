import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const ALL_PROJECTS = [
  {
    id: 'cyclezen',
    title: 'BiCycle Hub',
    description: 'A comprehensive e-commerce platform designed specifically for bicycle enthusiasts. Features a modern, responsive interface with complete shopping functionality including product browsing, cart management, and secure checkout process.',
    role: 'Full-Stack Developer',
    features: [
      'Product catalog with detailed specifications and high-quality images',
      'Shopping cart with real-time price calculations',
      'User authentication and authorization with JWT',
      'Order management system with status tracking',
      'Admin dashboard for inventory and order management',
      'Responsive design optimized for all devices'
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Tailwind CSS'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800&q=80',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'sarisabari',
    title: 'Sarisabari Tottho Seba',
    description: 'A mobile service application aimed at empowering the local community of Sarisabari Upazila by providing easy access to essential services including hospital information, police services, fire stations, and a digital General Diary (GD) filing system.',
    role: 'Mobile App Developer & Backend Engineer',
    features: [
      'Comprehensive directory of hospitals, clinics, and healthcare facilities',
      'Emergency contact numbers for police and fire stations',
      'Digital GD (General Diary) filing system',
      'Real-time service status updates',
      'Location-based service finder with map integration',
      'Multilingual support for better accessibility'
    ],
    tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'REST API', 'MongoDB', 'Google Maps API'],
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 'ecommerce',
    title: 'Sifat E-Commerce',
    description: 'A full-featured multi-product e-commerce platform built with MERN stack, featuring dynamic product management, secure payment processing, and an intuitive admin panel for complete business operations management.',
    role: 'MERN Stack Developer',
    features: [
      'Multi-vendor product listing with advanced filtering',
      'Dynamic shopping cart with coupon code support',
      'Secure payment gateway integration',
      'User profile management with order history',
      'Comprehensive admin panel for product and order management',
      'Real-time inventory tracking and stock alerts',
      'Customer reviews and ratings system'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe API', 'Redux'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'A modern, visually stunning portfolio website showcasing projects, skills, and professional experience. Built with cutting-edge technologies to demonstrate front-end development expertise with smooth animations and optimal performance.',
    role: 'Frontend Developer & Designer',
    features: [
      'Responsive design with mobile-first approach',
      'Smooth page transitions and scroll animations',
      'Interactive project showcase with detailed case studies',
      'Downloadable resume with PDF viewer',
      'Contact form with email integration',
      'Dark theme optimized for readability',
      'SEO optimized for better visibility'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'React Router'],
    category: 'Frontend',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'taskmanager',
    title: 'Task Manager Pro',
    description: 'A collaborative task management application designed for teams to organize, prioritize, and track project tasks in real-time. Features include task assignments, deadline tracking, and team collaboration tools.',
    role: 'Full-Stack Developer',
    features: [
      'Real-time task updates with Socket.io',
      'Priority-based task organization (High, Medium, Low)',
      'Team collaboration with task assignments',
      'Deadline reminders and notifications',
      'Project progress tracking dashboard',
      'File attachments and comments on tasks',
      'Kanban board and list view options'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'JWT'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'weatherapp',
    title: 'Weather Dashboard',
    description: 'An interactive weather application providing real-time weather data, forecasts, and climate information for locations worldwide. Features beautiful visualizations and detailed meteorological data.',
    role: 'Frontend Developer',
    features: [
      'Current weather conditions with detailed metrics',
      '7-day weather forecast with hourly breakdown',
      'Location-based automatic weather detection',
      'Interactive weather maps and radar',
      'Temperature, humidity, wind speed, and pressure data',
      'Weather alerts and severe weather warnings',
      'Beautiful weather animations and visualizations'
    ],
    tech: ['React.js', 'OpenWeather API', 'Geolocation API', 'Chart.js', 'Tailwind CSS'],
    category: 'Frontend',
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'chatapp',
    title: 'Real-Time Chat Application',
    description: 'A modern instant messaging platform enabling users to communicate in real-time with features like group chats, private messaging, and message history. Built for speed and reliability.',
    role: 'Full-Stack Developer',
    features: [
      'Real-time messaging with Socket.io',
      'One-on-one and group chat functionality',
      'Message read receipts and typing indicators',
      'User authentication and profile management',
      'Message history with search functionality',
      'File and image sharing capabilities',
      'Online/offline status indicators'
    ],
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Express.js'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    gradient: 'from-teal-500 to-green-500'
  },
  {
    id: 'blogplatform',
    title: 'Blog Publishing Platform',
    description: 'A comprehensive content management system for bloggers and content creators. Features a powerful rich text editor, comment system, and analytics dashboard for tracking post performance.',
    role: 'Full-Stack Developer',
    features: [
      'Rich text editor with formatting options (Quill)',
      'Category and tag-based content organization',
      'Comment system with moderation tools',
      'User profiles with bio and social links',
      'Post analytics (views, likes, shares)',
      'SEO optimization for blog posts',
      'Draft saving and scheduled publishing'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Quill.js', 'JWT'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'inventorysystem',
    title: 'Inventory Management System',
    description: 'A robust business solution for tracking inventory, managing suppliers, and generating comprehensive reports. Designed to streamline inventory operations for small to medium-sized businesses.',
    role: 'Full-Stack Developer',
    features: [
      'Product inventory tracking with SKU management',
      'Low stock alerts and reorder notifications',
      'Supplier management with contact information',
      'Purchase order creation and tracking',
      'Sales and inventory reports with charts',
      'Barcode scanning support',
      'PDF export for invoices and reports'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'PDFKit'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracking App',
    description: 'A comprehensive mobile fitness application helping users achieve their health goals through workout tracking, nutrition monitoring, and progress visualization with social features for motivation.',
    role: 'Mobile App Developer',
    features: [
      'Personalized workout plans and routines',
      'Exercise tracking with sets, reps, and weights',
      'Calorie counter and nutrition logging',
      'Progress tracking with charts and statistics',
      'Social features for sharing achievements',
      'Exercise library with video demonstrations',
      'Goal setting and milestone tracking'
    ],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Chart.js', 'Firebase'],
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    id: 'restaurant-booking',
    title: 'Restaurant Booking System',
    description: 'An online reservation platform connecting diners with restaurants. Features real-time table availability, menu browsing, and integrated payment processing for seamless dining experiences.',
    role: 'Full-Stack Developer',
    features: [
      'Real-time table availability and booking',
      'Digital menu with food categories and images',
      'Reservation management for restaurants',
      'Integrated payment processing with Stripe',
      'Email confirmations and reminders',
      'Customer reviews and ratings',
      'Special requests and dietary preferences handling'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Stripe API', 'Nodemailer'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    gradient: 'from-amber-500 to-red-500'
  },
  {
    id: 'property-finder',
    title: 'Real Estate Property Finder',
    description: 'A sophisticated property listing platform with advanced search capabilities, virtual property tours, and integrated communication tools connecting buyers, sellers, and real estate agents.',
    role: 'Full-Stack Developer',
    features: [
      'Advanced property search with multiple filters',
      'Interactive map integration with property markers',
      '360° virtual property tours',
      'Agent messaging and inquiry system',
      'Saved searches and favorite properties',
      'Property comparison tool',
      'Mortgage calculator and property valuation'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API', 'AWS S3'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'education-lms',
    title: 'Learning Management System',
    description: 'A comprehensive educational platform enabling instructors to create and manage courses, deliver video content, assess students through quizzes, and track learning progress with automated certificate generation.',
    role: 'Full-Stack Developer',
    features: [
      'Course creation and management for instructors',
      'Video streaming with adaptive quality',
      'Interactive quizzes with instant feedback',
      'Student progress tracking and analytics',
      'Discussion forums for each course',
      'Automated certificate generation upon completion',
      'Assignment submission and grading system'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Video.js', 'PDFKit', 'AWS S3'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    gradient: 'from-indigo-600 to-purple-500'
  },
  {
    id: 'music-player',
    title: 'Spotify Clone Music Player',
    description: 'A feature-rich music streaming application inspired by Spotify, offering playlist management, music discovery, and audio visualization with personalized recommendations powered by AI.',
    role: 'Frontend Developer',
    features: [
      'Music playback with play, pause, skip controls',
      'Playlist creation and management',
      'Advanced search with filters by artist, album, genre',
      'Audio visualization with equalizer',
      'Personalized music recommendations',
      'Lyrics display synchronized with playback',
      'Offline mode for downloaded songs'
    ],
    tech: ['React.js', 'Spotify API', 'Web Audio API', 'Tailwind CSS', 'Redux'],
    category: 'Frontend',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'social-media',
    title: 'Social Media Dashboard',
    description: 'A fully-featured social networking platform enabling users to connect, share content, and engage with their network through posts, comments, likes, and real-time notifications.',
    role: 'Full-Stack Developer',
    features: [
      'User profiles with customizable bio and photos',
      'News feed with posts, images, and videos',
      'Like, comment, and share functionality',
      'Friend request and connection system',
      'Real-time notifications for interactions',
      'Direct messaging between users',
      'Media upload and storage with AWS S3'
    ],
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'AWS S3', 'Express.js'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    gradient: 'from-violet-500 to-purple-600'
  },
]

export default function Projects(){
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const filtered = filter === 'All' 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === filter)

  const categories = ['All', 'Full Stack', 'Frontend', 'Mobile']

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1 
          className="text-3xl font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          All Projects
        </motion.h1>
        
        <div className="mb-8 flex gap-3 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === cat 
                  ? 'bg-accent text-navy font-semibold' 
                  : 'bg-navy-2 text-white/80 hover:bg-navy-2/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              layout
            >
              <ProjectCard project={p} onClick={handleProjectClick} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}
