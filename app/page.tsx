import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import AssuranceBanner from '@/components/sections/AssuranceBanner'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TreatmentsPreview from '@/components/sections/TreatmentsPreview'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FacilitiesSection from '@/components/sections/FacilitiesSection'

export const metadata: Metadata = {
  title: 'Sakthi Dental Clinic | Expert Dental Care in Hosur, Tamil Nadu',
  description:
    'Sakthi Dental Clinic in Hosur offers specialist dental care for women, children & families. Braces, implants, root canal, teeth whitening & more. Book your appointment today.',
  openGraph: {
    title: 'Sakthi Dental Clinic | Expert Dental Care in Hosur, Tamil Nadu',
    description:
      'Compassionate, modern dental care for the whole family in Hosur, Tamil Nadu. Over 20 years of trusted expertise.',
    url: 'https://sakthidentalclinic.in',
  },
  alternates: {
    canonical: 'https://sakthidentalclinic.in',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AssuranceBanner />
      <WhyChooseUs />
      <TreatmentsPreview />
      <TestimonialsSection />
      <FacilitiesSection />
    </>
  )
}
