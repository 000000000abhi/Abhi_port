'use client';

import { motion } from 'framer-motion';

export default function NotificationBar1() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-3 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-sm">
          <motion.span
            className="mr-2 text-xl"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            🎉
          </motion.span>
          <span className="font-medium">New portfolio projects available! Check out my latest work.</span>
        </div>
      </div>
    </motion.div>
  );
}
