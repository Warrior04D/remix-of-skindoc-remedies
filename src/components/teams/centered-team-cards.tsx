"use client"

import { Linkedin, Twitter, Award, Calendar, Star, MapPin } from "lucide-react";
import { motion } from "motion/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  credentials: string;
  experience: string;
  location: string;
  rating: number;
  consultations: number;
  avatar: string;
  linkedin?: string;
  twitter?: string;
  bio: string;
}

interface CenteredTeamCardsProps {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

// Expert dermatologist team with enhanced details
const DermatologyExperts = [
  {
    id: "dermatologist-1",
    name: "Dr. Sarah Chen",
    role: "Lead Acne Specialist",
    specialty: "Advanced acne treatment, hormonal acne, and scar revision",
    credentials: "MD, Board-Certified Dermatologist, FAAD",
    experience: "12 years",
    location: "Beverly Hills, CA",
    rating: 4.9,
    consultations: 2500,
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah%20Chen",
    linkedin: "#",
    twitter: "#",
    bio: "Specializes in treating complex acne cases and has developed innovative protocols for hormonal acne management.",
  },
  {
    id: "dermatologist-2",
    name: "Dr. Michael Rodriguez",
    role: "Anti-Aging Expert",
    specialty: "Cosmetic dermatology, injectables, and skin rejuvenation",
    credentials: "MD, FAAD, Fellowship in Cosmetic Dermatology",
    experience: "15 years",
    location: "Miami, FL",
    rating: 4.8,
    consultations: 3200,
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Michael%20Rodriguez",
    linkedin: "#",
    twitter: "#",
    bio: "Pioneer in non-invasive anti-aging treatments with expertise in combining multiple modalities for optimal results.",
  },
  {
    id: "dermatologist-3",
    name: "Dr. Emily Thompson",
    role: "Sensitive Skin Specialist",
    specialty: "Eczema, rosacea, allergic reactions, and barrier repair",
    credentials: "MD, PhD in Dermatology, Research Fellowship",
    experience: "10 years",
    location: "Seattle, WA",
    rating: 4.9,
    consultations: 1800,
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Emily%20Thompson",
    linkedin: "#",
    twitter: "#",
    bio: "Research-focused dermatologist with extensive experience in treating complex sensitive skin conditions and developing gentle protocols.",
  },
  {
    id: "dermatologist-4",
    name: "Dr. James Park",
    role: "Pigmentation Expert",
    specialty: "Melasma, hyperpigmentation, vitiligo, and laser therapy",
    credentials: "MD, Board-Certified Dermatologist, Laser Fellowship",
    experience: "14 years",
    location: "New York, NY",
    rating: 4.8,
    consultations: 2900,
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=James%20Park",
    linkedin: "#",
    twitter: "#",
    bio: "Leading expert in pigmentation disorders with advanced training in laser technologies and combination therapies.",
  },
  {
    id: "dermatologist-5",
    name: "Dr. Maria Santos",
    role: "Preventive Care Specialist",
    specialty: "Skin cancer screening, prevention, and early detection",
    credentials: "MD, FAAD, Dermatopathology Fellowship",
    experience: "18 years",
    location: "Austin, TX",
    rating: 4.9,
    consultations: 4100,
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Maria%20Santos",
    linkedin: "#",
    twitter: "#",
    bio: "Dermapathologist with expertise in skin cancer detection and prevention strategies for high-risk patients.",
  },
  {
    id: "dermatologist-6",
    name: "Dr. David Kim",
    role: "Pediatric Dermatologist",
    specialty: "Children's skin conditions, eczema, and genetic disorders",
    credentials: "MD, Board-Certified Pediatric Dermatology",
    experience: "11 years",
    location: "San Francisco, CA",
    rating: 4.9,
    consultations: 1600,
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=David%20Kim",
    linkedin: "#",
    twitter: "#",
    bio: "Specialized in treating skin conditions in children and adolescents with a gentle, family-centered approach.",
  },
];

const CenteredTeamCards = ({
  heading = "Meet Our Board-Certified Experts",
  description = "World-class dermatologists providing personalized care and cutting-edge treatments",
  members = DermatologyExperts,
}: CenteredTeamCardsProps) => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-l from-primary/5 to-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-semibold">
              <Award className="size-4" />
              Expert Medical Team
            </span>
          </div>
          <h2 className="mb-8 text-4xl md:text-6xl font-display font-bold tracking-tight lg:text-7xl text-foreground leading-tight">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed font-body">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl border-2 border-border/20 p-8 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:border-accent/30 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Enhanced Avatar Section */}
                  <div className="mb-8 relative">
                    <div className="relative">
                      <Avatar className="size-32 lg:size-36 border-4 border-accent/20 group-hover:border-accent/50 transition-all duration-500 group-hover:scale-105">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback className="text-xl font-bold bg-gradient-to-r from-accent/20 to-primary/20 text-foreground">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {/* Online indicator */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-background flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Rating badge */}
                    <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground rounded-full px-3 py-1 text-sm font-bold flex items-center gap-1 shadow-lg">
                      <Star className="size-3 fill-current" />
                      {member.rating}
                    </div>
                  </div>

                  {/* Enhanced Member Info */}
                  <div className="mb-8 space-y-4 w-full">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-accent font-semibold text-lg font-body">
                        {member.role}
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <p className="text-muted-foreground font-body leading-relaxed">
                        {member.specialty}
                      </p>
                      
                      {/* Credentials and stats */}
                      <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Award className="size-3 text-accent" />
                          <span>{member.credentials}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="size-3 text-accent" />
                          <span>{member.experience} of experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <MapPin className="size-3 text-accent" />
                          <span>{member.location}</span>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-muted-foreground text-sm leading-relaxed font-body">
                        {member.bio}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between items-center bg-accent/5 rounded-xl p-3">
                        <div className="text-center">
                          <div className="font-bold text-accent">{member.consultations.toLocaleString()}+</div>
                          <div className="text-xs text-muted-foreground">Consultations</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-accent flex items-center justify-center gap-1">
                            <Star className="size-3 fill-accent" />
                            {member.rating}
                          </div>
                          <div className="text-xs text-muted-foreground">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action Section */}
                  <div className="w-full space-y-4">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                      Book Consultation
                    </Button>
                    
                    <div className="flex gap-3 justify-center">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="bg-muted/50 hover:bg-accent/10 hover:text-accent rounded-xl p-3 transition-all duration-300 hover:scale-110"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="size-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          className="bg-muted/50 hover:bg-accent/10 hover:text-accent rounded-xl p-3 transition-all duration-300 hover:scale-110"
                          aria-label={`${member.name} Twitter`}
                        >
                          <Twitter className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Connect with our expert dermatologists for a personalized consultation and discover the perfect skincare solution for your unique needs.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-bold px-12 py-4 rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { CenteredTeamCards };