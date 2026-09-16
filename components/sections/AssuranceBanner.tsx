'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, HeartHandshake, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

const bannerImages = [
    { src: '/images/client/Banner_img_1.jpg', alt: 'Sakthi Dental Clinic Banner 1' },
    { src: '/images/client/Banner_img_2.jpg', alt: 'Sakthi Dental Clinic Banner 2' },
    { src: '/images/client/Banner_img_3.jpg', alt: 'Sakthi Dental Clinic Banner 3' },
]

export default function AssuranceBanner() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % bannerImages.length)
        }, 7000)
        return () => clearInterval(timer)
    }, [])

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % bannerImages.length)
    }

    return (
        <section
            className="relative w-full bg-[#1a1a2e] text-white py-14 md:py-20 overflow-hidden"
            aria-label="Assurance banner"
        >
            {/* Background Carousel Images */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={bannerImages[currentIndex].src}
                            alt={bannerImages[currentIndex].alt}
                            fill
                            priority={currentIndex === 0}
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        {/* Gradient overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#1a1a2e]/80 to-[#1a1a2e]/65" />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="max-w-[1536px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Text copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left max-w-3xl"
                    >
                        <span className="inline-flex items-center gap-2 bg-[#7c6fcd]/85 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-white/20">
                            <Sparkles size={14} className="text-[#c4b5f0]" />
                            Trusted Healthcare in Hosur
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-sm">
                            You are always in{' '}
                            <span className="text-[#c4b5f0]">safe hands.</span>
                        </h2>
                        <p className="text-[#ddd6f7] text-lg sm:text-xl xl:text-2xl font-light leading-relaxed">
                            We are ready to help, anytime.
                        </p>
                    </motion.div>

                    {/* Right side — Controls & Badges */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col items-center lg:items-end gap-6 flex-shrink-0"
                    >
                        <div className="flex gap-4 sm:gap-6">
                            <div className="flex flex-col items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-5 text-center border border-white/15 shadow-sm">
                                <ShieldCheck size={28} className="text-[#c4b5f0]" />
                                <div>
                                    <p className="text-white font-bold text-sm sm:text-base">Safe &amp; Trusted</p>
                                    <p className="text-[#ddd6f7] text-xs">Sterile Operatories</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-5 text-center border border-white/15 shadow-sm">
                                <HeartHandshake size={28} className="text-[#c4b5f0]" />
                                <div>
                                    <p className="text-white font-bold text-sm sm:text-base">Always Caring</p>
                                    <p className="text-[#ddd6f7] text-xs">Patient-First Focus</p>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Indicators & Arrows */}
                        <div className="flex items-center gap-3 bg-black/45 backdrop-blur-md rounded-full px-4 py-2 border border-white/15 shadow-md">
                            <button
                                onClick={handlePrev}
                                aria-label="Previous banner"
                                className="min-h-11 min-w-11 flex items-center justify-center rounded-full hover:bg-white/20 text-white/90 hover:text-white transition-colors"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <div className="flex gap-2">
                                {bannerImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        aria-label={`Go to slide ${idx + 1}`}
                                        className="min-h-11 min-w-11 flex items-center justify-center"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`block h-2.5 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-[#c4b5f0]' : 'w-2.5 bg-white/40 hover:bg-white/60'
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={handleNext}
                                aria-label="Next banner"
                                className="min-h-11 min-w-11 flex items-center justify-center rounded-full hover:bg-white/20 text-white/90 hover:text-white transition-colors"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
