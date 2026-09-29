import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stack = ['Next.js', 'React', 'Flutter', 'Node.js', 'Linux']

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16">
      {/* Halos + grille */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rise">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-indigo-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Ingénieur logiciel · Full-stack
          </span>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Je conçois des produits <span className="text-gradient">web et mobile</span> fiables et élégants.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Je suis Anas Gana. Je construis des applications scalables et performantes,
            de l&apos;architecture cloud à l&apos;interface, pour transformer des idées complexes en
            solutions numériques claires.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40"
            >
              Discutons
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#projets" className="glass rounded-xl px-6 py-3 font-medium text-white transition hover:bg-white/10">
              Voir mes projets
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {stack.map((s) => (
              <li key={s} className="rounded-lg border border-white/10 px-3 py-1 text-xs text-gray-400">{s}</li>
            ))}
          </ul>
        </div>

        <div className="rise mx-auto w-full max-w-sm" style={{ animationDelay: '.15s' }}>
          <div className="relative rounded-[2rem] bg-gradient-to-br from-indigo-500/60 via-white/10 to-purple-500/60 p-px">
            <div className="overflow-hidden rounded-[2rem] bg-[#0b0d18]">
              <Image
                src="/images/profile.jpg"
                alt="Anas Gana"
                width={400}
                height={480}
                priority
                unoptimized
                className="aspect-[5/6] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
