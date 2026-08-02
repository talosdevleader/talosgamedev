const CHARACTERS = [
  { id: 'slime', label: 'Slime', className: 'char--slime', delay: '0s' },
  { id: 'mushroom', label: 'Mushroom', className: 'char--mushroom', delay: '0.4s' },
  { id: 'ghost', label: 'Ghost', className: 'char--ghost', delay: '0.8s' },
  { id: 'robot', label: 'Robot', className: 'char--robot', delay: '1.2s' },
  { id: 'cat', label: 'Cat hero', className: 'char--cat', delay: '0.2s' },
  { id: 'bird', label: 'Pixel bird', className: 'char--bird', delay: '1s' },
  { id: 'knight', label: 'Tiny knight', className: 'char--knight', delay: '0.6s' },
  { id: 'blob', label: 'Star blob', className: 'char--blob', delay: '1.4s' },
]

function CharacterSprite({ type }: { type: string }) {
  switch (type) {
    case 'slime':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <ellipse cx="32" cy="42" rx="22" ry="14" fill="#5EEAD4" />
          <path d="M12 40c0-16 10-28 20-28s20 12 20 28" fill="#2DD4BF" />
          <circle cx="24" cy="34" r="4" fill="#0F172A" />
          <circle cx="40" cy="34" r="4" fill="#0F172A" />
          <circle cx="25" cy="33" r="1.5" fill="#fff" />
          <circle cx="41" cy="33" r="1.5" fill="#fff" />
          <path d="M26 44c3 3 9 3 12 0" stroke="#0F172A" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      )
    case 'mushroom':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <ellipse cx="32" cy="28" rx="24" ry="16" fill="#EF4444" />
          <circle cx="20" cy="24" r="5" fill="#FEF3C7" />
          <circle cx="36" cy="18" r="4" fill="#FEF3C7" />
          <circle cx="44" cy="30" r="3.5" fill="#FEF3C7" />
          <rect x="24" y="36" width="16" height="16" rx="4" fill="#FEF3C7" />
          <circle cx="28" cy="44" r="2" fill="#0F172A" />
          <circle cx="36" cy="44" r="2" fill="#0F172A" />
        </svg>
      )
    case 'ghost':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M16 28c0-12 8-20 16-20s16 8 16 20v24l-5-4-5 4-6-4-6 4-5-4-5 4V28z" fill="#E2E8F0" />
          <circle cx="26" cy="30" r="4" fill="#334155" />
          <circle cx="38" cy="30" r="4" fill="#334155" />
          <ellipse cx="32" cy="40" rx="5" ry="3" fill="#F9A8D4" opacity="0.7" />
        </svg>
      )
    case 'robot':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="18" y="20" width="28" height="28" rx="6" fill="#94A3B8" />
          <rect x="22" y="26" width="20" height="10" rx="2" fill="#0F172A" />
          <circle cx="28" cy="31" r="2.5" fill="#C4F042" />
          <circle cx="36" cy="31" r="2.5" fill="#C4F042" />
          <rect x="26" y="40" width="12" height="3" rx="1" fill="#475569" />
          <line x1="32" y1="12" x2="32" y2="20" stroke="#64748B" strokeWidth="3" />
          <circle cx="32" cy="10" r="3" fill="#F59E0B" />
        </svg>
      )
    case 'cat':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 24l6-12 4 10M46 24l-6-12-4 10" fill="#F59E0B" />
          <ellipse cx="32" cy="36" rx="18" ry="16" fill="#FBBF24" />
          <circle cx="26" cy="34" r="3" fill="#0F172A" />
          <circle cx="38" cy="34" r="3" fill="#0F172A" />
          <path d="M30 40l2 2 2-2" fill="#F97316" />
          <path d="M20 38h-6M44 38h6" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      )
    case 'bird':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <ellipse cx="34" cy="34" rx="16" ry="12" fill="#38BDF8" />
          <path d="M18 34c-8-4-10-12-6-14 6 2 10 8 12 14z" fill="#0EA5E9" />
          <circle cx="42" cy="30" r="3" fill="#0F172A" />
          <path d="M48 34l10 2-10 4z" fill="#F97316" />
          <path d="M28 44l4 10 4-10" fill="#0369A1" />
        </svg>
      )
    case 'knight':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M22 18h20l4 10H18l4-10z" fill="#64748B" />
          <rect x="24" y="28" width="16" height="18" rx="2" fill="#94A3B8" />
          <rect x="26" y="32" width="12" height="4" fill="#0F172A" />
          <rect x="14" y="30" width="8" height="4" fill="#C4F042" />
          <rect x="42" y="26" width="4" height="18" fill="#CBD5E1" />
          <circle cx="44" cy="24" r="3" fill="#EF4444" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <polygon points="32,8 38,24 56,24 42,36 48,54 32,42 16,54 22,36 8,24 26,24" fill="#C4F042" />
          <circle cx="28" cy="28" r="2" fill="#0F172A" />
          <circle cx="36" cy="28" r="2" fill="#0F172A" />
          <path d="M28 36c2 2 6 2 8 0" stroke="#0F172A" strokeWidth="2" fill="none" />
        </svg>
      )
  }
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__chars" aria-hidden="true">
        {CHARACTERS.map((c) => (
          <div
            key={c.id}
            className={`hero__char ${c.className}`}
            style={{ animationDelay: c.delay }}
            title={c.label}
          >
            <CharacterSprite type={c.id} />
          </div>
        ))}
      </div>

      <div className="hero__content">
        <p className="hero__brand">TALOS</p>
        <h1 className="hero__quote">
          “Opportunities don&apos;t happen.
          <span> You create them.”</span>
        </h1>
        <p className="hero__attr">— Chris Grosser</p>
        <p className="hero__lede">
          Principal game designer & developer — systems, feel, and shipped worlds for studios across US, Japan, and Europe.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">
            View projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Start a conversation
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>SCROLL</span>
      </div>
    </section>
  )
}
