import { services } from '../data'

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="section__head">
        <p className="section__eyebrow game-label">
          <span className="game-label__icon" aria-hidden="true">▶</span>
          Expertise
        </p>
        <h2 className="section__title game-heading">
          Principal-level services
          <span className="game-heading__underline" aria-hidden="true" />
        </h2>
        <p className="section__lede">
          Senior and principal scope — from first vertical slice through live seasons — with design and engineering in the same hands.
        </p>
      </div>

      <div className="services__list">
        {services.map((service, index) => (
          <article
            key={service.id}
            className={`service ${index % 2 === 1 ? 'service--flip' : ''}`}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="service__media">
              <img
                src={service.image}
                alt=""
                loading="lazy"
                decoding="async"
                width={640}
                height={420}
              />
              <span className="service__frame" aria-hidden="true" />
            </div>
            <div className="service__body">
              <span className="service__index game-label">LVL 0{index + 1}</span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__desc">{service.description}</p>
              <ul className="service__points">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
