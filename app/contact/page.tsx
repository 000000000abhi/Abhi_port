'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaCode, 
  FaPaperPlane,
  FaUser,
  FaCommentAlt
} from 'react-icons/fa';

// --- Configuration ---
// REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS LATER
const SERVICE_ID = 'service_b9o5zok';
const TEMPLATE_ID = 'template_r84cwko';
const PUBLIC_KEY = 'u44of9lh2_YbIfKJD';

// --- Contact Data ---
const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "abhishekranjanv070@gmail.com",
    href: "mailto:abhishekranjanv070@gmail.com",
    color: "text-blue-500",
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "group-hover:border-blue-500/50"
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 7070999147",
    href: "tel:+917070999147",
    color: "text-emerald-500",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    border: "group-hover:border-emerald-500/50"
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Delhi, India",
    href: null,
    color: "text-purple-500",
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "group-hover:border-purple-500/50"
  }
];

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/abhishekrverma', color: 'hover:text-blue-600' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/abhishekrverma', color: 'hover:text-gray-900 dark:hover:text-white' },
  { name: 'LeetCode', icon: FaCode, url: 'https://leetcode.com/u/abhishekranjanverma', color: 'hover:text-yellow-500' },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Parallax background effect
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Sending email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Abhishek", // Your name
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black transition-colors duration-500 flex items-center">
      
      {/* --- Animated Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200/20 dark:border-white/5 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">Collaborate</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind or just want to say hi? I'm always open to discussing new ideas, tech, and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT COLUMN: Contact Info --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href || '#'}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`group relative flex items-center gap-6 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${item.border} ${!item.href ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className={`relative p-4 rounded-xl bg-slate-100 dark:bg-slate-800 ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="relative">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white break-all">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span> Connect on Socials
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Enhanced Form --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Form Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 -z-10 animate-pulse" />
            
            <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20 dark:border-slate-700 shadow-2xl relative overflow-hidden">
              
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8">Fill out the form below and I'll get back to you asap.</p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* Name */}
                <div className="group space-y-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 group-hover:bg-white dark:group-hover:bg-slate-900"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group space-y-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 group-hover:bg-white dark:group-hover:bg-slate-900"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="group space-y-2">
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <FaCommentAlt className="text-slate-400 group-focus-within:text-blue-500 transition-colors mt-1" />
                    </div>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none group-hover:bg-white dark:group-hover:bg-slate-900"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting || status === 'success'}
                  type="submit"
                  className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2
                    ${status === 'success'
                      ? 'bg-green-500 cursor-default'
                      : status === 'error'
                      ? 'bg-red-500' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-500/25 hover:from-blue-700 hover:to-purple-700'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    <>Message Sent! <FaPaperPlane className="ml-1" /></>
                  ) : status === 'error' ? (
                    <>Error. Try Again.</>
                  ) : (
                    <>Send Message <FaPaperPlane className="ml-1 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}