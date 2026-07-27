import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/SiteLayout'
import { images, journalPosts } from '@/data/site'

export const Route = createFileRoute('/journal')({ component: JournalPage })

function JournalPage() {
  const [featured, ...posts] = journalPosts
  return <>
    <PageHero eyebrow="The journal" title={<>Notes on light,<br /><em>life & legacy.</em></>} copy="Location inspiration, session guidance, and reflections from behind the lens." />
    <section className="featured-post section-pad"><img src={featured.image} alt={featured.title} fetchPriority="high" /><article><p className="eyebrow">Featured · {featured.category}</p><h2>{featured.title}</h2><p>{featured.excerpt}</p><Link to="/contact" className="text-link">Read the story <span>↗</span></Link></article></section>
    <section className="journal-grid section-pad">{posts.map((post, index) => <article className={index === 0 ? 'wide' : ''} key={post.title}><div className="post-image"><img src={post.image} alt={post.title} loading="lazy" /><span>{post.category}</span></div><div><p className="post-number">0{index + 2}</p><h2>{post.title}</h2><p>{post.excerpt}</p><Link to="/contact">Read more <ArrowRight size={15} /></Link></div></article>)}</section>
    <section className="journal-note"><img src={images.detail} alt="Portrait detail" loading="lazy" /><p>“We photograph not only to remember what happened, but to return to how it felt.”</p></section>
  </>
}
