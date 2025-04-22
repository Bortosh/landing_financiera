'use client'

import Hero from '../components/Hero'
import Features from '../components/Features'
import ProductSection from '../components/ProductSection'
import About from '../components/About'
import News from '../components/News'
import CTASection from '../components/CTASection'
import ProductToggle from '@/components/ProductToggle'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductToggle />
      <About />
      <News />
      <CTASection />
    </>
  )
}
