import { HeroSection } from "@/components/hero-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <MarqueeBanner />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
