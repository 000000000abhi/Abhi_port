'use client';

import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, 
  FaNodeJs, FaAws, FaLinux, FaGitAlt, FaDatabase, FaCode, FaServer, 
  FaCloud, FaPaperPlane, FaLaptopCode, FaChartPie, FaWind, 
  FaTrophy, FaCertificate, FaBriefcase, FaGraduationCap, FaLayerGroup, 
  FaTerminal
} from 'react-icons/fa';

// --- 1. Custom Connector Component ---
const ConnectorLine = () => (
  <div className="h-16 w-full flex justify-center items-center relative overflow-hidden -my-2 z-0">
    <svg 
      width="40" 
      height="64" 
      viewBox="0 0 40 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-500/30 dark:text-blue-500/50"
    >
      <path 
        d="M20 0 C 20 20, 35 20, 35 32 C 35 44, 20 44, 20 64" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeDasharray="4 4" 
        strokeLinecap="round"
      />
      <circle r="3" fill="#3b82f6">
        <animateMotion 
          dur="3s" 
          repeatCount="indefinite"
          path="M20 0 C 20 20, 35 20, 35 32 C 35 44, 20 44, 20 64"
        />
      </circle>
    </svg>
  </div>
);

// --- 2. Live Terminal (Kept for "Cool Animation" & Space Filling) ---
const LiveTerminal = () => (
  <div className="w-full rounded-3xl bg-[#1e1e1e] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs md:text-sm relative group my-6">
    <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-slate-800">
      <div className="w-3 h-3 rounded-full bg-red-500/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <div className="w-3 h-3 rounded-full bg-green-500/80" />
      <span className="ml-2 text-slate-500 text-[10px] uppercase tracking-wider">portfolio_bot.py</span>
    </div>
    
    <div className="p-6 text-slate-300 space-y-2">
      <div className="flex gap-2">
        <span className="text-pink-500">❯</span>
        <span className="text-cyan-400">~/system</span>
        <span className="text-yellow-100">python init_profile.py</span>
      </div>
      <div className="text-slate-500 pl-4 border-l border-slate-700 ml-1 leading-relaxed">
        <span className="text-blue-400">[INFO]</span> Connecting to Gemini API...<br />
        <span className="text-blue-400">[INFO]</span> Loading fullstack modules...<br />
        <span className="text-emerald-500">[SUCCESS]</span> Skills loaded: React, Node, AI.<br />
        <span className="text-purple-400">[READY]</span> System optimization complete.<br />
      </div>
      <div className="flex gap-2 mt-4">
        <span className="text-pink-500">❯</span>
        <span className="animate-pulse w-2 h-4 bg-slate-500 block"></span>
      </div>
    </div>
    
    <div className="absolute bottom-4 right-4">
      <FaTerminal className="w-12 h-12 text-white/5 rotate-12" />
    </div>
  </div>
);

// --- Custom Arrow ---
const DottedArrow = ({ className }: { className?: string }) => (
  <svg className={`absolute pointer-events-none z-0 ${className}`} width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10 10 C 100 10, 200 100, 380 180" 
      stroke="url(#gradient-arrow)" 
      strokeWidth="3" 
      strokeDasharray="8 8" 
      strokeLinecap="round"
      fill="none"
    />
    <defs>
      <linearGradient id="gradient-arrow" x1="0" y1="0" x2="100%" y2="0">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);

