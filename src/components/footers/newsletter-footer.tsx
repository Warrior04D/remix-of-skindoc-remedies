"use client";

import { Facebook, Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Award, Shield, Heart } from "lucide-react";
import { motion } from "motion/react";

const navigation = [
  {
    title: "Solutions",
    links: [
      { name: "Acne Treatment", href: "/solutions/acne" },
      { name: "Anti-Aging Care", href: "/solutions/anti-aging" },
      { name: "Pigmentation", href: "/solutions/pigmentation" },
      { name: "Sensitive Skin", href: "/solutions/sensitive" },
      { name: "Preventive Care", href: "/solutions/prevention" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Face Care", href: "/products/face" },
      { name: "Body Care", href: "/products/body" },
      { name: "Treatment Serums", href: "/products/treatments" },
      { name: "Professional Kits", href: "/products/kits" },
      { name: "Gift Sets", href: "/products/gifts" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Free Skin Analysis", href: "/analysis" },
      { name: "Expert Consultation", href: "/consultation" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact Support", href: "/support" },
      { name: "Track Your Order", href: "/track" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About SKIN DOCTOR", href: "/about" },
      { name: "Our Experts", href: "/experts" },
      { name: "Success Stories", href: "/testimonials" },
      { name: "Clinical Research", href: "/research" },
      { name: "Press & Media", href: "/press" },
    ],
  },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/skindoctor", color: "hover:text-pink-500" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/skindoctor", color: "hover:text-blue-500" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/skindoctor", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/skindoctor", color: "hover:text-blue-600" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/skindoctor", color: "hover:text-red-500" },
];

const contactInfo = [
  { icon: Phone, text: "1-800-SKIN-DOC", href: "tel:1-800-754-6362" },
  { icon: Mail, text: "hello@skindoctor.com", href: "mailto:hello@skindoctor.com" },
  { icon: MapPin, text: "Beverly Hills, CA", href: "/locations" },
];

const certifications = [
  { icon: Shield, text: "FDA Approved" },
  { icon: Award, text: "Dermatologist Tested" },
  { icon: Heart, text: "Cruelty Free" },
];

export const NewsletterFooter = () => {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 border-t border-border/20">
      <div className="container mx-auto max-w-7xl px-5 md:px-6">
        {/* Main Content Section */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="#" className="inline-block mb-8">
                <span className="text-3xl font-display font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  SKIN DOCTOR
                </span>
              </a>
              
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed font-body">
                Transform your skin with professional dermatological expertise. 
                We combine cutting-edge science with natural ingredients to deliver 
                personalized skincare solutions that actually work.
              </p>

              {/* Enhanced Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-200">
                      <contact.icon className="size-4" />
                    </div>
                    <span className="font-medium">{contact.text}</span>
                  </motion.a>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <cert.icon className="size-4" />
                    <span>{cert.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Section - Enhanced */}
          <div className="lg:col-span-3">
            <nav className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {navigation.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-0"
                >
                  <h2 className="mb-6 text-lg font-display font-bold text-foreground">
                    {section.title}
                  </h2>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="inline-block py-1 text-muted-foreground hover:text-accent transition-colors duration-200 font-medium hover:translate-x-1 transform"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-border/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-foreground">
              Get Expert Skincare Tips & Exclusive Offers
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join 50,000+ skincare enthusiasts receiving personalized tips, exclusive discounts, and early access to new treatments from our dermatologists.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-14 rounded-full border-2 border-border bg-background px-6 py-3 text-base font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent focus-visible:outline-none transition-all duration-200"
            />
            <button className="h-14 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-bold px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20 hover:shadow-accent/40">
              Subscribe Now
            </button>
          </div>
          
          <p className="text-center text-xs text-muted-foreground mt-4 max-w-md mx-auto">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime. 
            We respect your privacy and never share your information.
          </p>
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse items-center justify-between gap-8 border-t border-border/20 pt-12 md:flex-row">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-muted-foreground mb-2">
              © {new Date().getFullYear()} SKIN DOCTOR. All rights reserved.{" "}
              <span className="font-semibold text-foreground">Professional Skincare Solutions</span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-muted-foreground">
              <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="/disclaimer" className="hover:text-accent transition-colors">Medical Disclaimer</a>
              <span>•</span>
              <a href="/accessibility" className="hover:text-accent transition-colors">Accessibility</a>
            </div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                aria-label={`Visit our ${link.name} page`}
                className={`rounded-full p-4 text-muted-foreground transition-all duration-300 hover:bg-accent/10 ${link.color} hover:shadow-lg`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Medical Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-muted/30 rounded-2xl p-6 border border-border/10"
        >
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong className="text-foreground">Medical Disclaimer:</strong> This website provides educational information only and is not a substitute for professional medical advice. 
            Individual results may vary. Always consult with a qualified dermatologist before starting any new skincare regimen or treatment. 
            Products have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </motion.div>
      </div>
    </section>
  );
};