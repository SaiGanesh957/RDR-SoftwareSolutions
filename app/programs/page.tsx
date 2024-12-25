'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Program {
  id: number
  title: string
  description: string
  modules: string[]
}

const programs: Program[] = [
  {
    id: 1,
    title: "Campus Recruitment Training (CRT)",
    description: "Prepare for campus recruitment with our comprehensive training program.",
    modules: ["Verbal Ability", "Soft Skills", "Aptitude", "Technical Skills"]
  },
  {
    id: 2,
    title: "Corporate Readiness",
    description: "Develop essential skills for the corporate world and boost your professional growth.",
    modules: ["Communication Skills", "Leadership", "Time Management", "Problem Solving"]
  },
  {
    id: 3,
    title: "Technical Skills Training",
    description: "Master the latest technical skills demanded by the industry.",
    modules: ["Python", "Java", "Data Science", "Artificial Intelligence"]
  },
  {
    id: 4,
    title: "Workshops",
    description: "Participate in our specialized workshops for various educational levels.",
    modules: ["School Level", "Intermediate", "Degree", "B.Tech Level"]
  }
]

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Training Programs
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <motion.div 
              key={program.id}
              className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProgram(program)}
            >
              <h2 className="text-2xl font-semibold gradient-text mb-4">{program.title}</h2>
              <p className="text-white mb-4">{program.description}</p>
              <button 
                className="bg-violet-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-violet-700 transition duration-300"
                onClick={() => setSelectedProgram(program)}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold gradient-text mb-4">{selectedProgram.title}</h2>
              <p className="text-white mb-4">{selectedProgram.description}</p>
              <h3 className="text-xl font-semibold gradient-text mb-2">Modules:</h3>
              <ul className="list-disc list-inside text-white">
                {selectedProgram.modules.map((module, index) => (
                  <li key={index}>{module}</li>
                ))}
              </ul>
              <button 
                className="mt-6 bg-violet-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-violet-700 transition duration-300"
                onClick={() => setSelectedProgram(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

