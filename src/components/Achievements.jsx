import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <>
      <style>{`
        @keyframes gentle-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -20px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.98);
          }
        }

        @keyframes subtle-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.08), 0 0 40px rgba(16, 185, 129, 0.04);
          }
          50% {
            box-shadow: 0 0 25px rgba(16, 185, 129, 0.12), 0 0 50px rgba(16, 185, 129, 0.06);
          }
        }

        @keyframes rotate-gradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .bg-blob-1 {
          animation: gentle-float 25s ease-in-out infinite;
        }

        .bg-blob-2 {
          animation: gentle-float 30s ease-in-out infinite;
          animation-delay: -10s;
        }

        .bg-blob-3 {
          animation: gentle-float 35s ease-in-out infinite;
          animation-delay: -20s;
        }

        .achievement-card {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.9) 0%, 
            rgba(30, 41, 59, 0.7) 50%,
            rgba(15, 23, 42, 0.9) 100%
          );
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          position: relative;
          overflow: hidden;
        }

        .achievement-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(16, 185, 129, 0.05) 50%,
            transparent 70%
          );
          animation: rotate-gradient 8s linear infinite;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .achievement-card:hover::after {
          opacity: 1;
        }

        .achievement-card:hover {
          animation: subtle-glow 3s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, #10b981 50%, #ffffff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }

        .icon-container {
          position: relative;
        }

        .icon-container::before {
          content: '';
          position: absolute;
          inset: -8px;
          background: conic-gradient(
            from 0deg,
            transparent,
            rgba(16, 185, 129, 0.15),
            transparent
          );
          border-radius: 50%;
          animation: rotate-gradient 4s linear infinite;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .achievement-card:hover .icon-container::before {
          opacity: 1;
        }

        .decorative-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(16, 185, 129, 0.5), 
            transparent
          );
          transition: all 0.6s ease;
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px);
            opacity: 0.6;
          }
        }
      `}</style>

      <section id="achievements" className="relative py-16 sm:py-20 px-4 sm:px-6 bg-slate-950 overflow-hidden">
        {/* Smooth Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-blob-1 absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-[120px]" />
          <div className="bg-blob-2 absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px]" />
          <div className="bg-blob-3 absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }} 
          />
        </div>

        {/* Gentle Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-emerald-400/20 rounded-full"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `particle-float ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">
                Achievements & Recognition
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Celebrating excellence and notable accomplishments
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="achievement-card group p-6 sm:p-8 rounded-3xl border-2 border-slate-800 hover:border-emerald-500/50 transition-all duration-500 relative"
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Subtle Corner Accent */}
                  <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden opacity-40">
                    <div 
                      className="absolute -top-8 -left-8 w-16 h-16 rotate-45"
                      style={{
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), transparent)'
                      }}
                    />
                  </div>

                  {/* Icon with Smooth Rotation */}
                  <div className="flex items-start gap-5 mb-5 relative z-10">
                    <motion.div 
                      className="icon-container shrink-0 p-4 rounded-2xl relative"
                      style={{
                        background: achievement.color.includes('yellow') 
                          ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
                          : achievement.color.includes('blue')
                          ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                          : achievement.color.includes('purple')
                          ? 'linear-gradient(135deg, #a855f7, #9333ea)'
                          : 'linear-gradient(135deg, #10b981, #059669)'
                      }}
                      whileHover={{ 
                        scale: 1.08,
                        rotate: [0, -3, 3, 0],
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Icon size={32} className="text-white relative z-10" style={{
                        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                      }} />
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-2 leading-tight"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        {achievement.title}
                      </motion.h3>
                      
                      <motion.div 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <Award size={16} className="text-emerald-400" />
                        <p className="text-sm font-semibold text-emerald-400">
                          {achievement.event}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-400 text-sm sm:text-base leading-relaxed relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    {achievement.description}
                  </motion.p>

                  {/* Smooth Decorative Lines */}
                  <div className="decorative-line top-0 left-0 right-0 opacity-0 group-hover:opacity-100" />
                  <div className="decorative-line bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100" />

                  {/* Gentle Corner Glow */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div 
                      className="absolute bottom-0 right-0 w-24 h-24"
                      style={{
                        background: 'radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.12), transparent 70%)'
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}