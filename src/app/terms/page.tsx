import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
              <span className="font-display font-semibold text-xl text-foreground">
                SKIN DOCTOR
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our services. Last updated: December 2024
            </p>
          </div>

          {/* Terms Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-lg border border-border p-8 mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                1. Acceptance of Terms
              </h2>
              <p className="text-foreground mb-4">
                By accessing and using the SKIN DOCTOR website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-foreground">
                These Terms of Service constitute a legally binding agreement between you and SKIN DOCTOR regarding your use of our website, products, and services.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                2. Medical Disclaimers
              </h2>
              <div className="bg-accent/10 border-l-4 border-accent p-6 mb-6 rounded-r-lg">
                <p className="text-foreground font-medium mb-2">
                  <strong>Important Medical Notice:</strong>
                </p>
                <p className="text-foreground">
                  SKIN DOCTOR provides general skincare information and product recommendations for educational purposes only. Our content is not intended to substitute for professional medical advice, diagnosis, or treatment.
                </p>
              </div>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Always consult with a qualified healthcare provider before starting any new skincare regimen
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Individual results may vary and are not guaranteed
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Discontinue use and consult a physician if you experience adverse reactions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  SKIN DOCTOR is not responsible for any adverse effects from product use
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                3. Website Usage Terms
              </h2>
              <p className="text-foreground mb-4">
                Our website is intended for users who are 18 years of age or older. By using this site, you represent and warrant that you are at least 18 years old.
              </p>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">Permitted Uses:</h3>
              <ul className="space-y-2 text-foreground mb-6">
                <li>• Browse and search for skincare information and products</li>
                <li>• Create an account to save preferences and track orders</li>
                <li>• Purchase products for personal use</li>
                <li>• Share content through provided social sharing features</li>
              </ul>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">Prohibited Activities:</h3>
              <ul className="space-y-2 text-foreground">
                <li>• Attempting to gain unauthorized access to any portion of the website</li>
                <li>• Using automated systems to collect data from our site</li>
                <li>• Posting false, misleading, or defamatory content</li>
                <li>• Violating any applicable laws or regulations</li>
                <li>• Impersonating another person or entity</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                4. User Responsibilities
              </h2>
              <p className="text-foreground mb-4">
                As a user of SKIN DOCTOR, you agree to:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-3">Account Security:</h3>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li>• Maintain the confidentiality of your login credentials</li>
                    <li>• Notify us immediately of any unauthorized use</li>
                    <li>• Use strong, unique passwords</li>
                    <li>• Log out of your account when finished</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-3">Accurate Information:</h3>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li>• Provide truthful and accurate information</li>
                    <li>• Update your information as needed</li>
                    <li>• Report any errors or discrepancies</li>
                    <li>• Comply with all applicable laws</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                5. Privacy and Data Collection
              </h2>
              <p className="text-foreground mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated by reference into these Terms.
              </p>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">Data We Collect:</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Account Information</h4>
                  <p className="text-sm text-muted-foreground">Name, email, password, preferences</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Usage Data</h4>
                  <p className="text-sm text-muted-foreground">Site interaction, search history, product views</p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Device Information</h4>
                  <p className="text-sm text-muted-foreground">IP address, browser type, device characteristics</p>
                </div>
              </div>
              <p className="text-foreground">
                We use this information to improve our services, personalize your experience, and communicate with you about products and services that may interest you.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                6. Product Information and Availability
              </h2>
              <p className="text-foreground mb-4">
                We strive to provide accurate product information, but we cannot guarantee that all product descriptions, images, pricing, and availability are completely accurate, complete, or error-free.
              </p>
              <div className="bg-primary/20 border border-primary/30 rounded-lg p-6">
                <h3 className="font-display text-lg font-medium text-foreground mb-3">Important Notes:</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Product colors may appear differently on various devices</li>
                  <li>• Ingredients and formulations may change without notice</li>
                  <li>• Availability is subject to change based on inventory</li>
                  <li>• Prices are subject to change without prior notice</li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                7. Limitation of Liability
              </h2>
              <p className="text-foreground mb-4">
                To the fullest extent permitted by applicable law, SKIN DOCTOR shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2 text-foreground">
                    <li>• Loss of profits or revenue</li>
                    <li>• Loss of data or information</li>
                    <li>• Business interruption</li>
                    <li>• Personal injury or property damage</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-foreground">
                    <li>• Emotional distress</li>
                    <li>• Third-party claims</li>
                    <li>• Service interruptions</li>
                    <li>• Technical malfunctions</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-foreground text-sm">
                  <strong>Maximum Liability:</strong> In no event shall our total liability exceed the amount you paid for the specific product or service that gave rise to the claim.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                8. Intellectual Property
              </h2>
              <p className="text-foreground mb-4">
                All content on the SKIN DOCTOR website, including but not limited to text, graphics, logos, images, audio clips, video, data compilations, and software, is the property of SKIN DOCTOR or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <div className="bg-accent/10 rounded-lg p-6">
                <p className="text-foreground">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                9. Modifications to Terms
              </h2>
              <p className="text-foreground mb-4">
                SKIN DOCTOR reserves the right to modify these Terms of Service at any time. We will notify users of any material changes by:
              </p>
              <ul className="space-y-2 text-foreground mb-4">
                <li>• Posting the updated terms on our website</li>
                <li>• Sending email notifications to registered users</li>
                <li>• Displaying prominent notices on our platform</li>
              </ul>
              <p className="text-foreground">
                Your continued use of our services after any modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                10. Contact Information
              </h2>
              <p className="text-foreground mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">legal@skindoctor.com</p>
                    <p className="text-sm text-muted-foreground">support@skindoctor.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">1-800-SKIN-DOC</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground">123 Beauty Boulevard</p>
                    <p className="text-sm text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-foreground">SKIN DOCTOR</h3>
              <p className="text-sm text-muted-foreground">
                Professional skincare solutions for healthy, radiant skin.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</Link></li>
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-sm text-accent font-medium">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/returns" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Returns</Link></li>
                <li><Link href="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shipping</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="/track" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Track Order</Link></li>
                <li><Link href="/account" className="text-sm text-muted-foreground hover:text-foreground transition-colors">My Account</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 SKIN DOCTOR. All rights reserved. | Professional skincare for healthier skin.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}