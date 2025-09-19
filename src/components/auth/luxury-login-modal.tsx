"use client"

import { useState } from "react"
import { X, Eye, EyeOff, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "motion/react"

interface LuxuryLoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LuxuryLoginModal({ isOpen, onClose }: LuxuryLoginModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              {/* Left Side - Model Photography */}
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 hidden lg:block">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                <div className="absolute inset-0 backdrop-blur-[0.5px]" />
                
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-card/10 to-card/5 backdrop-blur-sm" />
                
                {/* Content overlay */}
                <div className="relative h-full flex flex-col justify-end p-8 text-card">
                  <div className="space-y-4">
                    <h2 className="font-display text-3xl font-bold text-card drop-shadow-lg">
                      Discover Your
                      <span className="block text-accent">Perfect Skin</span>
                    </h2>
                    <p className="text-card/90 text-lg drop-shadow">
                      Join thousands who have transformed their skincare journey with our expert solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="relative bg-card p-8 lg:p-12">
                {/* Close button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                </Button>

                <div className="h-full flex flex-col justify-center space-y-8">
                  {/* Header */}
                  <div className="text-center space-y-2">
                    <h1 className="font-display text-2xl font-bold text-foreground">
                      Welcome Back
                    </h1>
                    <p className="text-muted-foreground">
                      Sign in to continue your skincare journey
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 bg-muted/50 border-border focus:border-accent focus:ring-accent/20"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 pr-10 h-12 bg-muted/50 border-border focus:border-accent focus:ring-accent/20"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          checked={rememberMe}
                          onCheckedChange={setRememberMe}
                          className="border-border data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                        />
                        <Label htmlFor="remember" className="text-sm text-muted-foreground">
                          Remember me
                        </Label>
                      </div>
                      <Button
                        variant="link"
                        className="text-sm text-accent hover:text-accent/80 p-0 h-auto"
                      >
                        Forgot password?
                      </Button>
                    </div>

                    {/* Sign In Button */}
                    <Button
                      type="submit"
                      className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                    >
                      Sign In
                    </Button>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-card text-muted-foreground">Or continue with</span>
                      </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="h-12 border-border hover:bg-muted/50"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        className="h-12 border-border hover:bg-muted/50"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </Button>
                    </div>
                  </form>

                  {/* Sign Up Link */}
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <Button variant="link" className="text-accent hover:text-accent/80 p-0 h-auto font-medium">
                        Sign up
                      </Button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}