'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Sparkles } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import SectionWrapper from '@/components/ui/SectionWrapper'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function TestimonialsSection() {
    return (
        <SectionWrapper background="white" id="testimonials">
            <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-[#ede9fa] text-[#7c6fcd] text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-[#ddd6f7]/60">
                    <Sparkles size={14} />
                    Verified Patient Experiences
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-4">
                    What Our Patients Say
                </h2>
                <p className="text-[#64748b] text-base sm:text-lg max-w-2xl mx-auto font-normal">
                    Real feedback from families in Hosur who trust Sakthi Dental Clinic for gentle, compassionate care.
                </p>
            </div>

            {/* 3 Testimonial Cards Grid across desktop */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {testimonials.map((testimonial) => (
                    <motion.article
                        key={testimonial.id}
                        variants={cardVariants}
                        whileHover={{ y: -6, transition: { duration: 0.25 } }}
                        className="bg-[#f8f7ff] rounded-3xl p-8 sm:p-9 border border-[#ede9fa] shadow-2xs hover:shadow-[0_12px_36px_0_rgba(124,111,205,0.12)] hover:border-[#c4b5f0] transition-all duration-300 flex flex-col justify-between relative group"
                    >
                        {/* Quote icon watermark */}
                        <Quote
                            size={44}
                            className="text-[#c4b5f0]/30 absolute top-6 right-6 pointer-events-none group-hover:text-[#7c6fcd]/30 transition-colors"
                            aria-hidden="true"
                        />

                        <div>
                            {/* 5 Stars */}
                            <div className="flex gap-1.5 mb-6 text-[#f59e0b]">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            {/* Quote copy */}
                            <p className="text-[#1a1a2e] text-base sm:text-lg leading-relaxed italic mb-8 font-normal">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                        </div>

                        {/* Author */}
                        <div className="pt-5 border-t border-[#ede9fa] flex items-center gap-3.5">
                            <div className="w-11 h-11 rounded-full bg-[#ede9fa] text-[#7c6fcd] font-bold flex items-center justify-center text-sm shadow-2xs">
                                {testimonial.author.replace(/^(Mr\.|Mrs\.)\s*/i, '').charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-base text-[#1a1a2e]">
                                    {testimonial.author}
                                </h4>
                                <p className="text-xs text-[#64748b]">Hosur Patient</p>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </SectionWrapper>
    )
}
