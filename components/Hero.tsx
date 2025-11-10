'use client';

import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Users } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
            Primary Market Bonds • Secondary Market Trading • Bond Underwriting
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-semibold">
            Comprehensive bond market solutions for institutional investors,
            banks, HNIs, mutual funds, and insurance companies, with a focus on
            risk assessment and regulatory compliance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-[hsl(var(--navy))] font-semibold text-lg px-10 py-7 shadow-2xl"
              onClick={() => scrollToSection("services")}
            >
              Discover Our Solutions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--navy))] text-lg px-10 py-7 bg-transparent shadow-2xl font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
