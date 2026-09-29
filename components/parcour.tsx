'use client'

import { useEffect, useRef, useState } from 'react'

export default function AcademicJourney() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({})
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.getBoundingClientRect().top
      const sectionHeight = sectionRef.current.scrollHeight
      const windowHeight = window.innerHeight

      let progress = (windowHeight - sectionTop) / (windowHeight + sectionHeight)
      progress = Math.max(0, Math.min(1, progress))
      setScrollProgress(progress)

      const items = document.querySelectorAll('[data-journey-item]')
      const newVisibleItems: Record<string, boolean> = {}

      items.forEach((item) => {
        const htmlItem = item as HTMLElement
        const rect = item.getBoundingClientRect()
        const isVisible = rect.top < windowHeight * 0.75
        newVisibleItems[htmlItem.dataset.journeyItem || ''] = isVisible
      })

      setVisibleItems(newVisibleItems)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const education = [
    {
      id: 1,
      degree: 'Master en Réseau et Systéme Informatique',
      school: 'Faculty of Sciences and Technology Settat',
      year: '2025 - 2027',
      description: 'Spécialisation en Devops et Génie Logiciel',
      status: 'En cours',
    },
    {
      id: 2,
      degree: "Licence en Systéme d'information et transformation digitale",
      school: 'Faculty of Sciences and Technology Settat',
      year: '2024 - 2025',
      description: 'Analyse du Data / Dévellopement Web-Mobile',
      status: 'Complété',
    },
    {
      id: 3,
      degree: 'Baccalauréat Sciences Physique option francais',
      school: 'Lycée Salah Eddine',
      year: '2020 - 2021',
      description: 'Mention Bien',
      status: 'Complété',
    },
  ]

  const certifications = [
    {
      id: 1,
      title: 'React Advanced Patterns',
      issuer: 'Udemy',
      year: '2024',
    },
    {
      id: 2,
      title: 'Next.js Complete Guide',
      issuer: 'Codecademy',
      year: '2023',
    },
    {
      id: 3,
      title: 'Marketing',
      issuer: 'Udemy',
      year: '2023',
    },
  ]

  return (
    <section
      id="parcours"
      className="relative py-32 bg-black overflow-hidden"
      ref={sectionRef}
    >
      <style>{`
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

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes goldGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(129, 140, 248, 0.2), inset 0 0 20px rgba(129, 140, 248, 0.05);
          }
          50% {
            box-shadow: 0 0 30px rgba(129, 140, 248, 0.4), inset 0 0 30px rgba(129, 140, 248, 0.1);
          }
        }

        .animate-slide-left {
          animation: slideInFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-slide-right {
          animation: slideInFromRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-float-up {
          animation: floatUp 0.8s ease-out forwards;
        }

        .animate-gold-glow {
          animation: goldGlow 3s ease-in-out infinite;
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(129, 140, 248, 0.5), 0 0 40px rgba(129, 140, 248, 0.2);
        }

        .border-gold {
          border-color: rgba(129, 140, 248, 0.3);
        }

        .border-gold-hover:hover {
          border-color: rgba(129, 140, 248, 0.6);
        }

        .line-gold {
          background: linear-gradient(to bottom, rgba(129, 140, 248, 0.4), rgba(129, 140, 248, 0.1));
        }

        .card-dark {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%);
          border: 1px solid rgba(129, 140, 248, 0.2);
        }

        .card-dark:hover {
          border: 1px solid rgba(129, 140, 248, 0.5);
          box-shadow: 0 0 25px rgba(129, 140, 248, 0.15);
        }
      `}</style>

      {/* Subtle animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-96 bg-gradient-to-b from-amber-700 to-transparent opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-96 bg-gradient-to-b from-amber-700 to-transparent opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Central timeline line - Gold */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px line-gold"></div>

      {/* Scroll progress indicator - Gold */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-0 w-px bg-gradient-to-b from-amber-600 to-amber-700 origin-top"
        style={{
          height: `${scrollProgress * 100}%`,
          boxShadow: '0 0 20px rgba(129, 140, 248, 0.8)',
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-light text-white mb-4 glow-text animate-slide-left tracking-wider">
            PARCOURS ACADÉMIQUE
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-8"></div>
          <p className="text-gray-400 mt-6 text-sm uppercase tracking-[0.2em] animate-float-up font-light" style={{ animationDelay: '0.2s' }}>
            Une trajectoire d excellence
          </p>
        </div>

        {/* Formation Timeline */}
        <div className="mb-40">
          {education.map((edu, index) => {
            const isVisible = visibleItems[`edu-${edu.id}`]
            return (
              <div
                key={edu.id}
                data-journey-item={`edu-${edu.id}`}
                className={`mb-24 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-12 transition-all duration-500`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`p-8 rounded-sm card-dark backdrop-blur-sm transition-all duration-300 group cursor-pointer ${
                      isVisible ? 'animate-slide-left' : 'opacity-0'
                    }`}
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-light text-white group-hover:text-amber-600 transition tracking-wide mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-amber-700 font-light text-sm uppercase tracking-[0.15em]">{edu.school}</p>
                      </div>
                      <span className="px-5 py-2 rounded-sm text-xs font-light uppercase tracking-wider text-white border border-amber-700 animate-gold-glow">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed font-light">{edu.description}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-[0.1em] font-light">{edu.year}</p>
                  </div>
                </div>

                {/* Center point */}
                <div className="relative flex justify-center items-center w-20 h-20 flex-shrink-0">
                  <div
                    className={`absolute inset-0 rounded-full bg-amber-900 opacity-20 blur-lg ${
                      isVisible ? 'animate-gold-glow' : ''
                    }`}
                  ></div>
                  <div
                    className={`relative w-14 h-14 rounded-full border border-amber-700 flex items-center justify-center bg-black text-white font-light text-lg ${
                      isVisible ? 'animate-slide-right' : 'opacity-0'
                    }`}
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(129, 140, 248, 0.1)',
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <div className="mb-24">
          <h3 className="text-4xl font-light text-white text-center mb-8 glow-text tracking-wider">
            CERTIFICATIONS
          </h3>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto rounded-full mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                data-journey-item={`cert-${cert.id}`}
                className={`group relative ${
                  visibleItems[`cert-${cert.id}`] ? 'animate-float-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className="relative p-8 rounded-sm card-dark backdrop-blur-sm transition-all duration-300 h-full cursor-pointer"
                >
                  <h4 className="text-lg font-light text-white group-hover:text-amber-600 transition mb-3 tracking-wide">
                    {cert.title}
                  </h4>
                  <p className="text-amber-700 text-xs uppercase tracking-[0.15em] font-light mb-4">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.1em] font-light">{cert.year}</p>
                  <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-amber-700 opacity-50 group-hover:opacity-100 transition animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
          {[
            { number: '5+', text: 'Années d\'étude' },
            { number: '3', text: 'Diplômes obtenus' },
            { number: '3+', text: 'Certifications' },
          ].map((stat, index) => (
            <div
              key={index}
              data-journey-item={`stat-${index}`}
              className={`group relative ${
                visibleItems[`stat-${index}`] ? 'animate-float-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="relative text-center p-10 rounded-sm card-dark backdrop-blur-sm transition-all duration-300 cursor-pointer">
                <div className="text-5xl font-light text-amber-700 mb-4 group-hover:text-amber-600 transition">
                  {stat.number}
                </div>
                <p className="text-gray-300 font-light uppercase text-xs tracking-[0.15em]">{stat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
