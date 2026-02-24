"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Headphones, PhoneCall, Cpu, ArrowRight, Check } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Headphones,
    title: "Headset Repair",
    description: "Specializing in premium brands like Sennheiser, fixing broken wires, sound imbalances, and connectors.",
    image: "/images/service-headset.jpg",
    features: [
      "Premium brand expertise (Sennheiser, etc.)",
      "Broken wire & cable repair",
      "Sound imbalance diagnostics",
      "Connector replacement & soldering",
    ],
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: PhoneCall,
    title: "Call Center Solutions",
    description: "Complete setup, telemarketing center development, and infrastructure planning for businesses.",
    image: "/images/service-callcenter.jpg",
    features: [
      "Complete call center setup",
      "Telemarketing infrastructure",
      "Headset fleet management",
      "Technical consulting",
    ],
    accent: "from-chart-2/20 to-chart-2/5",
  },
  {
    icon: Cpu,
    title: "General Electronics Repair",
    description: "Fast turnaround times for everyday electronic issues. We fix what others can not.",
    image: "/images/service-electronics.jpg",
    features: [
      "Fast turnaround times",
      "Component-level repairs",
      "Diagnostic testing",
      "Quality assured warranty",
    ],
    accent: "from-chart-4/20 to-chart-4/5",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-mono uppercase tracking-widest text-primary"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-mono font-bold text-balance"
          >
            What We <span className="text-primary">Fix</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg text-pretty"
          >
            From premium headphones to full call center infrastructure, we bring precision and care to every repair.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 + 0.3 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-mono font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground group-hover:text-secondary-foreground transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
