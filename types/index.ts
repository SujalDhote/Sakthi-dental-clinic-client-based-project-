export interface Treatment {
    id: string
    name: string
    description: string
    icon: string
    image: string
    category: 'general' | 'cosmetic' | 'surgical' | 'orthodontic' | 'pediatric' | 'restorative'
}

export interface Doctor {
    id: string
    name: string
    specialty: string
    isFounder?: boolean
}

export interface Testimonial {
    id: string
    quote: string
    author: string
    rating: number
}

export interface FAQ {
    id: string
    question: string
    answer: string
}

export interface Facility {
    id: string
    label: string
    icon: string
}

export interface NavItem {
    label: string
    href: string
}
