"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Clock, Phone, Mail, ArrowUpRight } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Shop No 62, Ground Floor, Plot No 15, Hawre Nirmiti Building, Near MGM Hospital, Sector No 22, Kamothe, Navi Mumbai-410206",
    href: "https://maps.google.com/?q=Kamothe+Navi+Mumbai",
    cta: "Get Directions",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday to Saturday: 9:30 AM - 7:00 PM",
    subvalue: "Closed on Sundays",
    href: undefined,
    cta: undefined,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
    cta: "Call Now",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@soundfixpro.com",
    href: "mailto:info@soundfixpro.com",
    cta: "Send Email",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-mono uppercase tracking-widest text-primary"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-mono font-bold text-balance"
          >
            Ready to <span className="text-primary">Fix</span> It?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg text-pretty"
          >
            Drop by our shop or give us a call. We are always ready to help.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
                    {info.label}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{info.value}</p>
                  {info.subvalue && (
                    <p className="text-xs text-muted-foreground mt-1">{info.subvalue}</p>
                  )}
                  {info.href && info.cta && (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-300"
                    >
                      {info.cta}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/20 rounded-2xl">
            <div>
              <h3 className="text-2xl md:text-3xl font-mono font-bold text-foreground">
                Need urgent repair?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Walk in during business hours or call us for an immediate consultation.
              </p>
            </div>
            <a
              href="tel:+919999999999"
              className="shrink-0 flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
