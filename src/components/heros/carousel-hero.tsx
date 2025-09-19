"use client";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import { ArrowRight, Search, Sparkles, Shield, Users } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CarouselHero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const Images = [
    {
      image:
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Transform Your Skin with Expert Care",
      description:
        "Discover personalized skincare solutions backed by dermatological science. Get professional-grade treatments delivered to your home.",
      cta: "Start Your Skin Journey",
      link: "/analysis",
      stats: "50,000+ Success Stories",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Natural Remedies Meet Modern Science",
      description:
        "Harness nature's most powerful ingredients enhanced by cutting-edge dermatological research for visible results.",
      cta: "Explore Solutions",
      link: "/products",
      stats: "95% Success Rate",
    },
    {
      image:
        "https://images.unsplash.com/photo-1594736797933-d0bba2443d41?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Your Personal Skin Doctor",
      description:
        "Connect with certified dermatologists who understand your unique skin needs and guide your transformation journey.",
      cta: "Book Consultation",
      link: "/consultation",
      stats: "24/7 Expert Support",
    },
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleSearch = () => {
    if (searchValue.trim()) {
      // Navigate to search results or show search modal
      console.log("Searching for:", searchValue);
    }
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Enhanced Search Bar - Above carousel */}
      <div className="relative z-20 pt-32 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl px-6"
        >
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight"
            >
              Your <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Perfect</span> Skin
              <br />
              Awaits Discovery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed"
            >
              Get personalized skincare solutions from certified dermatologists. 
              Transform your skin with professional-grade treatments designed just for you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center bg-background/80 backdrop-blur-xl border-2 border-border rounded-full p-2 shadow-2xl shadow-black/5">
                <Search className="absolute left-6 size-6 text-muted-foreground z-10" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Tell us your skin concern... (acne, wrinkles, dark spots, sensitivity)"
                  className="w-full pl-16 pr-6 py-5 text-lg font-body bg-transparent placeholder:text-muted-foreground/60 focus:outline-none text-foreground"
                />
                <Button 
                  onClick={handleSearch}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Find My Solution
                    <Sparkles className="size-4" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Quick suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 flex flex-wrap justify-center gap-3"
            >
              {["Acne & Breakouts", "Anti-Aging", "Dark Spots", "Sensitive Skin"].map((concern) => (
                <button
                  key={concern}
                  onClick={() => setSearchValue(concern)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground bg-secondary/60 hover:bg-accent/10 hover:text-accent rounded-full transition-all duration-200 border border-border/20"
                >
                  {concern}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Carousel */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6"
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="flex w-full gap-8">
              {Images.map((img, index) => (
                <CarouselItem key={index} className="w-full basis-[92%]">
                  <motion.div
                    className="p-3"
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="group relative flex h-[650px] flex-col items-center justify-end overflow-hidden rounded-3xl border-2 border-border/10 bg-muted shadow-2xl shadow-black/20 backdrop-blur-sm">
                      <div className="pointer-events-none absolute inset-0">
                        <img
                          src={img.image}
                          alt={img.title}
                          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />

                        {/* Enhanced gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      <div className="relative z-10 flex h-full w-full flex-col justify-between p-12">
                        {/* Top section with features */}
                        <div className="flex justify-between items-start">
                          <div className="flex gap-6">
                            <div className="flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white border border-white/20">
                              <Shield className="size-4" />
                              Dermatologist Approved
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white border border-white/20">
                              <Users className="size-4" />
                              {img.stats}
                            </div>
                          </div>
                          <div className="rounded-full bg-accent/30 backdrop-blur-md px-6 py-3 text-sm font-bold text-white border border-accent/40">
                            0{index + 1}
                          </div>
                        </div>

                        {/* Main Content */}
                        <div className="text-white max-w-3xl mx-auto text-center">
                          <motion.h2
                            className="text-5xl md:text-6xl font-display font-bold tracking-tight leading-tight mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            {img.title}
                          </motion.h2>
                          <motion.p
                            className="text-xl md:text-2xl leading-relaxed text-white/90 font-body mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >
                            {img.description}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                          >
                            <a href={img.link}>
                              <Button
                                size="lg"
                                className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-4 rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                              >
                                <span className="relative z-10 flex items-center gap-3">
                                  {img.cta}
                                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </Button>
                            </a>
                          </motion.div>
                        </div>

                        {/* Bottom spacer */}
                        <div></div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Enhanced indicators */}
            <div className="mt-12 flex justify-center gap-4">
              {Array.from({ length: Images.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`relative overflow-hidden rounded-full transition-all duration-500 hover:scale-125 ${
                    current === index
                      ? "h-4 w-12 bg-accent shadow-xl shadow-accent/40"
                      : "h-4 w-4 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {current === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent"
                      layoutId="activeSlider"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </Carousel>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export { CarouselHero };