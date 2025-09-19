import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FloatingNavbar } from '@/components/navbars/floating-navbar'
import { CenteredTeamCards } from '@/components/teams/centered-team-cards'
import { CardHoverStats } from '@/components/stats/card-hover-stats'
import { ChevronRight, Shield, Award, Users, Clock, CheckCircle, Heart, Microscope, Award as AwardIcon } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Medical Excellence",
      description: "Every treatment is dermatologist-approved and clinically tested for safety and efficacy."
    },
    {
      icon: Heart,
      title: "Patient-Centered Care", 
      description: "Your skin journey is unique. We provide personalized solutions tailored to your specific needs."
    },
    {
      icon: Microscope,
      title: "Science-Driven Approach",
      description: "Backed by the latest dermatological research and cutting-edge skincare technology."
    },
    {
      icon: AwardIcon,
      title: "Premium Quality",
      description: "Only the finest ingredients and proven formulations make it to our treatment recommendations."
    }
  ]

  const certifications = [
    "FDA Approved Treatments",
    "Dermatological Society Certified",
    "ISO 13485 Quality Standards", 
    "GMP Certified Facilities",
    "Clinical Research Validated",
    "International Safety Standards"
  ]

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavbar />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">About</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Transforming Skin Health Through
            <span className="text-accent block mt-2">Scientific Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            SKIN DOCTOR combines the expertise of certified dermatologists with cutting-edge skincare science 
            to deliver personalized solutions that reveal your skin's natural radiance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Shield className="h-4 w-4 mr-2" />
              Dermatologist Approved
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Award className="h-4 w-4 mr-2" />
              Clinically Tested
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Users className="h-4 w-4 mr-2" />
              50,000+ Happy Patients
            </Badge>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Founded in 2018 by a team of renowned dermatologists and skincare researchers, 
                    SKIN DOCTOR was born from a simple belief: everyone deserves access to 
                    professional-grade skincare solutions.
                  </p>
                  <p className="text-lg leading-relaxed">
                    After witnessing countless patients struggle with ineffective over-the-counter 
                    products, our founders set out to bridge the gap between clinical dermatology 
                    and accessible skincare. Today, we've helped over 50,000 individuals achieve 
                    their skin goals through our scientifically-backed approach.
                  </p>
                  <p className="text-lg leading-relaxed">
                    What started as a small clinic has evolved into a comprehensive digital platform, 
                    making expert dermatological care available to anyone, anywhere.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-primary rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-accent/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Clock className="h-16 w-16 text-accent mx-auto mb-4" />
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                        Since 2018
                      </h3>
                      <p className="text-muted-foreground">
                        Leading skincare innovation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Scientific Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              Every recommendation is backed by rigorous scientific research and validated 
              by our team of certified dermatologists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/20"
              >
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Our board-certified dermatologists and skincare specialists are dedicated 
              to helping you achieve your best skin.
            </p>
          </div>
          <CenteredTeamCards />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-muted-foreground">
              Our results speak for themselves. See why patients choose SKIN DOCTOR 
              for their skincare journey.
            </p>
          </div>
          <CardHoverStats />
        </div>
      </section>

      {/* Values & Certifications */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quality & Certifications
              </h2>
              <p className="text-lg text-muted-foreground">
                We maintain the highest standards in skincare through rigorous 
                quality controls and industry certifications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 flex items-center space-x-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-success/10 rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <span className="font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary to-primary/50 rounded-3xl p-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Skin?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a consultation with our expert dermatologists and discover 
                your personalized skincare solution today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-4">SKIN DOCTOR</h3>
              <p className="text-background/80 mb-6 leading-relaxed">
                Professional skincare solutions backed by dermatological science. 
                Transform your skin with our expert-approved treatments.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-background/20 text-background hover:bg-background/10">
                  Follow Us
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/treatments" className="block text-background/80 hover:text-background transition-colors">
                  Treatments
                </Link>
                <Link href="/consultation" className="block text-background/80 hover:text-background transition-colors">
                  Consultation
                </Link>
                <Link href="/contact" className="block text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-background/80">
                <p>1-800-SKIN-DOC</p>
                <p>hello@skindoctor.com</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60">
              © 2024 SKIN DOCTOR. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}