"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Wrench, CheckCircle, Truck } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnose",
    description: "We carefully inspect and diagnose the issue with your device using professional-grade tools.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Repair",
    description: "Our expert technicians perform precision repairs using quality replacement parts.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Test",
    description: "Every repair goes through rigorous quality testing to ensure perfect functionality.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Deliver",
    description: "Your device is returned to you in perfect working condition, as good as new.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-mono uppercase tracking-widest text-primary"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-mono font-bold text-balance"
          >
            How We <span className="text-primary">Work</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                className="relative text-center group"
              >
                {/* Number circle */}
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 rounded-full border border-border group-hover:border-primary/40 transition-colors duration-500" />
                  <div className="absolute inset-2 rounded-full bg-card flex flex-col items-center justify-center group-hover:bg-primary/5 transition-colors duration-500">
                    <Icon className="w-7 h-7 text-primary mb-1" />
                    <span className="text-xs font-mono text-muted-foreground">{step.number}</span>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -inset-2 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-lg font-mono font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
