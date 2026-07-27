import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, Heart, Image, Sparkles } from 'lucide-react'
import { InstagramStrip, SectionIntro } from '@/components/SiteLayout'
import { images } from '@/data/site'

export const Route = createFileRoute('/')({ component: HomePage })

const previews = [
  ['Portraits', images.portrait], ['Families', images.family], ['Couples', images.couple],
  ['Lifestyle', images.lifestyle], ['Branding', images.branding],
] as const

function HomePage() {
  return <>
    <section className="home-hero">
      <img src={images.hero} alt="Couple sharing an intimate moment in warm natural light" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="home-hero-content">
        <p className="eyebrow light stagger-1">Miami · South Florida · Worldwide</p>
        <h1 className="stagger-2">Some moments deserve<br />more than a <em>memory.</em></h1>
        <p className="stagger-3">They deserve to be felt for a lifetime.</p>
        <div className="hero-actions stagger-4"><Link to="/portfolio" className="button light">View Portfolio</Link><Link to="/book" className="button text-light">Book Your Session <ArrowRight size={16} /></Link></div>
      </div>
      <a href="#introduction" className="scroll-cue" aria-label="Scroll to introduction"><span>Discover</span><ArrowDown size={15} /></a>
    </section>

    <section className="home-intro section-pad" id="introduction">
      <p className="eyebrow reveal">The art of remembering</p>
      <div className="intro-grid reveal"><h2>Honest photographs.<br /><em>Enduring feeling.</em></h2><div><p>At Averlyn Photo, I believe photography is more than documenting a moment—it’s preserving emotion, connection, and the stories that shape our lives.</p><p>Every image is created with intention, transforming everyday moments into timeless artwork you’ll cherish forever.</p><Link to="/experience" className="text-link">The Averlyn Experience <span>↗</span></Link></div></div>
    </section>

    <section className="portfolio-preview">
      <div className="section-pad portfolio-heading"><SectionIntro eyebrow="Selected stories" title={<>A glimpse into<br /><em>the portfolio</em></>} /><Link to="/portfolio" className="circle-link" aria-label="View full portfolio"><ArrowRight /></Link></div>
      <div className="preview-track">{previews.map(([name, src], index) => <Link to="/portfolio" className={`preview-card card-${index + 1}`} key={name}><img src={src} alt={`${name} photography preview`} loading="lazy" /><span><small>0{index + 1}</small>{name}</span></Link>)}</div>
    </section>

    <section className="experience-section section-pad">
      <SectionIntro eyebrow="Thoughtful by design" title={<>The Averlyn <em>Experience</em></>} copy="More than beautiful images—a calm, artful process centered around what matters most to you." />
      <div className="experience-cards">
        <article className="reveal"><Heart strokeWidth={1.2} /><span>01</span><h3>Authentic Connection</h3><p>A relaxed experience where you can simply be yourself.</p></article>
        <article className="reveal"><Image strokeWidth={1.2} /><span>02</span><h3>Timeless Artwork</h3><p>Natural editing that will never go out of style.</p></article>
        <article className="reveal"><Sparkles strokeWidth={1.2} /><span>03</span><h3>Intentional Storytelling</h3><p>Images that preserve feeling, not just appearance.</p></article>
      </div>
    </section>

    <section className="about-preview section-pad">
      <div className="about-image reveal"><img src={images.editorial} alt="Averlyn photographer in natural light" loading="lazy" /><span className="image-note">Behind the lens<br />with Averlyn</span></div>
      <div className="about-copy reveal"><p className="eyebrow">Meet your photographer</p><h2>I want you to remember<br /><em>how it all felt.</em></h2><p>The way their hand fit into yours. The laughter that arrived without warning. The quiet tenderness between the moments you thought mattered most.</p><p>I don’t believe photographs should simply document faces. I believe they should hold emotion—honest, artful, and alive—so your story can be felt long after the moment has passed.</p><Link to="/about" className="button dark">Read My Story</Link></div>
    </section>

    <section className="testimonials section-pad">
      <SectionIntro eyebrow="Kind words" title={<>Notes from<br /><em>the heart</em></>} />
      <div className="testimonial-grid">
        <blockquote><p>“From the first email, everything felt thoughtful and easy. Our photographs feel like us—only somehow more beautiful than I remembered the day itself.”</p><footer>— Sofia & Daniel <span>Couples Session</span></footer></blockquote>
        <blockquote><p>“She made our family feel completely at home. The images are full of movement, tenderness, and all the little expressions I never want to forget.”</p><footer>— The Bennett Family <span>Lifestyle Session</span></footer></blockquote>
        <blockquote><p>“Every frame feels editorial yet deeply personal. These are not just photographs; they are the beginning of our family’s visual history.”</p><footer>— Marisol R. <span>Portrait Session</span></footer></blockquote>
      </div>
    </section>

    <InstagramStrip images={[images.portrait, images.family, images.couple, images.lifestyle, images.branding]} />
    <section className="booking-cta"><p className="eyebrow">Your story is worth keeping</p><h2>Ready to preserve<br /><em>your story?</em></h2><Link to="/book" className="button dark">Book Your Session</Link></section>
  </>
}
