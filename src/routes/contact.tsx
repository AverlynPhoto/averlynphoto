import { createFileRoute } from '@tanstack/react-router'
import { InquiryForm } from '@/components/InquiryForm'
import { PageHero } from '@/components/SiteLayout'

export const Route = createFileRoute('/contact')({ component: ContactPage })

function ContactPage() {
  return <>
    <PageHero eyebrow="Get in touch" title={<>I’d love to hear<br /><em>your story.</em></>} copy="Share what you’re envisioning and I’ll be in touch within two business days with thoughtful next steps." />
    <section className="contact-section section-pad"><aside><p className="eyebrow">Averlyn Photo</p><h2>Wherever your story<br /><em>is unfolding.</em></h2><div className="contact-details"><div><span>Email</span><a href="mailto:hello@averlynphoto.com">hello@averlynphoto.com</a></div><div><span>Location</span><p>Based in Miami, Florida<br />Available throughout South Florida and for travel.</p></div><div><span>Connect</span><p><a href="#instagram">Instagram</a> · <a href="#facebook">Facebook</a> · <a href="#pinterest">Pinterest</a></p></div></div></aside><InquiryForm /></section>
  </>
}
