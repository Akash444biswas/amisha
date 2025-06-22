"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          {/* Logo/Name */}
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Kumari Manisha
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-white/70">
            <span>© {currentYear} Kumari Manisha. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 text-sm">
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white/70 hover:text-white transition-colors hover:scale-105 transform duration-200"
            >
              About
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white/70 hover:text-white transition-colors hover:scale-105 transform duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white/70 hover:text-white transition-colors hover:scale-105 transform duration-200"
            >
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
