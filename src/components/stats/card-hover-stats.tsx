"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Headphones, Award, Heart, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const statsData = [
  {
    icon: Users,
    heading: "50,000+",
    subheading: "Happy Customers",
    text: "Trusted by thousands worldwide for their complete skincare transformation journey with proven results.",
    metric: "95% customer satisfaction",
    avatars: [
      { src: "https://api.dicebear.com/9.x/adventurer/svg?seed=Customer1", fallback: "C1" },
      { src: "https://api.dicebear.com/9.x/adventurer/svg?seed=Customer2", fallback: "C2" },
      { src: "https://api.dicebear.com/9.x/adventurer/svg?seed=Customer3", fallback: "C3" },
      { src: "https://api.dicebear.com/9.x/adventurer/svg?seed=Customer4", fallback: "C4" },
    ],
  },
  {
    icon: TrendingUp,
    heading: "95%",
    subheading: "Success Rate",
    text: "Clinically proven results with our AI-powered personalized skincare solutions and expert guidance.",
    metric: "Average improvement in 4-6 weeks",
    beforeAfter: [
      { src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=150&h=80&fit=crop&crop=face", alt: "Before treatment" },
      { src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=80&fit=crop&crop=face", alt: "After treatment" },
    ],
  },
  {
    icon: Headphones,
    heading: "24/7",
    subheading: "Expert Support",
    text: "Board-certified dermatologists and skincare specialists available whenever you need personalized guidance.",
    metric: "Average response time: 2 hours",
    teamPhoto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=100&fit=crop",
  },
];

const CardHoverStats = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-semibold">
              <Award className="size-4" />
              Proven Results & Trust
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
            Why <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">50,000+</span> Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Real results, expert care, and personalized support that transforms not just your skin, but your confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {statsData.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={`stat-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-3xl border-2 border-border/20 p-8 transition-all duration-500 hover:-translate-y-4 hover:border-accent/30 hover:shadow-2xl bg-card/50 backdrop-blur-sm group cursor-pointer relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-0 relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="relative">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <IconComponent className="h-8 w-8 text-accent transition-all duration-300 group-hover:scale-110" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-5xl md:text-6xl leading-tight font-display font-bold text-foreground mb-2 transition-all duration-300 group-hover:text-accent">
                        {stat.heading}
                      </div>
                      <div className="text-2xl font-display font-semibold text-accent mb-4">
                        {stat.subheading}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground bg-secondary/50 rounded-full px-4 py-2 inline-block mb-4">
                        {stat.metric}
                      </div>
                    </div>

                    <p className="text-base font-body text-muted-foreground mb-8 leading-relaxed">
                      {stat.text}
                    </p>

                    {/* Enhanced Customer Avatars for first stat */}
                    {i === 0 && stat.avatars && (
                      <div className="space-y-4">
                        <div className="flex -space-x-3">
                          {stat.avatars.map((avatar, idx) => (
                            <Avatar key={idx} className="h-12 w-12 border-3 border-background transition-all duration-300 group-hover:scale-110 hover:z-10">
                              <AvatarImage src={avatar.src} alt="" />
                              <AvatarFallback className="bg-gradient-to-r from-accent/20 to-primary/20 text-foreground text-sm font-semibold">
                                {avatar.fallback}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 border-3 border-background flex items-center justify-center text-xs text-foreground font-bold transition-all duration-300 group-hover:scale-110">
                            +1K
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-accent">
                          <Heart className="w-4 h-4 fill-current" />
                          <span className="font-medium">Join our community</span>
                        </div>
                      </div>
                    )}

                    {/* Enhanced Before/After Images for second stat */}
                    {i === 1 && stat.beforeAfter && (
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          {stat.beforeAfter.map((image, idx) => (
                            <div key={idx} className="flex-1 relative overflow-hidden rounded-xl border-2 border-border group-hover:border-accent/30 transition-all duration-300">
                              <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-20 object-cover transition-all duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute bottom-1 left-2 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {idx === 0 ? "Before" : "After"}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-accent">
                          <CheckCircle className="w-4 h-4 fill-current" />
                          <span className="font-medium">Visible transformation</span>
                        </div>
                      </div>
                    )}

                    {/* Enhanced Team Photo for third stat */}
                    {i === 2 && stat.teamPhoto && (
                      <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-2xl border-2 border-border group-hover:border-accent/30 transition-all duration-300">
                          <img 
                            src={stat.teamPhoto} 
                            alt="Expert dermatologist team"
                            className="w-full h-24 object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 left-3 right-3">
                            <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-xs font-medium text-foreground">Board-certified experts</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-accent">
                          <Award className="w-4 h-4 fill-current" />
                          <span className="font-medium">Expert guidance</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Trusted by Leading Dermatologists
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent font-display">100%</div>
                <div className="text-sm text-muted-foreground">Dermatologist Approved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent font-display">0%</div>
                <div className="text-sm text-muted-foreground">Harmful Chemicals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent font-display">30</div>
                <div className="text-sm text-muted-foreground">Day Money-Back Guarantee</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { CardHoverStats };