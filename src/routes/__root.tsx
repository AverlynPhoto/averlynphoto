import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { SiteLayout } from '@/components/SiteLayout'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Averlyn Photo | Miami Lifestyle & Portrait Photographer',
      },
      {
        name: 'description',
        content: 'Miami lifestyle and portrait photographer creating timeless, emotion-filled imagery that preserves your story with authenticity and artistry.',
      },
      {
        name: 'theme-color',
        content: '#FAF8F5',
      },
      {
        property: 'og:title',
        content: 'Averlyn Photo | Miami Lifestyle & Portrait Photographer',
      },
      {
        property: 'og:description',
        content: 'Timeless, emotion-filled photography for Miami, South Florida, and wherever your story unfolds.',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteLayout>{children}</SiteLayout>
        <Scripts />
      </body>
    </html>
  )
}
