import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectDetail(){
  const { id } = useParams()
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Project {id}</h1>
      <div className="bg-navy-2 rounded-xl p-6">
        <div className="h-64 bg-white/5 rounded-md mb-4 flex items-center justify-center">Carousel / screenshots</div>
        <p className="text-white/80">Detailed description, role, features, and tech used.</p>
        <div className="mt-4 text-sm text-white/70">Tech: React · Tailwind · Framer Motion</div>
      </div>
    </section>
  )
}
