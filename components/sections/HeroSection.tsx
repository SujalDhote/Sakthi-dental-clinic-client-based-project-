'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PhoneCall, CalendarDays, ShieldCheck, Sparkles, Award, Heart, Star } from 'lucide-react'

export default function HeroSection() {
    return (
        <section
            className="relative w-full min-h-[92vh] flex items-center pt-24 lg:pt-28 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#f8f7ff] via-white to-[#f0f9ff] bg-ambient-glow"
            aria-label="Hero section"
        >
            {/* Ambient decorative glowing orbs */}
            <div
                aria-hidden="true"
                className="absolute top-[-60px] right-[-40px] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#ede9fa] to-[#ddd6f7] opacity-60 blur-3xl pointer-events-none"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-[-60px] left-[-40px] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#ccfbf1] to-[#e0f2fe] opacity-50 blur-3xl pointer-events-none"
            />
            <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-[#fce7f3] opacity-30 blur-3xl pointer-events-none"
            />

            <div className="max-w-[1536px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">

                    {/* Left Column — Text & CTAs (7 cols on desktop for expansive layout) */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-7 max-w-2xl lg:max-w-none"
                    >
                        {/* Location / Trust badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md text-[#7c6fcd] text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-[#ede9fa] shadow-2xs"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#7c6fcd] animate-pulse" />
                            <span>Hosur, Tamil Nadu</span>
                            <span className="text-[#c4b5f0]">|</span>
                            <span className="text-[#0d9488] font-semibold">Since 2004</span>
                        </motion.div>

                        {/* Exact Client Headline */}
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a2e] leading-[1.12] tracking-tight mb-6">
                            Specialized{' '}
                            <span className="relative inline-block text-[#7c6fcd]">
                                Dental Care
                                <svg
                                    className="absolute -bottom-2 left-0 w-full h-3 text-[#c4b5f0]/70"
                                    viewBox="0 0 100 12"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path d="M0,7 Q50,0 100,7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>{' '}
                            for Women, Children{' '}
                            <span className="text-[#0d9488]">&amp; Families</span>
                        </h1>

                        {/* Exact Client Subtext */}
                        <p className="text-[#4a4a6a] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl font-normal">
                            Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-10">
                            <Link
                                href="/contact"
                                data-action="fix-appointment"
                                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#7c6fcd] via-[#6d5fc2] to-[#5e4eb0] hover:from-[#6d5fc2] hover:to-[#50409f] text-white font-bold px-8 sm:px-10 py-4 sm:py-4.5 rounded-full transition-all duration-200 shadow-[0_6px_24px_0_rgba(124,111,205,0.35)] hover:shadow-[0_8px_30px_0_rgba(124,111,205,0.45)] hover:-translate-y-0.5 active:scale-[0.98] text-base animate-shine group"
                            >
                                <CalendarDays size={20} className="text-white/90 group-hover:scale-110 transition-transform" />
                                <span>Fix an Appointment</span>
                            </Link>
                            <a
                                href="tel:+919862890897"
                                className="inline-flex items-center justify-center gap-3 border-2 border-[#ede9fa] hover:border-[#7c6fcd] text-[#1a1a2e] hover:text-[#7c6fcd] bg-white/80 hover:bg-white font-bold px-7 sm:px-8 py-4 sm:py-4.5 rounded-full transition-all duration-200 text-base shadow-2xs hover:shadow-md"
                            >
                                <PhoneCall size={19} className="text-[#7c6fcd] animate-phone-ring" />
                                <span>+91 98628 90897</span>
                            </a>
                        </div>

                        {/* Social proof strip */}
                        <div className="flex items-center gap-6 sm:gap-8 flex-wrap pt-4 border-t border-[#ede9fa]">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2.5">
                                    <div className="w-9 h-9 rounded-full bg-[#7c6fcd] border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                                        M
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-[#0d9488] border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                                        A
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-[#8b5cf6] border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                                        R
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-[#f59e0b] border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                                        S
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#1a1a2e] leading-tight">Trusted by Families</p>
                                    <p className="text-xs text-[#64748b]">Across Hosur &amp; surrounding areas</p>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-[#e2e0ef] hidden sm:block" aria-hidden="true" />

                            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs px-4 py-2 rounded-2xl border border-[#ede9fa] shadow-2xs">
                                <div className="flex text-[#f59e0b]">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-[#1a1a2e]">5.0</span>
                                <span className="text-xs text-[#64748b]">Rating</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column — Beautiful Animated Dental-Themed Visual (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
                        className="lg:col-span-5 relative w-full flex items-center justify-center"
                    >
                        {/* Outer Glow Card Container */}
                        <div className="relative w-full max-w-lg lg:max-w-none aspect-[1/1] sm:aspect-[4/4.2] rounded-3xl bg-gradient-to-br from-white/90 via-[#f8f7ff]/90 to-[#ede9fa]/70 p-6 sm:p-8 lg:p-10 border border-white shadow-[0_20px_60px_0_rgba(124,111,205,0.15)] backdrop-blur-md flex flex-col items-center justify-center overflow-hidden">

                            {/* Background concentric geometric rings */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                                <div className="w-80 h-80 rounded-full border border-dashed border-[#c4b5f0] animate-spin-slow" />
                                <div className="absolute w-60 h-60 rounded-full border border-[#ddd6f7]/60" />
                                <div className="absolute w-96 h-96 rounded-full border border-[#ede9fa]/40" />
                            </div>

                            {/* Central Glowing Dental Emblem */}
                            <motion.div
                                animate={{ y: [-6, 6, -6] }}
                                transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity }}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#7c6fcd] via-[#8b65d9] to-[#6a59b8] p-1 shadow-[0_16px_48px_0_rgba(124,111,205,0.35)] flex items-center justify-center group">
                                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center border border-white/30">
                                        {/* Stylized Modern Tooth & Smile Vector */}
                                        <svg
                                            className="w-20 h-20 sm:w-24 sm:h-24 text-white drop-shadow-md"
                                            viewBox="0 0 64 64"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* Outer smooth tooth crown */}
                                            <path
                                                d="M32 6C23 6 16 11 15 19C14 26 15 32 17 38C19 44 21 52 24 57C26 60 29 60 30 56C31 52 32 46 32 46C32 46 33 52 34 56C35 60 38 60 40 57C43 52 45 44 47 38C49 32 50 26 49 19C48 11 41 6 32 6Z"
                                                fill="currentColor"
                                                fillOpacity="0.95"
                                            />
                                            {/* Shimmer light reflection */}
                                            <path
                                                d="M23 14C28 10 36 10 41 14C37 13 27 13 23 14Z"
                                                fill="white"
                                                fillOpacity="0.6"
                                            />
                                            {/* Gentle smile curve on tooth */}
                                            <path
                                                d="M23 28C27 34 37 34 41 28"
                                                stroke="#7c6fcd"
                                                strokeWidth="3.5"
                                                strokeLinecap="round"
                                            />
                                            {/* Sparkle highlight */}
                                            <circle cx="43" cy="18" r="2.5" fill="#fde047" />
                                            <circle cx="21" cy="22" r="1.5" fill="white" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="font-display font-bold text-xl sm:text-2xl text-[#1a1a2e]">
                                        Sakthi Dental Clinic
                                    </p>
                                    <p className="text-xs sm:text-sm font-semibold text-[#7c6fcd]">
                                        Hosur&apos;s Modern Dental Centre
                                    </p>
                                </div>
                            </motion.div>

                            {/* Floating Micro-Badges around the central tooth */}

                            {/* Top Left — 20+ Years Experience */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ duration: 3.8, ease: 'easeInOut', repeat: Infinity, delay: 0.2 }}
                                className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_8px_24px_0_rgba(124,111,205,0.14)] border border-[#ede9fa] flex items-center gap-3 max-w-[170px]"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#ede9fa] flex items-center justify-center text-[#7c6fcd] flex-shrink-0">
                                    <Award size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#1a1a2e] leading-none">20+ Years</p>
                                    <p className="text-[11px] text-[#64748b] mt-0.5">Excellence</p>
                                </div>
                            </motion.div>

                            {/* Top Right — Specialized Care */}
                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity, delay: 0.4 }}
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_8px_24px_0_rgba(124,111,205,0.14)] border border-[#ede9fa] flex items-center gap-3 max-w-[180px]"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#e0f7f5] flex items-center justify-center text-[#0d9488] flex-shrink-0">
                                    <Heart size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#1a1a2e] leading-none">Gentle Care</p>
                                    <p className="text-[11px] text-[#64748b] mt-0.5">Women &amp; Kids</p>
                                </div>
                            </motion.div>

                            {/* Bottom Left — 15+ Core Treatments */}
                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: 0.6 }}
                                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_8px_24px_0_rgba(124,111,205,0.14)] border border-[#ede9fa] flex items-center gap-3 max-w-[185px]"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#ede9fa] flex items-center justify-center text-[#7c6fcd] flex-shrink-0">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#1a1a2e] leading-none">15+ Services</p>
                                    <p className="text-[11px] text-[#64748b] mt-0.5">All Under 1 Roof</p>
                                </div>
                            </motion.div>

                            {/* Bottom Right — Modern Laser & Technology */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity, delay: 0.8 }}
                                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_8px_24px_0_rgba(124,111,205,0.14)] border border-[#ede9fa] flex items-center gap-3 max-w-[185px]"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#ccfbf1] flex items-center justify-center text-[#0d9488] flex-shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#1a1a2e] leading-none">Advanced Tech</p>
                                    <p className="text-[11px] text-[#64748b] mt-0.5">Laser &amp; Aligners</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
