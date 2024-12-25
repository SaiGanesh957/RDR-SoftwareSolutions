'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'

interface Service {
  id: number
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    id: 1,
    title: "Corporate Training",
    description: "Tailored end-to-end training solutions for companies.",
    features: [
      "Customized curriculum",
      "On-site or remote training options",
      "Industry-expert trainers",
      "Post-training support",
      "Skill gap analysis",
      "Performance tracking"
    ]
  },
  {
    id: 2,
    title: "Student Development Programs",
    description: "Comprehensive skill enhancement for students.",
    features: [
      "Campus Recruitment Training",
      "Soft skills workshops",
      "Technical skills bootcamps",
      "Career guidance sessions",
      "Mock interviews",
      "Industry exposure programs"
    ]
  },
  {
    id: 3,
    title: "Faculty Development Programs",
    description: "Empowering educators with modern teaching methodologies.",
    features: [
      "Innovative teaching techniques",
      "Technology integration in education",
      "Research methodology workshops",
      "Curriculum development support",
      "Pedagogical skill enhancement",
      "Educational leadership training"
    ]
  },
  {
    id: 4,
    title: "Technical Skills Training",
    description: "Cutting-edge technical training for professionals and students.",
    features: [
      "Programming languages (Python, Java, C++)",
      "Web development (HTML, CSS, JavaScript)",
      "Data Science and Machine Learning",
      "Cloud Computing (AWS, Azure, GCP)",
      "DevOps and Agile methodologies",
      "Cybersecurity fundamentals"
    ]
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
            >
              <h2 className="text-2xl font-semibold gradient-text mb-4">{service.title}</h2>
              <p className="text-white mb-4">{service.description}</p>
              <button 
                className="bg-violet-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-violet-700 transition duration-300 flex items-center"
                onClick={() => setSelectedService(service)}
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold gradient-text">{selectedService.title}</h2>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-white hover:text-violet-400 transition duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-white mb-4">{selectedService.description}</p>
              <h3 className="text-xl font-semibold gradient-text mb-2">Key Features:</h3>
              <ul className="text-white space-y-2">
                {selectedService.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-violet-400" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


