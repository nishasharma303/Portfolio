import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { personalInfo } from '../data/portfolioData';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <style>{`
        .navbar-gradient {
          background: linear-gradient(to bottom, 
            rgba(2, 6, 23, 0.95) 0%, 
            rgba(15, 23, 42, 0.9) 100%
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>

      <nav className="fixed top-0 w-full z-50 navbar-gradient border-b border-emerald-500/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <motion.div 
              className="text-xl sm:text-2xl font-bold cursor-pointer"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Social Icons - Desktop */}
              <div className="hidden sm:flex items-center gap-3">
                <motion.a 
                  href={personalInfo.github}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  href={personalInfo.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>

              {/* Resume Download Button */}
              <motion.a
                href="/resume.pdf"
                download="Nisha_Sharma_Resume.pdf"
                className="group relative px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium overflow-hidden transition-all flex items-center gap-2 text-sm hover:shadow-lg hover:shadow-emerald-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} className="sm:w-4 sm:h-4 group-hover:animate-bounce" />
                <span>Resume</span>
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-400 hover:text-emerald-400 p-2 rounded-lg hover:bg-emerald-500/10"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden mt-4 pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-3">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-left py-2 px-4 rounded-lg hover:bg-emerald-500/10 font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}

                  {/* Mobile Social Links */}
                  <div className="flex items-center gap-4 px-4 pt-3 border-t border-emerald-500/10">
                    <motion.a 
                      href={personalInfo.github}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10"
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a 
                      href={personalInfo.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10"
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10"
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}