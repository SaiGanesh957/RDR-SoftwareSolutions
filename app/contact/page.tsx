'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

type Inputs = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    setIsSubmitted(true)
    reset()
    // Here you would typically send the form data to your backend
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold gradient-text mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  id="name"
                  className="w-full px-3 py-2 bg-white bg-opacity-10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Your Name"
                />
                {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  id="email"
                  className="w-full px-3 py-2 bg-white bg-opacity-10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="your@email.com"
                />
                {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white bg-opacity-10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}
              </div>
              <motion.button 
                type="submit"
                className="bg-violet-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-violet-700 transition duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </motion.button>
            </form>
            {isSubmitted && (
              <motion.p 
                className="mt-4 text-green-400 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for your message. We&apos;ll get back to you soon!
              </motion.p>
            )}
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold gradient-text mb-4">Contact Information</h2>
            <div className="space-y-4 text-white">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <MapPin className="w-6 h-6 mr-2 text-violet-400" />
                <p>
                  D-225 Vivekananda Nagar Colony,<br />
                  Kukatpally, Hyderabad,<br />
                  Telangana, India
                </p>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Phone className="w-6 h-6 mr-2 text-violet-400" />
                <p>+91 7337 37 2250</p>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Mail className="w-6 h-6 mr-2 text-violet-400" />
                <p>info@rdrss.com</p>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold gradient-text mb-2">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social, index) => (
                    <motion.a 
                      key={social}
                      href="#"
                      className="text-white hover:text-violet-400 transition duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

