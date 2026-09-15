import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f7ff] px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-[#ede9fa] flex items-center justify-center mb-6 mx-auto">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7c6fcd"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M12 2C8.5 2 5.5 4.5 5 8c-.5 3 1 5.5 2.5 7.5S9 19 9 21h6c0-2 .5-3 1.5-5.5S19 11 18.5 8C18 4.5 15.5 2 12 2Z" />
                </svg>
            </div>

            <h1 className="font-display text-6xl font-bold text-[#7c6fcd] mb-3">404</h1>
            <h2 className="font-display text-2xl font-semibold text-[#1a1a2e] mb-3">
                Page Not Found
            </h2>
            <p className="text-[#64748b] mb-8 max-w-sm">
                The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/"
                    className="inline-block bg-[#7c6fcd] hover:bg-[#6a59b8] text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                    Go to Home
                </Link>
                <Link
                    href="/contact"
                    className="inline-block border border-[#ddd6f7] text-[#7c6fcd] hover:bg-[#f5f3ff] font-semibold px-6 py-3 rounded-full transition-colors"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    )
}
