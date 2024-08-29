'use client'

import { motion } from 'framer-motion'

const skills = [
  'Python', 'C++', 'C', 'HTML', 'CSS', 'JavaScript', 'Bash',
  'Git', 'Docker', 'Amazon Web Services', 'React', 'Node.js', 'Express.js'
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              I&#39;m an aspiring full-stack developer and B.Tech CSE student at Vellore Institute of Technology, Chennai. 
              I&#39;m passionate about programming and have a strong foundation in C++, JavaScript, and React.
            </p>
            <p>
              With experience in developing and managing projects from inception to completion, I focus on 
              problem-solving and efficient coding practices. I also have a proven ability to manage and coordinate 
              events, demonstrating strong leadership and organizational skills.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 m-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}