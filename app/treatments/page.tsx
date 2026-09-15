import type { Metadata } from 'next'
import { treatments } from '@/data/treatments'
import TreatmentCard from '@/components/ui/TreatmentCard'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Link from 'next/link'
import { CalendarDays, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Dental Treatments & Services',
    description:
        'Explore all 15 dental treatments at Sakthi Dental Clinic, Hosur — from teeth cleaning, braces, and implants to laser dentistry, veneers, and pediatric care. Book your appointment.',
    openGraph: {
        title: 'Dental Treatments | Sakthi Dental Clinic, Hosur',
        description:
            'Comprehensive dental services including general, cosmetic, surgical, orthodontic, and pediatric dentistry.',
        url: 'https://sakthidentalclinic.in/treatments',
    },
    alternates: { canonical: 'https://sakthidentalclinic.in/treatments' },
}

const categories = [
    { id: 'general', label: 'General' },
    { id: 'restorative', label: 'Restorative' },
    { id: 'cosmetic', label: 'Cosmetic' },
    { id: 'surgical', label: 'Surgical' },
    { id: 'orthodontic', label: 'Orthodontic' },
    { id: 'pediatric', label: 'Pediatric' },
] as const

// Group treatments by category for the page layout
function groupByCategory(items: typeof treatments) {
    return categories
        .map((cat) => ({
            ...cat,
            items: items.filter((t) => t.category === cat.id),
        }))
        .filter((g) => g.items.length > 0)
}

export default function TreatmentsPage() {
    const groups = groupByCategory(treatments)

    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-[#f8f7ff] via-white to-[#ede9fa] pt-28 lg:pt-32 pb-16 lg:pb-20 border-b border-[#ede9fa]">
                <div className="max-w-[1536px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center">
                    <span className="inline-flex items-center gap-2 bg-[#ede9fa] text-[#7c6fcd] text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-[#ddd6f7]/60">
                        <Sparkles size={14} />
                        Specialized Clinical Procedures
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a2e] leading-tight mb-4">
                        Comprehensive Dental Services
                    </h1>
                    <p className="text-[#4a4a6a] text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        From preventive care and cosmetic transformations to precision laser surgery and pediatric dentistry — all under one roof in Hosur.
                    </p>
                </div>
            </div>

            {/* Treatments grouped by category */}
            {groups.map((group, i) => (
                <SectionWrapper
                    key={group.id}
                    background={i % 2 === 0 ? 'white' : 'neutral'}
                    id={`treatments-${group.id}`}
                >
                    <div className="mb-10">
                        <span className="inline-block bg-[#ede9fa] text-[#7c6fcd] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-2">
                            {group.label}
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
                            {group.label} Dentistry
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {group.items.map((treatment) => (
                            <TreatmentCard key={treatment.id} treatment={treatment} showCta />
                        ))}
                    </div>
                </SectionWrapper>
            ))}

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-[#7c6fcd] via-[#6d5fc2] to-[#574898] py-16 lg:py-20 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        Ready to Schedule Your Appointment?
                    </h2>
                    <p className="text-[#ddd6f7] text-lg sm:text-xl max-w-xl mx-auto mb-8 font-light">
                        Our experienced dental surgeons are here to help you achieve a healthy, confident smile.
                    </p>
                    <Link
                        href="/contact"
                        data-action="fix-appointment"
                        className="inline-flex items-center gap-2.5 bg-white text-[#7c6fcd] hover:bg-[#f8f7ff] font-bold text-base px-9 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 animate-shine"
                    >
                        <CalendarDays size={18} />
                        Fix an Appointment
                    </Link>
                </div>
            </div>
        </>
    )
}
