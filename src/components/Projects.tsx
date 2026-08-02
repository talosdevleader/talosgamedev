import { useState } from 'react'
import { projects, type Region } from '../data'

const FILTERS: Array<Region | 'ALL'> = ['ALL', 'US', 'JP', 'EU']

export function Projects() {
  const [filter, setFilter] = useState<Region | 'ALL'>('ALL')
  const visible = filter === 'ALL' ? projects : projects.filter((p) => p.region === filter)

  return (
    <section className="section projects" id="projects">
      <div className="section__head">
        <p className="section__eyebrow">Selected work</p>
        <h2 className="section__title">Projects across US · Japan · EU</h2>
        <p className="section__lede">
          Lesser-known and cult favorites — with the concrete design and development work I bring to each world.
        </p>
      </div>

      <div className="projects__filters" role="tablist" aria-label="Filter by region">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`projects__filter ${filter === f ? 'is-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'ALL' ? 'All regions' : f}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {visible.map((project) => (
          <article key={project.id} className="project">
            <div className="project__media">
              <img
                src={project.image}
                alt={`${project.title} artwork`}
                loading="lazy"
                decoding="async"
                width={460}
                height={215}
              />
              <span className="project__region">{project.region}</span>
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
