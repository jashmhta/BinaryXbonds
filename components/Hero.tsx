'use client';

import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Users, Download, FileText } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadBrochure = () => {
    // Track download analytics if needed
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download', {
        event_category: 'engagement',
        event_label: 'Binary Bonds Brochure'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background with skyline image */}
      <div className="absolute inset-0">
        {/* City skyline background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/skyline.png)' }}
        ></div>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Building Trust with{" "}
            <span className="text-[hsl(var(--golden))]">Strategic</span> Bond
            Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-3xl text-white/95 mb-6 font-bold drop-shadow-lg">
            Primary Market Expertise | Credit Rating Advisory | Portfolio Management
          </p>

          {/* Enhanced Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Navigate the bond market with confidence. From corporate underwriting to government securities, 
            we deliver comprehensive solutions tailored to your investment goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden))]/90 text-black font-bold text-base sm:text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-[hsl(var(--golden))]/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Users className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold text-base sm:text-lg px-8 py-6 rounded-full backdrop-blur-sm shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <a 
                href="/binary-bonds-brochure.pdf" 
                download="Binary-Bonds-Brochure.pdf"
                onClick={handleDownloadBrochure}
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-[hsl(var(--golden))] mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Market Leadership</h3>
              <p className="text-sm sm:text-base text-white/80">
                Trusted partner in bond market solutions
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-[hsl(var(--golden))] mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Regulatory Excellence</h3>
              <p className="text-sm sm:text-base text-white/80">
                Fully compliant with SEBI guidelines
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-xl">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[hsl(var(--golden))] mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-sm sm:text-base text-white/80">
                Decades of combined market experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
