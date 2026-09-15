import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sakthidentalclinic.in'),
  title: {
    default: 'Sakthi Dental Clinic | Hosur, Tamil Nadu',
    template: '%s | Sakthi Dental Clinic',
  },
  description:
    'Sakthi Dental Clinic in Hosur, Tamil Nadu offers expert dental care for women, children, and families. Services include teeth cleaning, braces, implants, root canal therapy, and more. Book your appointment today.',
  keywords: [
    'dental clinic Hosur',
    'dentist Hosur Tamil Nadu',
    'dental care women children',
    'braces Hosur',
    'dental implants Hosur',
    'root canal Hosur',
    'Sakthi Dental Clinic',
    'Dr Anupriya dentist',
  ],
  authors: [{ name: 'Sakthi Dental Clinic' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sakthidentalclinic.in',
    siteName: 'Sakthi Dental Clinic',
    title: 'Sakthi Dental Clinic | Hosur, Tamil Nadu',
    description:
      'Expert dental care for women, children, and families in Hosur, Tamil Nadu. Compassionate, modern, and comprehensive dental services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakthi Dental Clinic | Hosur, Tamil Nadu',
    description:
      'Expert dental care for women, children, and families in Hosur, Tamil Nadu.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/client/SDC Logo.png',
    shortcut: '/images/client/SDC Logo.png',
    apple: '/images/client/SDC Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'Sakthi Dental Clinic',
              url: 'https://sakthidentalclinic.in',
              email: 'info@sakthidentalclinic.in',
              telephone: ['+91-9862890897', '+91-9363298118'],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'B2/8, SBM Layout, Anthivadi',
                addressLocality: 'Hosur',
                addressRegion: 'Tamil Nadu',
                postalCode: '635109',
                addressCountry: 'IN',
              },
              openingHours: 'Su-Sa 09:00-19:00',
              founder: {
                '@type': 'Person',
                name: 'Dr. Anupriya',
                jobTitle: 'Founder & Chief Dental Surgeon',
              },
              priceRange: '₹₹',
              currenciesAccepted: 'INR',
              paymentAccepted: 'Cash, UPI',
              areaServed: {
                '@type': 'City',
                name: 'Hosur',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
