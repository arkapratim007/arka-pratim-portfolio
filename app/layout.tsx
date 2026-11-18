import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arka Pratim',
  description: 'Personal Portfolio of Arka Pratim, a full stack developer. Explore my projects, experience, and skills.',
  metadataBase: new URL('https://arkapratim.dev/'),
  openGraph: {
    type: 'website',
    title: 'Arka Pratim | Personal Portfolio',
    description: 'Explore my projects, work experience, and technical skills.',
    images: ['/hero_thumb.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arka Pratim | Personal Portfolio',
    description: 'Explore my projects, work experience, and technical skills.',
    images: ['/hero_thumb.png'],
  },
  icons: {
    icon: '/portfolio_assets/my_logo.svg',
  },
  alternates: {
    canonical: 'https://arkapratim.dev/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}