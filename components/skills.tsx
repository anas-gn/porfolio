// src/components/Skills.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

export default function Skills() {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({})
  const containerRef = useRef(null)

  const skills = {
    Développement : ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS','FastAPI','SpringBoot','MongoDB','PhpMyAdmin'],
    Logiciel: ['Analyse des besoins', 'Spécifications fonctionnelles', 'Conception orientée objet', 'Architecture des applications',"Cycle de vie du logiciel",'Clean code & bonnes pratiques',"Modélisation des données"],
    Tools: ['Git', 'Docker', 'Figma', 'VS Code',"Postman","PowerBI","Azure"],
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.getAttribute('data-category')
            if (category) {
              setVisibleItems((prev) => ({ ...prev, [category]: true }))
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = document.querySelectorAll('[data-skill-category]')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="competences" className="py-32 bg-black relative overflow-hidden">
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

        @keyframes skillItemSlide {
          from {
            opacity: 0;
            transform: translateX(-40px);
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

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-slide-left {
          animation: slideInFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-skill-item {
          animation: skillItemSlide 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-gold-border {
          animation: goldBorder 3s ease-in-out infinite;
        }

        .animate-dot-pulse {
          animation: dotPulse 2s ease-in-out infinite;
        }

        .skill-card {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%);
          border: 1px solid rgba(217, 119, 6, 0.2);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(217, 119, 6, 0.05) 50%, transparent 60%);
          animation: shine 4s infinite;
          z-index: 1;
          pointer-events: none;
        }

        .skill-card:hover {
          border-color: rgba(217, 119, 6, 0.5);
          box-shadow: 0 0 30px rgba(217, 119, 6, 0.15);
        }

        .skill-card-content {
          position: relative;
          z-index: 2;
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }

        .glow-text {
          text-shadow: 0 0 15px rgba(217, 119, 6, 0.3);
        }

        .divider-gold {
          background: linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.5), transparent);
          height: 1px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(217, 119, 6, 0.1);
          transition: all 0.3s ease;
        }

        .skill-item:last-child {
          border-bottom: none;
        }

        .skill-item:hover {
          padding-left: 8px;
          color: rgba(217, 119, 6, 0.8);
        }

        .skill-dot {
          width: 3px;
          height: 3px;
          background: rgba(217, 119, 6, 0.6);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .skill-item:hover .skill-dot {
          animation: dotPulse 0.8s ease-in-out infinite;
        }
      `}</style>

      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wider text-white mb-6 glow-text animate-slide-left">
            COMPÉTENCES
          </h2>
          <div className="divider-gold mx-auto mb-8" style={{ width: '100px' }}></div>
          <p className="text-gray-400 uppercase tracking-[0.2em] font-light text-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Expertise technique et outils maîtrisés
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              data-category={category}
              data-skill-category
              className={`skill-card p-10 rounded-sm group ${
                visibleItems[category] ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="skill-card-content">
                {/* Category Title */}
                <h3 className="text-2xl font-light tracking-wider text-white mb-8 group-hover:text-amber-600 transition-colors duration-300">
                  {category}
                </h3>

                {/* Divider */}
                <div className="divider-gold mb-8"></div>

                {/* Skills List */}
                <ul className="space-y-1">
                  {items.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className="skill-item"
                      style={{
                        animation: visibleItems[category]
                          ? `skillItemSlide 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + skillIndex * 0.1}s forwards`
                          : 'none',
                        opacity: visibleItems[category] ? 1 : 0,
                      }}
                    >
                      <span className="skill-dot"></span>
                      <span className="text-gray-300 font-light text-base">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card accent corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-amber-700/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}