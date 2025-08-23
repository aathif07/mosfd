import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Features from "@/components/Features";

const Hero = () => {
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
          <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen text-center">
            {/* Logo/Brand area */}
            <div className="mb-8 animate-fade-in-up">
              <div className="flex items-center gap-2 text-accent mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wider uppercase">TYPE ONE VENTURES</span>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl font-bold mb-8 animate-fade-in-up">
              Progressing Humanity
              <br />
              <span className="relative">
                Forward
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 blur-lg animate-pulse-glow -z-10" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl animate-fade-in-up font-light">
              We are investing in an interplanetary future
            </p>

            {/* CTA Section */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button variant="cosmic" size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline-cosmic" size="lg" className="group">
                  <Zap className="mr-2 w-4 h-4" />
                  Learn More
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

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center text-muted-foreground">
                <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Features />
    </>
  );
};

export default Hero;