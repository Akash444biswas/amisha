"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import LottieAnimation from "@/components/LottieAnimation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Typed: {
      new (element: HTMLElement, options: {
        strings: string[];
        typeSpeed: number;
        backSpeed: number;
        backDelay: number;
        startDelay: number;
        loop: boolean;
        showCursor: boolean;
        cursorChar: string;
      }): { destroy: () => void };
    };
  }
}

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<{ destroy: () => void } | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const initTyped = () => {
      if (window.Typed && typedRef.current && !typedInstance.current) {
        typedInstance.current = new window.Typed(typedRef.current, {
          strings: [
            "Full Stack Web Developer",
            "Building Secure REST APIs",
            "Crafting Scalable Java Backends"
          ],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 2000,
          startDelay: 1000,
          loop: true,
          showCursor: true,
          cursorChar: '|',
        });
      } else if (!window.Typed) {
        // Retry after a short delay
        setTimeout(initTyped, 100);
      }
    };

    initTyped();

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
                Hello, I&apos;m
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2 drop-shadow-2xl">
                Kumari Manisha
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-white/90 drop-shadow-lg min-h-[3rem] text-left">
                <span ref={typedRef}></span>
              </div>
              <p className="text-lg md:text-xl max-w-2xl mt-4 text-white/80 leading-relaxed drop-shadow-md">
                Backend Developer skilled in Java, Spring Boot, and PostgreSQL with a focus on clean architecture, secure REST APIs, and problem-solving through backend systems.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(34, 197, 94, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 text-lg font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                >
                  View My Work
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
                <motion.a
                  href="/manisha-resume.pdf"
                  download="Kumari_Manisha_Resume.pdf"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-500 bg-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-violet-600 hover:border-purple-400 text-purple-400 hover:text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  Download Resume
                  <Download className="h-5 w-5" />
                </motion.a>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-500 bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-600 hover:border-blue-400 text-blue-400 hover:text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg"
                >
                  Contact Me
                </motion.button>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-8 flex gap-4"
              >
                <motion.a
                  href="https://github.com/Mniasha123"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-muted hover:bg-accent transition-colors text-sm font-medium"
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/kumari-manisha-28a241222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-muted hover:bg-accent transition-colors text-sm font-medium"
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="mailto:manishak6266@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            {/* Programming Girl Avatar */}
            <motion.div
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <LottieAnimation
                  src="/Animation - 1750579178886.json"
                  className="w-full h-full scale-125"
                  fallbackIcon="👩‍💻"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}