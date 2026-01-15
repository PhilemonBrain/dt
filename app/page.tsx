"use client"
import HeroSection from "@/components/hero-section"
import BentoGrid from "@/components/bento-grid"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroSection />
      <BentoGrid />
      <Footer />
    </main>
  )
}
