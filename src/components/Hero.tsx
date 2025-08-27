import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Zap, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  return (
    <>
      <div className="light-beam-bg min-h-screen relative overflow-hidden">
        {/* Animated light particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-60" />
          <div className="absolute top-32 right-20 w-1 h-1 bg-primary rounded-full animate-float-delayed opacity-40" />
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-accent/50 rounded-full animate-pulse opacity-30" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/60 rounded-full animate-float opacity-50" />
        </div>

        <div className="light-beam-overlay">
          <div className="container mx-auto px-4 py-22 flex flex-col items-center justify-center min-h-screen text-center">
            {/* Logo/Brand area */}
            <div className="mb-8 animate-fade-in-up">
              <div className="flex items-center gap-2 text-accent mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">Meet the World's First & One of it's kind</span>
              </div>
            </div>
{/* Main headline */}
<h1 className="hero-text text-6xl md:text-8xl lg:text-8xl font-bold mb-8 animate-fade-in-up relative">
  Marketing Operating
  <br />
  <span className="text-white text-13xl md:text-9xl lg:text-8xl">System</span>

  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 blur-lg animate-pulse-glow -z-10" />
</h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl animate-fade-in-up font-light">
Not an app, not a tool.  <br />
A workfoce of marketing agents in your hand. </p>

            {/* CTA Section */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button 
                  variant="cosmic" 
                  size="lg" 
                  className="group"
                  onClick={() => navigate('/dashboard')}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
              </div>

              {/* Email signup */}
              <div className="mt-8 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border max-w-md">
                <p className="text-sm text-muted-foreground mb-4">
                  Join the future. Get early access.
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Your email address" 
                    className="bg-background/50 border-accent/30 focus:border-accent"
                  />
                  <Button variant="cosmic" size="sm">
                    Join
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setShowLoginModal(false)}
        >
          <div 
            className="relative bg-gradient-to-br from-card/95 to-background/95 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-10 w-full max-w-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-1 drop-shadow-lg">Welcome Back</h2>
                <p className="text-accent/80 text-sm">Sign in to your account</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200"
                onClick={() => setShowLoginModal(false)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Login Form */}
            <form className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-semibold text-white/90 mb-3">
                  Username
                </label>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  className="bg-white/5 border-2 border-accent/20 focus:border-accent hover:border-accent/40 text-white placeholder:text-gray-400 rounded-xl py-4 px-4 text-lg backdrop-blur-sm transition-all duration-200 focus:bg-white/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/90 mb-3">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-white/5 border-2 border-accent/20 focus:border-accent hover:border-accent/40 text-white placeholder:text-gray-400 rounded-xl py-4 px-4 text-lg backdrop-blur-sm transition-all duration-200 focus:bg-white/10"
                />
              </div>

            <Button
                className="w-full text-lg py-4 mt-8 rounded-xl bg-white text-black hover:bg-gray-100 font-semibold"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/dashboard');
                }}
              >
                Sign In
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>

            {/* Additional Options */}
            <div className="mt-8 text-center relative z-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
                <span className="text-white/50 text-sm">or</span>
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
              </div>
              
              <p className="text-white/70 text-sm">
                Don't have an account?{" "}
                <span className="text-accent cursor-pointer hover:text-accent/80 font-semibold hover:underline transition-all duration-200">
                  Create one now
                </span>
              </p>
              
              <p className="text-white/50 text-xs mt-4">
                <span className="cursor-pointer hover:text-accent transition-colors">Forgot password?</span>
              </p>
            </div>
          </div>
        </div>
      )}
   
    </>
  );
};

export default Hero;