import { APP_LOGO, APP_NAME } from "@/lib/constants";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[hsl(var(--navy))] via-[hsl(210,40%,25%)] to-[hsl(var(--navy))] text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <img src={APP_LOGO} alt={APP_NAME} className="h-12 w-12" />
              <span className="text-2xl font-bold text-white">{APP_NAME}</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Strategic bond market solutions for institutional investors, corporate treasuries, and high-net-worth individuals. 
              A specialized division of Binary Capital.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--golden))] flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--golden))] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--golden))] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[hsl(var(--golden))] flex items-center gap-2">
              <span className="w-1 h-6 bg-[hsl(var(--golden))] rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/corporate-bond-underwriting" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  Corporate Bond Underwriting
                </Link>
              </li>
              <li>
                <Link href="/services/government-securities" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  Government Securities
                </Link>
              </li>
              <li>
                <Link href="/services/high-yield-bonds" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  High-Yield Bonds
                </Link>
              </li>
              <li>
                <Link href="/services/bond-portfolio-management" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  Bond Portfolio Management
                </Link>
              </li>
              <li>
                <Link href="/services/credit-rating-advisory" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  Credit Rating Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/secondary-market-trading" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  Secondary Market Trading
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[hsl(var(--golden))] flex items-center gap-2">
              <span className="w-1 h-6 bg-[hsl(var(--golden))] rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#home" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="/binary-bonds-brochure.pdf" download className="text-white/80 hover:text-[hsl(var(--golden))] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full"></span>
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[hsl(var(--golden))] flex items-center gap-2">
              <span className="w-1 h-6 bg-[hsl(var(--golden))] rounded-full"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--golden))] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-xs mb-1">Phone</p>
                  <a href="tel:+917738056127" className="text-white hover:text-[hsl(var(--golden))] transition-colors text-sm font-medium">
                    +91 7738056127
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--golden))] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-xs mb-1">Email</p>
                  <a href="mailto:sales@binarycapital.in" className="text-white hover:text-[hsl(var(--golden))] transition-colors text-sm font-medium break-all">
                    sales@binarycapital.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--golden))] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-xs mb-1">Address</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    2045, 1st Floor, 20th B Cross,<br />
                    Opp. A-Khata Park, Ideal Homes Twp,<br />
                    Rajarajeshwari Nagar,<br />
                    Bengaluru, Karnataka 560098
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} <span className="text-white font-semibold">Binary Capital</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-[hsl(var(--golden))] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-[hsl(var(--golden))] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-[hsl(var(--golden))] transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Disclaimer */}
      <div className="bg-black/20 border-t border-white/5">
        <div className="container py-4">
          <p className="text-white/40 text-xs text-center leading-relaxed">
            <strong className="text-white/60">Regulatory Disclaimer:</strong> Binary Bonds operates under the regulatory framework of SEBI and RBI. 
            Bond investments are subject to market risks. Past performance is not indicative of future results. 
            Please read all scheme-related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
