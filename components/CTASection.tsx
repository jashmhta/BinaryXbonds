'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, TrendingUp, Shield } from "lucide-react";

export default function CTASection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#1a237e] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(var(--golden))] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(var(--golden))] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your{" "}
            <span className="text-[hsl(var(--golden))]">Bond Portfolio</span>?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Partner with India's trusted bond market specialists. Let's create a customized 
            investment strategy that delivers stable returns and meets your financial goals.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-left">
              <TrendingUp className="w-10 h-10 text-[hsl(var(--golden))] mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Expert Guidance</h3>
              <p className="text-white/80 text-sm">
                Decades of combined experience in bond markets and portfolio management
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-left">
              <Shield className="w-10 h-10 text-[hsl(var(--golden))] mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">SEBI Compliant</h3>
              <p className="text-white/80 text-sm">
                Fully regulated operations ensuring investor protection and transparency
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden))]/90 text-black font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-[hsl(var(--golden))]/50 transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
            >
              Start Your Investment Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold text-lg px-10 py-7 rounded-full backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
            >
              <a 
                href="/binary-bonds-brochure.pdf" 
                download="Binary-Bonds-Brochure.pdf"
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Download Our Brochure
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <p className="text-white/70 text-sm mt-8">
            No obligation consultation • Free portfolio analysis • Personalized recommendations
          </p>
        </div>
      </div>
    </section>
  );
}
