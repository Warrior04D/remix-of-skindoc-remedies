"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, Share2, Star, Plus, Minus, ShoppingCart, Eye, MessageCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Mock product data
const productData = {
  1: {
    id: 1,
    name: "Vitamin C Brightening Serum",
    brand: "LuxeDerm",
    shortDescription: "Advanced vitamin C serum for radiant, glowing skin",
    longDescription: "Our clinically-proven Vitamin C Brightening Serum combines 20% L-Ascorbic Acid with stabilized vitamin E and ferulic acid to deliver maximum antioxidant protection and brightening benefits. This powerful formula targets dark spots, uneven skin tone, and dullness while promoting collagen synthesis for firmer, more youthful-looking skin.",
    price: 89,
    originalPrice: 119,
    discount: 25,
    rating: 4.8,
    reviewCount: 1247,
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ],
    category: "Serums",
    skinType: ["All skin types", "Dull skin", "Aging skin"],
    concerns: ["Dark spots", "Uneven tone", "Fine lines", "Dullness"],
    benefits: [
      "Brightens skin tone in 2 weeks",
      "Reduces dark spots by 40%",
      "Boosts collagen production",
      "Provides antioxidant protection",
      "Improves skin texture and firmness"
    ],
    ingredients: [
      { name: "L-Ascorbic Acid (Vitamin C)", percentage: "20%", purpose: "Brightening and antioxidant protection" },
      { name: "Vitamin E", percentage: "1%", purpose: "Stabilizes vitamin C and provides additional antioxidants" },
      { name: "Ferulic Acid", percentage: "0.5%", purpose: "Enhances vitamin C stability and efficacy" },
      { name: "Hyaluronic Acid", percentage: "2%", purpose: "Provides deep hydration and plumping" },
      { name: "Niacinamide", percentage: "5%", purpose: "Minimizes pores and regulates oil production" }
    ],
    usage: [
      "Apply to clean, dry skin in the morning",
      "Use 2-3 drops and gently pat into face and neck",
      "Always follow with SPF 30 or higher during the day",
      "Start with every other day and gradually increase to daily use",
      "Store in a cool, dark place to maintain potency"
    ],
    beforeAfter: [
      { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "4 weeks" },
      { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "8 weeks" },
      { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "12 weeks" }
    ],
    reviews: [
      {
        id: 1,
        user: "Sarah M.",
        rating: 5,
        date: "2024-01-15",
        title: "Amazing results!",
        comment: "I've been using this serum for 6 weeks and the difference is incredible. My dark spots have faded significantly and my skin has a natural glow.",
        verified: true,
        helpful: 23
      },
      {
        id: 2,
        user: "Jennifer L.",
        rating: 4,
        date: "2024-01-10",
        title: "Great vitamin C serum",
        comment: "Love this product! It doesn't irritate my sensitive skin and I've noticed my complexion is brighter. The packaging keeps it stable too.",
        verified: true,
        helpful: 18
      },
      {
        id: 3,
        user: "Maria C.",
        rating: 5,
        date: "2024-01-08",
        title: "Holy grail product",
        comment: "This is my third bottle. Nothing compares to the results I get with this serum. My skin looks 10 years younger!",
        verified: true,
        helpful: 31
      }
    ],
    inStock: true,
    volume: "30ml",
    shelfLife: "12 months"
  },
  2: {
    id: 2,
    name: "Retinol Renewal Night Treatment",
    brand: "DermaCare",
    shortDescription: "Professional-strength retinol for anti-aging and skin renewal",
    longDescription: "Transform your skin overnight with our advanced Retinol Renewal Night Treatment. Formulated with 0.5% encapsulated retinol and botanical soothing agents, this treatment accelerates cell turnover, reduces fine lines, and improves skin texture while you sleep.",
    price: 156,
    originalPrice: 195,
    discount: 20,
    rating: 4.9,
    reviewCount: 892,
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ],
    category: "Treatments",
    skinType: ["Normal", "Dry", "Aging"],
    concerns: ["Fine lines", "Wrinkles", "Texture", "Aging"],
    benefits: [
      "Reduces fine lines by 35%",
      "Improves skin texture",
      "Accelerates cell renewal",
      "Minimizes pore appearance",
      "Evens skin tone"
    ],
    ingredients: [
      { name: "Encapsulated Retinol", percentage: "0.5%", purpose: "Anti-aging and cell renewal" },
      { name: "Bakuchiol", percentage: "1%", purpose: "Natural retinol alternative with soothing properties" },
      { name: "Ceramides", percentage: "3%", purpose: "Strengthens skin barrier and prevents moisture loss" },
      { name: "Peptide Complex", percentage: "2%", purpose: "Stimulates collagen production" }
    ],
    usage: [
      "Use only at night on clean, dry skin",
      "Start with 2-3 times per week",
      "Apply a pea-sized amount to face and neck",
      "Always use SPF during the day",
      "Avoid eye area"
    ],
    beforeAfter: [
      { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "6 weeks" },
      { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "12 weeks" }
    ],
    reviews: [
      {
        id: 1,
        user: "Lisa K.",
        rating: 5,
        date: "2024-01-12",
        title: "Best retinol I've used",
        comment: "No irritation and amazing results. My skin is smoother and fine lines are less visible.",
        verified: true,
        helpful: 15
      }
    ],
    inStock: true,
    volume: "50ml",
    shelfLife: "18 months"
  }
};

