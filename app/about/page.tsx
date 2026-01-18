'use client';

import Header1 from '@/components/headers/Header1';
import Footer1 from '@/components/footers/Footer1';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Frontend Development', tech: 'React, Next.js, TypeScript', color: 'from-blue-500 to-cyan-500' },
  { name: 'Backend Development', tech: 'Node.js, APIs', color: 'from-purple-500 to-pink-500' },
  { name: 'UI/UX Design', tech: 'Figma, Design Systems', color: 'from-orange-500 to-red-500' },
  { name: 'Responsive Web Design', tech: 'Tailwind CSS, CSS3', color: 'from-green-500 to-emerald-500' },
  { name: 'Performance Optimization', tech: 'Web Vitals, SEO', color: 'from-indigo-500 to-purple-500' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header1 />
      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
            </h1>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="prose prose-lg max-w-none"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-700 mb-6 text-lg md:text-xl leading-relaxed"
            >
              Welcome to my portfolio! I'm a passionate developer dedicated to creating 
              amazing digital experiences using modern web technologies.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-700 mb-12 text-lg md:text-xl leading-relaxed"
            >
              With years of experience in web development, I specialize in building 
              responsive, performant, and user-friendly applications. My expertise spans 
              across various technologies including React, Next.js, TypeScript, and more.
            </motion.p>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mt-12 mb-8"
            >
              Skills & Expertise
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.name}</h3>
                    <p className="text-gray-600">{skill.tech}</p>
                    <div className={`mt-4 h-2 bg-gradient-to-r ${skill.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
}
