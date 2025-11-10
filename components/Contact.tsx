'use client';

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--navy))] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and explore how we can help transform your bond investment journey. Reach out to our experts for personalized solutions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Phone */}
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--golden))]/10 mb-4">
              <Phone className="w-6 h-6 text-[hsl(var(--golden))]" />
            </div>
            <h3 className="text-lg font-semibold text-[hsl(var(--navy))] mb-2">
              Phone
            </h3>
            <p className="text-gray-600 mb-1">+91 7738056127</p>
            <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--golden))]/10 mb-4">
              <Mail className="w-6 h-6 text-[hsl(var(--golden))]" />
            </div>
            <h3 className="text-lg font-semibold text-[hsl(var(--navy))] mb-2">
              Email
            </h3>
            <p className="text-gray-600 mb-1">sales@binarycapital.in</p>
            <p className="text-sm text-gray-500">We respond within 24 hours</p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--golden))]/10 mb-4">
              <MapPin className="w-6 h-6 text-[hsl(var(--golden))]" />
            </div>
            <h3 className="text-lg font-semibold text-[hsl(var(--navy))] mb-2">
              Address
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              2045, 2nd Floor, Spaces Adani Height, Andheri West, Mumbai, India
            </p>
            <a 
              href="https://maps.google.com/?q=2045+2nd+Floor+Spaces+Adani+Height+Andheri+West+Mumbai+India" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[hsl(var(--golden))] hover:text-[hsl(var(--golden-dark))] text-sm font-medium inline-flex items-center gap-1"
            >
              <MapPin className="w-4 h-4" />
              View on Google Maps
            </a>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--golden))]/10 mb-4">
              <Clock className="w-6 h-6 text-[hsl(var(--golden))]" />
            </div>
            <h3 className="text-lg font-semibold text-[hsl(var(--navy))] mb-2">
              Business Hours
            </h3>
            <p className="text-gray-600 mb-1">Monday - Friday</p>
            <p className="text-sm text-gray-500">9:00 AM - 6:00 PM IST</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mb-16 bg-gradient-to-br from-[#1a2332] to-[#2c3e50] rounded-2xl p-8 md:p-12">
          <ContactForm />
        </div>

        {/* Google Maps */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4!2d72.83!3d19.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzQ3LjQiTiA3MsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Binary Bonds Office Location - Andheri West, Mumbai"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
