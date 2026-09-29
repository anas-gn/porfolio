// src/components/Contact.tsx
'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'envoi')
      }

      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur serveur')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      <style>{`
      .uppercase {
        text-transform: uppercase;
        margin-top:20px;
      }
      
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

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes successPulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }

      .animate-fade-up {
        animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .animate-slide-left {
        animation: slideInFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .animate-success {
        animation: slideUp 0.4s ease-out forwards;
      }

      .glow-text {
        text-shadow: 0 0 15px rgba(129, 140, 248, 0.3);
      }

      .divider-gold {
        background: linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.5), transparent);
        height: 1px;
      }

      .contact-input {
        background: linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(5, 5, 5, 0.95) 100%);
        border: 1px solid rgba(129, 140, 248, 0.2);
        color: white;
        font-weight: 300;
        letter-spacing: 0.05em;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .contact-input::placeholder {
        color: rgba(156, 163, 175, 0.6);
        text-transform: uppercase;
        font-size: 0.875rem;
        letter-spacing: 0.05em;
      }

      .contact-input:focus {
        outline: none;
        border-color: rgba(129, 140, 248, 0.6);
        box-shadow: inset 0 0 20px rgba(129, 140, 248, 0.1), 0 0 20px rgba(129, 140, 248, 0.2);
      }

      .submit-btn {
        background: linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(5, 5, 5, 0.95) 100%);
        border: 1px solid rgba(129, 140, 248, 0.3);
        color: white;
        font-weight: 300;
        font-size: 0.875rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        padding: 16px 32px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .submit-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(129, 140, 248, 0.2);
        transition: left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        z-index: -1;
      }

      .submit-btn:hover:not(:disabled) {
        border-color: rgba(129, 140, 248, 0.6);
        box-shadow: 0 0 30px rgba(129, 140, 248, 0.2), inset 0 0 20px rgba(129, 140, 248, 0.1);
      }

      .submit-btn:hover:not(:disabled)::before {
        left: 0;
      }

      .submit-btn:active {
        transform: scale(0.98);
      }

      .submit-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .success-message {
        background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%);
        border: 1px solid rgba(129, 140, 248, 0.5);
        border-left: 3px solid rgba(129, 140, 248, 0.8);
        color: rgba(129, 140, 248, 0.8);
        padding: 16px 20px;
        border-radius: 2px;
        font-size: 0.875rem;
        font-weight: 300;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        animation: successPulse 2s ease-in-out infinite;
      }

      .error-message {
        background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%);
        border: 1px solid rgba(220, 38, 38, 0.5);
        border-left: 3px solid rgba(220, 38, 38, 0.8);
        color: rgba(220, 38, 38, 0.8);
        padding: 16px 20px;
        border-radius: 2px;
        font-size: 0.875rem;
        font-weight: 300;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .form-label {
        font-size: 0.75rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: rgba(156, 163, 175, 0.7);
        font-weight: 300;
      }
      `}</style>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wider text-white mb-6 glow-text animate-slide-left">
            ME CONTACTER
          </h2>
          <div className="divider-gold mx-auto mb-8" style={{ width: '100px' }}></div>
          <p className="text-gray-400 uppercase tracking-[0.2em] font-light text-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Envoyez-moi un message
          </p>
        </div>

        {submitted && (
          <div className="success-message mb-8 animate-success text-center">
            ✓ Message envoyé avec succès
          </div>
        )}

        {error && (
          <div className="error-message mb-8 animate-success text-center">
            ✗ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="form-group">
            <label className="form-label">Nom</label>
            <input
              type="text"
              name="name"
              placeholder="Votre nom complet"
              value={form.name}
              onChange={handleChange}
              className="contact-input px-6 py-4 rounded-sm"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              value={form.email}
              onChange={handleChange}
              className="contact-input px-6 py-4 rounded-sm"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              className="contact-input px-6 py-4 rounded-sm resize-none h-40 font-light"
              required
              disabled={loading}
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="submit-btn w-full"
              disabled={loading}
            >
              {loading ? 'Envoi en cours...' : 'Envoyer le Message'}
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 pt-20 border-t border-amber-900/20">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-light mb-2">Email</p>
            <a
              href="mailto:anasgana2003@gmail.com"
              className="text-amber-700 hover:text-amber-600 transition-colors duration-300 font-light mb-2"
            >
              anasgana2003@gmail.com
            </a>
            <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-light mb-2">Github</p>
            <a
              href="https://github.com/anas-gn"
              className="text-amber-700 hover:text-amber-600 transition-colors duration-300 font-light mb-2"
            >
              anas-gn
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-light mb-2">Localisation</p>
            <p className="text-gray-300 font-light">Casablanca, Maroc</p>
          </div>
        </div>
      </div>
    </section>
  )
}
