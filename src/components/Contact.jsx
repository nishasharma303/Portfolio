import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <style>{`
        @keyframes float-contact {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
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

        .contact-card {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.8) 0%, 
            rgba(30, 41, 59, 0.6) 100%
          );
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, 
            rgba(16, 185, 129, 0.3), 
            rgba(34, 211, 238, 0.3),
            rgba(16, 185, 129, 0.3)
          );
          background-size: 200% 200%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
          animation: gradient-rotate 3s ease infinite;
        }

        .contact-card:hover::before {
          opacity: 1;
        }

        .icon-pulse {
          position: relative;
        }

        .icon-pulse::before {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px solid rgba(16, 185, 129, 0.5);
          animation: pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .gradient-text-contact {
          background: linear-gradient(135deg, #10b981, #22d3ee, #10b981);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-rotate 3s ease infinite;
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          animation: float-contact 1s ease-in-out infinite;
        }
      `}</style>

      <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 211, 238, 0.1))',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Send size={16} className="text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Let's Connect</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text-contact">
                Get In Touch
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              href={`mailto:${personalInfo.email}`}
              className="contact-card group p-6 sm:p-8 rounded-3xl border border-slate-800 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative inline-block mb-4">
                <div className="icon-pulse p-4 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)'
                  }}
                >
                  <Mail className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                Email Me
              </h3>
              <p className="text-sm sm:text-base text-gray-400 group-hover:text-emerald-300 transition-colors break-all">
                {personalInfo.email}
              </p>
              
              {/* Decorative Line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.6), transparent)'
                }}
              />
            </motion.a>

            <motion.a 
              href={`tel:${personalInfo.phone}`}
              className="contact-card group p-6 sm:p-8 rounded-3xl border border-slate-800 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative inline-block mb-4">
                <div className="icon-pulse p-4 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #2563eb)'
                  }}
                >
                  <Phone className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                Call Me
              </h3>
              <p className="text-sm sm:text-base text-gray-400 group-hover:text-cyan-300 transition-colors">
                {personalInfo.phone}
              </p>

              {/* Decorative Line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.6), transparent)'
                }}
              />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-center text-gray-500 text-sm sm:text-base mb-6 font-medium">
              Connect with me on social platforms
            </p>
            <div className="flex justify-center gap-4 sm:gap-5">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub', gradient: 'linear-gradient(135deg, #6e5494, #4a3f6b)' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', gradient: 'linear-gradient(135deg, #0077b5, #005582)' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', gradient: 'linear-gradient(135deg, #ea4335, #c5221f)' },
              ].map((social, index) => (
                <motion.a 
                  key={social.label}
                  href={social.href}
                  target={social.icon !== Mail ? "_blank" : undefined}
                  rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                  className="social-icon contact-card group p-4 sm:p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  title={social.label}
                >
                  <div 
                    className="p-2 rounded-lg"
                    style={{ background: social.gradient }}
                  >
                    <social.icon size={24} className="text-white" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            className="mt-10 sm:mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            
          </motion.div>
        </div>
      </section>
    </>
  );
}
