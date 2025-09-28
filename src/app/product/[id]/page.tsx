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
  3: {
    id: 3,
    name: "Vitamin C Brightening Serum",
    brand: "Himalaya",
    web: "https://amzn.in/d/iR5p0Nn",
    shortDescription: "Advanced vitamin C serum for radiant, glowing skin",
    longDescription: "Our clinically-proven Vitamin C Brightening Serum combines 20% L-Ascorbic Acid with stabilized vitamin E and ferulic acid to deliver maximum antioxidant protection and brightening benefits. This powerful formula targets dark spots, uneven skin tone, and dullness while promoting collagen synthesis for firmer, more youthful-looking skin.",
    price: 89,
    originalPrice: 119,
    discount: 25,
    rating: 4.8,
    reviewCount: 1247,
    images: [
      "https://m.media-amazon.com/images/I/61oqGjcGGQL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61vlXnQKz6L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61JFUcVU7KL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/611tAjhCbCL._SX679_.jpg"
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
  1: {
    id: 1,
    name: "Retinol Renewal Night Treatment",
    brand: "DermaCare",
    web: "https://amzn.in/d/j6hXq0J",
    shortDescription: "Professional-strength retinol for anti-aging and skin renewal",
    longDescription: "Transform your skin overnight with our advanced Retinol Renewal Night Treatment. Formulated with 0.5% encapsulated retinol and botanical soothing agents, this treatment accelerates cell turnover, reduces fine lines, and improves skin texture while you sleep.",
    price: 156,
    originalPrice: 195,
    discount: 20,
    rating: 4.9,
    reviewCount: 892,
    images: [
      "https://m.media-amazon.com/images/I/41YNeaUzDNL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61O4ugO4t0L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71o+DUwtokL._SX679_.jpg"
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
  },
  2: {
  id:2,
  name: "Gentle Acne Clearing Complex",
  brand: "DermaCare",
  web: "https://amzn.in/d/6xVf3kL",
  shortDescription: "Lightweight treatment for acne-prone skin with salicylic acid and soothing botanicals",
  longDescription: "Fight breakouts without irritation using our Gentle Acne Clearing Complex. Formulated with 2% salicylic acid, niacinamide, and soothing green tea extract, this treatment clears clogged pores, reduces acne, and controls excess oil while keeping skin balanced and calm. Suitable for daily use on sensitive and acne-prone skin.",
  price: 149,
  originalPrice: 190,
  discount: 22,
  rating: 4.6,
  reviewCount: 954,
  images: [
    "https://m.media-amazon.com/images/I/61TfV8x7uCL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71NbOeQnQdL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/81vssHnLxVL._SX679_.jpg"
  ],
  category: "Treatments",
  skinType: ["Oily", "Combination", "Acne-prone", "Sensitive"],
  concerns: ["Acne", "Clogged pores", "Excess oil", "Redness"],
  benefits: [
    "Clears acne and prevents breakouts",
    "Unclogs and minimizes pores",
    "Controls excess sebum",
    "Reduces redness and irritation",
    "Balances and soothes skin"
  ],
  ingredients: [
    { name: "Salicylic Acid", percentage: "2%", purpose: "Exfoliates inside pores to treat and prevent acne" },
    { name: "Niacinamide", percentage: "4%", purpose: "Reduces inflammation and brightens skin" },
    { name: "Zinc PCA", percentage: "1%", purpose: "Controls oil production and supports healing" },
    { name: "Green Tea Extract", percentage: "2%", purpose: "Soothes irritation and provides antioxidants" },
    { name: "Aloe Vera", percentage: "5%", purpose: "Hydrates and calms sensitive skin" }
  ],
  usage: [
    "Apply a thin layer to cleansed skin once daily",
    "Increase to twice daily if tolerated",
    "Use as a spot treatment or all-over serum",
    "Follow with moisturizer",
    "Always wear SPF during the day"
  ],
  beforeAfter: [
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "3 weeks" },
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "8 weeks" }
  ],
  reviews: [
    {
      id: 1,
      user: "Priya K.",
      rating: 5,
      date: "2024-07-08",
      title: "Cleared my breakouts fast!",
      comment: "Within 2 weeks, my active acne reduced significantly without dryness or peeling. Very gentle.",
      verified: true,
      helpful: 24
    },
    {
      id: 2,
      user: "Daniel H.",
      rating: 4,
      date: "2024-07-21",
      title: "Good for mild acne",
      comment: "Works well for small breakouts, but for severe acne I pair it with a stronger treatment.",
      verified: true,
      helpful: 13
    }
  ],
  inStock: true,
  volume: "50ml",
  shelfLife: "24 months"
}
,
  4: {
  id: 4,
  name: "Ultra Hydrating Barrier Cream",
  brand: "DermaCare",
  web: "https://amzn.in/d/2yGh4mJ",
  shortDescription: "Rich cream that restores and strengthens the skin’s natural barrier",
  longDescription: "Protect and deeply nourish your skin with our Ultra Hydrating Barrier Cream. Formulated with ceramides, squalane, and hyaluronic acid, this dermatologist-developed cream locks in moisture, repairs barrier function, and calms irritation. Ideal for dry, sensitive, or compromised skin, it delivers long-lasting hydration without feeling heavy or greasy.",
  price: 165,
  originalPrice: 210,
  discount: 21,
  rating: 4.8,
  reviewCount: 823,
  images: [
    "https://m.media-amazon.com/images/I/61Xx5Z3UeUL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71Zf2jJoXxL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/81oV6d0AALL._SX679_.jpg"
  ],
  category: "Moisturizers",
  skinType: ["Dry", "Sensitive", "Normal", "Combination"],
  concerns: ["Dryness", "Barrier damage", "Irritation", "Dehydration"],
  benefits: [
    "Restores and strengthens skin barrier",
    "Provides 48-hour intense hydration",
    "Soothes irritation and redness",
    "Prevents transepidermal water loss",
    "Leaves skin soft, supple, and resilient"
  ],
  ingredients: [
    { name: "Ceramides", percentage: "3%", purpose: "Rebuilds and protects skin barrier" },
    { name: "Squalane", percentage: "5%", purpose: "Deep moisturization without greasiness" },
    { name: "Hyaluronic Acid", percentage: "1%", purpose: "Locks in hydration" },
    { name: "Shea Butter", percentage: "7%", purpose: "Softens and nourishes dry skin" },
    { name: "Allantoin", percentage: "0.5%", purpose: "Calms irritation and promotes healing" }
  ],
  usage: [
    "Apply morning and evening on cleansed face and neck",
    "Use after serums and treatments",
    "Massage gently until absorbed",
    "Can be used as an overnight repair cream",
    "Safe for daily use, even on sensitive skin"
  ],
  beforeAfter: [
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "2 weeks" },
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "6 weeks" }
  ],
  reviews: [
    {
      id: 1,
      user: "Meera D.",
      rating: 5,
      date: "2024-08-14",
      title: "A lifesaver for dry skin",
      comment: "This cream saved my skin barrier! My dryness and redness improved within a week of use.",
      verified: true,
      helpful: 22
    },
    {
      id: 2,
      user: "Lucas P.",
      rating: 4,
      date: "2024-08-27",
      title: "Rich but not greasy",
      comment: "Keeps my skin hydrated all day without feeling heavy. Works especially well in winter.",
      verified: true,
      helpful: 15
    }
  ],
  inStock: true,
  volume: "50ml",
  shelfLife: "24 months"
}
,
  5: {
  id: 5,
  name: "Calming Sensitivity Relief Gel",
  brand: "DermaCare",
  web: "https://amzn.in/d/5nSk4cB",
  shortDescription: "Lightweight gel that soothes redness and calms sensitive skin",
  longDescription: "Soothe and comfort your skin with our Calming Sensitivity Relief Gel. Powered by Centella Asiatica, aloe vera, and licorice root extract, this refreshing gel reduces redness, calms irritation, and strengthens the skin barrier. Its oil-free, fast-absorbing texture makes it perfect for sensitive, reactive, or post-treatment skin.",
  price: 135,
  originalPrice: 170,
  discount: 21,
  rating: 4.7,
  reviewCount: 611,
  images: [
    "https://m.media-amazon.com/images/I/61iV3ry5gUL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71lX-9x2mNL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/81S9M6i7pWL._SX679_.jpg"
  ],
  category: "Moisturizers",
  skinType: ["Sensitive", "Normal", "Combination", "Oily"],
  concerns: ["Redness", "Sensitivity", "Irritation", "Post-treatment skin"],
  benefits: [
    "Soothes irritation and redness",
    "Provides lightweight hydration",
    "Strengthens skin barrier",
    "Calms sensitive and reactive skin",
    "Fast-absorbing and non-greasy"
  ],
  ingredients: [
    { name: "Centella Asiatica Extract", percentage: "5%", purpose: "Soothes and repairs sensitive skin" },
    { name: "Aloe Vera Extract", percentage: "8%", purpose: "Hydrates and cools irritation" },
    { name: "Licorice Root Extract", percentage: "2%", purpose: "Reduces redness and brightens skin tone" },
    { name: "Panthenol (Pro-Vitamin B5)", percentage: "2%", purpose: "Moisturizes and supports healing" },
    { name: "Green Tea Extract", percentage: "1%", purpose: "Provides antioxidants and calms skin" }
  ],
  usage: [
    "Apply evenly to face and neck after cleansing",
    "Use morning and evening",
    "Can be layered under moisturizer or sunscreen",
    "Reapply as needed on irritated areas",
    "Suitable for daily use and post-sun exposure"
  ],
  beforeAfter: [
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "2 weeks" },
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "6 weeks" }
  ],
  reviews: [
    {
      id: 1,
      user: "Hannah W.",
      rating: 5,
      date: "2024-09-10",
      title: "Instant calming effect",
      comment: "My redness goes down within minutes of applying this gel. Super gentle and cooling!",
      verified: true,
      helpful: 20
    },
    {
      id: 2,
      user: "Rahul M.",
      rating: 4,
      date: "2024-09-18",
      title: "Great for sensitive skin",
      comment: "Lightweight and soothing. Works well after shaving or sun exposure.",
      verified: true,
      helpful: 12
    }
  ],
  inStock: true,
  volume: "50ml",
  shelfLife: "18 months"
}
,
  6: {
  id: 6,
  name: "Pore Minimizing Treatment Mask",
  brand: "DermaCare",
  web: "https://amzn.in/d/4tVm2pQ",
  shortDescription: "Detoxifying clay mask that reduces the appearance of pores and refines skin texture",
  longDescription: "Unclog and minimize pores with our Pore Minimizing Treatment Mask. Formulated with kaolin clay, niacinamide, and salicylic acid, this purifying mask absorbs excess oil, clears impurities, and smooths skin texture. Enhanced with soothing botanicals, it leaves skin fresh, matte, and refined without over-drying.",
  price: 155,
  originalPrice: 195,
  discount: 21,
  rating: 4.6,
  reviewCount: 732,
  images: [
    "https://m.media-amazon.com/images/I/61FfuzV7vQL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71OQzoT5bCL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/81nnzj1x6pL._SX679_.jpg"
  ],
  category: "Masks",
  skinType: ["Oily", "Combination", "Normal"],
  concerns: ["Large pores", "Excess oil", "Clogged pores", "Uneven texture"],
  benefits: [
    "Visibly reduces pore size",
    "Absorbs excess oil and shine",
    "Clears out impurities and toxins",
    "Improves skin texture",
    "Leaves skin fresh and matte"
  ],
  ingredients: [
    { name: "Kaolin Clay", percentage: "25%", purpose: "Absorbs oil and detoxifies pores" },
    { name: "Bentonite Clay", percentage: "15%", purpose: "Deep cleansing and tightening effect" },
    { name: "Niacinamide", percentage: "4%", purpose: "Refines pores and brightens skin" },
    { name: "Salicylic Acid", percentage: "1.5%", purpose: "Exfoliates inside pores to prevent clogging" },
    { name: "Green Tea Extract", percentage: "2%", purpose: "Provides antioxidants and soothes skin" }
  ],
  usage: [
    "Apply an even layer to clean, dry skin",
    "Avoid eye and lip areas",
    "Leave on for 10–15 minutes until partially dry",
    "Rinse thoroughly with lukewarm water",
    "Use 1–2 times per week"
  ],
  beforeAfter: [
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "3 weeks" },
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "8 weeks" }
  ],
  reviews: [
    {
      id: 1,
      user: "Sophia L.",
      rating: 5,
      date: "2024-10-05",
      title: "My pores look so much smaller!",
      comment: "After 4 uses, my skin looks smoother and my pores are less noticeable. Great mask for oily skin.",
      verified: true,
      helpful: 23
    },
    {
      id: 2,
      user: "Arjun K.",
      rating: 4,
      date: "2024-10-16",
      title: "Good for weekly detox",
      comment: "Cleanses deeply and controls oil well. I use it once a week and it keeps my T-zone balanced.",
      verified: true,
      helpful: 14
    }
  ],
  inStock: true,
  volume: "100ml",
  shelfLife: "18 months"
}, 
7: {
  id: 7,
  name: "Radiance Boosting Serum",
  brand: "DermaCare",
  web: "https://amzn.in/d/8kLz9vB",
  shortDescription: "Brightening serum with Vitamin C and antioxidants for glowing skin",
  longDescription: "Achieve a luminous, even-toned complexion with our Radiance Boosting Serum. Packed with stabilized Vitamin C, hyaluronic acid, and botanical extracts, this lightweight serum brightens dull skin, fades dark spots, and defends against environmental stressors. Its fast-absorbing formula delivers hydration and radiance without stickiness, making it perfect for daily use.",
  price: 159,
  originalPrice: 199,
  discount: 20,
  rating: 4.8,
  reviewCount: 1045,
  images: [
    "https://m.media-amazon.com/images/I/61jRfoJQpWL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71VrFqfT2rL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/81cwz6zXq6L._SX679_.jpg"
  ],
  category: "Serums",
  skinType: ["Normal", "Dry", "Oily", "Combination"],
  concerns: ["Dullness", "Dark spots", "Uneven tone", "Environmental damage"],
  benefits: [
    "Brightens and evens skin tone",
    "Fades dark spots and hyperpigmentation",
    "Boosts natural radiance",
    "Hydrates and plumps skin",
    "Protects against free radicals"
  ],
  ingredients: [
    { name: "Vitamin C (Ethyl Ascorbic Acid)", percentage: "10%", purpose: "Brightens and reduces pigmentation" },
    { name: "Hyaluronic Acid", percentage: "1%", purpose: "Provides deep hydration" },
    { name: "Niacinamide", percentage: "4%", purpose: "Improves skin tone and barrier" },
    { name: "Licorice Root Extract", percentage: "2%", purpose: "Reduces dark spots and soothes skin" },
    { name: "Vitamin E", percentage: "1%", purpose: "Antioxidant and skin repair" }
  ],
  usage: [
    "Apply 3–4 drops to cleansed face and neck in the morning",
    "Gently pat until fully absorbed",
    "Follow with moisturizer and sunscreen",
    "Can be layered with hydrating serums",
    "Avoid mixing directly with strong exfoliants or retinol"
  ],
  beforeAfter: [
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "4 weeks" },
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "10 weeks" }
  ],
  reviews: [
    {
      id: 1,
      user: "Kavya S.",
      rating: 5,
      date: "2024-11-12",
      title: "My skin is glowing!",
      comment: "This serum made my skin so much brighter and smoother within a month. Works beautifully under sunscreen.",
      verified: true,
      helpful: 28
    },
    {
      id: 2,
      user: "Michael B.",
      rating: 4,
      date: "2024-11-25",
      title: "Great Vitamin C option",
      comment: "Gentle, effective, and doesn’t sting like other Vitamin C serums I’ve tried. Would love a larger bottle.",
      verified: true,
      helpful: 16
    }
  ],
  inStock: true,
  volume: "30ml",
  shelfLife: "18 months"
},
8: {
  id: 11,
  name: "Rosacea Soothing Complex",
  brand: "DermaCare",
  web: "https://amzn.in/d/7rFx3qL",
  shortDescription: "Gentle treatment for redness and irritation associated with rosacea",
  longDescription: "Calm and strengthen sensitive, rosacea-prone skin with our Rosacea Soothing Complex. Infused with niacinamide, allantoin, and licorice root extract, this lightweight formula reduces visible redness, soothes irritation, and fortifies the skin barrier. Ideal for daily use, it helps maintain comfort and skin resilience even in reactive skin.",
  price: 162,
  originalPrice: 200,
  discount: 19,
  rating: 4.7,
  reviewCount: 524,
  images: [
    "https://m.media-amazon.com/images/I/61bFyX3LxQL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71lFv7G8rJL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/81cGvX7FxML._SX679_.jpg"
  ],
  category: "Treatments",
  skinType: ["Sensitive", "Dry", "Combination"],
  concerns: ["Redness", "Rosacea flare-ups", "Irritation", "Sensitivity"],
  benefits: [
    "Reduces visible redness and flushing",
    "Soothes irritation and discomfort",
    "Strengthens and protects skin barrier",
    "Hydrates sensitive skin",
    "Suitable for daily use on reactive skin"
  ],
  ingredients: [
    { name: "Niacinamide", percentage: "4%", purpose: "Reduces redness and strengthens barrier" },
    { name: "Allantoin", percentage: "1%", purpose: "Soothes irritation and promotes healing" },
    { name: "Licorice Root Extract", percentage: "2%", purpose: "Brightens skin and calms inflammation" },
    { name: "Panthenol (Pro-Vitamin B5)", percentage: "2%", purpose: "Hydrates and repairs skin" },
    { name: "Aloe Vera Extract", percentage: "5%", purpose: "Calms and cools sensitive skin" }
  ],
  usage: [
    "Apply a thin layer to affected areas morning and evening",
    "Can be used under moisturizer or sunscreen",
    "Avoid contact with eyes",
    "Use consistently for best results",
    "Suitable for post-procedure or reactive skin"
  ],
  beforeAfter: [
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "3 weeks" },
    { before: "/api/placeholder/300/400", after: "/api/placeholder/300/400", timeframe: "8 weeks" }
  ],
  reviews: [
    {
      id: 1,
      user: "Elena P.",
      rating: 5,
      date: "2024-12-01",
      title: "Redness reduced significantly",
      comment: "My rosacea flare-ups have calmed down and my skin feels stronger. Very gentle and effective.",
      verified: true,
      helpful: 18
    },
    {
      id: 2,
      user: "Arun V.",
      rating: 4,
      date: "2024-12-12",
      title: "Good for sensitive skin",
      comment: "Lightweight and soothing, my redness is less noticeable after consistent use. A bit pricey but worth it.",
      verified: true,
      helpful: 12
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
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  <Link href={product.web} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </Link>
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