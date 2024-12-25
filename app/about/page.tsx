'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About RDR Software Solutions
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold gradient-text mb-4">Our Mission</h2>
            <p className="text-white">To educate, train and inspire people to reach their professional goals. We deliver value-oriented, intelligent solutions at every phase of the skills process, making the best choice for our clients&apos; goals.</p>

          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold gradient-text mb-4">Our Vision</h2>
            <p className="text-white">To be a vibrant and responsible organization recognized for outstanding contribution towards education and training.</p>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold gradient-text mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Respect</li>
            <li>Accountability</li>
            <li>Integrity</li>
            <li>Success</li>
            <li>Excellence</li>
          </ul>
        </motion.div>
        <motion.div 
          className="mt-12 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold gradient-text mb-4">Founder's Message</h2>
          <p className="text-white">M.V. Raja DeeRaj, our founder, envisions RDR Software Solutions as a bridge between academia and industry. Our goal is to provide cutting-edge training and development solutions that empower individuals and organizations to excel in the ever-evolving technological landscape.</p>
        </motion.div>
      </div>
    </div>
  )
}

