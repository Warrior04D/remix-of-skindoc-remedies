"use client";

import { Star, Award, CheckCircle, Calendar } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface DataItem {
  name: string;
  age: number;
  location: string;
  avatar: string;
  content: string;
  rating: number;
  skinConcern: string;
  treatmentDuration: string;
  beforeAfterImage?: string;
  verified: boolean;
  margin?: string;
}

const TESTIMONIAL_DATA: DataItem[] = [
  {
    name: "Sarah M.",
    age: 28,
    location: "Los Angeles, CA",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah%20M",
    content:
      "My stubborn cystic acne that I've battled for over 10 years is finally under control! The personalized treatment plan from Dr. Chen completely transformed my skin. I went from hiding behind makeup to confidently going makeup-free. The results are absolutely life-changing!",
    rating: 5,
    skinConcern: "Cystic Acne Treatment",
    treatmentDuration: "8 weeks",
    beforeAfterImage: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=120&h=80&fit=crop&crop=face",
    verified: true,
    margin: "mt-6",
  },
  {
    name: "David K.",
    age: 34,
    location: "Chicago, IL",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=David%20K",
    content:
      "After years of dealing with rosacea flare-ups and constant redness, I finally found relief. Dr. Thompson's gentle approach and customized skincare routine eliminated my symptoms completely. My skin is now calm, balanced, and healthier than it's been in decades.",
    rating: 5,
    skinConcern: "Rosacea & Sensitivity",
    treatmentDuration: "6 weeks",
    beforeAfterImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=120&h=80&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Maria L.",
    age: 42,
    location: "Miami, FL",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Maria%20L",
    content:
      "The melasma patches that covered my cheeks for 5 years have almost completely disappeared! Dr. Park's targeted pigmentation treatment exceeded all my expectations. My skin tone is now even, and I feel confident without foundation for the first time in years.",
    rating: 5,
    skinConcern: "Melasma & Hyperpigmentation",
    treatmentDuration: "12 weeks",
    beforeAfterImage: "https://images.unsplash.com/photo-1594824481298-29b0816e9ba9?w=120&h=80&fit=crop&crop=face",
    verified: true,
    margin: "mt-4",
  },
  {
    name: "James W.",
    age: 48,
    location: "New York, NY",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=James%20W",
    content:
      "The deep wrinkles around my eyes and forehead have dramatically softened with Dr. Rodriguez's anti-aging protocol. People constantly ask if I've had work done - it's just incredible skincare! I look 10 years younger and feel more confident than ever.",
    rating: 5,
    skinConcern: "Anti-Aging & Wrinkles",
    treatmentDuration: "10 weeks",
    beforeAfterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=80&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Priya P.",
    age: 31,
    location: "San Francisco, CA",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Priya%20P",
    content:
      "My pregnancy-related dark spots and uneven skin tone have completely cleared up! The custom brightening serum worked wonders, and my skin now has a natural glow I never thought was possible. The expertise here is truly unmatched.",
    rating: 5,
    skinConcern: "Post-Pregnancy Pigmentation",
    treatmentDuration: "9 weeks",
    beforeAfterImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=80&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Michael R.",
    age: 39,
    location: "Seattle, WA",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Michael%20R",
    content:
      "The chronic eczema that plagued me since childhood is finally manageable. Dr. Thompson's barrier repair protocol not only cleared my flare-ups but also strengthened my skin's natural defenses. I can now use products I could never tolerate before.",
    rating: 5,
    skinConcern: "Chronic Eczema",
    treatmentDuration: "7 weeks",
    beforeAfterImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=80&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Emma C.",
    age: 26,
    location: "Austin, TX",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Emma%20C",
    content:
      "My hormonal breakouts that occurred like clockwork every month have stopped completely! The targeted treatment plan addressed the root cause, not just the symptoms. My skin is clearer and more balanced than it's been since high school.",
    rating: 5,
    skinConcern: "Hormonal Acne",
    treatmentDuration: "6 weeks",
    beforeAfterImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=80&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Robert T.",
    age: 52,
    location: "Denver, CO",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Robert%20T",
    content:
      "The age spots and sun damage from years of outdoor work have faded remarkably. Dr. Santos' preventive care approach not only restored my skin but also gave me the knowledge to protect it moving forward. I feel 15 years younger!",
    rating: 5,
    skinConcern: "Sun Damage & Age Spots",
    treatmentDuration: "14 weeks",
    beforeAfterImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=80&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Lisa Z.",
    age: 35,
    location: "Portland, OR",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Lisa%20Z",
    content:
      "My severely dry, flaky skin that never responded to drugstore moisturizers is now smooth and hydrated all day long. The custom barrier repair treatment was exactly what my skin needed. The transformation has been absolutely incredible to witness!",
    rating: 5,
    skinConcern: "Severe Dry Skin",
    treatmentDuration: "5 weeks",
    beforeAfterImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&h=80&fit=crop&crop=face",
    verified: true,
  },
];

