/*
  Footer - Modernized (React + Tailwind + Framer Motion)
  - Default export component
  - Tailwind CSS classes (make sure Tailwind is configured in your project)
  - Requires: framer-motion, react-router-dom, lucide-react
*/

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Github, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { name: "Home", href: "/" },
    { name: "Donate & Share", href: "/donate" },
    { name: "Crowdfix", href: "/crowdfix" },
    { name: "About Us", href: "/about" },
  ],
  Community: [
    { name: "How it Works", href: "/about" },
    { name: "Success Stories", href: "/about" },
    { name: "Guidelines", href: "/about" },
    { name: "Support", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter", external: true },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram", external: true },
  { icon: Github, href: "https://github.com/", label: "GitHub", external: true },
  { icon: Mail, href: "mailto:hello@helphive.com", label: "Email", external: false },
];

// Framer Motion variants
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<{ type: "error" | "success"; message: string } | null>(null);
  const year = new Date().getFullYear();

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const emailTrim = (email || "").trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim);
    if (!valid) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    // stub: replace with real subscription API call
    setStatus({ type: "success", message: "Thanks — you’re subscribed!" });
    setEmail("");
    setTimeout(() => setStatus(null), 3500);
  }

  return (
    <footer
      className="relative gradient-hero text-primary-foreground font-sans"
      aria-label="Site Footer"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Brand */}
            <motion.div variants={item} className="md:col-span-4 space-y-4">
              <Link to="/" className="inline-flex items-center gap-3 group">
                <motion.span
                  whileHover={{ rotate: 12, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center"
                >
                  <Heart className="w-6 h-6 text-secondary" />
                </motion.span>

                <span className="text-2xl md:text-3xl font-semibold tracking-tight">HelpHive</span>
              </Link>

              <p className="text-sm text-primary-foreground/80 max-w-md leading-relaxed">
                Turning waste into hope. Join our growing community of volunteers, donors and fixers — together we
                make sustainable impact, one donation and repair at a time.
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label, external }, i) => (
                  <motion.a
                    key={label + i}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center transition duration-200 hover:bg-primary-foreground/20"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links grid */}
            <motion.div variants={item} className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h4 className="text-sm font-semibold text-secondary mb-3">{title}</h4>
                  <ul className="space-y-2 text-sm text-primary-foreground/80">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link to={link.href} className="hover:text-primary-foreground transition">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Newsletter / Contact */}
            <motion.div variants={item} className="md:col-span-3 space-y-4">
              <h4 className="text-sm font-semibold text-secondary">Stay in the loop</h4>
              <p className="text-sm text-primary-foreground/80">Signup for updates, volunteer calls and donation drives (we send very few emails).</p>

              <form onSubmit={handleSubscribe} className="flex gap-2">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  aria-label="Email address"
                  className="flex-1 py-2 px-3 rounded-md bg-primary-foreground/10 placeholder-primary-foreground/60 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/90 rounded-md text-sm font-medium transition"
                >
                  Subscribe
                </button>
              </form>

              {status && (
                <p className={`text-sm ${status.type === "error" ? "text-red-400" : "text-green-400"}`}>{status.message}</p>
              )}

              <div className="mt-2 space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Ghaziabad, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* bottom */}
          <motion.div variants={item} className="mt-10 border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-primary-foreground/80">
            <div className="text-center md:text-left">&copy; {year} HelpHive. All rights reserved.</div>

            <nav aria-label="Footer secondary" className="flex items-center gap-4">
              <Link to="/privacy" className="hover:underline">Privacy</Link>
              <Link to="/terms" className="hover:underline">Terms</Link>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
