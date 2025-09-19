"use client";

import { useState, useCallback, useEffect } from 'react';
import { Camera, Upload, Calendar, CheckCircle, ArrowRight, Star, Sparkles, Brain, Shield, Target, Play, ChevronRight, AlertCircle, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface AssessmentData {
  skinType: string;
  concerns: string[];
  lifestyle: {
    sunExposure: string;
    stressLevel: string;
    dietQuality: string;
    sleepQuality: string;
    exerciseFrequency: string;
  };
  currentProducts: string;
  goals: string[];
  preferences: {
    budget: string;
    productTypes: string[];
    sensitivity: string;
  };
}

const skinTypes = [
  { value: 'oily', label: 'Oily', description: 'Shiny, enlarged pores, prone to breakouts' },
  { value: 'dry', label: 'Dry', description: 'Tight, flaky, rough texture' },
  { value: 'combination', label: 'Combination', description: 'Oily T-zone, dry cheeks' },
  { value: 'sensitive', label: 'Sensitive', description: 'Reactive, easily irritated, redness-prone' },
  { value: 'normal', label: 'Normal', description: 'Balanced, healthy-looking, minimal issues' }
];

const skinConcerns = [
  { value: 'acne', label: 'Acne & Breakouts', icon: '🔴' },
  { value: 'aging', label: 'Anti-Aging & Wrinkles', icon: '⏰' },
  { value: 'pigmentation', label: 'Dark Spots & Pigmentation', icon: '🌫️' },
  { value: 'hydration', label: 'Dryness & Dehydration', icon: '💧' },
  { value: 'sensitivity', label: 'Sensitivity & Redness', icon: '🔥' },
  { value: 'texture', label: 'Rough Texture & Pores', icon: '🪨' },
  { value: 'dullness', label: 'Dullness & Uneven Tone', icon: '✨' },
  { value: 'sun-damage', label: 'Sun Damage', icon: '☀️' }
];

const skinGoals = [
  { value: 'clear-skin', label: 'Clear, Blemish-Free Skin' },
  { value: 'anti-aging', label: 'Youthful, Firm Appearance' },
  { value: 'even-tone', label: 'Even Skin Tone' },
  { value: 'hydration', label: 'Deep Hydration' },
  { value: 'glow', label: 'Natural, Healthy Glow' },
  { value: 'prevention', label: 'Prevent Future Damage' }
];

const mockResults = {
  skinScore: 73,
  skinType: 'Combination with Oily T-zone',
  primaryConcerns: ['Acne & Breakouts', 'Enlarged Pores'],
  recommendedProducts: [
    {
      id: 1,
      name: 'Advanced Acne Treatment Serum',
      type: 'Treatment',
      rating: 4.8,
      price: '$45',
      match: '95%'
    },
    {
      id: 2,
      name: 'Gentle Foaming Cleanser',
      type: 'Cleanser',
      rating: 4.6,
      price: '$28',
      match: '92%'
    },
    {
      id: 3,
      name: 'Oil-Free Moisturizer SPF 30',
      type: 'Moisturizer',
      rating: 4.7,
      price: '$35',
      match: '88%'
    }
  ],
  routine: {
    morning: [
      'Gentle Foaming Cleanser',
      'Vitamin C Brightening Serum',
      'Oil-Free Moisturizer SPF 30'
    ],
    evening: [
      'Gentle Foaming Cleanser',
      'Advanced Acne Treatment Serum',
      'Lightweight Night Moisturizer'
    ]
  }
};

export default function SkinAnalysisPage() {
  const [activeTab, setActiveTab] = useState('questionnaire');
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    skinType: '',
    concerns: [],
    lifestyle: {
      sunExposure: '',
      stressLevel: '',
      dietQuality: '',
      sleepQuality: '',
      exerciseFrequency: ''
    },
    currentProducts: '',
    goals: [],
    preferences: {
      budget: '',
      productTypes: [],
      sensitivity: ''
    }
  });
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Image size should be less than 10MB');
        return;
      }
      setUploadedImage(file);
      toast.success('Image uploaded successfully');
    }
  }, []);

  const handleAnalyzeImage = useCallback(() => {
    if (!uploadedImage) {
      toast.error('Please upload an image first');
      return;
    }
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      toast.success('Analysis complete!');
    }, 3000);
  }, [uploadedImage]);

  const handleQuestionnaireSubmit = useCallback(() => {
    if (!assessmentData.skinType || assessmentData.concerns.length === 0) {
      toast.error('Please complete all required fields');
      return;
    }
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      toast.success('Analysis complete!');
    }, 2000);
  }, [assessmentData]);

  const updateAssessmentData = useCallback((field: string, value: any) => {
    setAssessmentData(prev => ({ ...prev, [field]: value }));
  }, []);

  const updateNestedData = useCallback((parent: string, field: string, value: any) => {
    setAssessmentData(prev => ({
      ...prev,
      [parent]: { ...prev[parent as keyof AssessmentData], [field]: value }
    }));
  }, []);

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, totalSteps]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        {/* Results Header */}
        <div className="bg-gradient-to-r from-primary to-secondary border-b">
          <div className="container max-w-6xl mx-auto py-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-success mr-3" />
                <h1 className="font-display text-3xl font-bold">Analysis Complete</h1>
              </div>
              <p className="text-muted-foreground text-lg">Your personalized skin analysis and recommendations</p>
            </div>
          </div>
        </div>

        <div className="container max-w-6xl mx-auto py-8 space-y-8">
          {/* Skin Score */}
          <Card className="p-8 text-center">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold mb-2">Your Skin Health Score</h2>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-success p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-accent">{mockResults.skinScore}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">Good foundation with room for improvement</p>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Skin Analysis */}
            <Card className="p-6">
              <h3 className="font-display text-xl font-bold mb-4">Skin Analysis</h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Skin Type</Label>
                  <p className="text-foreground">{mockResults.skinType}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Primary Concerns</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {mockResults.primaryConcerns.map(concern => (
                      <Badge key={concern} variant="secondary">{concern}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Recommended Routine */}
            <Card className="p-6">
              <h3 className="font-display text-xl font-bold mb-4">Recommended Routine</h3>
              <Tabs defaultValue="morning">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="morning">Morning</TabsTrigger>
                  <TabsTrigger value="evening">Evening</TabsTrigger>
                </TabsList>
                <TabsContent value="morning" className="mt-4">
                  <div className="space-y-2">
                    {mockResults.routine.morning.map((step, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="evening" className="mt-4">
                  <div className="space-y-2">
                    {mockResults.routine.evening.map((step, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Recommended Products */}
          <Card className="p-6">
            <h3 className="font-display text-xl font-bold mb-6">Recommended Products</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {mockResults.recommendedProducts.map(product => (
                <Card key={product.id} className="p-4 border-2 hover:border-accent transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-success text-white">{product.match} Match</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-1">{product.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{product.type}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-accent">{product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Expert Consultation CTA */}
          <Card className="p-8 bg-gradient-to-r from-primary to-secondary text-center">
            <h3 className="font-display text-2xl font-bold mb-4">Want Expert Guidance?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a consultation with one of our certified dermatologists to discuss your results and get personalized treatment recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Report
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-secondary to-primary/50">
        <div className="container max-w-6xl mx-auto py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-12 h-12 text-accent mr-4" />
              <h1 className="font-display text-4xl md:text-5xl font-bold">AI-Powered Skin Analysis</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get personalized skincare recommendations using advanced AI technology and dermatologist expertise. 
              Analyze your skin, understand your needs, and discover the perfect products for your unique skin journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Advanced AI Analysis</h3>
                <p className="text-sm text-muted-foreground">Machine learning algorithms trained on dermatological data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Dermatologist Approved</h3>
                <p className="text-sm text-muted-foreground">Methods validated by certified skin specialists</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Personalized Results</h3>
                <p className="text-sm text-muted-foreground">Tailored recommendations for your unique skin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Options */}
      <div className="container max-w-6xl mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-4">Choose Your Analysis Method</h2>
          <p className="text-muted-foreground text-lg">Select the approach that works best for you</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="questionnaire" className="text-sm">Quick Assessment</TabsTrigger>
            <TabsTrigger value="photo" className="text-sm">Photo Analysis</TabsTrigger>
            <TabsTrigger value="booking" className="text-sm">Professional Visit</TabsTrigger>
          </TabsList>

          <TabsContent value="questionnaire" className="space-y-8">
            {/* Progress Bar */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-bold">Skin Assessment Questionnaire</h3>
                <Badge variant="outline">Step {currentStep} of {totalSteps}</Badge>
              </div>
              <Progress value={progress} className="mb-4" />
              <p className="text-sm text-muted-foreground">Complete this comprehensive assessment to get personalized recommendations</p>
            </Card>

            {/* Questionnaire Steps */}
            {currentStep === 1 && (
              <Card className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6">What's your skin type?</h3>
                <RadioGroup
                  value={assessmentData.skinType}
                  onValueChange={(value) => updateAssessmentData('skinType', value)}
                  className="space-y-4"
                >
                  {skinTypes.map(type => (
                    <div key={type.value} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value={type.value} id={type.value} />
                        <div>
                          <Label htmlFor={type.value} className="font-medium cursor-pointer">
                            {type.label}
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">{type.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </Card>
            )}

            {currentStep === 2 && (
              <Card className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6">What are your main skin concerns?</h3>
                <p className="text-muted-foreground mb-6">Select all that apply</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {skinConcerns.map(concern => (
                    <div key={concern.value} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={concern.value}
                          checked={assessmentData.concerns.includes(concern.value)}
                          onCheckedChange={(checked) => {
                            const newConcerns = checked
                              ? [...assessmentData.concerns, concern.value]
                              : assessmentData.concerns.filter(c => c !== concern.value);
                            updateAssessmentData('concerns', newConcerns);
                          }}
                        />
                        <div>
                          <Label htmlFor={concern.value} className="font-medium cursor-pointer flex items-center gap-2">
                            <span>{concern.icon}</span>
                            {concern.label}
                          </Label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {currentStep === 3 && (
              <Card className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6">Tell us about your lifestyle</h3>
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium mb-3 block">How much sun exposure do you get?</Label>
                    <Select
                      value={assessmentData.lifestyle.sunExposure}
                      onValueChange={(value) => updateNestedData('lifestyle', 'sunExposure', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select sun exposure level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimal">Minimal (mostly indoors)</SelectItem>
                        <SelectItem value="moderate">Moderate (some outdoor activities)</SelectItem>
                        <SelectItem value="high">High (frequently outdoors/sports)</SelectItem>
                        <SelectItem value="extreme">Extreme (work outdoors/beach lifestyle)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">What's your stress level?</Label>
                    <Select
                      value={assessmentData.lifestyle.stressLevel}
                      onValueChange={(value) => updateNestedData('lifestyle', 'stressLevel', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select stress level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="very-high">Very High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">How would you rate your diet?</Label>
                    <Select
                      value={assessmentData.lifestyle.dietQuality}
                      onValueChange={(value) => updateNestedData('lifestyle', 'dietQuality', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select diet quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="poor">Poor (processed foods, sugar)</SelectItem>
                        <SelectItem value="fair">Fair (mixed diet)</SelectItem>
                        <SelectItem value="good">Good (balanced, some healthy foods)</SelectItem>
                        <SelectItem value="excellent">Excellent (whole foods, balanced)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">How many hours do you sleep per night?</Label>
                    <Select
                      value={assessmentData.lifestyle.sleepQuality}
                      onValueChange={(value) => updateNestedData('lifestyle', 'sleepQuality', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select sleep duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-5">Less than 5 hours</SelectItem>
                        <SelectItem value="5-6">5-6 hours</SelectItem>
                        <SelectItem value="7-8">7-8 hours</SelectItem>
                        <SelectItem value="more-than-8">More than 8 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            )}

            {currentStep === 4 && (
              <Card className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6">Current skincare routine</h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="current-products" className="text-base font-medium mb-3 block">
                      What products are you currently using?
                    </Label>
                    <Textarea
                      id="current-products"
                      placeholder="List your current skincare products (cleanser, moisturizer, treatments, etc.)"
                      value={assessmentData.currentProducts}
                      onChange={(e) => updateAssessmentData('currentProducts', e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>
              </Card>
            )}

            {currentStep === 5 && (
              <Card className="p-8">
                <h3 className="font-display text-2xl font-bold mb-6">Your skincare goals</h3>
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium mb-4 block">What do you want to achieve?</Label>
                    <div className="space-y-3">
                      {skinGoals.map(goal => (
                        <div key={goal.value} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <Checkbox
                              id={goal.value}
                              checked={assessmentData.goals.includes(goal.value)}
                              onCheckedChange={(checked) => {
                                const newGoals = checked
                                  ? [...assessmentData.goals, goal.value]
                                  : assessmentData.goals.filter(g => g !== goal.value);
                                updateAssessmentData('goals', newGoals);
                              }}
                            />
                            <Label htmlFor={goal.value} className="font-medium cursor-pointer">
                              {goal.label}
                            </Label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block">What's your budget range?</Label>
                    <Select
                      value={assessmentData.preferences.budget}
                      onValueChange={(value) => updateNestedData('preferences', 'budget', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50">Under $50/month</SelectItem>
                        <SelectItem value="50-100">$50-100/month</SelectItem>
                        <SelectItem value="100-200">$100-200/month</SelectItem>
                        <SelectItem value="over-200">Over $200/month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !assessmentData.skinType) ||
                    (currentStep === 2 && assessmentData.concerns.length === 0)
                  }
                >
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleQuestionnaireSubmit}
                  disabled={isAnalyzing}
                  className="bg-accent hover:bg-accent/90"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Get My Analysis
                      <Sparkles className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </TabsContent>

          <TabsContent value="photo" className="space-y-8">
            <Card className="p-8 text-center">
              <h3 className="font-display text-2xl font-bold mb-4">AI Photo Analysis</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Upload a clear, well-lit photo of your face for our AI to analyze your skin condition, 
                texture, and potential concerns.
              </p>

              {!uploadedImage ? (
                <div className="border-2 border-dashed border-border rounded-lg p-12 hover:border-accent transition-colors">
                  <div className="flex flex-col items-center">
                    <Camera className="w-16 h-16 text-muted-foreground mb-4" />
                    <h4 className="font-semibold mb-2">Upload Your Photo</h4>
                    <p className="text-sm text-muted-foreground mb-6">
                      For best results: natural lighting, clean face, front-facing view
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => document.getElementById('photo-upload')?.click()}
                        className="bg-accent hover:bg-accent/90"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Choose Photo
                      </Button>
                      <Button variant="outline">
                        <Camera className="w-4 h-4 mr-2" />
                        Take Photo
                      </Button>
                    </div>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="relative inline-block">
                    <img
                      src={URL.createObjectURL(uploadedImage)}
                      alt="Uploaded photo"
                      className="max-w-md w-full h-auto rounded-lg mx-auto"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setUploadedImage(null)}
                    >
                      Remove
                    </Button>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button
                      onClick={handleAnalyzeImage}
                      disabled={isAnalyzing}
                      size="lg"
                      className="bg-accent hover:bg-accent/90"
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Analyzing Your Skin...
                        </>
                      ) : (
                        <>
                          <Brain className="w-5 h-5 mr-2" />
                          Analyze My Skin
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {/* Technology Info */}
              <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="w-8 h-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-2">Privacy Protected</h4>
                  <p className="text-sm text-muted-foreground">
                    Your photos are encrypted and deleted after analysis
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <Clock className="w-8 h-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-2">Instant Results</h4>
                  <p className="text-sm text-muted-foreground">
                    Get your analysis in under 30 seconds
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-2">Dermatologist Trained</h4>
                  <p className="text-sm text-muted-foreground">
                    AI trained on thousands of professional assessments
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="booking" className="space-y-8">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">Professional In-Person Analysis</h3>
                  <p className="text-muted-foreground mb-6">
                    Get the most comprehensive skin analysis with our certified dermatologists using 
                    professional equipment and expertise.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                      <div>
                        <h4 className="font-medium">Advanced Diagnostics</h4>
                        <p className="text-sm text-muted-foreground">UV photography, moisture analysis, pore assessment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                      <div>
                        <h4 className="font-medium">Expert Consultation</h4>
                        <p className="text-sm text-muted-foreground">45-minute session with board-certified dermatologist</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                      <div>
                        <h4 className="font-medium">Custom Treatment Plan</h4>
                        <p className="text-sm text-muted-foreground">Personalized regimen with product recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                      <div>
                        <h4 className="font-medium">Follow-up Support</h4>
                        <p className="text-sm text-muted-foreground">3-month progress tracking and adjustments</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-accent" />
                      <h4 className="font-medium">Premium Analysis</h4>
                    </div>
                    <p className="text-2xl font-bold text-accent mb-1">$195</p>
                    <p className="text-sm text-muted-foreground">Includes $50 credit toward recommended products</p>
                  </div>

                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your Consultation
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6">
                  <h4 className="font-display text-xl font-bold mb-4">What to Expect</h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h5 className="font-medium">Skin History Review</h5>
                        <p className="text-sm text-muted-foreground">Discuss your concerns, goals, and past treatments</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h5 className="font-medium">Professional Analysis</h5>
                        <p className="text-sm text-muted-foreground">Detailed examination using specialized equipment</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h5 className="font-medium">Treatment Planning</h5>
                        <p className="text-sm text-muted-foreground">Customized skincare routine and product selection</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h5 className="font-medium">Ongoing Support</h5>
                        <p className="text-sm text-muted-foreground">Follow-up appointments and progress monitoring</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/50 rounded-lg">
                    <p className="text-sm text-center">
                      <span className="font-medium">Available at our clinic:</span><br />
                      123 Medical Plaza, Downtown<br />
                      Monday - Friday, 9 AM - 6 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Technology Information */}
      <div className="bg-gradient-to-r from-muted to-secondary border-t">
        <div className="container max-w-6xl mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Advanced AI Technology</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our skin analysis platform combines cutting-edge artificial intelligence with dermatological expertise 
              to provide accurate, personalized skincare recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Brain className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Machine Learning</h3>
              <p className="text-sm text-muted-foreground">
                Trained on over 100,000 dermatological images and assessments
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Clinical Validation</h3>
              <p className="text-sm text-muted-foreground">
                Algorithms validated by board-certified dermatologists
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Target className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Precision Analysis</h3>
              <p className="text-sm text-muted-foreground">
                95% accuracy in identifying skin conditions and concerns
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                AI model updated regularly with new research and data
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}