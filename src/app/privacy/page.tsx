"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "overview", title: "Overview" },
    { id: "information-collection", title: "Information Collection" },
    { id: "usage", title: "How We Use Information" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "sharing", title: "Data Sharing" },
    { id: "security", title: "Data Security" },
    { id: "rights", title: "Your Rights" },
    { id: "contact", title: "Contact Us" },
    { id: "updates", title: "Policy Updates" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to SKIN DOCTOR</span>
            </Link>
            <div className="font-display text-xl font-semibold text-foreground">
              SKIN DOCTOR
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                          activeSection === section.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                        onClick={() => setActiveSection(section.id)}
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-secondary p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Shield className="w-12 h-12 text-accent" />
                  </div>
                  <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                    Privacy Policy
                  </h1>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Your privacy is important to us. This policy explains how SKIN DOCTOR collects, 
                    uses, and protects your personal information.
                  </p>
                  <div className="mt-6 text-sm text-muted-foreground">
                    Last updated: January 2024
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-12">
                  {/* Overview */}
                  <section id="overview" className="scroll-mt-32">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Overview
                    </h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        SKIN DOCTOR is committed to protecting your privacy and ensuring the security of your personal information. 
                        This Privacy Policy describes how we collect, use, share, and protect information when you use our 
                        skincare consultation platform and related services.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        By using our services, you agree to the collection and use of information in accordance with this policy. 
                        We will not use or share your information with anyone except as described in this Privacy Policy.
                      </p>
                    </div>
                  </section>

                  {/* Information Collection */}
                  <section id="information-collection" className="scroll-mt-32">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Information We Collect
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-secondary/50 rounded-lg p-6">
                        <h3 className="font-semibold text-foreground mb-3">Personal Information</h3>
                        <ul className="text-muted-foreground space-y-2">
                          <li>• Name, email address, and contact information</li>
                          <li>• Account credentials and profile information</li>
                          <li>• Billing and payment information</li>
                          <li>• Skin concern details and consultation history</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-6">
                        <h3 className="font-semibold text-foreground mb-3">Automatically Collected Information</h3>
                        <ul className="text-muted-foreground space-y-2">
                          <li>• Device information (IP address, browser type, operating system)</li>
                          <li>• Usage data (pages visited, time spent, interactions)</li>
                          <li>• Location data (with your permission)</li>
                          <li>• Cookies and similar tracking technologies</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Usage */}
                  <section id="usage" className="scroll-mt-32">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      How We Use Your Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium text-foreground">Service Provision</h4>
                            <p className="text-sm text-muted-foreground">Provide personalized skincare recommendations and consultations</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium text-foreground">Communication</h4>
                            <p className="text-sm text-muted-foreground">Send important updates, newsletters, and promotional content</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium text-foreground">Payment Processing</h4>
                            <p className="text-sm text-muted-foreground">Process transactions and manage billing</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium text-foreground">Improvement</h4>
                            <p className="text-sm text-muted-foreground">Analyze usage patterns to improve our services</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium text-foreground">Legal Compliance</h4>
                            <p className="text-sm text-muted-foreground">Comply with legal obligations and protect rights</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-medium text-foreground">Security</h4>
                            <p className="text-sm text-muted-foreground">Maintain security and prevent fraud</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Cookies */}
                  <section id="cookies" className="scroll-mt-32">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Cookies & Tracking Technologies
                    </h2>
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        We use cookies and similar tracking technologies to enhance your experience on our platform. 
                        These technologies help us remember your preferences, analyze site usage, and provide personalized content.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-muted/30 rounded-lg p-4">
                          <h4 className="font-medium text-foreground mb-2">Essential Cookies</h4>
                          <p className="text-sm text-muted-foreground">Required for basic site functionality and security</p>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4">
                          <h4 className="font-medium text-foreground mb-2">Analytics Cookies</h4>
                          <p className="text-sm text-muted-foreground">Help us understand how you use our site</p>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4">
                          <h4 className="font-medium text-foreground mb-2">Marketing Cookies</h4>
                          <p className="text-sm text-muted-foreground">Used to deliver relevant advertisements</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Sharing */}
                  <section id="sharing" className="scroll-mt-32">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Data Sharing & Third Parties
                    </h2>
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                        except in the following circumstances:
                      </p>
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                        <h3 className="font-semibold text-foreground mb-3 flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-destructive" />
                          Limited Sharing Only
                        </h3>
                        <ul className="text-muted-foreground space-y-2">
                          <li>• Service providers who assist in our operations (with strict confidentiality agreements)</li>
                          <li>• Legal requirements when compelled by law or court order</li>
                          <li>• Protection of rights, property, or safety of SKIN DOCTOR or others</li>
                          <li>• Business transfers (mergers, acquisitions) with continued privacy protection</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Security */}
                  <section id="security" className="scroll-mt-32">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Data Security Measures
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                          <h4 className="font-medium text-success mb-2">Encryption</h4>
                          <p className="text-sm text-muted-foreground">All data transmitted is encrypted using SSL/TLS protocols</p>
                        </div>
                        <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                          <h4 className="font-medium text-success mb-2">Access Controls</h4>
                          <p className="text-sm text-muted-foreground">Strict access controls and employee training programs</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                          <h4 className="font-medium text-success mb-2">Regular Audits</h4>
                          <p className="text-sm text-muted-foreground">Regular security audits and vulnerability assessments</p>
                        </div>
                        <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                          <h4 className="font-medium text-success mb-2">Data Backup</h4>
                          <p className="text-sm text-muted-foreground">Secure data backup and disaster recovery procedures</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Rights */}
                  <section id="rights" className="scroll-mt-32">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Your Privacy Rights
                    </h2>
                    <div className="bg-primary/20 rounded-lg p-6">
                      <p className="text-muted-foreground mb-4">
                        You have the following rights regarding your personal information:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-foreground font-medium">Access your data</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-foreground font-medium">Correct inaccuracies</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-foreground font-medium">Delete your account</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-foreground font-medium">Data portability</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-foreground font-medium">Opt-out of marketing</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-foreground font-medium">Restrict processing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Contact */}
                  <section id="contact" className="scroll-mt-32">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Contact Us
                    </h2>
                    <div className="bg-secondary rounded-lg p-6">
                      <p className="text-muted-foreground mb-6">
                        If you have any questions about this Privacy Policy or wish to exercise your privacy rights, 
                        please contact us:
                      </p>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-start space-x-3">
                          <Mail className="w-5 h-5 text-accent mt-1" />
                          <div>
                            <h4 className="font-medium text-foreground">Email</h4>
                            <p className="text-sm text-muted-foreground">privacy@skindoctor.com</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className="w-5 h-5 text-accent mt-1" />
                          <div>
                            <h4 className="font-medium text-foreground">Phone</h4>
                            <p className="text-sm text-muted-foreground">1-800-SKIN-DOC</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-accent mt-1" />
                          <div>
                            <h4 className="font-medium text-foreground">Address</h4>
                            <p className="text-sm text-muted-foreground">123 Wellness Ave, Suite 100<br />Beauty City, BC 12345</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Updates */}
                  <section id="updates" className="scroll-mt-32">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Policy Updates
                    </h2>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <p className="text-muted-foreground leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                        We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 
                        "Last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about 
                        how we protect your information.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-foreground mb-4">
              SKIN DOCTOR
            </div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Professional skincare solutions backed by dermatological expertise and cutting-edge research.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
              © 2024 SKIN DOCTOR. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}