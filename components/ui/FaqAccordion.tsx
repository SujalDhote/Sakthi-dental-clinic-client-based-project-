'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/faqs'
import { cn } from '@/lib/utils'

export default function FaqAccordion() {
    const [openId, setOpenId] = useState<string | null>(null)

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <div className="space-y-3" role="list">
            {faqs.map((faq, i) => {
                const isOpen = openId === faq.id
                return (
                    <div
                        key={faq.id}
                        role="listitem"
                        className={cn(
                            'rounded-2xl border transition-all duration-200',
                            isOpen
                                ? 'border-[#7c6fcd] shadow-[0_4px_24px_0_rgba(124,111,205,0.12)]'
                                : 'border-[#ede9fa] shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] hover:border-[#c4b5f0]'
                        )}
                    >
                        <button
                            onClick={() => toggle(faq.id)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${faq.id}`}
                            id={`faq-question-${faq.id}`}
                            className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group"
                        >
                            <span className="flex items-start gap-3">
                                <span
                                    className={cn(
                                        'flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5',
                                        isOpen ? 'bg-[#7c6fcd] text-white' : 'bg-[#ede9fa] text-[#7c6fcd]'
                                    )}
                                    aria-hidden="true"
                                >
                                    {i + 1}
                                </span>
                                <span
                                    className={cn(
                                        'font-semibold text-base leading-snug',
                                        isOpen ? 'text-[#7c6fcd]' : 'text-[#1a1a2e] group-hover:text-[#7c6fcd]'
                                    )}
                                >
                                    {faq.question}
                                </span>
                            </span>
                            <ChevronDown
                                size={20}
                                className={cn(
                                    'flex-shrink-0 text-[#7c6fcd] transition-transform duration-300 mt-0.5',
                                    isOpen && 'rotate-180'
                                )}
                                aria-hidden="true"
                            />
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    id={`faq-answer-${faq.id}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${faq.id}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-5 pt-0 pl-[3.75rem]">
                                        <p className="text-[#4a4a6a] text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}
