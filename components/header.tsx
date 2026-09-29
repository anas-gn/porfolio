'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const items = [
  { label: 'Parcours', href: '#parcours' },
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav className="glass mx-auto max-w-5xl rounded-2xl px-5 py-3 shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-sm">A</span>
            Anas Gana
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {items.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="transition-colors hover:text-white">{i.label}</Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="hidden md:inline-flex rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-indigo-200"
          >
            Me contacter
          </Link>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <ul className="md:hidden mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 text-sm text-gray-300">
            {[...items, { label: 'Contact', href: '#contact' }].map((i) => (
              <li key={i.href}>
                <Link href={i.href} onClick={() => setOpen(false)}>{i.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
