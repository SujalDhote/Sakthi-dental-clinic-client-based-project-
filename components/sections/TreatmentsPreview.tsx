'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { featuredTreatments } from '@/data/treatments'
import SectionWrapper from '@/components/ui/SectionWrapper'
import TreatmentCard from '@/components/ui/TreatmentCard'
import { ArrowRight, Sparkles } from 'lucide-react'

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}

export default function TreatmentsPreview() {
    return (
        <SectionWrapper background="neutral" id="treatments-preview">
            <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 bg-[#ede9fa] text-[#7c6fcd] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3 border border-[#ddd6f7]/60">
                    <Sparkles size={14} />
                    Our Core Treatments
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-4">
                    Explore Our Services
                </h2>
                <p className="text-[#64748b] max-w-2xl mx-auto text-base sm:text-lg">
                    Comprehensive dental care across all specialties — preventive, restorative, cosmetic, and surgical.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {featuredTreatments.map((treatment) => (
                    <TreatmentCard key={treatment.id} treatment={treatment} />
                ))}
            </motion.div>

            <div className="mt-12 text-center">
                <Link
                    href="/treatments"
                    className="inline-flex items-center gap-2.5 bg-white text-[#7c6fcd] hover:text-white hover:bg-[#7c6fcd] border-2 border-[#7c6fcd] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md group"
                >
                    <span>View Full List of Treatments</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
            </div>
        </SectionWrapper>
    )
}
