'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
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

// --- Contact Data from Resume ---
const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "abhishekranjanv070@gmail.com",
    href: "mailto:abhishekranjanv070@gmail.com",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 7070999147",
    href: "tel:+917070999147",
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Greater Noida, India",
    href: null,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
];

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: '#', color: 'hover:text-blue-600' },
  { name: 'GitHub', icon: FaGithub, url: '#', color: 'hover:text-gray-900 dark:hover:text-white' },
  { name: 'LeetCode', icon: FaCode, url: '#', color: 'hover:text-yellow-500' }, // LeetCode usually orange/yellow
];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSent(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black transition-colors duration-500">
      
      {/* --- Dynamic Background --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
            Contact
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 dark:text-white">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT COLUMN: Contact Info & Socials --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h2>
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href || '#'}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group ${!item.href ? 'cursor-default' : ''}`}
                  >
                    <div className={`p-4 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white break-all">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Social Profiles</h2>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ y: -5 }}
                    className={`p-4 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT COLUMN: Contact Form --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 -z-10" />
            
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="text-slate-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <FaCommentAlt className="text-slate-400 mt-1" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting || isSent}
                  type="submit"
                  className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2
                    ${isSent 
                      ? 'bg-green-500 cursor-default' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-500/25'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isSent ? (
                    <>Message Sent! <FaPaperPlane className="ml-1" /></>
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