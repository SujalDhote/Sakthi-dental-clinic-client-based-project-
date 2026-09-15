'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Treatment } from '@/types'
import { cn } from '@/lib/utils'

interface TreatmentCardProps {
    treatment: Treatment
    showCta?: boolean
}

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const categoryColors: Record<string, { badge: string; border: string }> = {
    general: { badge: 'bg-[#ede9fa] text-[#7c6fcd]', border: 'border-[#ede9fa]' },
    cosmetic: { badge: 'bg-[#fff8e6] text-[#d97706]', border: 'border-[#fef3c7]' },
    surgical: { badge: 'bg-[#fef2f2] text-[#ef4444]', border: 'border-[#fee2e2]' },
    orthodontic: { badge: 'bg-[#e0f7f5] text-[#0d9488]', border: 'border-[#ccfbf1]' },
    pediatric: { badge: 'bg-[#fce7f3] text-[#db2777]', border: 'border-[#fbcfe8]' },
    restorative: { badge: 'bg-[#ede9fa] text-[#8b5cf6]', border: 'border-[#ddd6f7]' },
}

export default function TreatmentCard({ treatment, showCta = false }: TreatmentCardProps) {
    const categoryStyle = categoryColors[treatment.category] ?? categoryColors.general

    return (
        <motion.article
            variants={cardVariants}
            className="group bg-white rounded-2xl overflow-hidden border border-[#ede9fa] shadow-[0_2px_16px_0_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_0_rgba(124,111,205,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
            {/* Treatment Image Container */}
            <div className="relative aspect-[16/10] w-full bg-[#f8f7ff] overflow-hidden border-b border-[#ede9fa]">
                <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={cn('absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm backdrop-blur-md', categoryStyle.badge)}>
                    {treatment.category}
                </span>
            </div>

            {/* Card Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-display font-bold text-xl text-[#1a1a2e] mb-3 leading-snug group-hover:text-[#7c6fcd] transition-colors">
                        {treatment.name}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                        {treatment.description}
                    </p>
                </div>

                {showCta && (
                    <a
                        href="/contact"
                        data-action="fix-appointment"
                        className="mt-2 inline-flex items-center text-[#7c6fcd] hover:text-[#6a59b8] text-sm font-semibold group-hover:translate-x-1 transition-all"
                    >
                        Book Appointment →
                    </a>
                )}
            </div>
        </motion.article>
    )
}

