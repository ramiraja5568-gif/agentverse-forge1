import { CustomButton } from "@/components/ui/custom-button";
import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Your Personal AI Agents,{" "}
            <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Built for Your Business
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            We create powerful AI agents to automate your work and grow your business.
            Custom solutions, affordable pricing, fast delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CustomButton asChild variant="accent" size="xl">
              <Link to="/contact" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </CustomButton>
            
            <CustomButton asChild variant="outline_white" size="xl">
              <a 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </a>
            </CustomButton>
          </div>

          {/* Demo Video Embed */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/20">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="MyAgentVerse Demo"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;