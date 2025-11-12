'use client';

import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_NAME } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <img src={APP_LOGO} alt={APP_NAME} className="h-8 w-8 md:h-12 md:w-12" />
            <span className="text-base md:text-xl font-bold text-[hsl(var(--navy))]">
              {APP_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[hsl(var(--golden))] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[hsl(var(--golden))] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-[hsl(var(--golden))] transition-colors font-medium"
            >
              Services
            </button>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-[hsl(var(--golden))] transition-colors font-medium"
            >
              FAQ
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-[hsl(var(--navy))] px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[hsl(var(--navy))]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-[hsl(var(--golden))] transition-colors font-medium text-left px-4 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[hsl(var(--golden))] transition-colors font-medium text-left px-4 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-[hsl(var(--golden))] transition-colors font-medium text-left px-4 py-2"
              >
                Services
              </button>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-[hsl(var(--golden))] transition-colors font-medium text-left px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-[hsl(var(--navy))] px-4 py-2 rounded-lg font-medium transition-colors text-left mx-4"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
