"use client";

import { ChevronRight, Menu } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ITEMS = [
  {
    label: "Solutions",
    href: "#",
    dropdownItems: [
      {
        title: "Acne & Breakout Solutions",
        href: "/products?concern=acne",
        description: "Professional-grade treatments to clear breakouts and prevent future acne",
      },
      {
        title: "Anti-Aging & Wrinkles",
        href: "/products?concern=aging",
        description: "Advanced formulas to reduce fine lines and restore youthful radiance",
      },
      {
        title: "Hyperpigmentation Care",
        href: "/products?concern=pigmentation",
        description: "Targeted treatments for dark spots, melasma, and uneven skin tone",
      },
      {
        title: "Sensitive Skin Relief",
        href: "/products?concern=sensitive",
        description: "Gentle, dermatologist-approved solutions for reactive and delicate skin",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    dropdownItems: [
      {
        title: "Face Care Essentials",
        href: "/products?category=face",
        description: "Complete facial skincare routines for every skin type and concern",
      },
      {
        title: "Body Care Solutions",
        href: "/products?category=body",
        description: "Nourishing treatments for smooth, healthy skin from head to toe",
      },
      {
        title: "Treatment Serums",
        href: "/products?category=treatments",
        description: "High-performance serums with clinically-proven active ingredients",
      },
    ],
  },
  { label: "Skin Analysis", href: "/analysis" },
  { label: "Expert Consultation", href: "/consultation" },
  { label: "About", href: "/about" },
];

const logo = {
  url: "/",
  title: "SKIN DOCTOR",
};

const FloatingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <section className="fixed top-5 left-1/2 z-50 w-[min(95%,800px)] -translate-x-1/2 rounded-full border border-border/20 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5 lg:top-8">
      <div className="flex items-center justify-between px-6 py-4">
        <a href={logo.url} className="flex shrink-0 items-center gap-2" title={logo.title}>
          <span className="font-display text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            SKIN DOCTOR
          </span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList className="gap-1">
            {ITEMS.map((link) =>
              link.dropdownItems ? (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuTrigger className="bg-transparent px-4 py-2 data-[state=open]:bg-accent/10 text-foreground font-medium hover:bg-accent/5 transition-colors rounded-full">
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[500px] space-y-1 p-6 bg-background/95 backdrop-blur-xl border border-border/20 rounded-2xl shadow-xl">
                      {link.dropdownItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="group flex gap-4 rounded-xl p-4 leading-none no-underline outline-hidden transition-all duration-200 select-none hover:bg-accent/10 hover:scale-[1.02] focus:bg-accent/10 focus:text-foreground"
                            >
                              <div className="transition-transform duration-300 group-hover:translate-x-1">
                                <div className="mb-2 text-base leading-tight font-display font-semibold text-foreground">
                                  {item.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-accent/5 transition-all duration-200 rounded-full",
                    )}
                  >
                    {link.label}
                  </a>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <a href="/login" className="max-lg:hidden">
            <Button variant="outline" className="border-accent/20 text-foreground hover:bg-accent/10 hover:border-accent/40 rounded-full font-medium">
              <span className="relative z-10 font-medium">Login</span>
            </Button>
          </a>
          <a href="/signup" className="max-lg:hidden">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium rounded-full shadow-lg shadow-accent/20">
              <span className="relative z-10">Get Started</span>
            </Button>
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="relative flex size-10 items-center justify-center text-muted-foreground lg:hidden rounded-full hover:bg-accent/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <Menu className={`size-5 transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "fixed inset-x-4 top-[calc(100%+1rem)] flex flex-col rounded-3xl border border-border/20 bg-background/95 backdrop-blur-xl p-8 shadow-2xl transition-all duration-500 ease-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100 scale-100"
            : "invisible -translate-y-8 opacity-0 scale-95",
        )}
      >
        <nav className="flex flex-1 flex-col divide-y divide-border/10">
          {ITEMS.map((link) =>
            link.dropdownItems ? (
              <div key={link.label} className="py-6 first:pt-0 last:pb-0">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label,
                    )
                  }
                  className="flex w-full items-center justify-between text-lg font-display font-semibold text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      "size-5 transition-transform duration-300",
                      openDropdown === link.label ? "rotate-90" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500",
                    openDropdown === link.label
                      ? "mt-6 max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <div className="space-y-4 rounded-2xl bg-accent/5 p-6">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="group block rounded-xl p-4 transition-all duration-200 hover:bg-accent/10 hover:scale-[1.02]"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        <div className="transition-transform duration-200 group-hover:translate-x-1">
                          <div className="font-display font-semibold text-foreground mb-2">
                            {item.title}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "py-6 text-lg font-display font-semibold text-foreground transition-colors first:pt-0 last:pb-0 hover:text-accent",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ),
          )}
          
          <div className="pt-8 space-y-4">
            <a
              href="/login"
              className="block w-full text-center py-3 px-6 border border-accent/20 text-foreground font-medium rounded-full hover:bg-accent/10 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="/signup"
              className="block w-full text-center py-3 px-6 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export { FloatingNavbar };