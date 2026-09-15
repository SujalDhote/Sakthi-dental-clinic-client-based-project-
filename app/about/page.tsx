import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import DoctorCard from '@/components/ui/DoctorCard'
import { team } from '@/data/team'
import { Award, Compass, Heart, ShieldCheck, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
    title: 'About Us | Get to Know Dr. Anupriya',
    description:
        'Meet Dr. Anupriya and our expert dental team at Sakthi Dental Clinic in Hosur, Tamil Nadu. Over 20 years of dental expertise providing gentle, modern care for families.',
    openGraph: {
        title: 'About Dr. Anupriya & Sakthi Dental Clinic',
        description:
            'Founded in 2004 in Hosur, Sakthi Dental Clinic brings together 9 specialized dental surgeons committed to compassionate, expert care.',
        url: 'https://sakthidentalclinic.in/about',
    },
    alternates: { canonical: 'https://sakthidentalclinic.in/about' },
}

export default function AboutPage() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-[#f8f7ff] via-white to-[#ede9fa] pt-28 lg:pt-32 pb-16 lg:pb-20 border-b border-[#ede9fa]">
                <div className="max-w-[1536px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center">
                    <span className="inline-flex items-center gap-2 bg-[#ede9fa] text-[#7c6fcd] text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-[#ddd6f7]/60">
                        <Sparkles size={14} />
                        About Sakthi Dental Clinic
                    </span>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a1a2e] leading-tight mb-4">
                        Get to Know Dr. Anupriya
                    </h1>
                    <p className="text-[#4a4a6a] text-xl sm:text-2xl font-light max-w-2xl mx-auto">
                        Your Trusted Partner in Dental Care
                    </p>
                </div>
            </div>

            {/* Dr. Anupriya Profile Section */}
            <SectionWrapper background="white" id="founder">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

                    {/* Left Column — Clinical Leadership Profile Card (Finished, prestigious, no placeholder) */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-3xl bg-gradient-to-br from-[#f8f7ff] via-white to-[#ede9fa] p-8 sm:p-10 border border-[#ede9fa] shadow-[0_16px_48px_0_rgba(124,111,205,0.12)]">

                            {/* Top Insignia */}
                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#ede9fa]">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c6fcd] to-[#5e4eb0] flex items-center justify-center text-white font-display text-2xl font-bold shadow-md">
                                    SDC
                                </div>
                                <span className="bg-[#e0f7f5] text-[#0d9488] font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                                    Established 2004
                                </span>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a2e]">
                                    Dr. Anupriya
                                </h3>
                                <p className="text-[#7c6fcd] font-semibold text-base mt-1">
                                    Founder &amp; Chief Dental Surgeon
                                </p>
                            </div>

                            {/* Career Milestones from verbatim client text */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#ede9fa] flex items-center justify-center text-[#7c6fcd] flex-shrink-0 mt-0.5">
                                        <Award size={16} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-[#1a1a2e]">Graduated in 2000</p>
                                        <p className="text-xs text-[#64748b]">Began 20+ year clinical dentistry journey</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#ede9fa] flex items-center justify-center text-[#7c6fcd] flex-shrink-0 mt-0.5">
                                        <ShieldCheck size={16} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-[#1a1a2e]">6 Years at Mathura Clinic</p>
                                        <p className="text-xs text-[#64748b]">Refined advanced clinical procedures &amp; patient care</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#ede9fa] flex items-center justify-center text-[#7c6fcd] flex-shrink-0 mt-0.5">
                                        <Sparkles size={16} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-[#1a1a2e]">Founded Sakthi Dental Clinic (2004)</p>
                                        <p className="text-xs text-[#64748b]">Established accessible, high-quality dental care in Hosur</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#ede9fa] flex items-center justify-center text-[#7c6fcd] flex-shrink-0 mt-0.5">
                                        <Heart size={16} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-[#1a1a2e]">Consultant at PHC Chandara Hospital</p>
                                        <p className="text-xs text-[#64748b]">Over a decade of trusted community healthcare service</p>
                                    </div>
                                </div>
                            </div>

                            {/* Experience highlight badge */}
                            <div className="bg-white rounded-2xl p-4.5 border border-[#ede9fa] shadow-2xs flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#ede9fa] flex items-center justify-center flex-shrink-0 text-[#7c6fcd] font-bold text-xl">
                                    20+
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#1a1a2e]">Years of Clinical Expertise</p>
                                    <p className="text-xs text-[#64748b]">Dedicated to families in Hosur</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Exact Client Bio Copy */}
                    <div className="lg:col-span-7">
                        <span className="inline-block text-[#7c6fcd] text-sm font-bold uppercase tracking-widest mb-3">
                            Founder &amp; Chief Dental Surgeon
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
                            Dr. Anupriya
                        </h2>

                        <div className="space-y-5 text-[#4a4a6a] text-base sm:text-lg leading-relaxed font-normal">
                            <p>
                                Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern dentistry at Hosur. She began her professional journey after graduating in 2000. Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic, where she refined her clinical skills and deepened her commitment to patient wellbeing.
                            </p>
                            <p>
                                In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to make high-quality dental care accessible to all. Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital, where she has been a trusted dental consultant for over a decade.
                            </p>
                            <p>
                                At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free. From routine check-ups to specialized treatments, we prioritize personalized care tailored to your unique dental needs.
                            </p>
                            <p className="text-[#1a1a2e] font-semibold italic bg-[#f8f7ff] p-5 rounded-2xl border-l-4 border-[#7c6fcd]">
                                &ldquo;Whether you&apos;re looking for preventive care, cosmetic enhancements, or restorative solutions, Dr. Anupriya and her team are committed to delivering excellence at every step. Because here, your smile isn’t just treated — it’s celebrated.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Vision & Mission Section — Exact Client Copy */}
            <SectionWrapper background="neutral" id="vision-mission">
                <div className="text-center mb-14">
                    <span className="inline-block text-[#7c6fcd] text-sm font-bold uppercase tracking-widest mb-3">
                        Our Guiding Principles
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight">
                        Our Vision &amp; Mission
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {/* Mission Card */}
                    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#ede9fa] shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 rounded-2xl bg-[#ede9fa] flex items-center justify-center text-[#7c6fcd] mb-6">
                            <Compass size={28} />
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">
                            Our Mission
                        </h3>
                        <p className="text-[#4a4a6a] text-base sm:text-lg leading-relaxed">
                            At Sakthi Dental Clinic, our mission is to redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We are committed to creating a welcoming environment where patients feel comfortable and confident in taking charge of their dental health. By integrating state-of-the-art technology with patient-centric care, we ensure that every treatment enhances not only your smile but also your overall well-being. Continuous learning and innovation drive us to provide comprehensive solutions, from preventive care to complex dental procedures, all designed to promote long-lasting oral health.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#ede9fa] shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 rounded-2xl bg-[#e0f7f5] flex items-center justify-center text-[#0d9488] mb-6">
                            <Sparkles size={28} />
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a2e] mb-4">
                            Our Vision
                        </h3>
                        <p className="text-[#4a4a6a] text-base sm:text-lg leading-relaxed">
                            Our vision is to be a leading force in modern dentistry, known for setting new standards in patient care, innovation, and community engagement. At Sakthi Dental Clinic, we believe that building trust, encouraging preventive practices, and fostering a culture of excellence are key to making a lasting impact. We aspire to not only deliver exceptional dental outcomes but also to contribute positively to the community through awareness initiatives and outreach programs. With a focus on holistic care and a passion for brightening lives, we are dedicated to ensuring that every smile we treat reflects confidence, health, and happiness.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Doctors Team Section — Exact 9 Doctors from Client Document */}
            <SectionWrapper background="white" id="doctors">
                <div className="text-center mb-14">
                    <span className="inline-block text-[#7c6fcd] text-sm font-bold uppercase tracking-widest mb-3">
                        Expert Clinical Team
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-4">
                        Our Team of Doctors
                    </h2>
                    <p className="text-[#64748b] text-base sm:text-lg max-w-2xl mx-auto">
                        A multidisciplinary team of dedicated dental specialists covering every facet of modern oral healthcare.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {team.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            </SectionWrapper>
        </>
    )
}
