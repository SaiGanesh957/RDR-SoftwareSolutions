import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Code, Award } from 'lucide-react'

const services = [
  {
    title: 'Corporate Training',
    description: 'Tailored programs to enhance your team\'s skills and productivity.',
    icon: Users,
    link: '/services#corporate-training'
  },
  {
    title: 'CRT Programs',
    description: 'Comprehensive Campus Recruitment Training to prepare students for job markets.',
    icon: BookOpen,
    link: '/services#crt-programs'
  },
  {
    title: 'Technical Skills',
    description: 'Cutting-edge technical training in various programming languages and technologies.',
    icon: Code,
    link: '/services#technical-skills'
  },
  {
    title: 'Soft Skills Development',
    description: 'Enhance communication, leadership, and interpersonal skills for professional growth.',
    icon: Award,
    link: '/services#soft-skills'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to RDR Software Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering Careers Through Expert Training and Development
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-violet-600 text-white px-8 py-3 rounded-full font-semibold text-xl hover:bg-violet-700 transition duration-300 inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white bg-opacity-5">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold gradient-text text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <service.icon className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-2xl font-semibold gradient-text mb-4">{service.title}</h3>
                <p className="text-white mb-4">{service.description}</p>
                <Link href={service.link} className="text-violet-400 hover:text-violet-300 transition duration-300 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold gradient-text text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About RDR Software Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold gradient-text mb-4">Our Mission</h3>
              <p className="text-white mb-6">
                At RDR Software Solutions, we are committed to bridging the gap between academia and industry. Our mission is to empower individuals and organizations with cutting-edge training and development solutions, enabling them to excel in the ever-evolving technological landscape.
              </p>
              <Link href="/about" className="bg-violet-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-violet-700 transition duration-300 inline-flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold gradient-text mb-4">Why Choose Us?</h3>
              <ul className="text-white space-y-2">
                <li>✓ Industry-expert trainers</li>
                <li>✓ Customized curriculum for each client</li>
                <li>✓ Hands-on practical training</li>
                <li>✓ Placement assistance for students</li>
                <li>✓ Continuous learning support</li>
                <li>✓ State-of-the-art training facilities</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-white bg-opacity-5">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold gradient-text text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white text-lg italic mb-4">
              "RDR Software Solutions has been instrumental in upskilling our IT team. Their tailored training programs and expert instructors have significantly improved our team's productivity and technical capabilities."
            </p>
            <p className="text-violet-400 font-semibold">- John Doe, CTO of TechCorp</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Elevate Your Skills?
          </motion.h2>
          <motion.p 
            className="text-xl text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join RDR Software Solutions and take the first step towards a brighter future in technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-violet-600 text-white px-8 py-3 rounded-full font-semibold text-xl hover:bg-violet-700 transition duration-300 inline-flex items-center">
              Contact Us Today
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