const MasonryTestimonialGrid = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-l from-accent/10 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Enhanced Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 px-4 sm:px-8 mb-20"
        >
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-semibold">
                <Award className="size-4" />
                Real Patient Success Stories
              </span>
            </div>
            <h2 className="mb-8 text-center text-4xl md:text-6xl font-display font-bold lg:text-7xl text-foreground leading-tight">
              Life-Changing
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Results</span>
              <br />
              Real Transformations
            </h2>
            <p className="text-center text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed font-body">
              Discover how our personalized skincare solutions have transformed the lives of over 50,000 patients worldwide. 
              These are their authentic stories of skin transformation and renewed confidence.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-accent">
              <Star className="size-5 fill-current" />
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <CheckCircle className="size-5 fill-current" />
              <span className="font-semibold">100% Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Award className="size-5 fill-current" />
              <span className="font-semibold">50,000+ Success Stories</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="after:bg-gradient-to-t after:from-background after:via-background/80 after:to-transparent relative w-full px-4 after:absolute after:inset-x-0 after:-bottom-2 after:h-32 after:pointer-events-none sm:px-8 md:px-16 lg:px-32"
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry gutter="24px" columnsCount={3}>
              {TESTIMONIAL_DATA.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={cn(
                      "rounded-3xl p-8 shadow-lg border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 group",
                      idx > 3 && idx <= 5 && "hidden md:block",
                      idx > 5 && "hidden lg:block",
                      testimonial.margin
                    )}
                  >
                    {/* Enhanced Before/After Photo Preview */}
                    {testimonial.beforeAfterImage && (
                      <div className="mb-6 relative overflow-hidden rounded-2xl border-2 border-border/20 group-hover:border-accent/30 transition-all duration-300">
                        <img
                          src={testimonial.beforeAfterImage}
                          alt="Patient transformation result"
                          className="w-full h-20 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <div className="absolute top-2 left-2 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                          Before → After
                        </div>
                        <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                          {testimonial.treatmentDuration}
                        </div>
                      </div>
                    )}

                    {/* Enhanced Star Rating */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="fill-accent text-accent h-5 w-5" />
                        ))}
                      </div>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1 bg-success/10 text-success px-3 py-1 rounded-full">
                          <CheckCircle className="size-3 fill-current" />
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                      )}
                    </div>

                    {/* Treatment badge */}
                    <div className="mb-4">
                      <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        {testimonial.skinConcern}
                      </span>
                    </div>

                    {/* Enhanced Testimonial Content */}
                    <div className="text-foreground mb-8 text-base font-body leading-relaxed">
                      <q className="text-muted-foreground italic">{testimonial.content}</q>
                    </div>

                    {/* Enhanced Customer Info */}
                    <div className="flex items-start gap-4">
                      <Avatar className="ring-accent/20 size-12 rounded-full ring-2 transition-all duration-300 group-hover:ring-accent/40 group-hover:scale-105">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-display font-bold text-foreground text-lg">{testimonial.name}</p>
                          <span className="text-muted-foreground text-sm">• {testimonial.age}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{testimonial.location}</p>
                        <div className="flex items-center gap-2 text-xs text-accent">
                          <Calendar className="size-3" />
                          <span className="font-medium">Treated in {testimonial.treatmentDuration}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Start your personalized skincare journey today and become our next transformation success story. 
              Our expert dermatologists are ready to help you achieve your skin goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/consultation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-bold px-12 py-4 rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300">
                  Start My Transformation
                </button>
              </motion.a>
              <motion.a
                href="/analysis"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="border-2 border-accent/20 hover:border-accent/40 text-foreground hover:bg-accent/5 font-semibold px-12 py-4 rounded-full transition-all duration-300">
                  Free Skin Analysis
                </button>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { MasonryTestimonialGrid };