export default function About() {
  
  // --- Data Configuration ---
  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Problems', value: '400+' },
    { label: 'CodeChef', value: '3-Star' },
  ];

  const skillCategories = [
    {
      title: 'Languages',
      Icon: FaCode,
      description: 'Core languages.',
      color: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'group-hover:border-blue-500/50',
      iconColor: 'text-blue-500',
      skills: [
        { name: 'Python', icon: FaPython, color: 'text-blue-500' },
        { name: 'Java', icon: FaJava, color: 'text-red-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-400' },
        { name: 'C', icon: FaCode, color: 'text-blue-600' },
        { name: 'C++', icon: FaCode, color: 'text-blue-700' },
      ]
    },
    {
      title: 'Libraries',
      Icon: FaLayerGroup,
      description: 'UI/UX Libraries.',
      color: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'group-hover:border-purple-500/50',
      iconColor: 'text-purple-500',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-cyan-400' },
        { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600' },
        { name: 'Tailwind', icon: FaWind, color: 'text-cyan-500' },
      ]
    },
    {
      title: 'Frameworks',
      Icon: FaServer,
      description: 'Backend Systems.',
      color: 'from-orange-500/10 to-red-500/10',
      borderColor: 'group-hover:border-orange-500/50',
      iconColor: 'text-orange-500',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
        { name: 'Express', icon: FaServer, color: 'text-gray-500 dark:text-gray-300' },
      ]
    },
    {
      title: 'Databases',
      Icon: FaDatabase,
      description: 'Data Storage.',
      color: 'from-indigo-500/10 to-violet-500/10',
      borderColor: 'group-hover:border-indigo-500/50',
      iconColor: 'text-indigo-500',
      skills: [
        { name: 'MongoDB', icon: FaDatabase, color: 'text-green-600' },
        { name: 'MySQL', icon: FaDatabase, color: 'text-blue-500' },
      ]
    },
    {
      title: 'Dev Tools',
      Icon: FaTerminal,
      description: 'Deployment & Ops.',
      color: 'from-gray-500/10 to-slate-500/10',
      borderColor: 'group-hover:border-gray-500/50',
      iconColor: 'text-gray-500',
      skills: [
        { name: 'VS Code', icon: FaLaptopCode, color: 'text-blue-500' },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'Jupyter', icon: FaChartPie, color: 'text-orange-500' },
        { name: 'Netlify', icon: FaCloud, color: 'text-teal-500' },
        { name: 'Vercel', icon: FaCloud, color: 'text-black dark:text-white' },
        { name: 'Postman', icon: FaPaperPlane, color: 'text-orange-500' },
        { name: 'AWS', icon: FaAws, color: 'text-yellow-600' },
        { name: 'Linux', icon: FaLinux, color: 'text-black dark:text-white' },
      ]
    },
  ];

  const achievements = [
    {
      title: "Coding Achievements",
      items: [
        "Solved 400+ coding problems",
        "3-Star CodeChef (Max Rating 1786)",
      ],
      Icon: FaTrophy,
      iconColor: "text-yellow-500",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Certifications",
      items: [
        "Intro to Machine Learning (Coursera)",
        "Web Dev Bootcamp (Udemy)",
        "DSA in Python (Coding Ninjas)"
      ],
      Icon: FaCertificate,
      iconColor: "text-red-500",
      gradient: "from-red-500/20 to-pink-500/20"
    }
  ];

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const skillItemAnim = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { 
      scale: 1.1, 
      rotate: 2,
      transition: { type: "spring", stiffness: 400, damping: 10 } 
    }
  };

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* HEADER */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <span className="inline-block mb-3 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase">
          Profile & Expertise
        </span>
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">
          About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Me</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Full Stack Developer & AI Enthusiast. Transforming ideas into scalable code.
        </p>
      </motion.div>

      {/* STATS BAR */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20 max-w-4xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="p-5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/5 shadow-lg text-center"
          >
            <div className="text-3xl font-black bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 relative">
        
        {/* DOTTED ARROW (Visible on Large Screens) */}
        <div className="hidden lg:block absolute top-[10%] left-[38%] w-full h-full pointer-events-none z-0 opacity-40">
           <DottedArrow className="w-[300px] h-[150px] text-slate-300 dark:text-slate-700" />
        </div>

        {/* LEFT COLUMN: Intro, Visuals, Education & Experience */}
        <div className="lg:col-span-5 space-y-8 relative z-10">
          
          {/* Intro Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Who am I?</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm <span className="font-bold text-blue-600 dark:text-blue-400">Abhishek Ranjan Verma</span>, 
              a Computer Science student specializing in AI & ML. I build predictive models and full-stack automation systems.
            </p>
          </motion.div>

          {/* ANIMATION: Live Code Terminal (Fills top gap, keeps it cool) */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.15 }}
          >
            <LiveTerminal />
          </motion.div>

          {/* Experience Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <FaBriefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Experience</h3>
            </div>
            
            <div className="pl-2 border-l-2 border-slate-200 dark:border-slate-700 ml-3">
              <div className="pl-4">
                <h4 className="text-md font-bold text-slate-800 dark:text-slate-200">Full Stack and AI Intern</h4>
                <p className="text-xs text-slate-500 mb-2">Nov 2022 - Present</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Built a portfolio generator with Gemini API and an attendance automation system.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl text-white"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <FaGraduationCap className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                  <FaGraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-lg">NIET, Greater Noida</h4>
                <p className="text-blue-100 text-sm">B.Tech - CSE (AI & ML)</p>
                <div className="mt-2 inline-flex px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold">
                  CGPA: 8.2
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-blue-200 mb-2 uppercase tracking-wider">Coursework</p>
                <div className="flex flex-wrap gap-1.5">
                  {['DSA', 'OOPs', 'OS', 'DBMS', 'CN'].map(course => (
                    <span key={course} className="px-2 py-1 bg-black/20 backdrop-blur-sm text-[10px] font-medium rounded-md border border-white/10">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Skills Grid with Connectors */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col"
          >
            {skillCategories.map((cat, index) => (
              <div key={index} className="flex flex-col">
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                  className={`relative z-10 group p-6 rounded-3xl bg-gradient-to-br ${cat.color} border border-transparent ${cat.borderColor} transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <cat.Icon className={`w-6 h-6 ${cat.iconColor}`} />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{cat.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{cat.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {cat.skills.map((skill) => (
                      <motion.div 
                        key={skill.name} 
                        variants={skillItemAnim}
                        whileHover="hover"
                        className="flex flex-col items-center justify-center gap-2 p-3 bg-white/60 dark:bg-slate-950/40 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/5 shadow-sm cursor-pointer"
                      >
                        <skill.icon className={`w-6 h-6 ${skill.color}`} />
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200 text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Render Connector Line if it's NOT the last item */}
                {index !== skillCategories.length - 1 && (
                  <ConnectorLine />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ACHIEVEMENTS SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-slate-900 dark:bg-black rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px]" />
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Honors & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((group, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-3xl bg-gradient-to-br ${group.gradient} border border-white/10 backdrop-blur-md`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                    <group.Icon className={`w-6 h-6 ${group.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                      <span className="text-sm text-slate-200 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}