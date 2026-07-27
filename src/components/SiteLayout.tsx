import { Link, useRouterState } from '@tanstack/react-router'
import { ArrowUp, Instagram, Menu, X } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'

const navItems = [
  ['Home', '/'], ['Portfolio', '/portfolio'], ['Experience', '/experience'],
  ['About', '/about'], ['Journal', '/journal'], ['Contact', '/contact'],
] as const

export function SiteLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = useRouterState({ select: (state) => state.location.pathname })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`site-header ${scrolled || pathname !== '/' ? 'is-solid' : ''}`}>
        <Link to="/" className="wordmark" aria-label="Averlyn Photo home">
          <span>AVERLYN</span><small>PHOTO</small>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: 'active' }}>{label}</Link>)}
          <Link to="/book" className="nav-book">Book</Link>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, to], index) => <Link key={to} to={to} style={{ transitionDelay: `${index * 45}ms` }}>{label}</Link>)}
          <Link to="/book">Book Your Session</Link>
        </nav>
        <p>Miami · South Florida · Available worldwide</p>
      </div>

      <main>{children}</main>
      <Footer />
      <button className={`scroll-top ${scrolled ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top"><ArrowUp size={17} /></button>
    </>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow">Photographs made to be felt</p>
        <h2>Let your story<br /><em>live beautifully.</em></h2>
        <Link to="/book" className="text-link light">Begin your experience <span>↗</span></Link>
      </div>
      <div className="footer-bottom">
        <Link to="/" className="wordmark footer-mark"><span>AVERLYN</span><small>PHOTO</small></Link>
        <div className="social-links"><a href="#instagram">Instagram</a><a href="#facebook">Facebook</a><a href="#pinterest">Pinterest</a><a href="mailto:hello@averlynphoto.com">Email</a></div>
        <p>© {new Date().getFullYear()} Averlyn Photo</p>
      </div>
    </footer>
  )
}

export function PageHero({ eyebrow, title, copy, image, align = 'left' }: { eyebrow: string; title: ReactNode; copy: string; image?: string; align?: 'left' | 'center' }) {
  return (
    <section className={`page-hero ${image ? 'with-image' : ''} align-${align}`}>
      {image && <img src={image} alt="" fetchPriority="high" />}
      <div className="page-hero-content reveal">
        <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-copy">{copy}</p>
      </div>
    </section>
  )
}

export function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy?: string }) {
  return <div className="section-intro reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

export function InstagramStrip({ images }: { images: string[] }) {
  return <section className="instagram-section"><div className="instagram-heading"><div><Instagram size={18} /><span>Follow along</span></div><a href="#instagram">@averlynphoto</a></div><div className="instagram-grid">{images.map((src, index) => <a href="#instagram" key={src + index} aria-label="View Averlyn Photo on Instagram"><img src={src} alt="Averlyn Photo gallery preview" loading="lazy" /></a>)}</div></section>
}
