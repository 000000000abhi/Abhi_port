'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const linkVariants = {
    hover: {
      x: 5,
      color: '#a855f7', // Purple-500 accent on hover
      transition: { duration: 0.2 },
    },
  };

  const socialVariants = {
    hover: {
      scale: 1.1,
      y: -3,
      color: '#a855f7',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-300 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">
              Abhishek <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">R. Verma</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mb-6">
              Full Stack Developer & AI Engineer. Bridging the gap between complex algorithms and user-friendly interfaces with the MERN Stack and Python.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { href: 'https://github.com/abhishekrverma', icon: FaGithub, label: "GitHub" },
                { href: 'https://linkedin.com/in/abhishekrverma', icon: FaLinkedin, label: "LinkedIn" },
                { href: 'https://x.com/its_arv', icon: FaTwitter, label: "Twitter" },
                { href: 'mailto:abhishekranjanv070@gmail.com', icon: FaEnvelope, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Column 2: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">Explore</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Me' },
                { href: '/portfolio', label: 'Projects' },
                { 
      href: 'https://drive.google.com/file/d/1aMY2_3a6nXtL-_y1xOI2apV6L6fL5L7E/view?usp=drivesdk', 
      label: 'Resume',
      target: '_blank' // Opens in new tab
    },
                { href: '/blog', label: 'Odyssey '},
              ].map((link) => (
                <li key={link.href}>
                  <motion.div variants={linkVariants} whileHover="hover" className="inline-block">
                    <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 3: Services / Stacks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">Expertise</h4>
            <ul className="space-y-3">
              {[
                'Full Stack Development',
                'AI/ML Integration',
                'System Architecture',
                'Python & Cloud',
              ].map((item, index) => (
                <li key={index} className="text-slate-600 dark:text-slate-400">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-200 dark:border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500"
        >
          <p>&copy; {new Date().getFullYear()} Abhishek R. Verma. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built by Abhishek</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}