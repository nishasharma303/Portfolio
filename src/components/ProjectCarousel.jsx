import { useState, useEffect } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setAutoplay(false);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoplay(false);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  // Helper function to convert Tailwind gradient to CSS
  const getGradientStyle = (gradient) => {
    // Convert "from-emerald-500 to-cyan-500" to CSS gradient
    const colors = gradient.split(' ');
    const fromColor = colors[0]?.replace('from-', '') || 'emerald-500';
    const toColor = colors[1]?.replace('to-', '') || 'cyan-500';
    
    const colorMap = {
      'emerald-500': '#10b981',
      'cyan-500': '#06b6d4',
      'blue-500': '#3b82f6',
      'purple-500': '#a855f7',
      'pink-500': '#ec4899',
      'orange-500': '#f97316',
    };

    return `linear-gradient(to right, ${colorMap[fromColor] || '#10b981'}, ${colorMap[toColor] || '#06b6d4'})`;
  };

  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Notable work showcasing technical expertise</p>
        </div>

        {/* Carousel */}
        <div className="relative h-[500px] sm:h-[600px] mb-12">
          <div className="relative w-full h-full flex items-center justify-center">
            {getVisibleProjects().map((project) => {
              const Icon = project.icon;
              const isCenter = project.position === 0;
              const isLeft = project.position === -1;
              const isRight = project.position === 1;

              return (
                <div
                  key={project.id}
                  className={`absolute transition-all duration-500 cursor-pointer ${
                    isCenter 
                      ? 'z-30 scale-100 opacity-100' 
                      : isLeft 
                      ? 'z-10 scale-75 opacity-50 -translate-x-[60%] sm:-translate-x-[80%]' 
                      : 'z-10 scale-75 opacity-50 translate-x-[60%] sm:translate-x-[80%]'
                  }`}
                  onClick={() => isCenter && setSelectedProject(project)}
                  style={{
                    filter: isCenter ? 'blur(0)' : 'blur(2px)'
                  }}
                >
                  <div className="relative w-[280px] sm:w-[400px] md:w-[500px]">
                    <div 
                      className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
                      style={{
                        background: getGradientStyle(project.gradient)
                      }}
                    />
                    <div className="relative bg-slate-900 p-6 sm:p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div 
                          className="p-2 sm:p-3 rounded-lg"
                          style={{
                            background: getGradientStyle(project.gradient)
                          }}
                        >
                          <Icon size={20} className="sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full uppercase tracking-wider">
                          Featured
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="text-emerald-400 text-sm sm:text-base mb-4 font-medium">{project.tagline}</p>
                      <p className="text-gray-400 mb-6 leading-relaxed text-sm line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1.5 bg-slate-800 text-gray-300 rounded-lg text-xs border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-3 py-1.5 bg-slate-800 text-gray-300 rounded-lg text-xs border border-slate-700">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {isCenter && (
                        <button className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all font-medium text-sm">
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-slate-900 border border-emerald-500/20 rounded-full hover:border-emerald-500/50 transition-all"
          >
            <ChevronLeft size={24} className="text-emerald-400" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-slate-900 border border-emerald-500/20 rounded-full hover:border-emerald-500/50 transition-all"
          >
            <ChevronRight size={24} className="text-emerald-400" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setAutoplay(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-emerald-400 w-8' 
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 rounded-3xl border border-emerald-500/20 p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all"
            >
              <X size={20} className="text-gray-400" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div 
                className="p-3 rounded-lg"
                style={{
                  background: getGradientStyle(selectedProject.gradient)
                }}
              >
                {(() => {
                  const Icon = selectedProject.icon;
                  return <Icon size={28} className="text-white" />;
                })()}
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-emerald-400 font-medium">{selectedProject.tagline}</p>
              </div>
            </div>

            <p className="text-gray-400 mb-8 leading-relaxed text-base sm:text-lg">{selectedProject.description}</p>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
              <div className="space-y-3">
                {selectedProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg text-sm border border-slate-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-slate-800 border border-emerald-500/20 rounded-lg hover:border-emerald-500/50 transition-all font-medium flex items-center justify-center gap-2"
              >
                <Github size={20} />
                View on GitHub
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all font-medium flex items-center justify-center gap-2"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}