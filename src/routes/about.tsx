import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHero } from '@/components/SiteLayout'
import { images } from '@/data/site'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return <>
    <PageHero eyebrow="Behind the lens" title={<>For the beauty<br /><em>that is already there.</em></>} copy="I’m Averlyn—a photographer, observer, and believer in the quiet significance of ordinary days." image={images.editorial} />
    <section className="story-section section-pad"><div className="story-title"><p className="eyebrow">My story</p><h2>Photographs have always<br />felt like a way of <em>returning.</em></h2></div><div className="story-copy"><p className="dropcap">I believe the truest images are not made by asking a moment to be something else. They are made by noticing what is already there: the soft glance, the hand reaching instinctively, the joy that loosens every careful plan.</p><p>That belief has shaped Averlyn Photo from the beginning. My work is rooted in authentic connection and a thoughtful, unhurried approach—creating space for you to settle in, breathe deeply, and forget about the camera.</p><p>Recently, I relocated my photography business from Pennsylvania to Miami. This new chapter brings a different quality of light, salt-softened air, and the same enduring purpose: to preserve honest moments with artistry and heart.</p><p>Today I serve Miami and communities throughout South Florida, while remaining available for travel wherever your story takes us.</p></div></section>
    <section className="legacy-section"><div><img src={images.family} alt="Family holding one another" loading="lazy" /></div><div><p className="eyebrow">The heart of it</p><h2>Artwork for the life<br /><em>you’re building.</em></h2><p>My passion is preserving the moments that feel most like you and turning them into artwork that becomes part of your family’s legacy. Not just images for today, but touchstones your children may one day hold in their own hands.</p><p>Because the seasons change. People grow. Homes take on new shapes. And a photograph gives us a way to say: this mattered, this was ours, this is how deeply we loved.</p><Link to="/book" className="button dark">Tell Me Your Story</Link></div></section>
    <section className="values-band"><p>Honest connection</p><span>·</span><p>Warmth over perfection</p><span>·</span><p>Art with meaning</p><span>·</span><p>Legacy in every frame</p></section>
  </>
}
