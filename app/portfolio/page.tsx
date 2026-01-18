'use client';

import Header1 from '@/components/headers/Header1';
import Footer1 from '@/components/footers/Footer1';
import Link from 'next/link';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution built with Next.js and Stripe',
    category: 'Web Development',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Beautiful portfolio website with custom animations',
    category: 'Design',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    description: 'Comprehensive dashboard for managing business operations',
    category: 'Web Development',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Mobile App UI',
    description: 'Modern mobile app interface design',
    category: 'Design',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'API Integration',
    description: 'Third-party API integration with real-time data',
    category: 'Backend',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Landing Page',
    description: 'High-converting landing page with A/B testing',
    category: 'Web Development',
    gradient: 'from-yellow-500 to-orange-500',
  },
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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header1 />
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Explore my recent work and projects
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <Link
                  href={`/portfolio/${item.id}`}
                  className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
                >
                  <div className={`aspect-video bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.8 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="text-white text-2xl font-bold transform group-hover:scale-110 transition-transform duration-300"
                      >
                        {item.title.split(' ')[0]}
                      </motion.div>
                    </div>
                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700"
                      initial={{ opacity: 0, x: 20 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      {item.category}
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                    <motion.div
                      className="flex items-center text-purple-600 font-semibold text-sm"
                      whileHover={{ x: 5 }}
                    >
                      View Project
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
}
