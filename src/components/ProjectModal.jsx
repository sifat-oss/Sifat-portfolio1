import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !project) return null

  const screenshots = project.screenshots || [project.imageUrl]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-navy-2 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-accent/20 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-navy-2 border-b border-white/10 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold gradient-text">{project.title}</h2>
                <p className="text-accent text-sm mt-1">{project.role}</p>
              </div>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white text-3xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Image Carousel */}
            {screenshots.length > 0 && (
              <div className="relative h-80 bg-navy">
                <img
                  src={screenshots[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23071A3A" width="800" height="400"/%3E%3Ctext y="50%25" x="50%25" text-anchor="middle" dy=".3em" fill="%2300B4D8" font-size="60" font-family="Arial"%3E' + project.title.charAt(0) + '%3C/text%3E%3C/svg%3E'
                  }}
                />
                
                {screenshots.length > 1 && (
                  <>
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-navy/80 hover:bg-navy text-white p-3 rounded-full backdrop-blur-sm"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-navy/80 hover:bg-navy text-white p-3 rounded-full backdrop-blur-sm"
                    >
                      →
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-accent w-6'
                              : 'bg-white/40 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-accent">📝</span> Description
                </h3>
                <p className="text-white/80 leading-relaxed">{project.description}</p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-accent">✨</span> Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-white/80 flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-accent">⚙️</span> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-accent">🏷️</span> Category
                </h3>
                <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-lg font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 p-6 bg-navy/50">
              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-accent text-navy font-semibold rounded-lg hover:bg-accent/90 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
