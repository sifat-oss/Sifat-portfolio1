import React from 'react'
import { motion } from 'framer-motion'

export default function SkillBar({label, value=80}){
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm text-white/80 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="bg-white/5 rounded-full h-3 overflow-hidden">
        <motion.div className="h-3 bg-accent rounded-full" initial={{width:0}} animate={{width:`${value}%`}} transition={{duration:1}} />
      </div>
    </div>
  )
}
