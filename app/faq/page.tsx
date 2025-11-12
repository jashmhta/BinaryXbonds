import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Binary Bonds",
  description: "Get answers to common questions about bond investments, our services, underwriting process, risks, compliance, and portfolio management at Binary Bonds.",
  keywords: "bond investment FAQ, bond trading questions, underwriting process, bond market risks, SEBI compliance, portfolio management",
  openGraph: {
    title: "FAQ - Binary Bonds",
    description: "Comprehensive answers to your bond investment questions",
    url: "https://binary-bonds-trading.netlify.app/faq",
    type: "website",
  },
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is Binary Bonds?",
          answer: "Binary Bonds is a specialized division of Binary Capital, focusing exclusively on bond market solutions. We provide comprehensive services including corporate bond underwriting, government securities trading, high-yield bonds, portfolio management, credit rating advisory, and secondary market trading for institutional investors, banks, HNIs, mutual funds, and insurance companies."
        },
        {
          question: "What types of bonds does Binary Bonds deal in?",
          answer: "We specialize in a wide range of fixed-income securities including: Corporate Bonds (investment-grade and high-yield), Government Securities (G-Secs, Treasury Bonds, State Development Loans), Municipal Bonds, Structured Debt Instruments, Convertible Bonds, Zero-Coupon Bonds, Floating Rate Notes, and Secured/Unsecured Debentures. Our expertise covers both primary market underwriting and secondary market trading across all major bond categories."
        },
        {
          question: "Who are your typical clients?",
          answer: "Our client base includes institutional investors, banks, high-net-worth individuals (HNIs), corporate treasuries, mutual funds, insurance companies, pension funds, asset management companies, family offices, and other financial institutions seeking professional bond market solutions and advisory services."
        }
      ]
    },
    {
      category: "Investment & Minimum Requirements",
      questions: [
        {
          question: "What is the minimum investment amount required?",
          answer: "Minimum investment amounts vary by bond type and issuer. Typically: Corporate Bonds - ₹1 Crore minimum, Government Securities - ₹50 Lakhs minimum, High-Yield Bonds - ₹2 Crore minimum, Municipal Bonds - ₹1 Crore minimum. We provide customized solutions based on your investment capacity and requirements. Retail investors can explore smaller denominations through our partnership programs."
        },
        {
          question: "How do I start investing in bonds through Binary Bonds?",
          answer: "Getting started is simple: (1) Contact our team for initial consultation, (2) Complete KYC and documentation process, (3) Open demat and trading accounts if needed, (4) Discuss your investment objectives and risk profile, (5) Receive personalized bond recommendations, (6) Execute transactions with our guidance, (7) Receive ongoing portfolio management and advisory support."
        },
        {
          question: "What returns can I expect from bond investments?",
          answer: "Returns vary based on bond type, credit rating, maturity, and market conditions. Generally: Government Securities: 6-8% annually, Investment-Grade Corporate Bonds: 7-10% annually, High-Yield Bonds: 10-14% annually, Tax-Free Municipal Bonds: 6-8% (tax-free). Returns also depend on whether you hold to maturity or trade in secondary markets. We provide detailed return projections for each investment opportunity."
        }
      ]
    },
    {
      category: "Underwriting & Primary Market",
      questions: [
        {
          question: "How does the bond underwriting process work?",
          answer: "Our comprehensive underwriting process includes: (1) Initial Consultation - Understanding issuer requirements and capital needs, (2) Credit Analysis - Detailed financial assessment and due diligence, (3) Rating Advisory - Coordination with credit rating agencies, (4) Bond Structuring - Designing optimal terms, coupon, maturity, and covenants, (5) Pricing - Market-based pricing strategy, (6) Documentation - Legal agreements and regulatory compliance, (7) Marketing - Investor outreach and roadshows, (8) Allocation - Book building and investor allocation, (9) Settlement - Successful placement and fund transfer. The entire process typically takes 4-8 weeks depending on complexity and market conditions."
        },
        {
          question: "What documentation is required for bond issuance?",
          answer: "For bond issuers, required documents include: Board resolutions, Financial statements (3 years audited), Credit rating letters, SEBI registration certificates, Memorandum and Articles of Association, Compliance certificates, Project reports (if applicable), Security creation documents, Debenture Trust Deed, Information Memorandum, and various regulatory filings. Our team provides complete guidance throughout the documentation process."
        },
        {
          question: "Can you help with credit rating for our company?",
          answer: "Yes, we provide comprehensive Credit Rating Advisory services. We work with all major rating agencies (CRISIL, ICRA, CARE, India Ratings, Brickwork) and help you: Prepare documentation, Improve financial metrics, Present to rating committees, Negotiate rating outcomes, Maintain ongoing rating compliance, and achieve rating upgrades over time. Our expertise helps companies secure better ratings, leading to lower borrowing costs."
        }
      ]
    },
    {
      category: "Risks & Risk Management",
      questions: [
        {
          question: "What are the risks involved in bond investments?",
          answer: "Bond investments carry several key risks: (1) Credit Risk - Possibility of issuer default or downgrade, (2) Interest Rate Risk - Bond prices fall when interest rates rise, (3) Liquidity Risk - Difficulty selling bonds quickly without price impact, (4) Reinvestment Risk - Risk of reinvesting coupons at lower rates, (5) Inflation Risk - Real returns eroded by inflation, (6) Call Risk - Early redemption by issuer, (7) Currency Risk - For foreign currency bonds. We provide comprehensive risk assessment, diversification strategies, and continuous monitoring to mitigate these risks."
        },
        {
          question: "How do you assess and mitigate risks?",
          answer: "Our risk management framework includes: Detailed credit analysis of issuers, Duration and convexity analysis for interest rate risk, Portfolio diversification across sectors, ratings, and maturities, Continuous market monitoring and early warning systems, Stress testing and scenario analysis, Regular portfolio reviews and rebalancing, Hedging strategies using derivatives when appropriate, and Compliance with regulatory limits and internal risk policies. We provide transparent risk reporting to all clients."
        },
        {
          question: "What happens if a bond defaults?",
          answer: "In case of default: (1) Immediate notification to all stakeholders, (2) Coordination with debenture trustees, (3) Legal action and recovery proceedings, (4) Asset attachment and security enforcement, (5) Negotiation with issuer for restructuring, (6) Participation in resolution processes, (7) Distribution of recovered amounts to bondholders. We have experienced legal teams and work with specialized recovery agents. Historical recovery rates vary but typically range from 20-60% depending on security and seniority."
        }
      ]
    },
    {
      category: "Regulatory & Compliance",
      questions: [
        {
          question: "How do you ensure regulatory compliance?",
          answer: "Binary Bonds operates under strict regulatory framework: (1) SEBI regulations for securities trading, (2) RBI guidelines for debt markets, (3) FIMMDA best practices, (4) Regular internal and external audits, (5) Dedicated compliance officers and teams, (6) Transparent reporting and disclosures, (7) Proper KYC/AML procedures, (8) All transactions through regulated exchanges (NSE, BSE), (9) Settlement through NSDL/CDSL clearing corporations, (10) Continuous staff training on compliance. We maintain zero-tolerance policy for compliance breaches."
        },
        {
          question: "What documentation is required for bond transactions?",
          answer: "For investors, required documents include: PAN Card (mandatory), KYC documents (Aadhaar, Passport, Voter ID), Address proof (recent utility bill, bank statement), Bank account details and cancelled cheque, Demat account details, Board resolution (for corporate/institutional investors), Investment policy document (for institutions), Signatures of authorized signatories, and Annual financial statements (for corporates). Our compliance team provides complete assistance with documentation to ensure smooth and compliant transactions."
        },
        {
          question: "Are bond investments safe and regulated?",
          answer: "Yes, bond investments in India are highly regulated. All bond transactions are governed by SEBI (Securities and Exchange Board of India) and RBI (Reserve Bank of India). Trading happens on regulated stock exchanges (NSE, BSE) with transparent price discovery. Settlement is handled by NSDL/CDSL providing secure holding and transfer. However, 'safe' is relative to the credit quality - Government bonds are considered risk-free, while corporate bonds carry credit risk. We help investors understand and manage these risks appropriately."
        }
      ]
    },
    {
      category: "Trading & Settlement",
      questions: [
        {
          question: "What is the difference between primary and secondary bond markets?",
          answer: "Primary Market: Where new bonds are issued for the first time. Companies/governments raise fresh capital by selling bonds to investors. We provide underwriting services, helping issuers structure, price, and place bonds. Investors get bonds at issue price. Secondary Market: Where existing bonds are traded between investors. Provides liquidity, allowing investors to buy/sell bonds before maturity. Prices fluctuate based on interest rates, credit quality, and demand-supply. We facilitate trading and provide market-making services. We offer comprehensive services in both markets."
        },
        {
          question: "How are bond prices determined?",
          answer: "Bond prices are influenced by multiple interconnected factors: (1) Prevailing Interest Rates - Inverse relationship (rates ↑ = prices ↓), (2) Credit Rating - Better ratings command higher prices, (3) Time to Maturity - Longer maturity = higher price volatility, (4) Coupon Rate - Higher coupons are more valuable, (5) Liquidity - More liquid bonds trade at premium, (6) Market Demand-Supply dynamics, (7) Macroeconomic Conditions - GDP, inflation, fiscal policy, (8) Issuer-specific news and financial health, (9) Embedded Options - Call/put features affect pricing. Our research team provides real-time pricing analysis, yield curves, and fair value assessments."
        },
        {
          question: "How long does settlement take for bond transactions?",
          answer: "Settlement timelines vary by instrument type: Government Securities (G-Secs) - T+1 basis (next business day), Corporate Bonds - T+2 basis (two business days after trade), Commercial Paper - T+0 or T+1, Certificate of Deposits - T+0 or T+1. We ensure efficient settlement through our relationships with clearing corporations (NSCCL, ICCL) and depositories (NSDL, CDSL). Funds are credited to your account immediately upon settlement. All settlements are DVP (Delivery versus Payment) ensuring simultaneous exchange of securities and funds."
        },
        {
          question: "Can I sell my bonds before maturity?",
          answer: "Yes, bonds can be sold in the secondary market before maturity. However, liquidity varies: Government Securities - Highly liquid with active markets, Large corporate bonds - Good liquidity, especially for well-known issuers, Smaller/lower-rated bonds - May have limited liquidity. When selling before maturity, you receive the current market price (which may be above or below your purchase price) plus accrued interest. We provide market-making services and help you find buyers even for less liquid bonds. Exit timing impacts returns significantly."
        }
      ]
    },
    {
      category: "Portfolio Management & Advisory",
      questions: [
        {
          question: "Do you provide ongoing portfolio management services?",
          answer: "Yes, we offer comprehensive Bond Portfolio Management Services including: (1) Regular portfolio reviews (monthly/quarterly), (2) Performance measurement and attribution analysis, (3) Rebalancing strategies based on market conditions, (4) Duration and convexity management, (5) Yield optimization and income enhancement, (6) Credit quality monitoring and upgrades/downgrades alerts, (7) Liquidity management and cash flow planning, (8) Tax-efficient structuring strategies, (9) Market research and economic updates, (10) Personalized advisory from dedicated relationship managers. We help you achieve optimal risk-adjusted returns aligned with your investment objectives."
        },
        {
          question: "What is your research and advisory process?",
          answer: "Our research process is comprehensive and data-driven: (1) Macroeconomic Analysis - GDP, inflation, monetary policy, fiscal policy, (2) Interest Rate Forecasting - Yield curve analysis and predictions, (3) Credit Research - Financial analysis of issuers, sector trends, (4) Relative Value Analysis - Identifying mispriced opportunities, (5) Technical Analysis - Trading patterns and momentum, (6) Regulatory Analysis - Impact of policy changes, (7) Market Intelligence - Primary dealer insights, auction data. We publish regular research reports, market updates, and investment recommendations. All research is independent and unbiased."
        },
        {
          question: "How do you handle interest rate risk in portfolios?",
          answer: "We employ sophisticated interest rate risk management: (1) Duration Matching - Align portfolio duration with investment horizon, (2) Laddering Strategy - Stagger maturities for consistent cash flows, (3) Barbell Strategy - Combine short and long maturities, (4) Bullet Strategy - Concentrate in specific maturity, (5) Dynamic Hedging - Use interest rate derivatives when appropriate, (6) Scenario Analysis - Test portfolio under different rate environments, (7) Active Duration Management - Adjust based on rate forecasts. We customize strategies based on your rate view and risk tolerance."
        }
      ]
    },
    {
      category: "Fees & Charges",
      questions: [
        {
          question: "What are your fees and charges?",
          answer: "Our fee structure is transparent and competitive: Underwriting Fees: 0.25% - 1.5% of issue size (based on complexity), Brokerage for Secondary Trading: 0.05% - 0.25% per transaction, Portfolio Management Fees: 0.25% - 0.75% annually on AUM, Advisory Fees: Fixed retainer or project-based, Credit Rating Advisory: ₹2-5 Lakhs per assignment. We also have volume-based discounts for large transactions. All fees are disclosed upfront with no hidden charges. GST applicable as per regulations. We provide value through expertise, market access, and superior execution quality."
        },
        {
          question: "Are there any hidden charges or exit loads?",
          answer: "No, we maintain complete transparency in all our charges. All fees are clearly disclosed in the agreement before transaction. There are no hidden charges, surprise fees, or exit loads. You pay only for services explicitly agreed upon. However, please note: Early redemption by issuer may affect returns, Secondary market sale before maturity may result in capital loss/gain based on market prices, Demat account charges are levied by depositories (not us), Tax implications based on your tax bracket. We provide detailed cost-benefit analysis for every investment decision."
        }
      ]
    },
    {
      category: "Tax & Returns",
      questions: [
        {
          question: "What are the tax implications of bond investments?",
          answer: "Tax treatment varies by bond type and holding period: Interest Income: Taxable as \"Income from Other Sources\" at your applicable slab rate, Capital Gains (if sold before maturity): Held < 12 months = Short-term capital gains (slab rate), Held ≥ 12 months = Long-term capital gains (10% without indexation or 20% with indexation), Tax-Free Bonds: Interest is completely tax-exempt, TDS: 10% TDS on interest if annual interest > ₹5,000. Corporate investors have different tax treatment. We provide tax-efficient structuring advice and annual tax statements for easy filing."
        },
        {
          question: "How is interest paid on bonds?",
          answer: "Interest payment (coupon) varies by bond structure: Fixed-Rate Bonds: Regular interest (typically semi-annual or annual) at fixed rate, Floating-Rate Bonds: Interest reset periodically based on benchmark (e.g., repo rate + spread), Zero-Coupon Bonds: No periodic interest; returns from discount to face value, Cumulative Bonds: Interest accumulated and paid at maturity. Interest is directly credited to your registered bank account on payment dates. We send advance notifications before all coupon payments and help track all receivables."
        }
      ]
    },
    {
      category: "Contact & Support",
      questions: [
        {
          question: "How can I contact Binary Bonds?",
          answer: "You can reach us through multiple channels: Phone: +91 7738056127 (Business hours: Mon-Fri, 9:30 AM - 6:00 PM), Email: sales@binarycapital.in, Website: Use contact form on our website, Office Address: 2045, 1st Floor, 20th B Cross, Opp. A-Khata Park, Ideal Homes Twp, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098. For urgent portfolio matters, your dedicated relationship manager is available on direct line. We strive to respond to all inquiries within 24 hours."
        },
        {
          question: "Do you provide market updates and research reports?",
          answer: "Yes, we provide regular market intelligence: Daily Market Updates - Interest rate movements, auction results, Weekly Research Reports - Sector analysis, new issues, credit updates, Monthly Portfolio Reviews - Performance analysis and recommendations, Quarterly Economic Outlook - Macro trends and strategy, Special Reports - On regulatory changes, market events. All clients receive these updates via email. We also conduct periodic webinars and client meets for detailed discussions. Our research is one of our key value propositions."
        },
        {
          question: "What support do you provide to first-time bond investors?",
          answer: "We provide comprehensive onboarding support: (1) Educational Sessions - Understanding bond markets, risks, returns, (2) Personalized Consultation - Assess your goals, risk profile, liquidity needs, (3) Documentation Assistance - Complete handholding for all paperwork, (4) Account Setup - Help with demat, trading accounts, (5) Investment Planning - Create customized bond investment strategy, (6) Ongoing Education - Regular market updates and learning resources, (7) Dedicated Support - Relationship manager for all queries, (8) Portfolio Monitoring - Continuous tracking and advisory. We believe in empowering investors with knowledge for better decision-making."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <FAQSchema />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(210,40%,30%)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive answers to all your questions about bond investments, our services, 
              processes, risks, compliance, and portfolio management.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                {/* Category Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-2 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[hsl(var(--golden))] rounded-full"></span>
                    {category.category}
                  </h2>
                  <div className="h-1 w-24 bg-[hsl(var(--golden))] rounded-full ml-5"></div>
                </div>

                {/* Questions in Category */}
                <div className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-[hsl(var(--golden))] hover:shadow-lg transition-shadow"
                    >
                      <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 transition-colors">
                        <span className="text-lg font-semibold text-[hsl(var(--navy))] pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown className="w-6 h-6 text-[hsl(var(--golden))] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(210,40%,30%)] rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our team of bond market experts is here to help you with personalized guidance 
                and answers to your specific investment queries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917738056127"
                  className="px-8 py-4 bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-[hsl(var(--navy))] font-semibold rounded-lg transition-colors inline-block"
                >
                  Call Us: +91 7738056127
                </a>
                <a
                  href="mailto:sales@binarycapital.in"
                  className="px-8 py-4 bg-white hover:bg-gray-100 text-[hsl(var(--navy))] font-semibold rounded-lg transition-colors inline-block"
                >
                  Email: sales@binarycapital.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
