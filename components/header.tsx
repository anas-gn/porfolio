// src/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: '#projets' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Parcours', href: '#parcours' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="text-white sticky top-0 z-50 bg-black border-b border-amber-900/30">
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-link {
          position: relative;
          font-weight: 300;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, rgba(217, 119, 6, 0.8), rgba(217, 119, 6, 0));
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-link:hover {
          color: rgba(217, 119, 6, 0.8);
          text-shadow: 0 0 15px rgba(217, 119, 6, 0.3);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .logo-glow {
          text-shadow: 0 0 20px rgba(217, 119, 6, 0.4), 0 0 40px rgba(217, 119, 6, 0.15);
          transition: text-shadow 0.4s ease;
        }

        .logo-glow:hover {
          text-shadow: 0 0 30px rgba(217, 119, 6, 0.6), 0 0 60px rgba(217, 119, 6, 0.3);
        }

        .mobile-menu-item {
          animation: slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .mobile-menu-item:nth-child(2) { animation-delay: 0.05s; }
        .mobile-menu-item:nth-child(3) { animation-delay: 0.1s; }
        .mobile-menu-item:nth-child(4) { animation-delay: 0.15s; }
        .mobile-menu-item:nth-child(5) { animation-delay: 0.2s; }

        .burger-line {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .burger-line.active-1 {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .burger-line.active-2 {
          opacity: 0;
        }

        .burger-line.active-3 {
          transform: rotate(-45deg) translate(7px, -7px);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
      <h1 className="text-5xl font-light tracking-[0.3em] uppercase text-white font-bodoni luxury-logo">
  GANA
</h1>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-12 items-center">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`burger-line block w-6 h-0.5 bg-white ${
              isOpen ? 'active-1' : ''
            }`}
          ></span>
          <span
            className={`burger-line block w-6 h-0.5 bg-white ${
              isOpen ? 'active-2' : ''
            }`}
          ></span>
          <span
            className={`burger-line block w-6 h-0.5 bg-white ${
              isOpen ? 'active-3' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="border-t border-amber-900/30 px-4 py-6 backdrop-blur-sm">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item, index) => (
              <li key={item.href} className={isOpen ? 'mobile-menu-item' : 'opacity-0'}>
                <Link
                  href={item.href}
                  className="nav-link inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}