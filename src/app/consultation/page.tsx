"use client";

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  Search, 
  Upload, 
  CheckCircle, 
  Star, 
  Shield, 
  Users, 
  Award,
  Phone,
  Mail,
  Camera
} from 'lucide-react';

const consultationTypes = [
  {
    id: 'virtual',
    title: 'Virtual Consultation',
    description: 'Comprehensive skin assessment via video call with our experts',
    duration: '45 minutes',
    price: '$150',
    icon: Video,
    features: ['HD video assessment', 'Personalized skincare plan', 'Product recommendations', 'Follow-up support']
  },
  {
    id: 'inperson',
    title: 'In-Person Consultation',
    description: 'Face-to-face consultation with detailed skin analysis',
    duration: '60 minutes',
    price: '$225',
    icon: MapPin,
    features: ['Professional skin analysis', 'Hands-on examination', 'Treatment planning', 'Sample products']
  },
  {
    id: 'analysis',
    title: 'Advanced Skin Analysis',
    description: 'Comprehensive digital skin mapping and analysis',
    duration: '90 minutes',
    price: '$300',
    icon: Search,
    features: ['3D skin mapping', 'UV damage assessment', 'Pore analysis', 'Detailed report']
  }
];

const skinConcerns = [
  'Acne & Breakouts',
  'Anti-aging & Fine Lines',
  'Dark Spots & Hyperpigmentation',
  'Dryness & Dehydration',
  'Sensitive & Reactive Skin',
  'Rosacea & Redness',
  'Large Pores',
  'Uneven Skin Tone',
  'Sun Damage',
  'Melasma',
  'Blackheads & Whiteheads',
  'Oily Skin',
  'Combination Skin',
  'Skin Texture Issues'
];

const experts = [
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Dermatology & Anti-aging',
    experience: '15+ years',
    education: 'MD, Harvard Medical School',
    image: '/api/placeholder/300/300',
    rating: 4.9,
    consultations: 2000
  },
  {
    name: 'Dr. Michael Rodriguez',
    specialty: 'Cosmetic Dermatology',
    experience: '12+ years',
    education: 'MD, Johns Hopkins',
    image: '/api/placeholder/300/300',
    rating: 4.8,
    consultations: 1500
  },
  {
    name: 'Dr. Emily Watson',
    specialty: 'Medical Dermatology',
    experience: '18+ years',
    education: 'MD, Stanford Medical',
    image: '/api/placeholder/300/300',
    rating: 5.0,
    consultations: 2500
  }
];

const testimonials = [
  {
    name: 'Jessica M.',
    concern: 'Acne & Scarring',
    rating: 5,
    text: 'Dr. Chen completely transformed my skin. The virtual consultation was thorough and the personalized plan actually worked!',
    result: 'Clear skin in 3 months'
  },
  {
    name: 'David K.',
    concern: 'Anti-aging',
    rating: 5,
    text: 'The advanced skin analysis revealed issues I never knew I had. The treatment plan has made me look 10 years younger.',
    result: 'Visible improvement in 6 weeks'
  },
  {
    name: 'Maria S.',
    concern: 'Hyperpigmentation',
    rating: 5,
    text: 'Professional, knowledgeable, and results-driven. My dark spots are finally fading after years of trying everything.',
    result: '80% improvement in pigmentation'
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Book Your Consultation',
    description: 'Choose your preferred consultation type and fill out our comprehensive assessment form.'
  },
  {
    step: 2,
    title: 'Pre-Consultation Prep',
    description: 'Receive preparation instructions and upload any relevant photos of your skin concerns.'
  },
  {
    step: 3,
    title: 'Expert Consultation',
    description: 'Meet with our dermatologist for a thorough assessment and personalized discussion.'
  },
  {
    step: 4,
    title: 'Personalized Plan',
    description: 'Receive your customized skincare routine with product recommendations and timeline.'
  },
  {
    step: 5,
    title: 'Follow-up Support',
    description: 'Get ongoing support and adjustments to ensure optimal results.'
  }
];

const faqs = [
  {
    question: 'How long does a consultation take?',
    answer: 'Virtual consultations are 45 minutes, in-person consultations are 60 minutes, and advanced skin analysis sessions are 90 minutes.'
  },
  {
    question: 'What should I prepare for my consultation?',
    answer: 'Please have a clean face without makeup, good lighting for virtual consultations, and a list of current skincare products you use.'
  },
  {
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'We offer a 100% satisfaction guarantee. If you\'re not completely happy with your consultation, we\'ll provide a full refund.'
  },
  {
    question: 'Do you provide follow-up consultations?',
    answer: 'Yes, we include one complimentary 15-minute follow-up within 30 days of your initial consultation.'
  },
  {
    question: 'Are the recommended products available for purchase?',
    answer: 'Yes, all recommended products are available through our platform with exclusive pricing for consultation clients.'
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most clients see initial improvements within 2-4 weeks, with significant results typically visible within 6-8 weeks.'
  }
];

