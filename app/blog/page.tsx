'use client';

import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaChartLine, 
  FaLaptopCode, 
  FaBuilding, 
  FaCalendarAlt,
  FaArrowRight,
  FaShoppingCart,
  FaPenNib,
  FaGem
} from 'react-icons/fa';

// --- Experience Data with Real Images ---
const experiences = [
  {
    id: 1,
    role: "Full Stack & AI Intern",
    company: "Under Prof. Dr. Santosh Amu",
    date: "Nov 2022 - Present",
    category: "Engineering",
    description: "Spearheading AI-integrated web solutions. Built a 'Portfolio Generator' using the Gemini API that parses resumes to automate website creation by 70%. Developed a fault-tolerant Python backend and a Face Recognition Attendance System using OpenCV.",
    skills: ["React.js", "Python", "Gemini API", "OpenCV", "Automation"],
    icon: FaLaptopCode,
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
    // Image: Code/AI Development
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    role: "E-commerce Manager",
    company: "Multi-Seller Operations",
    date: "Jun 2023 - Present",
    category: "Business",
    description: "Partnered with diverse sellers to build and promote product lines using dropshipping models. Handled end-to-end store operations, from sourcing winning products to managing inventory flow. Executed performance marketing campaigns that boosted vendor sales.",
    skills: ["Dropshipping", "Vendor Management", "Digital Marketing", "Shopify"],
    icon: FaShoppingCart,
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
    // Image: E-commerce Dashboard / Analytics
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    role: "Freelance Creative Lead",
    company: "Self-Employed",
    date: "Jan 2023 - Present",
    category: "Creative",
    description: "Delivering high-impact content strategies. \n• Video Editing: Produced engaging reels/videos using Premiere Pro & After Effects.\n• Content Writing: Crafted SEO-optimized tech blogs.\n• Graphic Design: Created brand identities using Figma.",
    skills: ["Video Editing", "Content Strategy", "SEO", "Adobe Suite", "Figma"],
    icon: FaPenNib,
    color: "from-purple-500 to-violet-500",
    shadow: "shadow-purple-500/20",
    // Image: Design Software / Editing Timeline
    image: "https://th.bing.com/th/id/OIP.eYVn6MlSts4J3DLwpdYYwgHaFQ?w=197&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  },
  {
    id: 4,
    role: "Stock Market Trader",
    company: "Active Trading Portfolio",
    date: "2021 - Present",
    category: "Finance",
    description: "Active trader in the Indian stock market executing intraday and swing trading strategies. Proficient in technical analysis (Price Action, Indicators). Developed a 'Stock Price Prediction' model using TensorFlow to backtest strategies.",
    skills: ["Stock Trading", "Technical Analysis", "Risk Management", "TensorFlow"],
    icon: FaChartLine,
    color: "from-emerald-500 to-green-500",
    shadow: "shadow-emerald-500/20",
    // Image: Stock Charts / Trading Setup
    image: "https://www.bing.com/th/id/OIP.k7xrxWjgYxYyfOE01hGdIgHaFE?w=233&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2"
  }
];

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const imageAnim = {
  hidden: { scale: 0.9, opacity: 0, rotate: -2 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  hover: {
    scale: 1.05,
    rotate: 0,
    transition: { duration: 0.4 }
  }
};

export default function Experience() {
  return (
    <div className="min-h-screen relative overflow-hidden py-24 bg-white dark:bg-black transition-colors duration-500">
      
      {/* --- Dynamic Background Grid --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <FaGem className="text-blue-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-slate-300">
              Multidisciplinary Professional
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-slate-900 dark:text-white tracking-tighter">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">Odyssey</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Merging <span className="font-bold text-slate-900 dark:text-white">Engineering</span> logic, 
            <span className="font-bold text-slate-900 dark:text-white"> Business</span> strategy, and 
            <span className="font-bold text-slate-900 dark:text-white"> Creative</span> vision.
          </p>
        </motion.div>

        {/* --- TIMELINE SECTION --- */}
        <div className="relative">
          
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-20 hidden md:block" />

          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                
                {/* 1. THE DETAILS CARD */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className="w-full md:w-[45%]"
                >
                  <div className={`
                    relative p-8 md:p-10 rounded-[2.5rem] bg-white/80 dark:bg-slate-950/60 backdrop-blur-xl 
                    border border-white/20 dark:border-white/10 ${exp.shadow} shadow-2xl group hover:-translate-y-1 transition-transform duration-500
                  `}>
                    <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${exp.color} text-white shadow-lg`}>
                        <exp.icon className="w-6 h-6" />
                      </div>
                      <span className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                        {exp.date}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      {exp.role}
                    </h2>
                    <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500 mb-6 flex items-center gap-2">
                      <FaBriefcase className="w-4 h-4" /> {exp.company}
                    </h3>

                    <div className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 whitespace-pre-line">
                      {exp.description}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 text-xs font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* 2. CENTER DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white dark:bg-slate-950 border-4 border-slate-100 dark:border-slate-800 shadow-xl z-20">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`} />
                </div>

                {/* 3. THE IMAGE (Visual Correspondence) */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={imageAnim}
                  className="w-full md:w-[45%] aspect-video md:aspect-square relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-20 blur-3xl rounded-full`} />
                  
                  <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                    <img 
                      src={exp.image} 
                      alt={exp.role}
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                    
                    {/* Floating Label */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
                          Focus Area
                        </div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">
                          {exp.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

        {/* --- CTA Section --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 relative overflow-hidden rounded-[3rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-12 md:p-24 text-center shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Collaborate?</h2>
            <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
              From coding algorithms to trading strategies — I bring the full package.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Start a Conversation <FaArrowRight />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}