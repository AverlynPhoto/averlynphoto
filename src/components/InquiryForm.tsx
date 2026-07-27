import { useState, type FormEvent } from 'react'

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    try {
      const body = new URLSearchParams()
      for (const [key, value] of new FormData(form).entries()) {
        body.append(key, String(value))
      }
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className={`inquiry-form ${compact ? 'compact' : ''}`} name="averlyn-inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="averlyn-inquiry" />
      <p className="hidden-field"><label>Leave this blank<input name="bot-field" /></label></p>
      <label><span>Name</span><input name="name" type="text" required autoComplete="name" placeholder="Your full name" /></label>
      <label><span>Email</span><input name="email" type="email" required autoComplete="email" placeholder="you@email.com" /></label>
      <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" placeholder="(305) 555-0123" /></label>
      <label><span>Session Type</span><select name="session-type" required defaultValue=""><option value="" disabled>Select a session</option><option>Portraits</option><option>Families</option><option>Couples</option><option>Lifestyle</option><option>Branding</option><option>Other</option></select></label>
      <label><span>Desired Date</span><input name="desired-date" type="date" /></label>
      <label className="full"><span>Message</span><textarea name="message" rows={compact ? 4 : 6} required placeholder="Tell me a little about what you’re dreaming of..." /></label>
      <div className="form-submit full"><button className="button dark" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send Your Note'}</button><p aria-live="polite">{status === 'success' && 'Thank you—your story is in good hands. I’ll be in touch soon.'}{status === 'error' && 'Something went wrong. Please email hello@averlynphoto.com.'}</p></div>
    </form>
  )
}
