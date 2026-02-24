"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ShoppingBag, Star, Tag, ArrowRight } from "lucide-react"

const products = [
  {
    name: "SoundFix Pro Headset X1",
    category: "Premium Audio",
    price: "4,999",
    rating: 4.8,
    tag: "Bestseller",
    description: "Our flagship wired headset built for all-day comfort and crystal-clear audio. Ideal for call centers and remote work.",
  },
  {
    name: "ProComm Call Center Kit",
    category: "Business Solutions",
    price: "12,499",
    rating: 4.6,
    tag: "New",
    description: "Complete plug-and-play call center kit with dual-ear headsets, noise-cancelling mic, and inline controls.",
  },
  {
    name: "SoundFix Wireless BT-200",
    category: "Wireless Audio",
    price: "3,499",
    rating: 4.5,
    tag: "Popular",
    description: "Bluetooth 5.3 wireless headphones with 30-hour battery life, deep bass, and lightweight build for daily use.",
  },
  {
    name: "AudioLink USB Adapter",
    category: "Accessories",
    price: "999",
    rating: 4.7,
    tag: null,
    description: "Universal USB-C audio adapter with built-in DAC for lossless sound. Compatible with all major headsets.",
  },
  {
    name: "SoundFix Studio Monitor SM-1",
    category: "Professional Audio",
    price: "7,999",
    rating: 4.9,
    tag: "Premium",
    description: "Studio-grade over-ear monitor headphones with flat frequency response, perfect for audio engineers and producers.",
  },
  {
    name: "QuickFix Repair Tool Kit",
    category: "DIY Tools",
    price: "1,499",
    rating: 4.4,
    tag: null,
    description: "Professional-grade electronics repair kit with precision screwdrivers, soldering iron, and multimeter.",
  },
]

const tagColors: Record<string, string> = {
  Bestseller: "bg-primary/15 text-primary border-primary/30",
  New: "bg-chart-2/15 text-chart-2 border-chart-2/30",
  Popular: "bg-chart-4/15 text-chart-4 border-chart-4/30",
  Premium: "bg-chart-5/15 text-chart-5 border-chart-5/30",
}

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="products" className="relative py-32 overflow-hidden">
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
            Our Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-mono font-bold text-balance"
          >
            Brand New <span className="text-primary">Gear</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg text-pretty"
          >
            Designed and crafted by our team. Every product is built with the same precision we bring to our repairs.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="p-6">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                  </div>
                  {product.tag && (
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${tagColors[product.tag] || "bg-muted text-muted-foreground border-border"}`}>
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Category */}
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </span>

                {/* Name */}
                <h3 className="mt-1 text-lg font-mono font-bold text-foreground leading-tight">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Bottom row */}
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(product.rating)
                              ? "text-primary fill-primary"
                              : "text-primary/30 fill-primary/30"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-primary" />
                      <span className="text-lg font-mono font-bold text-foreground">
                        {'₹'}{product.price}
                      </span>
                    </div>
                  </div>

                  <motion.a
                    href="#contact"
                    animate={hoveredIndex === index ? { x: 0, opacity: 1 } : { x: 5, opacity: 0.6 }}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-300"
                  >
                    Enquire
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
