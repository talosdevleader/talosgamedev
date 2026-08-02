const CONTACTS = [
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@toptalentops',
    href: 'https://t.me/toptalentops',
  },
  {
    id: 'gmail',
    label: 'Email',
    value: 'illiasmykalo7@gmail.com',
    href: 'mailto:illiasmykalo7@gmail.com',
  },
  {
    id: 'discord',
    label: 'Discord',
    value: 'Message on Discord',
    href: 'https://discord.com/users/1531942445225480193',
  },
]

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__panel">
        <div className="contact__copy">
          <p className="section__eyebrow game-label">
            <span className="game-label__icon" aria-hidden="true">▶</span>
            Contact
          </p>
          <h2 className="section__title game-heading game-heading--light">
            Build the next world together
            <span className="game-heading__underline" aria-hidden="true" />
          </h2>
          <p className="section__lede">
            Available for principal design leadership, gameplay engineering, and studio consulting. Reach out on any channel below.
          </p>
        </div>
        <ul className="contact__list">
          {CONTACTS.map((c) => (
            <li key={c.id}>
              <a className="contact__link" href={c.href} target="_blank" rel="noreferrer noopener">
                <span className="contact__label">{c.label}</span>
                <span className="contact__value">{c.value}</span>
                <span className="contact__go" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="footer">
        <p className="footer__brand pixel-title pixel-title--sm">TALOS</p>
        <p className="footer__note">Game design & development · Principal portfolio</p>
      </footer>
    </section>
  )
}
