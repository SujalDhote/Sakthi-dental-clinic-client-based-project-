import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { MapPin, Mail, Phone, Clock, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Contact Us | We Would Love to Hear from You',
    description:
        'Contact Sakthi Dental Clinic in Hosur, Tamil Nadu. Call +91 9862890897 / +91 9363298118, email info@sakthidentalclinic.in, or visit us at B2/8, SBM Layout, Anthivadi, Hosur. Open Sunday to Saturday: 9am to 7pm.',
    openGraph: {
        title: 'Contact Sakthi Dental Clinic | Hosur',
        description:
            'Get in touch with our dental team. Call, email, or send us a message — we are here to assist with all your oral healthcare needs.',
        url: 'https://sakthidentalclinic.in/contact',
    },
    alternates: { canonical: 'https://sakthidentalclinic.in/contact' },
}

export default function ContactPage() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-[#f8f7ff] via-white to-[#ede9fa] pt-28 lg:pt-32 pb-14 lg:pb-18 border-b border-[#ede9fa]">
                <div className="max-w-[1536px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center">
                    <span className="inline-block bg-[#ede9fa] text-[#7c6fcd] text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-[#ddd6f7]/60">
                        Get In Touch
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a2e] leading-tight mb-4">
                        We would love to hear from you
                    </h1>
                    <p className="text-[#4a4a6a] text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Have a question about a treatment or need to schedule an appointment? Reach out to our friendly team in Hosur.
                    </p>
                </div>
            </div>

            {/* Two-column layout: Form (Left) & Reach Us (Right) */}
            <div className="max-w-[1536px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-16 lg:py-24">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">

                    {/* Left Column — Contact Form (Form code and submission untouched) */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#ede9fa] shadow-[0_4px_24px_0_rgba(0,0,0,0.04)]">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-2">
                            Send Us a Message
                        </h2>
                        <p className="text-[#64748b] text-sm sm:text-base mb-8">
                            Fill in your details below and our team will get in touch promptly.
                        </p>
                        <ContactForm />
                    </div>

                    {/* Right Column — Reach us */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-[#f8f7ff] rounded-3xl p-8 sm:p-10 border border-[#ede9fa] shadow-2xs">
                            <span className="inline-block text-[#7c6fcd] text-xs font-bold uppercase tracking-widest mb-2">
                                Clinic Information
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-8">
                                Reach us
                            </h2>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-[#ede9fa] flex items-center justify-center flex-shrink-0 text-[#7c6fcd]">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#7c6fcd] uppercase tracking-wider mb-1">
                                            Address
                                        </p>
                                        <p className="text-[#1a1a2e] font-semibold text-base leading-relaxed">
                                            B2/8, SBM Layout, Anthivadi,<br />
                                            Hosur, Tamil Nadu 635109, India
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-[#ede9fa] flex items-center justify-center flex-shrink-0 text-[#7c6fcd]">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#7c6fcd] uppercase tracking-wider mb-1">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:info@sakthidentalclinic.in"
                                            className="text-[#1a1a2e] font-semibold text-base hover:text-[#7c6fcd] transition-colors break-all"
                                        >
                                            info@sakthidentalclinic.in
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-[#ede9fa] flex items-center justify-center flex-shrink-0 text-[#7c6fcd]">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#7c6fcd] uppercase tracking-wider mb-1">
                                            Phone
                                        </p>
                                        <div className="space-y-1">
                                            <a
                                                href="tel:+919862890897"
                                                className="block text-[#1a1a2e] font-semibold text-base hover:text-[#7c6fcd] transition-colors"
                                            >
                                                +91 98628 90897
                                            </a>
                                            <a
                                                href="tel:+919363298118"
                                                className="block text-[#1a1a2e] font-semibold text-base hover:text-[#7c6fcd] transition-colors"
                                            >
                                                +91 93632 98118
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Timings — Preserving exact Contact section timing: Sunday to Saturday: 9am to 7pm */}
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs border border-[#ede9fa] flex items-center justify-center flex-shrink-0 text-[#7c6fcd]">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#7c6fcd] uppercase tracking-wider mb-1">
                                            Timings
                                        </p>
                                        <p className="text-[#1a1a2e] text-base leading-snug">
                                            Sunday to Saturday:{' '}
                                            <strong className="font-bold text-[#1a1a2e]">9am to 7pm</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Google Map embed for exact clinic location */}
                        <div className="bg-white rounded-3xl overflow-hidden border border-[#ede9fa] shadow-sm p-4">
                            <div className="w-full h-56 rounded-2xl overflow-hidden relative">
                                <iframe
                                    title="Sakthi Dental Clinic Location Map"
                                    src="https://maps.google.com/maps?q=B2/8,%20SBM%20Layout,%20Anthivadi,%20Hosur,%20Tamil%20Nadu%20635109,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <div className="pt-4 flex items-center justify-between px-2">
                                <span className="text-xs font-semibold text-[#64748b]">
                                    Hosur, Tamil Nadu 635109
                                </span>
                                <a
                                    href="https://maps.google.com/?q=B2/8,+SBM+Layout,+Anthivadi,+Hosur,+Tamil+Nadu+635109,+India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7c6fcd] hover:underline"
                                >
                                    Open Full Map
                                    <ExternalLink size={13} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
