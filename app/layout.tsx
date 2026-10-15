import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'Viraj Telecom — Electronics Repair, Products & Headphone Solutions',
  description:
    'Professional electronics and headphone repair, brand new audio product sales, and enterprise call center headset solutions in Navi Mumbai. Specializing in Sennheiser headsets since 2011.',
  authors: [{ name: 'Akshay Gaikwad', url: 'https://stream-line.dev/' }],
  keywords: [
    'Viraj Telecom',
    'electronics repair',
    'headphone repair',
    'Sennheiser headsets',
    'call center headsets',
    'audio products',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
  ],
  openGraph: {
    title: 'Viraj Telecom — Electronics Repair & Audio Products Platform',
    description:
      'Professional electronics and headphone repair, audio product sales, and enterprise headset solutions in Navi Mumbai.',
    url: 'https://virajtelecom.netlify.app/',
    siteName: 'Viraj Telecom',
    images: [
      {
        url: 'https://virajtelecom.netlify.app/images/hero-headphones.jpg',
        width: 1200,
        height: 630,
        alt: 'Viraj Telecom Electronics & Headphone Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viraj Telecom — Electronics Repair & Audio Products Platform',
    description:
      'Professional electronics and headphone repair, audio product sales, and enterprise headset solutions.',
    images: ['https://virajtelecom.netlify.app/images/hero-headphones.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#0d1117',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
