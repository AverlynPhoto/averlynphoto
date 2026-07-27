import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays } from 'lucide-react'
import { InquiryForm } from '@/components/InquiryForm'
import { PageHero } from '@/components/SiteLayout'
import { images } from '@/data/site'

export const Route = createFileRoute('/book')({ component: BookPage })

function BookPage() {
  return <>
    <PageHero eyebrow="Reserve your date" title={<>Your story,<br /><em>beautifully kept.</em></>} copy="Choose a consultation time below or send a note with the details of the session you’re imagining." image={images.coast} />
    <section className="booking-section section-pad"><div className="calendly-placeholder"><CalendarDays strokeWidth={1.2} /><p className="eyebrow">Complimentary consultation</p><h2>Find a time<br /><em>that feels easy.</em></h2><p>This space is ready for your Calendly scheduling embed. Connect your calendar link here when you’re ready to accept appointments.</p><button className="button dark" type="button">Open Calendar</button><small>30 minutes · Video call</small></div><div className="booking-form"><p className="eyebrow">Prefer to write?</p><h2>Tell me what<br /><em>you’re dreaming of.</em></h2><InquiryForm compact /></div></section>
  </>
}
