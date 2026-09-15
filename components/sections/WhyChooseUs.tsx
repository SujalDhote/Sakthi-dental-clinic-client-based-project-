'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, Heart, Cpu, ShieldCheck } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const features = [
    {
        id: 'all-in-one',
        icon: Sparkles,
        title: 'All-in-One Care',
        description:
            'From general dentistry to specialized treatments, everything under one roof.',
        accent: 'from-[#7c6fcd] to-[#6a59b8]',
        badgeBg: 'bg-[#ede9fa] text-[#7c6fcd]',
    },
    {
        id: 'experienced',
        icon: Users,
        title: 'Experienced Doctors',
        description:
            'Our dentists are professionally trained and committed to personalized patient care.',
        accent: 'from-[#0d9488] to-[#0f766e]',
        badgeBg: 'bg-[#e0f7f5] text-[#0d9488]',
    },
    {
        id: 'patient-centric',
        icon: Heart,
        title: 'Patient-Centric Approach',
        description:
            'We prioritize comfort, safety, and transparency in every treatment we offer.',
        accent: 'from-[#ec4899] to-[#be185d]',
        badgeBg: 'bg-[#fce7f3] text-[#db2777]',
    },
    {
        id: 'technology',
        icon: Cpu,
        title: 'Technology-Driven Services',
        description:
            'Modern tools and equipment ensure precision and safety.',
        accent: 'from-[#f59e0b] to-[#d97706]',
        badgeBg: 'bg-[#fff8e6] text-[#d97706]',
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function WhyChooseUs() {
    return (
        <SectionWrapper background="white" id="why-choose-us">
            <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 bg-[#ede9fa] text-[#7c6fcd] text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-[#ddd6f7]/60">
                    <ShieldCheck size={14} />
                    The Sakthi Dental Advantage
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-4">
                    Why Choose Sakthi Dental Clinic?
                </h2>
                <p className="text-[#64748b] text-base sm:text-lg max-w-2xl mx-auto font-normal">
                    Delivering modern, compassionate dental care tailored especially for women, children, and families in Hosur.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
                {features.map((feature) => {
                    const Icon = feature.icon
                    return (
                        <motion.div
                            key={feature.id}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            className="group relative bg-white rounded-3xl p-8 border border-[#ede9fa] shadow-[0_2px_16px_0_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_0_rgba(124,111,205,0.14)] hover:border-[#c4b5f0] transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-xs ${feature.badgeBg}`}
                                >
                                    <Icon size={26} />
                                </div>
                                <h3 className="font-display font-bold text-xl text-[#1a1a2e] mb-3 leading-snug group-hover:text-[#7c6fcd] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-[#ede9fa]/60 flex items-center text-xs font-bold text-[#7c6fcd] opacity-0 group-hover:opacity-100 transition-opacity">
                                Specialized in Hosur →
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </SectionWrapper>
    )
}
