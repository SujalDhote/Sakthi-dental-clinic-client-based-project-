import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Treatments', href: '/treatments' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
]

const keyTreatments = [
    { label: 'Teeth Cleaning & Scaling', href: '/treatments#treatments-general' },
    { label: 'Dental Implants', href: '/treatments#treatments-surgical' },
    { label: 'Root Canal Therapy', href: '/treatments#treatments-restorative' },
    { label: 'Orthodontic Braces', href: '/treatments#treatments-orthodontic' },
    { label: 'Clear Aligners', href: '/treatments#treatments-orthodontic' },
    { label: 'Pediatric Dentistry', href: '/treatments#treatments-pediatric' },
]

export default function Footer() {
    return (
        <footer className="w-full bg-[#1a1a2e] text-white" aria-label="Site footer">
            <div className="max-w-[1536px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-16 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

                    {/* Brand column (5 cols on desktop for balanced presence) */}
                    <div className="sm:col-span-2 lg:col-span-5">
                        <Link href="/" className="inline-block mb-6 group focus:outline-none">
                            <div className="relative h-16 w-60 sm:h-18 sm:w-64 bg-white rounded-2xl px-3 py-2 flex items-center justify-center border border-white/20 shadow-md transition-all duration-200 group-hover:border-[#7c6fcd] group-hover:shadow-[0_4px_20px_0_rgba(124,111,205,0.25)]">
                                <Image
                                    src="/images/client/SDC Logo.png"
                                    alt="Sakthi Dental Clinic Logo"
                                    fill
                                    sizes="256px"
                                    className="object-contain p-1"
                                />
                            </div>
                        </Link>

                        <p className="text-[#94a3b8] text-base leading-relaxed mb-6 font-normal max-w-md">
                            Specialized dental care for women, children, and families in Hosur, Tamil Nadu. Delivering gentle, expert-led dentistry in a modern, welcoming environment.
                        </p>

                        {/* Social icons without invented URLs */}
                        <div className="flex gap-3.5">
                            <a
                                href="#"
                                aria-label="Sakthi Dental Clinic on Instagram"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7c6fcd] hover:scale-110 transition-all shadow-2xs text-white/90 hover:text-white"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a
                                href="#"
                                aria-label="Sakthi Dental Clinic on Facebook"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7c6fcd] hover:scale-110 transition-all shadow-2xs text-white/90 hover:text-white"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a
                                href="#"
                                aria-label="Sakthi Dental Clinic on YouTube"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7c6fcd] hover:scale-110 transition-all shadow-2xs text-white/90 hover:text-white"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><polygon points="10 15 15 12 10 9 10 15" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links (2 cols) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[#94a3b8] hover:text-[#c4b5f0] text-sm sm:text-base transition-colors font-normal"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Treatments (2 cols) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {keyTreatments.map((t) => (
                                <li key={t.label}>
                                    <Link
                                        href={t.href}
                                        className="text-[#94a3b8] hover:text-[#c4b5f0] text-sm sm:text-base transition-colors font-normal"
                                    >
                                        {t.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info (3 cols) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                            Reach the Clinic
                        </h3>
                        <address className="not-italic space-y-4">
                            <div className="flex gap-3.5 items-start">
                                <MapPin size={18} className="text-[#c4b5f0] mt-1 flex-shrink-0" />
                                <span className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
                                    B2/8, SBM Layout, Anthivadi,<br />
                                    Hosur, Tamil Nadu 635109, India
                                </span>
                            </div>
                            <div className="flex gap-3.5 items-center">
                                <Mail size={18} className="text-[#c4b5f0] flex-shrink-0" />
                                <a
                                    href="mailto:info@sakthidentalclinic.in"
                                    className="text-[#94a3b8] hover:text-[#c4b5f0] text-sm sm:text-base transition-colors break-all"
                                >
                                    info@sakthidentalclinic.in
                                </a>
                            </div>
                            <div className="flex gap-3.5 items-start">
                                <Phone size={18} className="text-[#c4b5f0] flex-shrink-0 mt-1" />
                                <div className="text-[#94a3b8] text-sm sm:text-base space-y-1">
                                    <a href="tel:+919862890897" className="block hover:text-[#c4b5f0] transition-colors">
                                        +91 98628 90897
                                    </a>
                                    <a href="tel:+919363298118" className="block hover:text-[#c4b5f0] transition-colors">
                                        +91 93632 98118
                                    </a>
                                </div>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#94a3b8]">
                    <p>
                        &copy; {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-[#c4b5f0] transition-colors">
                            Privacy Policy
                        </Link>
                        <span>•</span>
                        <span>Hosur, Tamil Nadu</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
