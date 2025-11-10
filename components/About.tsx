'use client';

import { APP_LOGO } from "@/lib/constants";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
            src={APP_LOGO} 
            alt="Binary Bonds - Leading Bond Market Specialists and Underwriting Services" 
            className="h-24 w-24"
            loading="lazy"
          />
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-black text-[hsl(var(--navy))] mb-8">
            About Binary Bonds
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed font-medium">
            <strong>Binary Bonds</strong>, a specialized division of <strong>Binary Capital</strong>, focuses
            exclusively on the <strong>primary and secondary bond markets</strong>. We provide
            comprehensive <strong>bond underwriting services</strong>, <strong>government securities trading</strong>,
            and <strong>debt capital market solutions</strong> for banks, high net worth
            individuals, mutual fund houses, insurance companies, and various
            financial institutions across India.
          </p>

          <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
            Our expertise lies in balancing optimal returns with careful <strong>risk
            assessment</strong> and maintaining strict <strong>SEBI and RBI regulatory compliance</strong>.
            With over <strong>₹2000 Crores in bonds successfully underwritten</strong> and
            <strong> 150+ institutional clients</strong> served, we have established ourselves
            as trusted partners in India's debt capital markets. Our mission is to
            transform aspirations into achievements, empowering our clients'
            financial futures with integrity, expertise, and a relentless focus
            on delivering exceptional value.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12" data-aos="zoom-in" data-aos-delay="300">
            <div className="text-center">
              <AnimatedCounter
                end={2000}
                prefix="₹"
                suffix=" Cr+"
                className="text-4xl md:text-5xl font-bold text-[hsl(var(--golden))] mb-2"
              />
              <div className="text-gray-700 font-bold text-lg">Bonds Underwritten</div>
            </div>
            <div className="text-center">
              <AnimatedCounter
                end={150}
                suffix="+"
                className="text-4xl md:text-5xl font-bold text-[hsl(var(--golden))] mb-2"
              />
              <div className="text-gray-700 font-bold text-lg">Institutional Clients</div>
            </div>
            <div className="text-center">
              <AnimatedCounter
                end={500}
                suffix="+"
                className="text-4xl md:text-5xl font-bold text-[hsl(var(--golden))] mb-2"
              />
              <div className="text-gray-700 font-bold text-lg">Bond Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--golden))] mb-2">
                AAA
              </div>
              <div className="text-gray-700 font-bold text-lg">Credit Rating Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
