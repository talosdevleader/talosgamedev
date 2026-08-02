export function Nav() {
  return (
    <header className="nav">
      <a className="nav__logo pixel-title pixel-title--sm" href="#top">
        TALOS
      </a>
      <nav className="nav__links" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
