import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({project, onClick}){
  const { image, gradient, imageUrl } = project
  
  return (
    <motion.article 
      whileHover={{y:-8, scale:1.03}} 
      transition={{duration:0.3}}
      className="bg-navy-2 rounded-xl overflow-hidden shadow-md hover-scale border border-white/10 hover:border-accent/50 group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div>
        <div className="h-48 overflow-hidden relative">
          {imageUrl ? (
            <>
              <img 
                src={imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className={`w-full h-full bg-gradient-to-br ${gradient || 'from-accent/10 to-gold/5'} hidden items-center justify-center absolute inset-0`}>
                <div className="text-8xl group-hover:scale-125 transition-transform duration-500">{image || '💻'}</div>
              </div>
            </>
          ) : (
            <div className={`h-48 rounded-t-md bg-gradient-to-br ${gradient || 'from-accent/10 to-gold/5'} flex items-center justify-center`}>
              <div className="text-8xl group-hover:scale-125 transition-transform duration-500">{image || '💻'}</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-2 via-transparent to-transparent"></div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
          <p className="text-white/70 mt-2 text-sm line-clamp-3">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech?.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
