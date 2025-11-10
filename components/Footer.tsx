import { APP_LOGO, APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--navy))] py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={APP_LOGO} alt={APP_NAME} className="h-10 w-10" />
            <span className="text-xl font-bold text-white">{APP_NAME}</span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
              Strategic bond market solutions for institutional investors. A specialized division of Binary Capital.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--golden))]">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Corporate Bond Underwriting</li>
              <li>Government Securities</li>
              <li>High-Yield Bonds</li>
              <li>Bond Portfolio Management</li>
              <li>Credit Rating Advisory</li>
              <li>Secondary Market Trading</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--golden))]">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <span className="font-medium text-white">Phone:</span>
                <br />
                +91 7738056127
              </li>
              <li>
                <span className="font-medium text-white">Email:</span>
                <br />
                sales@binarycapital.in
              </li>
              <li>
                <span className="font-medium text-white">Address:</span>
                <br />
                2045, 2nd Floor, Spaces Adani Height
                <br />
                Andheri West, Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/70">
            © 2025 Binary Bonds - A Division of Binary Capital Advisors LLP. All rights reserved. | Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
