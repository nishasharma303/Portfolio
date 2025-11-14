import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Tech logos using CDN links
const techStackWithLogos = [
  // Languages
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'language' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'language' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'language' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'language' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'language' },
  
  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'frontend' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
  
  // Database
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database' },
  
  // Tools
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'tools' },
  { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'tools' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', category: 'tools' },
  
  // AI/ML
  { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', category: 'ai' },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
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
        @keyframes float-icon {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
          }
        }

        .tech-icon-wrapper {
          position: relative;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .tech-icon-wrapper:hover {
          animation: float-icon 1.5s ease-in-out infinite;
        }

        .tech-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, #10b981, #3b82f6, #10b981);
          background-size: 200% 200%;
          opacity: 0;
          transition: opacity 0.3s;
          animation: gradient-rotate 3s ease infinite;
          filter: blur(8px);
          z-index: -1;
        }

        .tech-icon-wrapper:hover::before {
          opacity: 1;
        }

        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .skill-card-bg {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .tech-name {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        .tech-icon-wrapper:hover .tech-name {
          opacity: 1;
          transform: translateY(0);
        }

        .category-badge {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1));
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .text-gradient {
          background: linear-gradient(to right, #ffffff, #a7f3d0, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Invert color for dark mode icons */
        .invert-icon {
          filter: invert(1) brightness(1.2);
        }
      `}</style>

      <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-gradient">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with modern tools and technologies
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {techStackWithLogos.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="tech-icon-wrapper group"
                whileHover={{ scale: 1.15, zIndex: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="skill-card-bg relative p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center justify-center aspect-square">
                  {/* Tech Icon */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-110 ${tech.name === 'Express' || tech.name === 'GitHub' ? 'invert-icon' : ''}`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      style={{
                        filter: tech.name === 'Express' || tech.name === 'GitHub' ? 'invert(1) brightness(1.2) drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))' : 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))'
                      }}
                    />
                    {/* Fallback for broken images */}
                    <div 
                      className="absolute inset-0 hidden items-center justify-center text-3xl"
                      style={{ display: 'none' }}
                    >
                      ⚡
                    </div>
                  </div>

                  {/* Tech Name (appears on hover) */}
                  <div className="tech-name absolute bottom-2 left-0 right-0 text-center">
                    <span className="text-xs sm:text-sm font-semibold text-emerald-400 bg-slate-900/90 px-2 py-1 rounded-lg">
                      {tech.name}
                    </span>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(16, 185, 129, 0) 0%, rgba(16, 185, 129, 0.05) 50%, rgba(34, 211, 238, 0) 100%)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Category Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { label: 'Languages', count: 5, gradient: 'linear-gradient(to right, #34d399, #22d3ee)' },
              { label: 'Frontend', count: 5, gradient: 'linear-gradient(to right, #22d3ee, #3b82f6)' },
              { label: 'Backend', count: 2, gradient: 'linear-gradient(to right, #3b82f6, #a855f7)' },
              { label: 'Database', count: 2, gradient: 'linear-gradient(to right, #a855f7, #ec4899)' },
              { label: 'Tools', count: 5, gradient: 'linear-gradient(to right, #ec4899, #f43f5e)' },
              { label: 'AI/ML', count: 1, gradient: 'linear-gradient(to right, #f43f5e, #34d399)' },
            ].map((category) => (
              <motion.div
                key={category.label}
                className="skill-card-bg px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2">
                  <span 
                    className="text-xs sm:text-sm font-bold"
                    style={{
                      background: category.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {category.label}
                  </span>
                  <span className="text-xs sm:text-sm px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full font-semibold">
                    {category.count}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { number: '20+', label: 'Technologies Mastered', gradient: 'linear-gradient(to right, #34d399, #22d3ee)' },
              { number: '5+', label: 'Programming Languages', gradient: 'linear-gradient(to right, #22d3ee, #3b82f6)' },
              { number: '7+', label: 'Frameworks & Libraries', gradient: 'linear-gradient(to right, #3b82f6, #a855f7)' },
              { number: '100%', label: 'Passion & Dedication', gradient: 'linear-gradient(to right, #a855f7, #34d399)' },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="skill-card-bg text-center p-4 sm:p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-500 group relative overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to bottom right, rgba(16, 185, 129, 0) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 100%)'
                  }}
                />
                <div className="relative z-10">
                  <div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                    style={{
                      background: stat.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}