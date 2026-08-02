import { lazy, Suspense, useCallback, useState } from 'react'
import { LazyGreeting } from './components/LazyGreeting'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'

const Services = lazy(() =>
  import('./components/Services').then((m) => ({ default: m.Services })),
)
const Projects = lazy(() =>
  import('./components/Projects').then((m) => ({ default: m.Projects })),
)
const Contact = lazy(() =>
  import('./components/Contact').then((m) => ({ default: m.Contact })),
)

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />
}

export default function App() {
  const [booted, setBooted] = useState(false)
  const handleComplete = useCallback(() => setBooted(true), [])

  return (
    <>
      {!booted && <LazyGreeting onComplete={handleComplete} />}
      <div className={`app ${booted ? 'app--ready' : ''}`}>
        <Nav />
        <main>
          <Hero />
          {booted && (
            <Suspense fallback={<SectionFallback />}>
              <Services />
              <Projects />
              <Contact />
            </Suspense>
          )}
        </main>
      </div>
    </>
  )
}