// Related products data
const relatedProducts = [
  { id: 3, name: "Hyaluronic Acid Moisturizer", price: 67, rating: 4.7, image: "/api/placeholder/300/300" },
  { id: 4, name: "Gentle Cleansing Oil", price: 45, rating: 4.6, image: "/api/placeholder/300/300" },
  { id: 5, name: "SPF 50 Mineral Sunscreen", price: 38, rating: 4.8, image: "/api/placeholder/300/300" },
  { id: 6, name: "Peptide Eye Cream", price: 125, rating: 4.9, image: "/api/placeholder/300/300" }
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;
  
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  useEffect(() => {
    if (productId) {
      const foundProduct = productData[parseInt(productId)];
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        // Handle 404 case
        router.push("/404");
      }
    }
  }, [productId, router]);

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Product link copied to clipboard");
    }
  };

  const handleSubmitReview = () => {
    toast.success("Thank you for your review! It will be published after verification.");
    setReviewText("");
    setReviewRating(5);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg text-muted-foreground">Loading product details...</div>
      </div>
    );
  }

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <>
      <title>{product.name} - {product.brand} | Skin Doctor</title>
      <meta name="description" content={product.longDescription} />
      <meta property="og:title" content={`${product.name} - ${product.brand}`} />
      <meta property="og:description" content={product.shortDescription} />
      <meta property="og:image" content={product.images[0]} />
      
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => router.back()}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to results
              </Button>
              
              <Link href="/" className="font-display text-xl font-semibold">
                SKIN DOCTOR
              </Link>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={handleWishlist}>
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8">
          {/* Product Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
                <Image 
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-accent' : 'border-border'
                    }`}
                  >
                    <Image 
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">{product.brand}</Badge>
                <h1 className="text-3xl font-display font-semibold mb-2">{product.name}</h1>
                <p className="text-muted-foreground text-lg">{product.shortDescription}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-display font-semibold">${product.price}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                    <Badge variant="destructive">{discountPercentage}% OFF</Badge>
                  </>
                )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
              </div>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <span className="text-sm text-muted-foreground">Volume</span>
                  <p className="font-medium">{product.volume}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Shelf Life</span>
                  <p className="font-medium">{product.shelfLife}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Category</span>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Stock</span>
                  <p className="font-medium text-success">In Stock</p>
                </div>
              </div>

              {/* Skin Types */}
              <div>
                <span className="text-sm text-muted-foreground block mb-2">Suitable for:</span>
                <div className="flex flex-wrap gap-2">
                  {product.skinType.map((type, index) => (
                    <Badge key={index} variant="outline">{type}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">{product.longDescription}</p>
                  
                  <div className="mt-6">
                    <h3 className="font-display text-xl font-semibold mb-4">Addresses these concerns:</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.concerns.map((concern, index) => (
                        <Badge key={index} variant="secondary">{concern}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-4">Active Ingredients</h3>
                  <div className="space-y-4">
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{ingredient.name}</h4>
                          <Badge variant="outline">{ingredient.percentage}</Badge>
                        </div>
                        <p className="text-muted-foreground">{ingredient.purpose}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-4">How to Use</h3>
                  <ol className="space-y-3">
                    {product.usage.map((step, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center font-medium">
                          {index + 1}
                        </div>
                        <span className="text-lg">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-6">Real Results</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {product.beforeAfter.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div>
                            <Image 
                              src={result.before}
                              alt="Before"
                              width={150}
                              height={200}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <p className="text-sm text-muted-foreground mt-1">Before</p>
                          </div>
                          <div>
                            <Image 
                              src={result.after}
                              alt="After"
                              width={150}
                              height={200}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <p className="text-sm text-muted-foreground mt-1">After</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{result.timeframe}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Reviews Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-semibold">Customer Reviews</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="text-lg font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Review Stats */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Rating Distribution</h4>
                    {[5, 4, 3, 2, 1].map(rating => (
                      <div key={rating} className="flex items-center gap-3 mb-2">
                        <span className="text-sm w-8">{rating}★</span>
                        <Progress value={rating === 5 ? 80 : rating === 4 ? 15 : 5} className="flex-1" />
                        <span className="text-sm text-muted-foreground w-12">{rating === 5 ? '80%' : rating === 4 ? '15%' : '5%'}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Review Highlights</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">95% would recommend</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Results seen in 2-4 weeks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Suitable for sensitive skin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {product.reviews.map(review => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-medium">
                          {review.user.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.user}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">Verified Purchase</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${i < review.rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold mb-2">{review.title}</h4>
                    <p className="text-muted-foreground mb-3">{review.comment}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-foreground">
                        <MessageCircle className="h-4 w-4" />
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Write Review */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Write a Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(rating => (
                      <button
                        key={rating}
                        onClick={() => setReviewRating(rating)}
                        className="p-1"
                      >
                        <Star 
                          className={`h-6 w-6 ${rating <= reviewRating ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Review</label>
                  <Textarea 
                    placeholder="Share your experience with this product..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <Button onClick={handleSubmitReview} className="bg-accent hover:bg-accent/90">
                  Submit Review
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-display font-semibold mb-6">You May Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-secondary">
                      <Image 
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(relatedProduct.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({relatedProduct.rating})</span>
                    </div>
                    <p className="font-semibold text-lg">${relatedProduct.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}