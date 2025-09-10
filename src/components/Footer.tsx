import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Github, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { name: 'Home', href: '/' },
    { name: 'Donate & Share', href: '/donate' },
    { name: 'Crowdfix', href: '/crowdfix' },
    { name: 'About Us', href: '/about' },
  ],
  'Community': [
    { name: 'How it Works', href: '/about' },
    { name: 'Success Stories', href: '/about' },
    { name: 'Guidelines', href: '/about' },
    { name: 'Support', href: '/contact' },
  ],
  'Legal': [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ]
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@helphive.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link to="/" className="flex items-center space-x-2 group">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-primary-foreground/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                >
                  <Heart className="w-6 h-6 text-secondary" />
                </motion.div>
                <span className="text-2xl sm:text-3xl font-bold">HelpHive</span>
              </Link>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base text-primary-foreground/80 mb-6 leading-relaxed"
            >
              Turning waste into hope, together. Join our community of changemakers 
              creating positive impact one donation and fix at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary-foreground/70 hover:text-secondary hover:bg-primary-foreground/20 transition-smooth"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-lg font-semibold mb-6 text-secondary">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-primary-foreground/70 text-center lg:text-left">
              <p className="text-sm sm:text-base">&copy; 2024 HelpHive. All rights reserved.</p>
              <p className="text-xs sm:text-sm mt-1">
                <span className="text-secondary">🌱</span> Building a sustainable future, one action at a time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-primary-foreground/70">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}