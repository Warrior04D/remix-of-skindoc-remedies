import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Home } from 'lucide-react'
import SkinConcernSearch from '@/components/search/skin-concern-search'

export const metadata: Metadata = {
  title: 'Professional Skincare Products | SKIN DOCTOR',
  description: 'Explore our comprehensive catalog of medical-grade skincare solutions. Find products for face care, body care, and specialized treatments from professional dermatologists.',
  keywords: 'skincare products, medical grade skincare, face care, body care, treatments, dermatologist approved',
  openGraph: {
    title: 'Professional Skincare Products | SKIN DOCTOR',
    description: 'Explore our comprehensive catalog of medical-grade skincare solutions.',
    type: 'website',
  }
}

const categories = [
  {
    id: 'face-care',
    name: 'Face Care',
    web: "https://www.amazon.in/s?k=Face+care&crid=220GL9FQYS8X&sprefix=face+care%2Caps%2C351&ref=nb_sb_noss_1",
    description: 'Cleansers, serums, moisturizers and targeted treatments for facial skin',
    image: '/images/face-care.jpg',
    productCount: 45
  },
  {
    id: 'body-care',
    name: 'Body Care',
    web: "https://www.amazon.in/s?k=Body+care&crid=ON4VRJ1CY832&sprefix=body+care%2Caps%2C356&ref=nb_sb_noss_1",
    description: 'Nourishing body lotions, treatments and specialized care products',
    image: '/images/body-care.jpg',
    productCount: 28
  },
  {
    id: 'treatments',
    name: 'Treatments',
    web: "https://www.amazon.in/s?k=treatments&crid=2AXLIM1P9K077&sprefix=treatments4%2Caps%2C313&ref=nb_sb_noss",
    description: 'Professional-grade treatments for specific skin concerns and conditions',
    image: '/images/treatments.jpg',
    productCount: 32
  },
  {
    id: 'anti-aging',
    name: 'Anti-Aging',
    web: "https://www.amazon.in/s?k=anti+ageing&crid=E0Z9KQ6QKOEE&sprefix=anti+ageing%2Caps%2C614&ref=nb_sb_noss_1",
    description: 'Advanced formulations to reduce fine lines and restore youthful radiance',
    image: '/images/anti-aging.jpg',
    productCount: 38
  },
  {
    id: 'acne-solutions',
    name: 'Acne Solutions',
    web: "https://www.amazon.in/s?k=acne+solution&crid=2171XMPPZTB4L&sprefix=acne+sol%2Caps%2C318&ref=nb_sb_ss_mvt-t11-ranker_1_8",
    description: 'Targeted products to clear breakouts and prevent future blemishes',
    image: '/images/acne-solutions.jpg',
    productCount: 24
  },
  {
    id: 'sensitive-skin',
    name: 'Sensitive Skin',
    web: "https://www.amazon.in/s?k=sensitive+skin&rh=p_n_g-1003531120111%3A56164214031%2Cp_n_g-1003222579111%3A28044860031&dc&crid=331S3BCT4LYNA&qid=1759035789&rnid=28044857031&sprefix=sensitive+skin%2Caps%2C300&ref=sr_nr_p_n_g-1003222579111_3&ds=v1%3Ac0bm5p8vvmbTz25t55kOHXcffVrfOcLZXyzN%2B2xiXa4",
    description: 'Gentle, hypoallergenic formulations for reactive and sensitive skin types',
    image: '/images/sensitive-skin.jpg',
    productCount: 19
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link 
              href="/" 
              className="flex items-center hover:text-foreground transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Products</span>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-primary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of professional-grade skincare solutions, 
            carefully curated by dermatologists to address every skin concern with 
            medical precision and luxury experience.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground text-lg">
              Find the perfect products for your specific skincare needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="group bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium opacity-90">
                      {category.productCount} Products
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                    <Link href={category.web} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center">
                    {category.name}
                  </Link>
                    
                                     
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Integration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Perfect Solution
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Use our intelligent search to discover products tailored to your specific skin concerns, 
              type, and preferences. Get personalized recommendations from our experts.
            </p>
          </div>

          {/* Search Component Container */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
              <SkinConcernSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="font-display text-lg font-semibold text-foreground">
                Customer Satisfaction
              </div>
              <p className="text-muted-foreground text-sm">
                Based on verified customer reviews and results
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="font-display text-lg font-semibold text-foreground">
                Professional Products
              </div>
              <p className="text-muted-foreground text-sm">
                Carefully curated by certified dermatologists
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-3xl font-bold text-accent">15+</div>
              <div className="font-display text-lg font-semibold text-foreground">
                Years of Expertise
              </div>
              <p className="text-muted-foreground text-sm">
                Trusted by skincare professionals worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Need Personalized Recommendations?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Consult with our expert dermatologists for a customized skincare routine 
            tailored specifically to your skin's unique needs.
          </p>
          <Link 
            href="/consultation"
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book a Consultation
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}