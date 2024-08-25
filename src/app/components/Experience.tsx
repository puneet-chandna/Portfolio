'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Student Coordinator',
    organization: 'CyberX',
    period: '2023',
    description: 'Facilitated hackathon and mentorship sessions, engaging with industry experts and providing guidance to participants; over 400 students benefited from direct insights and networking opportunities with professionals.'
  },
  {
    title: 'Outreach Lead',
    organization: 'DAO Community',
    period: '2023 - Present',
    description: 'Led outreach efforts for the DAO community, expanding its reach and engagement.'
  },
  {
    title: 'Blockchain Lead',
    organization: 'Hackclub',
    period: '2023 - Present',
    description: 'Spearheaded blockchain initiatives and education within the Hackclub community.'
  },
  {
    title: 'Organizer',
    organization: 'Defy24 Web3 Hackathon',
    period: '2024',
    description: 'Led a team of 35 students to organize a 36-hour hackathon with around 200 participants from across India, setting a new record for the highest sponsorship and profit for any club event in VIT history.'
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience & Activities
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title}
              className="flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/4">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-blue-500">{exp.organization}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}