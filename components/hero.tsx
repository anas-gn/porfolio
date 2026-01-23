// src/components/AboutHero.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen text-white flex items-center pt-20 relative overflow-hidden bg-black">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-amber-950/10 opacity-80"></div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-120px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(120px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes goldGlowPulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(217, 119, 6, 0.2), inset 0 0 30px rgba(217, 119, 6, 0.05);
          }
          50% {
            box-shadow: 0 0 50px rgba(217, 119, 6, 0.4), inset 0 0 50px rgba(217, 119, 6, 0.1);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineReveal {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-subtle-float {
          animation: subtleFloat 4s ease-in-out infinite;
        }

        .animate-gold-glow {
          animation: goldGlowPulse 3s ease-in-out infinite;
        }

        .animate-slide-down {
          animation: slideInDown 0.8s ease-out forwards;
        }

        .animate-line-reveal {
          animation: lineReveal 1.2s ease-out forwards;
        }

        .photo-frame {
          position: relative;
          width: 350px;
          height: 420px;
          border-radius: 0;
          overflow: hidden;
          border: 1px solid rgba(217, 119, 6, 0.3);
        }

        .photo-frame::before {
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

        .photo-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid rgba(217, 119, 6, 0.2);
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

        .glow-accent {
          text-shadow: 0 0 20px rgba(217, 119, 6, 0.5);
        }

        .divider-gold {
          background: linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.5), transparent);
          height: 1px;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Photo Section */}
        <div
          className={`flex justify-center lg:justify-start ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0'
          }`}
        >
          <div className="relative animate-subtle-float">
            {/* Subtle glow behind photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-black/50 rounded-sm blur-3xl opacity-40 w-80 h-96 -z-10"></div>

            {/* Photo frame */}
            <div className="photo-frame animate-gold-glow">
              <Image
                src="/images/profile.jpg"
                alt="Anas Gana"
                width={350}
                height={420}
                className="w-full h-full object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div
          className={`${
            isVisible ? 'animate-fade-in-left' : 'opacity-0'
          }`}
        >
          {/* Heading */}
          <div className={`mb-8 ${isVisible ? 'animate-slide-down' : ''}`}>
            <h1 className="text-5xl lg:text-6xl font-light tracking-wider mb-4 leading-tight">
              ANAS GANA
            </h1>
            <div className="divider-gold mb-6 animate-line-reveal"></div>
            <p className="text-amber-700 uppercase tracking-[0.2em] font-light text-sm">
              Software Engineer & Architect
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed font-light text-lg">
            Je suis un ingénieur logiciel passionné spécialisé dans l'architecture cloud, l'analyse 
            de données et le développement full-stack. Je construis des applications scalables et 
            haute performance qui transforment des idées complexes en solutions numériques élégantes.
          </p>

          <p className="text-gray-400 mb-10 leading-relaxed font-light">
            Avec une expertise dans les plateformes cloud, l'analyse de big data et l'architecture logicielle moderne, 
            je me concentre sur la création de systèmes robustes qui génèrent de la valeur métier. 
            Chaque projet est une opportunité de résoudre des problèmes complexes.
          </p>

          {/* CTA Button */}
          <div className="flex gap-6">
            <Link
              href="#contact"
              className="relative px-8 py-3 text-white font-light uppercase tracking-[0.1em] text-sm group overflow-hidden"
            >
              <div className="absolute inset-0 border border-amber-700 group-hover:border-amber-600 transition-colors duration-300"></div>
              <div className="absolute inset-0 bg-amber-700 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ zIndex: -1 }}></div>
              <span className="relative group-hover:text-black transition-colors duration-300">Discutons</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}