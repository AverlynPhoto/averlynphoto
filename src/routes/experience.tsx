import { Link, createFileRoute } from '@tanstack/react-router'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { PageHero, SectionIntro } from '@/components/SiteLayout'
import { images } from '@/data/site'

export const Route = createFileRoute('/experience')({ component: ExperiencePage })

const steps = [
  ['01', 'Inquiry', 'Tell me what you’re dreaming of. I’ll respond with availability, collection details, and a thoughtful questionnaire so I can begin understanding your story.'],
  ['02', 'Planning', 'Together, we shape the details—from location and light to wardrobe guidance and the feeling you want your session to hold.'],
  ['03', 'Session Day', 'Nothing stiff, nothing forced. I’ll offer gentle direction while leaving room for real movement, connection, and the in-between magic.'],
  ['04', 'Editing', 'Each photograph is artfully refined with warm, true-to-life color and a timeless finish that keeps the emotion at the center.'],
  ['05', 'Gallery Delivery', 'Your private online gallery arrives ready to relive, share, download, and transform into heirloom prints and albums.'],
]
const faqs = [
  ['How far in advance should we book?', 'Most sessions are reserved four to eight weeks in advance. For seasonal family sessions or travel dates, earlier is always best.'],
  ['What if we feel awkward in front of the camera?', 'Nearly everyone says this at first. My approach is relaxed and gently guided, giving you simple prompts that create natural movement and connection.'],
  ['Do you travel outside Miami?', 'Absolutely. I serve Miami and South Florida, return to Pennsylvania when timing allows, and welcome destination sessions worldwide.'],
  ['When will we receive our photographs?', 'Portrait and lifestyle galleries are typically delivered within three to four weeks, with a carefully curated preview shared sooner when possible.'],
]

function ExperiencePage() {
  const [open, setOpen] = useState(0)
  return <>
    <PageHero eyebrow="The Averlyn Experience" title={<>Calm, considered,<br /><em>entirely yours.</em></>} copy="A seamless process designed to let you stay present while I preserve what unfolds." image={images.lifestyle} />
    <section className="journey-section section-pad"><SectionIntro eyebrow="Your journey" title={<>From first note to<br /><em>finished artwork</em></>} /><div className="journey-list">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="experience-callout"><img src={images.detail} alt="Fine art portrait detail" loading="lazy" /><div><p className="eyebrow">An invitation to slow down</p><h2>You bring the love.<br /><em>I’ll hold the moment.</em></h2><p>No need to perform or have it all figured out. The most meaningful photographs happen when you feel safe enough to be present.</p><Link to="/book" className="button light">Begin Your Experience</Link></div></section>
    <section className="faq-section section-pad"><SectionIntro eyebrow="Questions, answered" title={<>A few things you<br /><em>may be wondering</em></>} /><div className="faq-list">{faqs.map(([question, answer], index) => <article className={open === index ? 'open' : ''} key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><Plus /></button><div><p>{answer}</p></div></article>)}</div></section>
  </>
}
