import type { Metadata } from 'next'
import FaqAccordion from '@/components/ui/FaqAccordion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Link from 'next/link'
import { Sparkles, Phone, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Frequently Asked Questions (FAQs)',
    description:
        'Find answers to common dental questions at Sakthi Dental Clinic in Hosur, Tamil Nadu. Learn about scaling, fillings, root canal therapy, braces, dental implants, oral hygiene, and more.',
    openGraph: {
        title: 'Dental FAQs | Sakthi Dental Clinic, Hosur',
        description:
            'Doctor-approved answers to 14 common dental questions from the specialists at Sakthi Dental Clinic.',
        url: 'https://sakthidentalclinic.in/faq',
    },
    alternates: { canonical: 'https://sakthidentalclinic.in/faq' },
}

export default function FaqPage() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-[#f8f7ff] via-white to-[#ede9fa] pt-28 lg:pt-32 pb-16 lg:pb-20 border-b border-[#ede9fa]">
                <div className="max-w-[1536px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center">
                    <span className="inline-flex items-center gap-2 bg-[#ede9fa] text-[#7c6fcd] text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-[#ddd6f7]/60">
                        <Sparkles size={14} />
                        Patient Help &amp; Education
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a2e] leading-tight mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-[#4a4a6a] text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Clear, honest answers to common questions about dental care, treatments, and oral hygiene from our experienced clinical team.
                    </p>
                </div>
            </div>

            <SectionWrapper background="white">
                <div className="max-w-4xl mx-auto">
                    <FaqAccordion />

                    <div className="mt-16 bg-[#f8f7ff] rounded-3xl p-8 sm:p-12 border border-[#ede9fa] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-[#ede9fa] flex items-center justify-center text-[#7c6fcd] mb-3">
                                <MessageSquare size={24} />
                            </div>
                            <h3 className="font-display font-bold text-xl text-[#1a1a2e] mb-1">
                                Still Have Questions?
                            </h3>
                            <p className="text-[#64748b] text-sm sm:text-base">
                                We are always happy to advise you. Call our clinic or visit us in Hosur.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3.5 flex-shrink-0 w-full sm:w-auto">
                            <a
                                href="tel:+919862890897"
                                className="inline-flex items-center justify-center gap-2 bg-white border border-[#ede9fa] hover:border-[#7c6fcd] text-[#1a1a2e] hover:text-[#7c6fcd] font-bold px-6 py-3.5 rounded-full transition-all text-sm shadow-2xs"
                            >
                                <Phone size={16} />
                                +91 98628 90897
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-[#7c6fcd] hover:bg-[#6a59b8] text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-sm hover:shadow-md"
                            >
                                Contact Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    )
}
