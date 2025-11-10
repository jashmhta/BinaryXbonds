'use client';

import { Shield, TrendingUp, Users, Award, Clock, Target } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Regulatory Excellence",
      description: "Full compliance with SEBI regulations and industry best practices, ensuring secure and transparent transactions."
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "Deep understanding of primary and secondary bond markets with proven track record across economic cycles."
    },
    {
      icon: Users,
      title: "Institutional Focus",
      description: "Specialized services tailored for banks, insurance companies, mutual funds, and high-net-worth individuals."
    },
    {
      icon: Award,
      title: "Credit Rating Partners",
      description: "Strong relationships with top credit rating agencies ensuring optimal ratings for our clients."
    },
    {
      icon: Clock,
      title: "Swift Execution",
      description: "Efficient processing and settlement with dedicated relationship managers for seamless transactions."
    },
    {
      icon: Target,
      title: "Risk Management",
      description: "Comprehensive risk assessment frameworks protecting client interests while maximizing returns."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black text-[hsl(var(--navy))] mb-6">
            Why Choose Binary Bonds
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            As a specialized division of Binary Capital, we bring institutional-grade bond market expertise with a focus on transparency, compliance, and client success.
          </p>
        </div>

        {/* Animated Video Background Section */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
            {/* Seamless looping video background */}
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/skyline.png"
              style={{ pointerEvents: 'none' }}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            {/* Overlay content */}
            <div className="relative z-10 h-full flex items-center justify-center bg-black/30">
              <div className="text-center px-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Experience Excellence in Bond Markets
                </h3>
                <p className="text-xl text-white/90">
                  Seamless execution, strategic insights, trusted partnerships
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[hsl(var(--golden))]"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-black text-[hsl(var(--navy))] mb-3">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-[hsl(var(--golden-dark))] to-[hsl(var(--golden))] rounded-2xl p-8 md:p-12" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 text-[hsl(var(--navy))]">₹2000Cr+</div>
              <div className="text-sm md:text-base lg:text-lg font-bold text-[hsl(var(--navy))]/80">Bonds Underwritten</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 text-[hsl(var(--navy))]">150+</div>
              <div className="text-sm md:text-base lg:text-lg font-bold text-[hsl(var(--navy))]/80">Institutional Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 text-[hsl(var(--navy))]">500+</div>
              <div className="text-sm md:text-base lg:text-lg font-bold text-[hsl(var(--navy))]/80">Transactions Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 text-[hsl(var(--navy))]">AAA</div>
              <div className="text-sm md:text-base lg:text-lg font-bold text-[hsl(var(--navy))]/80">Rating Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