export default function ConsultationBooking() {
  const [selectedType, setSelectedType] = useState('virtual');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    skinConcerns: [],
    currentRoutine: '',
    consultationType: 'virtual',
    preferredDate: '',
    preferredTime: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleSkinConcernChange = useCallback((concern) => {
    setFormData(prev => ({
      ...prev,
      skinConcerns: prev.skinConcerns.includes(concern)
        ? prev.skinConcerns.filter(c => c !== concern)
        : [...prev.skinConcerns, concern]
    }));
  }, []);

  const handleFileUpload = useCallback((event) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    if (formData.skinConcerns.length === 0) {
      toast.error('Please select at least one skin concern');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Consultation booked successfully! We\'ll send confirmation details to your email.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      skinConcerns: [],
      currentRoutine: '',
      consultationType: 'virtual',
      preferredDate: '',
      preferredTime: '',
      additionalInfo: ''
    });
    setUploadedFiles([]);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 to-secondary/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Get personalized skincare guidance from board-certified dermatologists. 
              Transform your skin with expert analysis and custom treatment plans.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Board-Certified Experts
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-success" />
                Personalized Treatment Plans
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-success" />
                6,000+ Satisfied Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choose Your Consultation Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the consultation format that best fits your needs and schedule
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {consultationTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card 
                  key={type.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedType === type.id ? 'ring-2 ring-accent border-accent' : ''
                  }`}
                  onClick={() => {
                    setSelectedType(type.id);
                    handleInputChange('consultationType', type.id);
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                      <Badge variant="outline" className="text-accent border-accent">
                        {type.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-display">{type.title}</CardTitle>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-accent">{type.price}</span>
                    </div>
                    <ul className="space-y-2">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-success" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Book Your Consultation
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below to schedule your personalized skincare consultation
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-6">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skin Concerns */}
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-6">Skin Concerns *</h3>
                    <p className="text-muted-foreground mb-4">Select all that apply to you:</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {skinConcerns.map((concern) => (
                        <Button
                          key={concern}
                          type="button"
                          variant={formData.skinConcerns.includes(concern) ? "default" : "outline"}
                          className={`justify-start h-auto p-4 text-left ${
                            formData.skinConcerns.includes(concern) 
                              ? 'bg-accent text-accent-foreground' 
                              : ''
                          }`}
                          onClick={() => handleSkinConcernChange(concern)}
                        >
                          {concern}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Current Routine */}
                  <div>
                    <Label htmlFor="currentRoutine">Current Skincare Routine</Label>
                    <Textarea
                      id="currentRoutine"
                      placeholder="Please describe your current skincare products and routine..."
                      value={formData.currentRoutine}
                      onChange={(e) => handleInputChange('currentRoutine', e.target.value)}
                      rows={4}
                    />
                  </div>

                  {/* Scheduling */}
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-6">Preferred Scheduling</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Select 
                          value={formData.preferredTime} 
                          onValueChange={(value) => handleInputChange('preferredTime', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9am">9:00 AM</SelectItem>
                            <SelectItem value="10am">10:00 AM</SelectItem>
                            <SelectItem value="11am">11:00 AM</SelectItem>
                            <SelectItem value="12pm">12:00 PM</SelectItem>
                            <SelectItem value="1pm">1:00 PM</SelectItem>
                            <SelectItem value="2pm">2:00 PM</SelectItem>
                            <SelectItem value="3pm">3:00 PM</SelectItem>
                            <SelectItem value="4pm">4:00 PM</SelectItem>
                            <SelectItem value="5pm">5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-6">Skin Photos (Optional)</h3>
                    <p className="text-muted-foreground mb-4">
                      Upload clear photos of your skin concerns to help our experts prepare for your consultation
                    </p>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <Label htmlFor="photos" className="cursor-pointer">
                        <span className="text-accent hover:text-accent/80 font-medium">
                          Click to upload photos
                        </span>
                        <span className="text-muted-foreground"> or drag and drop</span>
                      </Label>
                      <Input
                        id="photos"
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        PNG, JPG up to 10MB each
                      </p>
                      {uploadedFiles.length > 0 && (
                        <div className="mt-4 text-sm text-success">
                          {uploadedFiles.length} file(s) uploaded
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Any additional information you'd like to share with our experts..."
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Booking Consultation...' : 'Book Consultation'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Profiles */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Dermatologists
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Board-certified specialists with years of experience in skincare and dermatology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-secondary overflow-hidden">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{expert.name}</h3>
                  <p className="text-accent font-medium mb-2">{expert.specialty}</p>
                  <p className="text-muted-foreground text-sm mb-4">{expert.education}</p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{expert.rating}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {expert.consultations}+ consultations
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">{expert.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined consultation process ensures you get the best possible skincare guidance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real people who transformed their skin with our expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold mb-1">{testimonial.name}</p>
                    <p className="text-sm text-accent mb-2">{testimonial.concern}</p>
                    <Badge variant="outline" className="text-success border-success">
                      {testimonial.result}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about our consultation services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our patient care team is here to help you with any questions about consultations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call (555) 123-SKIN
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}