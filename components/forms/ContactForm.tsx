'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(80),
    email: z.string().email('Please enter a valid email address'),
    phone: z
        .string()
        .min(7, 'Please enter a valid phone number')
        .max(15)
        .regex(/^[+\d\s\-()]*$/, 'Please enter a valid phone number'),
    message: z.string().max(1000).optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
    const [status, setStatus] = useState<Status>('idle')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        setStatus('loading')

        try {
            const response = await fetch('https://formspree.io/f/xzezpbnq', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error(`Formspree request failed with status ${response.status}`)
            }

            setStatus('success')
            reset()
        } catch (err) {
            console.error('Formspree error:', err)
            setStatus('error')
        }
    }

    const inputClass = (fieldError: boolean) =>
        cn(
            'w-full rounded-xl border px-4 py-3.5 text-[#1a1a2e] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 transition-all duration-200',
            fieldError
                ? 'border-red-400 focus:ring-red-200 bg-red-50'
                : 'border-[#ede9fa] focus:ring-[#c4b5f0] focus:border-[#7c6fcd] bg-white'
        )

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label="Contact form"
            className="space-y-5"
        >
            {/* Name */}
            <div>
                <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#1a1a2e] mb-1.5"
                >
                    Name <span aria-label="required" className="text-red-500">*</span>
                </label>
                <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    {...register('name')}
                    className={inputClass(!!errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                />
                {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} aria-hidden="true" /> {errors.name.message}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[#1a1a2e] mb-1.5"
                >
                    Email <span aria-label="required" className="text-red-500">*</span>
                </label>
                <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    {...register('email')}
                    className={inputClass(!!errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                />
                {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} aria-hidden="true" /> {errors.email.message}
                    </p>
                )}
            </div>

            {/* Phone */}
            <div>
                <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-[#1a1a2e] mb-1.5"
                >
                    Phone Number <span aria-label="required" className="text-red-500">*</span>
                </label>
                <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98628 90897"
                    {...register('phone')}
                    className={inputClass(!!errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                    <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} aria-hidden="true" /> {errors.phone.message}
                    </p>
                )}
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#1a1a2e] mb-1.5"
                >
                    Your Message{' '}
                    <span className="text-[#94a3b8] font-normal">(optional)</span>
                </label>
                <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us what you need help with..."
                    {...register('message')}
                    className={cn(inputClass(!!errors.message), 'resize-none')}
                />
            </div>

            {/* Submit button */}
            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={cn(
                    'w-full flex items-center justify-center gap-2 font-semibold px-6 py-4 rounded-xl transition-all duration-200',
                    status === 'success'
                        ? 'bg-emerald-500 text-white cursor-default'
                        : 'bg-[#7c6fcd] hover:bg-[#6a59b8] text-white shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed'
                )}
            >
                {status === 'loading' && (
                    <>
                        <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                        Sending…
                    </>
                )}
                {status === 'success' && (
                    <>
                        <CheckCircle size={18} aria-hidden="true" />
                        Message Sent!
                    </>
                )}
                {(status === 'idle' || status === 'error') && (
                    <>
                        <Send size={18} aria-hidden="true" />
                        Submit
                    </>
                )}
            </button>

            {/* Success state */}
            {status === 'success' && (
                <div
                    role="status"
                    aria-live="polite"
                    className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4"
                >
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                        <p className="text-emerald-800 font-semibold text-sm">Thank you!</p>
                        <p className="text-emerald-700 text-xs mt-0.5">
                            We&apos;ve received your message and will get back to you shortly.
                        </p>
                    </div>
                </div>
            )}

            {/* Error state */}
            {status === 'error' && (
                <div
                    role="alert"
                    aria-live="assertive"
                    className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4"
                >
                    <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                        <p className="text-red-800 font-semibold text-sm">Something went wrong</p>
                        <p className="text-red-700 text-xs mt-0.5">
                            Please try again or call us directly at{' '}
                            <a href="tel:+919862890897" className="underline">
                                +91 98628 90897
                            </a>
                            .
                        </p>
                    </div>
                </div>
            )}
        </form>
    )
}
