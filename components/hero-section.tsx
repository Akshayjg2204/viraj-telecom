"use client"

import { motion } from "framer-motion"
import { ArrowDown, Wrench, Zap, ShoppingBag } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-headphones.jpg"
          alt="Professional headphone repair workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-transparent" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.75 0.15 190 / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.75 0.15 190 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float z-0" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted Since 2011</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-mono font-bold leading-tight tracking-tight text-balance"
          >
            Expert Electronics{" "}
            <span className="text-primary">Repair</span>{" "}
            <span className="text-primary">&</span> Brand New Products
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty"
          >
            Fast, reliable, and professional repair services. We also design and sell brand new electronics and headphones. Specializing in Sennheiser headsets and Call Center setups.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                Book a Repair
              </span>
              <div className="absolute inset-0 bg-primary/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#products"
              className="group relative px-8 py-4 rounded-lg border border-primary/40 bg-primary/5 text-foreground font-semibold text-base hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                Shop Products
              </span>
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-lg border border-border bg-secondary/50 text-secondary-foreground font-semibold text-base hover:bg-secondary hover:border-primary/30 transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>

          {/* Audio waveform animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-end gap-1 mt-16"
          >
            {[18, 28, 12, 35, 22, 30, 14, 38, 20, 32, 10, 26, 16, 34, 24, 36, 13, 29, 19, 33].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-primary/40 rounded-full"
                style={{
                  height: `${h}px`,
                  animation: `wave 1.5s ease-in-out ${i * 0.1}s infinite`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
