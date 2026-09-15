import { cn } from '@/lib/utils'

interface SectionWrapperProps {
    children: React.ReactNode
    className?: string
    id?: string
    background?: 'white' | 'neutral' | 'brand-light'
    as?: 'section' | 'div' | 'article'
    containerClassName?: string
}

export default function SectionWrapper({
    children,
    className,
    id,
    background = 'white',
    as: Tag = 'section',
    containerClassName,
}: SectionWrapperProps) {
    const bgClass = {
        white: 'bg-white',
        neutral: 'bg-[#f8f7ff]',
        'brand-light': 'bg-[#f5f3ff]',
    }[background]

    return (
        <Tag
            id={id}
            className={cn(bgClass, 'py-16 md:py-20 lg:py-24 w-full relative', className)}
        >
            <div className={cn('max-w-[1536px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12', containerClassName)}>
                {children}
            </div>
        </Tag>
    )
}
