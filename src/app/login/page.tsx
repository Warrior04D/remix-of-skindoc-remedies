"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Beautiful skincare model with glowing skin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Login Form Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-end pr-8 md:pr-16 lg:pr-24">
        <Card className="w-full max-w-md backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
          <div className="p-8 space-y-8">
            {/* Logo & Title */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-2xl font-display text-white font-semibold">
                  SKIN DOCTOR
                </span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-display text-white font-semibold">
                  Welcome Back
                </h1>
                <p className="text-white/80 text-sm">
                  Sign in to your account to continue your skincare journey
                </p>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent focus:ring-accent/50 h-12"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent focus:ring-accent/50 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 text-white/80 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/20 bg-white/10 text-accent focus:ring-accent/50" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-semibold transition-all duration-300 group"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <Separator className="bg-white/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-transparent px-4 text-sm text-white/60">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-3">
              <Button
                variant="outline"
                onClick={() => handleSocialLogin("google")}
                className="h-12 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
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
              </Button>
              
              <Button
                variant="outline"
                onClick={() => handleSocialLogin("facebook")}
                className="h-12 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Button>

              <Button
                variant="outline"
                onClick={() => handleSocialLogin("apple")}
                className="h-12 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-white/80">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                Sign up here
              </a>
            </div>
          </div>
        </Card>
      </div>

      {/* Floating Brand Elements */}
      <div className="absolute top-8 left-8 z-10">
        <div className="flex items-center space-x-3 text-white/90">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-full"></div>
          </div>
          <div>
            <div className="font-display text-xl font-semibold">SKIN DOCTOR</div>
            <div className="text-sm text-white/70">Premium Skincare Solutions</div>
          </div>
        </div>
      </div>

      {/* Subtle Animation Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}