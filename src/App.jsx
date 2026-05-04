import { useState } from 'react'

// ── Brand constants ──────────────────────────────────────────────────────────
const APP_URL = 'https://app.supersparkles.co.uk'

// ── Sparkle SVG mark (inline, reusable) ─────────────────────────────────────
function SparkleMark({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <path d="M 32,6 Q 40,28 58,32 Q 40,36 32,58 Q 24,36 6,32 Q 24,28 32,6 Z" fill="url(#sm-grad)" />
      <circle cx="52" cy="14" r="5" fill="#f59e0b" />
      <circle cx="58" cy="22" r="3" fill="#f59e0b" opacity="0.7" />
    </svg>
  )
}

function LogoWordmark({ light = false }) {
  return (
    <a href="#" className="flex items-center gap-3 no-underline">
      <SparkleMark size={38} />
      <div className="leading-tight">
        <div style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.3px', color: light ? '#ffffff' : '#0c1a2e' }}>
          Super<span style={{ color: '#0284c7' }}>Sparkles</span>
        </div>
        <div style={{ fontSize: '0.6rem', letterSpacing: '2.5px', color: light ? 'rgba(255,255,255,0.6)' : '#94a3b8', fontWeight: 500, textTransform: 'uppercase' }}>
          Professional Cleaning
        </div>
      </div>
    </a>
  )
}

// ── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e2e8f0',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <LogoWordmark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[['#services', 'Services'], ['#how-it-works', 'How It Works'], ['#why-us', 'Why Choose Us']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: '#475569', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}
              onMouseOver={e => e.target.style.color = '#0284c7'}
              onMouseOut={e => e.target.style.color = '#475569'}>
              {label}
            </a>
          ))}
        </nav>

        {/* Login buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`${APP_URL}/cleaner`}
            style={{ padding: '7px 16px', borderRadius: 8, border: '1.5px solid #cbd5e1', color: '#334155', fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none', whiteSpace: 'nowrap' }}
            onMouseOver={e => e.target.style.borderColor = '#0284c7'}
            onMouseOut={e => e.target.style.borderColor = '#cbd5e1'}>
            Cleaner Login
          </a>
          <a href={`${APP_URL}/customer`}
            style={{ padding: '7px 18px', borderRadius: 8, background: '#0284c7', color: '#fff', fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Customer Login
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(v => !v)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen
              ? <><path d="M4 4 L18 18" stroke="#334155" strokeWidth="2" strokeLinecap="round"/><path d="M18 4 L4 18" stroke="#334155" strokeWidth="2" strokeLinecap="round"/></>
              : <><rect y="3" width="22" height="2" rx="1" fill="#334155"/><rect y="10" width="22" height="2" rx="1" fill="#334155"/><rect y="17" width="22" height="2" rx="1" fill="#334155"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid #e2e8f0', background: '#fff', padding: '16px 24px 24px' }}>
          {[['#services', 'Services'], ['#how-it-works', 'How It Works'], ['#why-us', 'Why Choose Us']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '10px 0', color: '#334155', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid #f1f5f9' }}>
              {label}
            </a>
          ))}
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href={`${APP_URL}/customer`}
              style={{ textAlign: 'center', padding: '11px', borderRadius: 8, background: '#0284c7', color: '#fff', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
              Customer Login
            </a>
            <a href={`${APP_URL}/cleaner`}
              style={{ textAlign: 'center', padding: '11px', borderRadius: 8, border: '1.5px solid #cbd5e1', color: '#334155', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
              Cleaner Login
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0c1a2e 0%, #0f2849 60%, #0c2d4a 100%)',
      padding: '100px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background sparkle decoration */}
      <div style={{ position: 'absolute', top: 40, right: '8%', opacity: 0.12 }}>
        <SparkleMark size={180} />
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: '4%', opacity: 0.07 }}>
        <SparkleMark size={120} />
      </div>
      <div style={{ position: 'absolute', top: '30%', right: '30%', opacity: 0.06 }}>
        <SparkleMark size={60} />
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
          <span style={{ fontSize: '0.72rem', color: '#38bdf8', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>★ Nationwide Coverage</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.12, margin: '0 0 20px', letterSpacing: '-1px' }}>
          A sparkling clean home,<br />
          <span style={{ color: '#38bdf8' }}>anywhere in the UK</span>
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 40px' }}>
          Book professional, background-checked cleaners in minutes. Flexible scheduling, secure online payment, and a feedback process that keeps every clean to the highest standard.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`${APP_URL}/customer`}
            style={{ padding: '15px 36px', borderRadius: 10, background: '#0284c7', color: '#fff', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
            Book a Clean →
          </a>
          <a href="#how-it-works"
            style={{ padding: '15px 28px', borderRadius: 10, border: '1.5px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
            How it works
          </a>
        </div>

        {/* Social proof strip */}
        <div style={{ marginTop: 60, display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            ['5,000+', 'Cleaners nationwide'],
            ['98%', 'Satisfaction rate'],
            ['100%', 'DBS checked'],
            ['24/7', 'Online booking'],
          ].map(([stat, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: '1.6rem', color: '#38bdf8', lineHeight: 1 }}>{stat}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 4, fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: '📅',
    title: 'Online Scheduling',
    desc: 'Book a one-off clean or set up a recurring schedule entirely online. Choose your date, time, and service — no phone calls, no waiting.',
    highlight: 'Available 24/7',
  },
  {
    icon: '💳',
    title: 'Convenient Payments',
    desc: 'Pay securely by card through Stripe. Receive a digital receipt instantly. No cash handling, no invoices to chase — everything is automatic.',
    highlight: 'Powered by Stripe',
  },
  {
    icon: '🛡️',
    title: 'Background-Checked Cleaners',
    desc: 'Every Super Sparkles cleaner is fully DBS checked, identity verified, and insured before their first job. You always know who is in your home.',
    highlight: 'DBS checked & insured',
  },
  {
    icon: '⭐',
    title: 'Easy Feedback',
    desc: 'Rate your clean and leave notes straight after each visit. Our quality team reviews every low score within 24 hours and makes it right.',
    highlight: 'Quality guaranteed',
  },
]

function Features() {
  return (
    <section id="services" style={{ background: '#f8fafc', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-block', background: '#eff6ff', color: '#0284c7', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100, marginBottom: 14 }}>
            Why Super Sparkles
          </div>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0c1a2e', margin: '0 0 12px', letterSpacing: '-0.5px' }}>
            Cleaning made effortless
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto' }}>
            From booking to billing, everything is handled online so you can focus on enjoying a spotless home.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
          {FEATURES.map(({ icon, title, desc, highlight }) => (
            <div key={title} style={{
              background: '#fff', borderRadius: 16, padding: '32px 28px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0c1a2e', margin: '0 0 10px' }}>{title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.65, margin: '0 0 18px' }}>{desc}</p>
              <div style={{ display: 'inline-block', background: '#eff6ff', color: '#0284c7', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.5px', padding: '4px 12px', borderRadius: 100 }}>
                {highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How it works ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    n: '01',
    title: 'Book online in minutes',
    desc: 'Choose your service type, property size, preferred date and time. Create a free account and confirm your booking — no deposit required.',
  },
  {
    n: '02',
    title: 'A vetted cleaner arrives',
    desc: 'We match you with a background-checked, rated cleaner local to you. You\'ll see their profile and reviews before they arrive.',
  },
  {
    n: '03',
    title: 'Pay securely & leave feedback',
    desc: 'Payment is taken automatically after your clean. Rate your cleaner and leave notes — your feedback shapes every future visit.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: '#ffffff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-block', background: '#eff6ff', color: '#0284c7', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100, marginBottom: 14 }}>
            Simple Process
          </div>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0c1a2e', margin: '0 0 12px', letterSpacing: '-0.5px' }}>
            Ready in three steps
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto' }}>
            No phone calls. No cash. No hassle. Just book, relax, and come home to clean.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0, position: 'relative' }}>
          {STEPS.map(({ n, title, desc }, i) => (
            <div key={n} style={{ padding: '36px 32px', position: 'relative' }}>
              {/* Connector line (not last) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block" style={{
                  position: 'absolute', top: 52, right: 0, width: '50%',
                  height: 2, background: 'linear-gradient(90deg, #0284c7, #e2e8f0)',
                  zIndex: 0,
                }} />
              )}
              <div style={{
                width: 52, height: 52, borderRadius: 14, background: '#0284c7',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1.1rem', color: '#fff', marginBottom: 20,
                position: 'relative', zIndex: 1,
              }}>
                {n}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0c1a2e', margin: '0 0 10px' }}>{title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href={`${APP_URL}/customer`}
            style={{ padding: '14px 36px', borderRadius: 10, background: '#0284c7', color: '#fff', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
            Book your first clean →
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Why Us (trust signals) ────────────────────────────────────────────────────
const TRUST = [
  { icon: '🇬🇧', title: 'Nationwide coverage', desc: 'We operate across England, Scotland, and Wales. From London to Edinburgh, Super Sparkles is available wherever you need us.' },
  { icon: '🔒', title: 'Fully insured', desc: 'Every booking is covered by our comprehensive public liability insurance, giving you complete peace of mind.' },
  { icon: '🌱', title: 'Eco-friendly products', desc: 'Our cleaners use non-toxic, biodegradable cleaning products that are safe for your family, pets, and the environment.' },
  { icon: '🔄', title: 'Flexible recurring plans', desc: 'Save money with weekly, fortnightly, or monthly cleans. Pause or cancel any time — no contracts, no hidden fees.' },
  { icon: '👤', title: 'Same cleaner every time', desc: 'Request your favourite cleaner for all future visits. Consistency means a better clean every single time.' },
  { icon: '💬', title: 'Real human support', desc: 'Got a question? Our customer team responds in under 2 hours by chat or email, every day of the week.' },
]

function WhyUs() {
  return (
    <section id="why-us" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-block', background: 'rgba(2,132,199,0.1)', color: '#0284c7', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100, marginBottom: 14 }}>
            Our Promise
          </div>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0c1a2e', margin: '0 0 12px', letterSpacing: '-0.5px' }}>
            The Super Sparkles standard
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto' }}>
            We hold ourselves to a higher standard — so every visit is one you can trust.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {TRUST.map(({ icon, title, desc }) => (
            <div key={title} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: 'rgba(255,255,255,0.7)', borderRadius: 14, padding: '24px 22px', border: '1px solid rgba(2,132,199,0.12)' }}>
              <span style={{ fontSize: '1.8rem', flexShrink: 0, marginTop: 2 }}>{icon}</span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0c1a2e', margin: '0 0 6px' }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── App portal CTA ────────────────────────────────────────────────────────────
function PortalCTA() {
  return (
    <section style={{ background: '#0c1a2e', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)', opacity: 0.06 }}>
        <SparkleMark size={360} />
      </div>

      <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <div style={{ marginBottom: 16 }}>
          <SparkleMark size={48} />
        </div>
        <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.6rem)', fontWeight: 800, color: '#fff', margin: '0 0 14px', letterSpacing: '-0.5px' }}>
          Manage everything in one place
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 540, margin: '0 auto 44px', lineHeight: 1.7 }}>
          Whether you're booking a clean or managing your schedule as a cleaner, our platform puts everything at your fingertips.
        </p>

        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Customer portal card */}
          <a href={`${APP_URL}/customer`} style={{ textDecoration: 'none', flex: '1 1 260px', maxWidth: 320 }}>
            <div style={{
              background: '#0284c7', borderRadius: 16, padding: '32px 28px', textAlign: 'left',
              border: '1px solid rgba(56,189,248,0.3)',
              transition: 'transform 0.15s',
            }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2rem', marginBottom: 14 }}>🏠</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff', marginBottom: 8 }}>Customer Login</div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 18px' }}>
                Book a clean, manage your recurring schedule, review past visits, and pay securely — all in one dashboard.
              </p>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>Sign in or create account →</div>
            </div>
          </a>

          {/* Cleaner portal card */}
          <a href={`${APP_URL}/cleaner`} style={{ textDecoration: 'none', flex: '1 1 260px', maxWidth: 320 }}>
            <div style={{
              background: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: '32px 28px', textAlign: 'left',
              border: '1px solid rgba(255,255,255,0.12)',
              transition: 'transform 0.15s',
            }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2rem', marginBottom: 14 }}>✨</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff', marginBottom: 8 }}>Cleaner Login</div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 18px' }}>
                View your upcoming jobs, accept new bookings, manage your availability, and track your earnings week by week.
              </p>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.85rem' }}>Access your schedule →</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { quote: "Booked online Sunday night, cleaner arrived Monday morning. Absolutely spotless — better than I could have done myself. Will definitely be booking again.", name: 'Sarah M.', location: 'Manchester' },
  { quote: "Knowing my cleaner has been DBS checked makes such a difference. The whole process — booking, payment, feedback — was seamless from start to finish.", name: 'James T.', location: 'London' },
  { quote: "I've tried other cleaning services but Super Sparkles is on another level. Same cleaner every fortnight, she knows exactly how I like things done.", name: 'Lisa K.', location: 'Edinburgh' },
]

function Testimonials() {
  return (
    <section style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0c1a2e', margin: '0 0 12px', letterSpacing: '-0.5px' }}>
            Trusted across the UK
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 8 }}>
            {'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#f59e0b', fontSize: '1.3rem' }}>{s}</span>)}
          </div>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Rated 4.9/5 from over 12,000 reviews</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {TESTIMONIALS.map(({ quote, name, location }) => (
            <div key={name} style={{ background: '#f8fafc', borderRadius: 16, padding: '28px 26px', border: '1px solid #e2e8f0' }}>
              <div style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: 14, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.7, margin: '0 0 20px', fontStyle: 'italic' }}>
                "{quote}"
              </p>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0c1a2e' }}>{name}</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#0c1a2e', padding: '52px 24px 32px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <LogoWordmark light />
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.7, marginTop: 14, maxWidth: 220 }}>
              Professional home cleaning services across the United Kingdom.
            </p>
          </div>

          {/* Services */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 14 }}>Services</div>
            {['Regular Cleaning', 'Deep Cleaning', 'End of Tenancy', 'Office Cleaning', 'After-Build Clean'].map(s => (
              <div key={s} style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', textDecoration: 'none' }}
                  onMouseOver={e => e.target.style.color = '#38bdf8'}
                  onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>
                  {s}
                </a>
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 14 }}>Company</div>
            {['About Us', 'Careers', 'Become a Cleaner', 'Privacy Policy', 'Terms of Service'].map(s => (
              <div key={s} style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', textDecoration: 'none' }}
                  onMouseOver={e => e.target.style.color = '#38bdf8'}
                  onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>
                  {s}
                </a>
              </div>
            ))}
          </div>

          {/* Portals */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 14 }}>Portals</div>
            <div style={{ marginBottom: 12 }}>
              <a href={`${APP_URL}/customer`}
                style={{ display: 'inline-block', padding: '9px 20px', borderRadius: 8, background: '#0284c7', color: '#fff', fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none' }}>
                Customer Login
              </a>
            </div>
            <div>
              <a href={`${APP_URL}/cleaner`}
                style={{ display: 'inline-block', padding: '9px 20px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none' }}>
                Cleaner Login
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', margin: 0 }}>
            © {new Date().getFullYear()} Super Sparkles Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <PortalCTA />
      </main>
      <Footer />
    </>
  )
}
