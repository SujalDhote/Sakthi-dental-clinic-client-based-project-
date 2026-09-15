import { Doctor } from '@/types'
import { cn } from '@/lib/utils'
import { Stethoscope } from 'lucide-react'

interface DoctorCardProps {
    doctor: Doctor
}

// Generate initials from doctor name (e.g., "Dr. Anupriya" -> "DA", "Dr. Vikram Raj Kishore" -> "VR")
function getInitials(name: string): string {
    const parts = name.replace(/^Dr\.\s*/i, '').trim().split(/\s+/)
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
    const initials = getInitials(doctor.name)

    return (
        <article className="bg-white rounded-3xl p-7 border border-[#ede9fa] shadow-[0_2px_16px_0_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_0_rgba(124,111,205,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            {/* Specialist Monogram Crest */}
            <div
                className={cn(
                    'w-20 h-20 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm',
                    doctor.isFounder
                        ? 'bg-gradient-to-br from-[#7c6fcd] to-[#5e4eb0] text-white shadow-[0_4px_16px_0_rgba(124,111,205,0.30)]'
                        : 'bg-gradient-to-br from-[#f8f7ff] to-[#ede9fa] text-[#7c6fcd] border border-[#ede9fa]'
                )}
                aria-hidden="true"
            >
                <div className="flex flex-col items-center justify-center">
                    <span className="font-display font-bold text-xl tracking-wider">{initials}</span>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-display font-bold text-[#1a1a2e] text-lg leading-snug mb-1.5 group-hover:text-[#7c6fcd] transition-colors">
                        {doctor.name}
                    </h3>
                    <p className="text-[#64748b] text-sm font-medium leading-tight mb-3">
                        {doctor.specialty}
                    </p>
                </div>

                <div>
                    {doctor.isFounder ? (
                        <span className="inline-flex items-center gap-1.5 bg-[#ede9fa] text-[#7c6fcd] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#ddd6f7]/60">
                            Founder
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#0d9488] bg-[#e0f7f5] px-3 py-1 rounded-full font-semibold">
                            <Stethoscope size={12} />
                            Specialist
                        </span>
                    )}
                </div>
            </div>
        </article>
    )
}
