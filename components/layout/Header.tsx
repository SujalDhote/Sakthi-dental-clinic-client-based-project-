'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, CalendarDays } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Treatments', href: '/treatments' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Contact', href: '/contact' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const closeMenu = useCallback(() => setIsOpen(false), [])

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_0_rgba(0,0,0,0.06)]'
                    : 'bg-white/90 backdrop-blur-sm border-b border-[#ede9fa]/60'
            )}
        >
            <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="flex items-center justify-between h-20 lg:h-24">

                    {/* Logo / Branding — Clearly larger and instantly recognizable */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group py-1.5 focus:outline-none"
                        onClick={closeMenu}
                    >
                        <div className="relative h-14 w-52 sm:h-16 sm:w-60 md:h-[68px] md:w-[240px] xl:h-[76px] xl:w-[270px] bg-white rounded-xl px-2.5 py-1.5 flex items-center justify-center border border-[#ede9fa] shadow-[0_2px_12px_0_rgba(124,111,205,0.08)] transition-all duration-200 group-hover:border-[#7c6fcd]/50 group-hover:shadow-[0_4px_20px_0_rgba(124,111,205,0.16)]">
                            <Image
                                src="/images/client/SDC Logo.png"
                                alt="Sakthi Dental Clinic Logo"
                                fill
                                sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, 270px"
                                className="object-contain p-1"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation — Increased font size, generous spacing & clear active state */}
                    <nav
                        className="hidden lg:flex items-center gap-2 xl:gap-3 bg-[#f8f7ff]/90 p-2 rounded-full border border-[#ede9fa] shadow-2xs"
                        aria-label="Main navigation"
                    >
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'px-5 py-2.5 rounded-full text-[16px] xl:text-[17px] font-semibold transition-all duration-200 relative tracking-normal',
                                        isActive
                                            ? 'text-[#7c6fcd] bg-white shadow-xs font-bold'
                                            : 'text-[#33334d] hover:text-[#7c6fcd] hover:bg-white/70'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Desktop CTA & Interactive Phone Area */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-5">
                        <a
                            href="tel:+919862890897"
                            className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-[#ede9fa] bg-[#f8f7ff] text-[#1a1a2e] hover:text-[#7c6fcd] hover:border-[#c4b5f0] hover:bg-[#f5f3ff] transition-all duration-200 shadow-2xs group"
                            title="Call Sakthi Dental Clinic"
                        >
                            <div className="w-9 h-9 rounded-full bg-[#ede9fa] flex items-center justify-center group-hover:bg-[#7c6fcd] transition-colors">
                                <Phone size={17} className="text-[#7c6fcd] group-hover:text-white transition-colors animate-phone-ring" />
                            </div>
                            <span className="font-bold text-[15px] tracking-tight">+91 98628 90897</span>
                        </a>
                        <Link
                            href="/contact"
                            data-action="fix-appointment"
                            className="relative overflow-hidden bg-gradient-to-r from-[#7c6fcd] via-[#6d5fc2] to-[#5e4eb0] hover:from-[#6d5fc2] hover:to-[#50409f] text-white text-[15px] font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-[0_4px_16px_0_rgba(124,111,205,0.30)] hover:shadow-[0_6px_22px_0_rgba(124,111,205,0.40)] hover:-translate-y-0.5 active:scale-[0.98] animate-shine flex items-center gap-2"
                        >
                            <CalendarDays size={18} />
                            Fix an Appointment
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="lg:hidden p-2.5 rounded-xl text-[#33334d] hover:bg-[#f5f3ff] hover:text-[#7c6fcd] transition-colors border border-transparent hover:border-[#ede9fa]"
                        onClick={() => setIsOpen((v) => !v)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={cn(
                    'lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white/98 backdrop-blur-md transition-all duration-300 ease-in-out overflow-y-auto border-t border-[#ede9fa]',
                    isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
                )}
                aria-hidden={!isOpen}
            >
                <nav
                    className="max-w-lg mx-auto px-6 pt-6 pb-10 flex flex-col gap-3"
                    aria-label="Mobile navigation"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className={cn(
                                'px-5 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center justify-between',
                                pathname === item.href
                                    ? 'text-[#7c6fcd] bg-[#ede9fa]'
                                    : 'text-[#1a1a2e] hover:bg-[#f5f3ff] hover:text-[#7c6fcd]'
                            )}
                        >
                            <span>{item.label}</span>
                            {pathname === item.href && (
                                <span className="w-2 h-2 rounded-full bg-[#7c6fcd]" />
                            )}
                        </Link>
                    ))}

                    <div className="pt-6 mt-4 border-t border-[#ede9fa] flex flex-col gap-4">
                        <a
                            href="tel:+919862890897"
                            className="flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl border border-[#ede9fa] bg-[#f8f7ff] text-[#1a1a2e] font-bold text-base hover:bg-[#f5f3ff]"
                        >
                            <Phone size={18} className="text-[#7c6fcd]" />
                            +91 98628 90897
                        </a>
                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            data-action="fix-appointment"
                            className="text-center bg-gradient-to-r from-[#7c6fcd] to-[#5e4eb0] text-white font-bold px-6 py-4 rounded-xl text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                            <CalendarDays size={18} />
                            Fix an Appointment
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
