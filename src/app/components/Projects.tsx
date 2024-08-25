'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'BookMyEvent',
    description: 'Created a sophisticated event management application that integrated real-time QR code scanning with an ESP32 kit; system now processes over 10,000 ticket authentications per event, streamlining operations and improving customer satisfaction.',
    image: '/placeholder.svg',
    tags: ['Node.js', 'Express.js', 'Computer Vision', 'ESP32', 'Flutter', 'MongoDB'],
    date: 'March 2024'
  },
  {
    title: 'Octagenius 16',
    description: 'Self-designed 8-bit CPU with a 16-instruction set based on RISC architecture.',
    image: '/placeholder.svg',
    tags: ['Simulator.io'],
    date: 'October 2023'
  },
  {
    title: 'Gemini Clone',
    description: 'Developed a fully functional Gemini clone using React. The application simulates the Gemini platform\'s core features and integrates with a Gemini API for real-time data retrieval. Users can interact with the interface similarly to the original Gemini platform.',
    image: '/placeholder.svg',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
    date: 'August 2024'
  },
  {
    title: 'Smart Pill Dispenser',
    description: 'Developed an advanced medicine dispenser incorporating a GSM module and fingerprint sensor for secure authentication; the system ensures accurate dosage delivery and enhances patient safety.',
    image: '/placeholder.svg',
    tags: ['SolidWorks', 'Arduino', 'GSM'],
    date: 'November 2023'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{project.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}