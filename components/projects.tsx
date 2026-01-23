// src/components/Projects.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { projects } from '@/data/projects'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

export default function Projects() {
  const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({})
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems((prev) => ({ ...prev, [index]: true }))
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = document.querySelectorAll('[data-project-item]')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projets" className="py-32 bg-black relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes goldBorder {
          0%, 100% {
            box-shadow: inset 0 0 20px rgba(217, 119, 6, 0.1), 0 0 20px rgba(217, 119, 6, 0.1);
          }
          50% {
            box-shadow: inset 0 0 40px rgba(217, 119, 6, 0.2), 0 0 40px rgba(217, 119, 6, 0.2);
          }
        }

        @keyframes imageGlow {
          0%, 100% {
            box-shadow: inset 0 0 0px rgba(217, 119, 6, 0.1);
          }
          50% {
            box-shadow: inset 0 0 20px rgba(217, 119, 6, 0.15);
          }
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-slide-left {
          animation: slideInFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-gold-border {
          animation: goldBorder 3s ease-in-out infinite;
        }

        .animate-image-glow {
          animation: imageGlow 3s ease-in-out infinite;
        }

        .project-card {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%);
          border: 1px solid rgba(217, 119, 6, 0.2);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .project-card:hover {
          border-color: rgba(217, 119, 6, 0.5);
          box-shadow: 0 0 30px rgba(217, 119, 6, 0.15);
        }

        .project-image {
          position: relative;
          overflow: hidden;
        }

        .project-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(217, 119, 6, 0.1) 50%, transparent 60%);
          animation: shine 4s infinite;
          z-index: 10;
          pointer-events: none;
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }

        .tech-tag {
          background: rgba(217, 119, 6, 0.1);
          border: 1px solid rgba(217, 119, 6, 0.3);
          color: rgba(217, 119, 6, 0.8);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(217, 119, 6, 0.2);
          border-color: rgba(217, 119, 6, 0.6);
          box-shadow: 0 0 10px rgba(217, 119, 6, 0.2);
        }

        .glow-text {
          text-shadow: 0 0 15px rgba(217, 119, 6, 0.3);
        }

        .divider-gold {
          background: linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.5), transparent);
          height: 1px;
        }
      `}</style>

      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-light tracking-wider text-white mb-6 glow-text`}>
            MES PROJETS
          </h2>
          <div className="divider-gold mx-auto mb-8" style={{ width: '100px' }}></div>
          <p className="text-gray-400 uppercase tracking-[0.2em] font-light text-sm">
            Projets majeurs et réalisations notables
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project: Project, index) => (
            <div
              key={project.id}
              data-index={index}
              data-project-item
              className={`project-card rounded-sm overflow-hidden group cursor-pointer ${
                visibleItems[index] ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-56 w-full bg-black project-image overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-light tracking-wide text-white mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light h-20 line-clamp-3">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="divider-gold mb-6"></div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag px-3 py-1.5 rounded-sm text-xs font-light uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-amber-700 font-light uppercase tracking-[0.1em] text-xs hover:text-amber-600 transition-colors duration-300 group/link"
                >
                  <span>Voir le projet</span>
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}