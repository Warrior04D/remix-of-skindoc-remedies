"use client"

import { useState } from "react"
import { Search, ChevronDown, Star, Clock, DollarSign, Filter, Zap, Award, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const skinConcerns = [
  "Acne and breakouts",
  "Fine lines and wrinkles", 
  "Dark spots and hyperpigmentation",
  "Dryness and dehydration",
  "Sensitive and reactive skin",
  "Large pores and blackheads",
  "Uneven skin tone",
  "Dullness and lack of radiance",
  "Rosacea and redness",
  "Oily skin and shine control"
]

const mockProducts = [
  {
    id: 1,
    name: "Advanced Retinol Renewal Serum",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&h=500&fit=crop",
    concern: "Fine lines and wrinkles",
    description: "Clinical-strength retinol formula that accelerates cellular turnover to visibly reduce fine lines and improve skin texture with minimal irritation.",
    price: 89,
    originalPrice: 120,
    rating: 4.8,
    reviews: 1247,
    severity: "moderate",
    skinType: "all",
    badge: "Bestseller",
    resultTime: "4-6 weeks"
  },
  {
    id: 2,
    name: "Gentle Acne Clearing Complex",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop",
    concern: "Acne and breakouts",
    description: "Powerful salicylic acid and niacinamide blend that targets active breakouts while strengthening skin barrier for long-term clarity.",
    price: 65,
    originalPrice: 85,
    rating: 4.6,
    reviews: 892,
    severity: "mild",
    skinType: "oily",
    badge: "Fast Acting",
    resultTime: "2-3 weeks"
  },
  {
    id: 3,
    name: "Brightening Vitamin C Treatment",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
    concern: "Dark spots and hyperpigmentation",
    description: "20% stabilized L-ascorbic acid with kojic acid and arbutin to fade dark spots, even tone, and boost radiance naturally.",
    price: 75,
    originalPrice: 95,
    rating: 4.7,
    reviews: 2156,
    severity: "moderate",
    skinType: "all",
    badge: "Dermatologist Pick",
    resultTime: "6-8 weeks"
  },
  {
    id: 4,
    name: "Ultra Hydrating Barrier Cream",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
    concern: "Dryness and dehydration",
    description: "Rich ceramide and hyaluronic acid complex that restores moisture barrier and provides 48-hour hydration for severely dry skin.",
    price: 52,
    originalPrice: 68,
    rating: 4.9,
    reviews: 3421,
    severity: "severe",
    skinType: "dry",
    badge: "Most Loved",
    resultTime: "1-2 weeks"
  },
  {
    id: 5,
    name: "Calming Sensitivity Relief Gel",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
    concern: "Sensitive and reactive skin",
    description: "Fragrance-free formula with centella asiatica, allantoin, and ceramides to soothe irritation and strengthen sensitive skin.",
    price: 48,
    originalPrice: 60,
    rating: 4.5,
    reviews: 967,
    severity: "mild",
    skinType: "sensitive",
    badge: "Gentle Formula",
    resultTime: "1-2 weeks"
  },
  {
    id: 6,
    name: "Pore Minimizing Treatment Mask",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&h=500&fit=crop",
    concern: "Large pores and blackheads",
    description: "Deep-cleansing kaolin clay with BHA and niacinamide to unclog pores, minimize appearance, and control excess oil production.",
    price: 38,
    originalPrice: 48,
    rating: 4.4,
    reviews: 743,
    severity: "moderate",
    skinType: "combination",
    badge: "Weekly Treatment",
    resultTime: "2-4 weeks"
  },
  {
    id: 7,
    name: "Radiance Boosting Serum",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
    concern: "Dullness and lack of radiance",
    description: "Alpha hydroxy acids with vitamin E and botanical extracts to gently exfoliate and reveal brighter, more luminous skin.",
    price: 58,
    originalPrice: 72,
    rating: 4.6,
    reviews: 1524,
    severity: "mild",
    skinType: "all",
    badge: "Glow Boost",
    resultTime: "3-4 weeks"
  },
  {
    id: 8,
    name: "Rosacea Soothing Complex",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500&h=500&fit=crop",
    concern: "Rosacea and redness",
    description: "Specialized anti-inflammatory blend with green tea, azelaic acid, and peptides to reduce redness and prevent flare-ups.",
    price: 68,
    originalPrice: 85,
    rating: 4.7,
    reviews: 618,
    severity: "moderate",
    skinType: "sensitive",
    badge: "Specialist Care",
    resultTime: "4-6 weeks"
  }
]

export default function SkinConcernSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [skinType, setSkinType] = useState("")
  const [severity, setSeverity] = useState("")
  const [budgetRange, setBudgetRange] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [showFilters, setShowFilters] = useState(false)

  const filteredSuggestions = skinConcerns.filter(concern =>
    concern.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    setShowSuggestions(false)
    filterProducts(term, skinType, severity, budgetRange, sortBy)
  }

  const filterProducts = (search: string, type: string, sev: string, budget: string, sort: string) => {
    let filtered = mockProducts

    if (search) {
      filtered = filtered.filter(product =>
        product.concern.toLowerCase().includes(search.toLowerCase()) ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (type && type !== "all") {
      filtered = filtered.filter(product => 
        product.skinType === type || product.skinType === "all"
      )
    }

    if (sev) {
      filtered = filtered.filter(product => product.severity === sev)
    }

    if (budget) {
      const [min, max] = budget.split("-").map(Number)
      filtered = filtered.filter(product => 
        product.price >= min && (max ? product.price <= max : true)
      )
    }

    // Sorting
    if (sort === "price-low") {
      filtered = filtered.sort((a, b) => a.price - b.price)
    } else if (sort === "price-high") {
      filtered = filtered.sort((a, b) => b.price - a.price)
    } else if (sort === "rating") {
      filtered = filtered.sort((a, b) => b.rating - a.rating)
    } else if (sort === "popular") {
      filtered = filtered.sort((a, b) => b.reviews - a.reviews)
    }

    setFilteredProducts(filtered)
  }

  const handleFilterChange = (filterType: string, value: string) => {
    let newSkinType = skinType
    let newSeverity = severity
    let newBudgetRange = budgetRange
    let newSortBy = sortBy

    if (filterType === "skinType") newSkinType = value
    if (filterType === "severity") newSeverity = value
    if (filterType === "budget") newBudgetRange = value
    if (filterType === "sort") newSortBy = value

    setSkinType(newSkinType)
    setSeverity(newSeverity)
    setBudgetRange(newBudgetRange)
    setSortBy(newSortBy)

    filterProducts(searchTerm, newSkinType, newSeverity, newBudgetRange, newSortBy)
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setSkinType("")
    setSeverity("")
    setBudgetRange("")
    setSortBy("popular")
    setFilteredProducts(mockProducts)
    setShowSuggestions(false)
  }

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="container max-w-7xl">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-medium">
              <Zap className="size-4" />
              Personalized Skincare Solutions
            </span>
          </motion.div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Find Your Perfect
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Skin Solution</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Search through our curated collection of dermatologist-approved treatments. 
            Get personalized recommendations based on your skin type, concerns, and lifestyle.
          </p>
        </motion.div>

        {/* Enhanced Search & Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border p-8 mb-16 shadow-xl"
        >
          {/* Main Search Input */}
          <div className="relative mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Describe your skin concern or search products..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setShowSuggestions(true)
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchTerm)}
                  className="pl-16 pr-6 py-8 text-lg bg-background border-2 border-border rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 shadow-sm"
                />
              </div>
            </div>

            {/* Enhanced Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && filteredSuggestions.length > 0 && searchTerm && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border border-border/20 rounded-2xl mt-2 shadow-2xl z-50 max-h-80 overflow-y-auto"
                >
                  {filteredSuggestions.map((suggestion, index) => (
                    <motion.button
                      key={suggestion}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSearch(suggestion)}
                      className="w-full text-left px-8 py-4 hover:bg-accent/5 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl border-b border-border/10 last:border-b-0 group"
                    >
                      <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                        {suggestion}
                      </span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Filter Toggle & Filters */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 border-accent/20 hover:bg-accent/5"
              >
                <Filter className="size-4" />
                {showFilters ? "Hide Filters" : "Show Filters"}
                <ChevronDown className={`size-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </Button>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
                </span>
                <Select value={sortBy} onValueChange={(value) => handleFilterChange("sort", value)}>
                  <SelectTrigger className="w-48 bg-background border-border rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid md:grid-cols-4 gap-6 pt-6 border-t border-border/20"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Skin Type</label>
                    <Select value={skinType} onValueChange={(value) => handleFilterChange("skinType", value)}>
                      <SelectTrigger className="bg-background border-border rounded-xl h-12">
                        <SelectValue placeholder="All skin types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All skin types</SelectItem>
                        <SelectItem value="all">Universal</SelectItem>
                        <SelectItem value="oily">Oily</SelectItem>
                        <SelectItem value="dry">Dry</SelectItem>
                        <SelectItem value="combination">Combination</SelectItem>
                        <SelectItem value="sensitive">Sensitive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Concern Severity</label>
                    <Select value={severity} onValueChange={(value) => handleFilterChange("severity", value)}>
                      <SelectTrigger className="bg-background border-border rounded-xl h-12">
                        <SelectValue placeholder="Any severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any severity</SelectItem>
                        <SelectItem value="mild">Mild</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="severe">Severe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Budget Range</label>
                    <Select value={budgetRange} onValueChange={(value) => handleFilterChange("budget", value)}>
                      <SelectTrigger className="bg-background border-border rounded-xl h-12">
                        <SelectValue placeholder="Any price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any price</SelectItem>
                        <SelectItem value="0-50">Under $50</SelectItem>
                        <SelectItem value="50-75">$50 - $75</SelectItem>
                        <SelectItem value="75-100">$75 - $100</SelectItem>
                        <SelectItem value="100-999">$100+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button
                      onClick={clearAllFilters}
                      variant="outline"
                      className="w-full h-12 bg-secondary hover:bg-muted border-border rounded-xl"
                    >
                      Clear All
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Enhanced Results Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Enhanced badges and price */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="text-right">
                      <div className="text-lg font-bold text-accent">${product.price}</div>
                      {product.originalPrice > product.price && (
                        <div className="text-xs text-muted-foreground line-through">
                          ${product.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {product.concern}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-medium text-foreground">{product.rating}</span>
                        <span className="text-muted-foreground">({product.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{product.resultTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-xs text-muted-foreground font-medium">
                        Suitable for {product.skinType === "all" ? "all skin types" : product.skinType + " skin"}
                      </span>
                    </div>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] shadow-accent/20">
                      <span className="flex items-center justify-center gap-2">
                        View Solution
                        <Zap className="size-4" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="bg-accent/10 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8">
                <Search className="w-16 h-16 text-accent" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                No solutions found
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg leading-relaxed">
                We couldn't find products matching your criteria. Try adjusting your filters or search terms to discover the perfect skincare solution.
              </p>
              <Button
                onClick={clearAllFilters}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full"
              >
                <span className="flex items-center gap-2">
                  View All Solutions
                  <Sparkles className="size-4" />
                </span>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}