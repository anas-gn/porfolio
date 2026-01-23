// src/app/page.tsx
import Navbar from '@/components/header'

import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/Contact'
import Parcour from  '@/components/parcour'
import Hero from  '@/components/hero'
export default function Home() {
  return (
    <main>
      <Navbar />
       <Hero/>
      <Parcour/>
      <Projects />
      <Skills/>
      <Contact />
    
    </main>
  )
}