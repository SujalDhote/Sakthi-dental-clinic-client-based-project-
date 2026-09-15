import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { MapPin, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'Privacy Policy for Sakthi Dental Clinic, Hosur. Learn how we collect, use, store, and disclose information from visitors and users of our website.',
    openGraph: {
        title: 'Privacy Policy | Sakthi Dental Clinic',
        description:
            'Privacy Policy for Sakthi Dental Clinic in Hosur, Tamil Nadu.',
        url: 'https://sakthidentalclinic.in/privacy-policy',
    },
    alternates: { canonical: 'https://sakthidentalclinic.in/privacy-policy' },
}

export default function PrivacyPolicyPage() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-[#f5f3ff] to-white pt-28 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-[#7c6fcd] text-sm font-semibold uppercase tracking-widest mb-3">
                        Legal &amp; Transparency
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-[#64748b] text-base max-w-xl mx-auto">
                        Sakthi Dental Clinic is committed to protecting your privacy and ensuring your personal information is handled safely and responsibly.
                    </p>
                </div>
            </div>

            <SectionWrapper background="white">
                <div className="max-w-3xl mx-auto text-[#4a4a6a] space-y-8">
                    <p className="text-base sm:text-lg leading-relaxed text-[#1a1a2e] font-normal bg-[#f8f7ff] p-6 rounded-2xl border border-[#ede9fa]">
                        At <strong>Sakthi Dental Clinic</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and disclose information from visitors and users of our website.
                    </p>

                    {/* Section 1 */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-[#1a1a2e] mb-3">
                            1. Information We Collect
                        </h2>
                        <p className="mb-3 leading-relaxed">
                            We may collect personal identification information from users in several ways, including when users:
                        </p>
                        <ul className="list-disc pl-6 space-y-1.5 mb-4">
                            <li>Visit our website</li>
                            <li>Fill out forms (e.g. contact or appointment requests)</li>
                            <li>Engage with features, services, or resources on our site</li>
                        </ul>
                        <p className="mb-2 font-medium text-[#1a1a2e]">Types of information we may collect include:</p>
                        <ul className="list-disc pl-6 space-y-1.5 mb-4">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                        </ul>
                        <p className="mb-3 leading-relaxed">
                            Users can visit our site anonymously. We only collect personal data when it is voluntarily submitted by users. Refusing to provide certain personal information may limit access to some site features or services.
                        </p>
                        <p className="mb-2 font-medium text-[#1a1a2e]">We may also gather non-personal identification information, such as:</p>
                        <ul className="list-disc pl-6 space-y-1.5">
                            <li>Browser type</li>
                            <li>Device details</li>
                            <li>Operating system</li>
                            <li>Internet service provider</li>
                            <li>Technical data related to user interaction with the site</li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-[#1a1a2e] mb-3">
                            2. Cookies
                        </h2>
                        <p className="leading-relaxed">
                            Our website may use &ldquo;cookies&rdquo; to enhance the user experience. Cookies are small files stored on a user&apos;s device for record-keeping purposes and to track preferences or site activity. Users can set their browser to refuse cookies or alert them when cookies are being used. Please note that disabling cookies may affect some site functionality.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-[#1a1a2e] mb-3">
                            3. How We Use Your Information
                        </h2>
                        <p className="mb-3 leading-relaxed">
                            Collected information may be used for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>To operate and manage the website:</strong> Ensuring content displays properly and services run smoothly.</li>
                            <li><strong>To improve customer service:</strong> Helping us respond to inquiries more efficiently.</li>
                            <li><strong>To enhance the website experience:</strong> Feedback provided may help us improve content, usability, and performance.</li>
                            <li><strong>To communicate via email:</strong> We may use the email address to respond to inquiries, appointments, or service updates.</li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-[#1a1a2e] mb-3">
                            4. Data Security
                        </h2>
                        <p className="leading-relaxed">
                            We implement appropriate security measures for data collection, storage, and processing to safeguard your personal information from unauthorized access, alteration, or destruction.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-[#1a1a2e] mb-3">
                            5. Information Sharing
                        </h2>
                        <p className="leading-relaxed">
                            We do not sell, trade, or rent personal identification information to third parties. We may share general demographic data (not linked to any personal information) with trusted partners or affiliates to improve service delivery and site performance.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-[#1a1a2e] mb-3">
                            6. Children&apos;s Privacy
                        </h2>
                        <p className="leading-relaxed">
                            In compliance with the Children&apos;s Online Privacy Protection Act (COPPA), we do not knowingly collect any personal information from children under the age of 13. Our site is not intended to attract users below this age group.
                        </p>
                    </div>

                    {/* Section 7 */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-[#1a1a2e] mb-3">
                            7. Changes to This Policy
                        </h2>
                        <p className="leading-relaxed">
                            Sakthi Dental Clinic may update this Privacy Policy from time to time. We encourage users to review this page periodically to stay informed about how we protect your information.
                        </p>
                    </div>

                    {/* Section 8 */}
                    <div>
                        <h2 className="font-display text-2xl font-bold text-[#1a1a2e] mb-3">
                            8. Acceptance of Terms
                        </h2>
                        <p className="leading-relaxed">
                            By using this website, you agree to this policy. If you do not accept our Privacy Policy, please do not use our website. Continued use of the site following any updates will be deemed as your acceptance of the revised policy.
                        </p>
                    </div>

                    {/* Section 9 */}
                    <div className="bg-[#f8f7ff] rounded-2xl p-6 border border-[#ede9fa]">
                        <h2 className="font-display text-2xl font-bold text-[#1a1a2e] mb-3">
                            9. Contact Us
                        </h2>
                        <p className="mb-4 leading-relaxed">
                            If you have any questions about this Privacy Policy or your interactions with our site, please contact us:
                        </p>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#7c6fcd] mt-0.5 flex-shrink-0" />
                                <span><strong>Address:</strong> B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-[#7c6fcd] flex-shrink-0" />
                                <span><strong>Email:</strong> <a href="mailto:info@sakthidentalclinic.in" className="text-[#7c6fcd] hover:underline">info@sakthidentalclinic.in</a></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-[#7c6fcd] flex-shrink-0" />
                                <span><strong>Phone:</strong> <a href="tel:+919862890897" className="text-[#7c6fcd] hover:underline">+91 9862890897</a> / <a href="tel:+919363298118" className="text-[#7c6fcd] hover:underline">+91 9363298118</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    )
}
