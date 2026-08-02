import { projects } from '../data'

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section__head">
        <p className="section__eyebrow game-label">
          <span className="game-label__icon" aria-hidden="true">▶</span>
          Selected work
        </p>
        <h2 className="section__title game-heading">
          Featured projects
          <span className="game-heading__underline" aria-hidden="true" />
        </h2>
        <p className="section__lede">
          Cult favorites and lesser-known worlds — with the design and development work I bring to each one.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project"
            style={{ animationDelay: `${(index % 6) * 0.06}s` }}
          >
            <div className="project__media">
              <img
                src={project.image}
                alt={`${project.title} artwork`}
                loading="lazy"
                decoding="async"
                width={460}
                height={215}
              />
              <span className="project__shine" aria-hidden="true" />
            </div>
            <div className="project__body">
              <div className="project__meta">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__role">{project.role}</p>
              </div>
              <p className="project__text">{project.contribution}</p>
              <ul className="project__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
