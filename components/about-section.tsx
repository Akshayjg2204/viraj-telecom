"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Shield, Clock, Award, Package } from "lucide-react"

const stats = [
  { icon: Clock, value: "13+", label: "Years of Experience", delay: 0 },
  { icon: Star, value: "4.3", label: "Star Rating", delay: 0.1 },
  { icon: Shield, value: "35+", label: "Happy Customers", delay: 0.2 },
  { icon: Package, value: "500+", label: "Products Sold", delay: 0.3 },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] blur-3xl" />

      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-mono uppercase tracking-widest text-primary">About Us</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-mono font-bold leading-tight text-balance">
                A Decade of{" "}
                <span className="text-primary">Trusted</span> Repairs{" "}
                <span className="text-primary">&</span> Products
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg text-pretty">
                Established in 2011, we have earned the trust of the Kamothe community with over a decade of professional electronics and headphone repair services. Beyond repairs, we also create and sell brand new electronics and audio products crafted with the same precision.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                With a stellar 4.3-star rating from over 35 local customers, we pride ourselves on delivering quality work and products that speak for themselves. Whether it is a high-end Sennheiser headset repair, a complete call center infrastructure, or purchasing brand new gear, we handle it all with the same dedication.
              </p>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/5 border border-primary/20"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? "text-primary fill-primary" : "text-primary/40 fill-primary/40"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                4.3 out of 5 from 35+ reviews
              </span>
            </motion.div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: stat.delay + 0.2 }}
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-mono font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                  {/* Subtle corner decoration */}
                  {index === 0 && (
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
