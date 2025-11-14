import { ExternalLink, ArrowRight, Code, Terminal, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = personalInfo.role;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing Animation Effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-gradient {
          animation: gradient-shift 8s ease infinite;
        }

        .cursor-blink {
          animation: blink 1s infinite;
        }

        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }

        .hero-gradient-bg {
          background: linear-gradient(180deg, 
            #020617 0%, 
            #0a0f1e 25%,
            #0f172a 50%, 
            #0a1128 75%,
            #0f172a 100%
          );
          position: relative;
        }

        .hero-gradient-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(at 20% 20%, rgba(16, 185, 129, 0.06) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(59, 130, 246, 0.04) 0px, transparent 50%),
            radial-gradient(at 80% 80%, rgba(16, 185, 129, 0.04) 0px, transparent 50%),
            radial-gradient(at 20% 80%, rgba(59, 130, 246, 0.06) 0px, transparent 50%);
          opacity: 0.6;
        }

        .glass-effect {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .grid-pattern {
          background-image: 
            linear-gradient(rgba(16, 185, 129, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.015) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.5s;
        }

        .shine-effect:hover::before {
          left: 100%;
        }

        .smooth-transition-bottom {
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(15, 23, 42, 0.3) 30%,
            rgba(15, 23, 42, 0.6) 60%,
            #0f172a 100%
          );
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden hero-gradient-bg pt-24 sm:pt-28 md:pt-32 pb-20">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Circle */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-emerald-500/8 rounded-full"
            animate={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
              scale: [1, 1.1, 1],
            }}
            transition={{
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Medium Circle */}
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 border border-blue-500/8 rounded-full"
            animate={{
              x: -mousePosition.x * 0.3,
              y: -mousePosition.y * 0.3,
              scale: [1, 1.15, 1],
            }}
            transition={{
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Decorative Lines */}
          <div className="absolute top-20 right-20 md:right-40 w-32 md:w-40 h-px bg-linear-to-r from-transparent via-emerald-500/15 to-transparent" />
          <div className="absolute bottom-40 left-20 md:left-40 w-40 md:w-60 h-px bg-linear-to-r from-transparent via-blue-500/15 to-transparent" />
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-0 -left-20 md:-left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-10 blur-[80px] md:blur-[100px]"
          style={{ 
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
          }}
          animate={{
            x: mousePosition.x * 1.2,
            y: mousePosition.y * 1.2,
          }}
        />
        <motion.div
          className="absolute bottom-0 -right-20 md:-right-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-10 blur-[80px] md:blur-[100px]"
          style={{ 
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          }}
          animate={{
            x: -mousePosition.x * 1.2,
            y: -mousePosition.y * 1.2,
          }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants} 
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="glass-effect inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-emerald-500/20 group hover:border-emerald-500/40 transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs md:text-sm font-medium text-emerald-400">
                Open to Work
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2">
              <span className="block text-white mb-2 tracking-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">{personalInfo.name}</span>
                  <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-emerald-500/30 -skew-y-1"></span>
                </span>
              </span>
              <span className="block min-h-[1.2em]">
                <span 
                  className="inline-block bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient tracking-tight"
                  style={{ backgroundSize: '200% auto' }}
                >
                  {typedText}
                </span>
                <span className="inline-block w-0.5 md:w-1 h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 bg-emerald-400 ml-1 md:ml-2 cursor-blink align-middle" style={{ verticalAlign: 'middle' }}></span>
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12 px-2"
          >
            {[
              { value: personalInfo.cgpa, label: 'CGPA', gradient: 'from-emerald-400 to-cyan-400' },
              { value: personalInfo.projectCount, label: 'Projects', gradient: 'from-cyan-400 to-blue-400' },
              { value: personalInfo.techCount, label: 'Tech Stack', gradient: 'from-blue-400 to-purple-400' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-effect relative group px-4 sm:px-6 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500 min-w-[110px] sm:min-w-[140px] md:min-w-40 shine-effect"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative z-10">
                  <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 md:mb-2`}>
                    {stat.value}+
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-10 md:mb-16 px-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-emerald-500 to-cyan-500 text-white rounded-lg md:rounded-xl font-semibold overflow-hidden transition-all duration-300 flex items-center gap-2 w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px] justify-center text-sm md:text-base cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(16, 185, 129, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Explore Work</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="group px-6 md:px-8 py-3 md:py-4 glass-effect border-2 border-emerald-500/30 rounded-lg md:rounded-xl font-semibold text-emerald-400 hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px] justify-center text-sm md:text-base cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get in Touch</span>
              <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Decorative Code Icons */}
          <div className="absolute top-1/4 left-4 md:left-10 hidden lg:block opacity-15">
            <motion.div
              className="glass-effect p-3 md:p-4 rounded-lg border border-emerald-500/20 font-mono text-sm text-emerald-400 animate-float-slow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.15, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              <Code size={20} className="md:w-6 md:h-6" />
            </motion.div>
          </div>

          <div className="absolute bottom-1/4 right-4 md:right-10 hidden lg:block opacity-15">
            <motion.div
              className="glass-effect p-3 md:p-4 rounded-lg border border-blue-500/20 font-mono text-sm text-blue-400 animate-float-slow"
              style={{ animationDelay: '1s' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.15, x: 0 }}
              transition={{ delay: 1.7 }}
            >
              <Terminal size={20} className="md:w-6 md:h-6" />
            </motion.div>
          </div>

          <div className="absolute top-1/2 right-1/4 hidden xl:block opacity-15">
            <motion.div
              className="glass-effect p-3 md:p-4 rounded-lg border border-cyan-500/20 font-mono text-sm text-cyan-400 animate-float-slow"
              style={{ animationDelay: '2s' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ delay: 1.9 }}
            >
              <Cpu size={20} className="md:w-6 md:h-6" />
            </motion.div>
          </div>
        </motion.div>

        {/* Smooth Transition to Next Section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 lg:h-40 smooth-transition-bottom pointer-events-none" />
      </section>
    </>
  );
}