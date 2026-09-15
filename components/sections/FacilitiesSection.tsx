'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Phone, Sparkles, CheckCircle2 } from 'lucide-react'
import { facilities } from '@/data/facilities'
import SectionWrapper from '@/components/ui/SectionWrapper'

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

export default function FacilitiesSection() {
    return (
        <SectionWrapper background="neutral" id="facilities">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

                {/* Left — Copy & 5 Supplied Client Amenity Icons */}
                <div className="lg:col-span-6">
                    <span className="inline-flex items-center gap-2 bg-[#ede9fa] text-[#7c6fcd] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-[#ddd6f7]/60">
                        <Sparkles size={14} />
                        Patient Comfort &amp; Accessibility
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-4">
                        Clinic Facilities
                    </h2>
                    <p className="text-[#4a4a6a] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                        Designed with your comfort and convenience in mind. From arrival to post-care, we ensure a seamless and relaxed experience.
                    </p>

                    {/* Facilities List — strictly using the 5 client-supplied icons */}
                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="space-y-3.5"
                    >
                        {facilities.map((facility) => (
                            <motion.li
                                key={facility.id}
                                variants={itemVariants}
                                className="flex items-center gap-4 bg-white rounded-2xl p-4 sm:p-4.5 border border-[#ede9fa] shadow-2xs hover:shadow-sm hover:border-[#c4b5f0] hover:translate-x-1 transition-all duration-200"
                            >
                                <div className="w-13 h-13 rounded-xl bg-[#f8f7ff] shadow-2xs flex items-center justify-center flex-shrink-0 p-2.5 border border-[#ede9fa]">
                                    <Image
                                        src={facility.icon}
                                        alt={facility.label}
                                        width={36}
                                        height={36}
                                        className="object-contain w-8 h-8"
                                    />
                                </div>
                                <span className="text-[#1a1a2e] font-semibold text-base sm:text-lg">
                                    {facility.label}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                {/* Right — Polished Clinic Feature Showcase Card (No placeholder!) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-6 relative"
                >
                    <div className="relative rounded-3xl bg-gradient-to-br from-[#7c6fcd] via-[#6d5fc2] to-[#574898] p-8 sm:p-10 text-white shadow-[0_20px_50px_0_rgba(124,111,205,0.25)] overflow-hidden">

                        {/* Subtle background dental pattern / glow */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 rounded-full bg-[#14b8a6]/20 blur-2xl pointer-events-none" />

                        <div className="relative z-10">
                            <span className="inline-block bg-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 border border-white/20">
                                Hosur Clinic Highlights
                            </span>

                            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                                Modern, Welcoming &amp; Fully Equipped
                            </h3>

                            <p className="text-[#ddd6f7] text-sm sm:text-base leading-relaxed mb-8">
                                Sakthi Dental Clinic combines compassionate clinical care with patient-first amenities in Hosur. Every visit is designed to be gentle, dignified, and stress-free.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-[#f5f3ff] bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
                                    <CheckCircle2 size={20} className="text-[#5eead4] flex-shrink-0" />
                                    <span>Sterile and hygienic treatment operatories</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-[#f5f3ff] bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
                                    <CheckCircle2 size={20} className="text-[#5eead4] flex-shrink-0" />
                                    <span>Wheelchair accessibility &amp; comfortable waiting lounge</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-[#f5f3ff] bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10">
                                    <CheckCircle2 size={20} className="text-[#5eead4] flex-shrink-0" />
                                    <span>Central Hosur location with hassle-free parking</span>
                                </div>
                            </div>

                            {/* Prominent Hours Badge — Preserving exact Facilities wording (9 AM - 9 PM) */}
                            <div className="bg-white rounded-2xl p-5 text-[#1a1a2e] shadow-md flex items-center justify-between gap-4 flex-wrap">
                                <div className="flex items-center gap-3.5">
                                    <div className="w-12 h-12 rounded-xl bg-[#ede9fa] flex items-center justify-center flex-shrink-0">
                                        <Clock size={22} className="text-[#7c6fcd]" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#7c6fcd] uppercase tracking-wider">
                                            Doctors Schedule
                                        </p>
                                        <p className="font-display font-bold text-lg text-[#1a1a2e]">
                                            Daily (9 AM - 9 PM)
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="tel:+919862890897"
                                    className="inline-flex items-center gap-2 bg-[#7c6fcd] hover:bg-[#6a59b8] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                                >
                                    <Phone size={14} />
                                    Call Clinic
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    )
}
