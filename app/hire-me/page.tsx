'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaReact, FaRobot, FaShoppingCart, FaPenNib, 
  FaCheckCircle, FaRocket, FaClock, FaCode, FaArrowRight 
} from 'react-icons/fa';

// --- Data: Derived from your Resume & Experience ---
const services = [
  {
    title: "Full Stack Development",
    description: "Scalable web apps using the MERN Stack (MongoDB, Express, React, Node) and Next.js. I build fast, SEO-friendly, and secure applications.",
    icon: FaReact,
    color: "from-blue-500 to-cyan-500",
    tags: ["Next.js", "React", "Tailwind", "Supabase"]
  },
  {
    title: "AI & Automation Solutions",
    description: "Integrate intelligence into your business. From Gemini API chatbots to OpenCV face recognition systems and automated Python scripts.",
    icon: FaRobot,
    color: "from-purple-500 to-pink-500",
    tags: ["Python", "Gemini API", "OpenCV", "Automation"]
  },
  {
    title: "E-commerce & Dropshipping",
    description: "End-to-end store setup and scaling. I handle Shopify/WooCommerce development, vendor management, and ad performance optimization.",
    icon: FaShoppingCart,
    color: "from-pink-500 to-rose-500",
    tags: ["Shopify", "Ads Management", "CRO", "Strategy"]
  },
  {
    title: "Creative Content & Design",
    description: "A complete creative package. Professional video editing (Premiere Pro), engaging technical content writing, and UI/UX design in Figma.",
    icon: FaPenNib,
    color: "from-orange-500 to-yellow-500",
    tags: ["Video Editing", "Figma", "SEO Writing", "Branding"]
  }
];

const whyMePoints = [
  { 
    title: "Algorithmic Efficiency", 
    desc: "With 400+ LeetCode problems solved, I write optimized, clean code.",
    icon: FaCode 
  },
  { 
    title: "Business Mindset", 
    desc: "My background in trading and dropshipping means I build for ROI, not just code.",
    icon: FaRocket 
  },
  { 
    title: "Timely Delivery", 
    desc: "Proven track record of managing internships and freelance gigs simultaneously.",
    icon: FaClock 
  },
];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 50 } 
  },
};

export default function HireMe() {
  return (
    <section className="min-h-screen relative overflow-hidden py-24 bg-slate-50 dark:bg-black transition-colors duration-500">
      
      {/* --- Dynamic Background --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-slate-300">
              Available for Freelance
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 dark:text-white leading-tight">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Extraordinary</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            I combine engineering precision with creative vision. Whether you need a complex AI web app or a high-converting e-commerce store, I deliver.
          </p>
        </motion.div>
        
        {/* --- Services Grid (Resume Based) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <FaArrowRight className="text-slate-300 dark:text-slate-700 -rotate-45 group-hover:rotate-0 group-hover:text-blue-500 transition-all duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Why Me Section --- */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white"
          >
            Why Choose Me?
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {whyMePoints.map((point, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <point.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{point.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- CTA Section --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-900 dark:bg-white text-center py-16 px-6 md:px-20 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white dark:text-slate-900 mb-6">
              Have a project in mind?
            </h2>
            <p className="text-lg text-slate-300 dark:text-slate-500 mb-10 max-w-xl mx-auto">
              I am currently accepting new projects. Let's discuss your requirements and how I can help you achieve your goals.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
              >
                Get a Quote <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}