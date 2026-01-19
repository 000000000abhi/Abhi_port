'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer2() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Bio */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Abhishek <span className="text-blue-600">R. Verma</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Full Stack Developer & AI Engineer. Crafting scalable web applications and intelligent systems using the MERN Stack and Python.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact Me
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Resume / CV
                </Link>
              </li>
              <li>
                <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Email Me
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xl">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-white/10 mt-12 pt-8 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Abhishek R. Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}