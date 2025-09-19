"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Home, Phone, Mail, MapPin, Stethoscope, Sparkles, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const popularLinks = [
    {
      title: "Skin Analysis",
      description: "Get personalized recommendations",
      href: "/analysis",
      icon: Sparkles,
      color: "bg-primary/10 text-primary-foreground"
    },
    {
      title: "Book Consultation",
      description: "Schedule with our experts",
      href: "/consultation",
      icon: Stethoscope,
      color: "bg-accent/10 text-accent-foreground"
    },
    {
      title: "Browse Products",
      description: "Discover skincare solutions",
      href: "/products",
      icon: Star,
      color: "bg-success/10 text-success"
    }
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Consultation", href: "/consultation" },
    { label: "Skin Analysis", href: "/analysis" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                SKIN DOCTOR
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              {quickLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          {/* 404 Animation */}
          <div className="mb-8 relative">
            <div className="text-8xl font-display font-bold text-primary/20 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center animate-pulse">
                <Search className="w-8 h-8 text-accent" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We couldn't find the page you're looking for. It might have been moved, 
            deleted, or you entered the wrong URL. Let us help you find what you need.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for products, treatments, or concerns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 w-full rounded-full border-2 border-border focus:border-accent transition-colors"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Search
              </Button>
            </div>
          </form>
        </div>

        {/* Popular Actions */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-center text-foreground mb-8">
            Popular Actions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {popularLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group">
                <Card className="h-full border-2 border-border hover:border-accent transition-all duration-300 group-hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <link.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {link.description}
                    </p>
                    <div className="flex items-center justify-center text-accent group-hover:text-accent/80 transition-colors">
                      <span className="text-sm font-medium mr-2">Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-center text-foreground mb-8">
            Quick Navigation
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="outline"
                  className="border-2 border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="border-2 border-border">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                Need More Help?
              </h2>
              <p className="text-muted-foreground">
                Our skincare experts are here to assist you
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+1-555-SKIN-DOC" className="hover:text-accent transition-colors">
                    +1 (555) SKIN-DOC
                  </a>
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:help@skindoctor.com" className="hover:text-accent transition-colors">
                    help@skindoctor.com
                  </a>
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                <p className="text-sm text-muted-foreground">
                  123 Beauty Avenue<br />
                  Skincare City, SC 12345
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Home Button */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/50 mt-16">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="font-display text-lg font-semibold text-foreground">
                SKIN DOCTOR
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional skincare solutions for beautiful, healthy skin
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}