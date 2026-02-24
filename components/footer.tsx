"use client"

import { Headphones, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Headphones className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono text-lg font-bold text-foreground">
                Viraj <span className="text-primary">Telecom</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Your trusted partner for electronics repair, brand new products, and audio solutions since 2011. Precision, quality, and reliability in everything we do.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">Location</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Shop No 62, Ground Floor, Plot No 15, Hawre Nirmiti Building, Near MGM Hospital, Sector No 22, Kamothe, Navi Mumbai-410206
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {'© 2011 - 2026 Viraj Telecom. All rights reserved.'}
          </p>
          <div className="flex items-end gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="w-0.5 bg-primary/20 rounded-full"
                style={{
                  height: `${Math.sin(i * 0.8) * 8 + 10}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
