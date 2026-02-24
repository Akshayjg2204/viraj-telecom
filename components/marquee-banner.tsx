"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const marqueeItems = [
  "Sennheiser Specialist",
  "Call Center Setup",
  "Wire Repair",
  "Sound Diagnostics",
  "Connector Repair",
  "Electronics Fix",
  "Fast Turnaround",
  "Premium Service",
]

export function MarqueeBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="py-6 border-y border-border bg-secondary/30 overflow-hidden"
    >
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={index} className="flex items-center mx-8 text-sm font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-4 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
