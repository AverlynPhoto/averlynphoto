import { createFileRoute } from '@tanstack/react-router'
import { X } from 'lucide-react'
import { useState } from 'react'
import { PageHero } from '@/components/SiteLayout'
import { images, portfolioItems } from '@/data/site'

export const Route = createFileRoute('/portfolio')({ component: PortfolioPage })
const filters = ['All', 'Portraits', 'Lifestyle', 'Families', 'Couples', 'Branding']

function PortfolioPage() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<(typeof portfolioItems)[number] | null>(null)
  const visible = filter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === filter)
  return <>
    <PageHero eyebrow="The portfolio" title={<>Stories told in<br /><em>light & feeling</em></>} copy="A collection of honest connection, quiet beauty, and the art found in everyday moments." image={images.couple} />
    <section className="gallery-section section-pad">
      <div className="filter-bar" aria-label="Filter portfolio">{filters.map((name) => <button key={name} className={filter === name ? 'active' : ''} onClick={() => setFilter(name)}>{name}</button>)}</div>
      <div className="masonry-gallery">{visible.map((item) => <button className={`gallery-item ${item.shape}`} key={item.src + item.category} onClick={() => setSelected(item)}><img src={item.src} alt={item.alt} loading="lazy" /><span>{item.category}<small>View image</small></span></button>)}</div>
    </section>
    {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setSelected(null)}><button onClick={() => setSelected(null)} aria-label="Close image"><X /></button><img src={selected.src} alt={selected.alt} onClick={(event) => event.stopPropagation()} /><p>{selected.category}</p></div>}
  </>
}
