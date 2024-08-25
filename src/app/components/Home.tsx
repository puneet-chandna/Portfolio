'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&#39;m Puneet Chandna
          </h1> 
          <h2 className="text-2xl md:text-3xl text-blue-500 mb-4">
            Aspiring Full-Stack Developer
          </h2>
          <p className="mb-8">
            B.Tech CSE student passionate about programming and with a strong foundation in C++, JavaScript, and React.
          </p>
          <motion.a 
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
        <motion.div 
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image 
            src="/placeholder.svg" 
            alt="Puneet Chandna" 
            width={400} 
            height={400} 
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}