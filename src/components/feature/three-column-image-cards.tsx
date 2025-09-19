"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star, Sparkles, Award, Clock } from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    title: "Professional Acne Treatment Kit",
    description: "Complete 3-step system with salicylic acid, benzoyl peroxide, and niacinamide for clear, healthy skin transformation.",
    ingredients: "Salicylic Acid 2%, Benzoyl Peroxide 5%, Niacinamide 10%",
    price: "$65",
    originalPrice: "$89",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.8,
    reviews: 1247,
    badge: "Bestseller",
    resultTime: "2-4 weeks",
    concern: "Acne Treatment"
  },
  {
    title: "Advanced Vitamin C Brightening Serum",
    description: "20% L-ascorbic acid with hyaluronic acid and vitamin E to brighten skin tone and reduce dark spots effectively.",
    ingredients: "L-Ascorbic Acid 20%, Hyaluronic Acid, Vitamin E",
    price: "$42",
    originalPrice: "$58",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.7,
    reviews: 892,
    badge: "Editor's Choice",
    resultTime: "4-6 weeks",
    concern: "Hyperpigmentation"
  },
  {
    title: "Hydrating Rose Peptide Toner",
    description: "Alcohol-free toner with Bulgarian rose water, peptides, and ceramides to hydrate and strengthen skin barrier.",
    ingredients: "Rose Water, Peptides, Ceramides, Glycerin",
    price: "$28",
    originalPrice: "$35",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.9,
    reviews: 2156,
    badge: "Most Loved",
    resultTime: "1-2 weeks",
    concern: "Hydration"
  },
  {
    title: "Anti-Aging Retinol Night Complex",
    description: "Time-released retinol with bakuchiol and squalane for powerful anti-aging benefits without irritation.",
    ingredients: "Retinol 1%, Bakuchiol, Squalane, Peptides",
    price: "$78",
    originalPrice: "$98",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.6,
    reviews: 743,
    badge: "Clinical Strength",
    resultTime: "6-8 weeks",
    concern: "Anti-Aging"
  },
  {
    title: "Gentle Exfoliating AHA/BHA Scrub",
    description: "Dual-action exfoliant with glycolic acid and jojoba beads for smooth, radiant complexion without over-exfoliation.",
    ingredients: "Glycolic Acid 5%, Jojoba Beads, Chamomile",
    price: "$35",
    originalPrice: "$45",
    image: "https://images.unsplash.com/photo-1556228578-dd302b7f1c5d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.5,
    reviews: 1524,
    badge: "Gentle Formula",
    resultTime: "2-3 weeks",
    concern: "Exfoliation"
  },
  {
    title: "Soothing Centella Recovery Gel",
    description: "Ultra-gentle gel with 95% centella asiatica extract to calm irritation and provide instant relief for sensitive skin.",
    ingredients: "Centella Asiatica 95%, Aloe Vera, Allantoin",
    price: "$32",
    originalPrice: "$42",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.8,
    reviews: 967,
    badge: "Sensitive Skin",
    resultTime: "Immediate",
    concern: "Sensitivity Relief"
  },
];

const ThreeColumnImageCards = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="m-auto mb-20 max-w-4xl text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-semibold">
              <Sparkles className="size-4" />
              Premium Skincare Collection
            </span>
          </div>
          <h2 className="mb-8 text-4xl md:text-6xl font-bold lg:text-7xl font-display text-foreground leading-tight">
            Curated Solutions for 
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Every Skin Need</span>
          </h2>
          <p className="m-auto max-w-3xl text-lg lg:text-xl text-muted-foreground leading-relaxed font-body">
            Professional-grade home treatments backed by dermatological expertise. 
            Each product is carefully formulated with clinically-proven ingredients for visible results.
          </p>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-card hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Enhanced overlays and badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-2">
                    <div className="text-right">
                      <div className="text-sm font-bold text-accent">{product.price}</div>
                      <div className="text-xs text-muted-foreground line-through">
                        {product.originalPrice}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-background/95 backdrop-blur-sm rounded-xl p-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          <span className="font-medium text-foreground">{product.rating}</span>
                          <span className="text-muted-foreground">({product.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{product.resultTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {product.concern}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium text-foreground">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="mb-4 font-bold text-xl font-display text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Key Ingredients:</span> {product.ingredients}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-accent font-display">{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">{product.originalPrice}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>Results in {product.resultTime}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] shadow-accent/20 group/btn">
                      <span className="flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                        Add to Cart
                        <Award className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-all duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-bold px-12 py-4 rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-3">
              View Complete Collection
              <Sparkles className="size-5" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export { ThreeColumnImageCards };