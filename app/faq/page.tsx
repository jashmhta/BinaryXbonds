import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, HelpCircle, FileText, Shield, TrendingUp } from "lucide-react";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Binary Bonds",
  description: "Get comprehensive answers to common questions about bond investments, our services, underwriting process, risks, compliance, and portfolio management at Binary Bonds.",
  keywords: "bond investment FAQ, corporate bonds questions, underwriting FAQ, bond market help, investment queries, SEBI compliance, bond trading questions",
  openGraph: {
    title: "FAQ - Binary Bonds",
    description: "Find answers to your bond investment questions",
    type: "website",
  },
};

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // General Bond Investment Questions
  {
    category: "General Bond Investment",
    question: "What are bonds and how do they work?",
    answer: "Bonds are fixed-income securities that represent a loan made by an investor to a borrower (typically corporate or governmental). They work by providing regular interest payments (coupon payments) to bondholders and returning the principal amount at maturity. Bonds are considered lower-risk investments compared to stocks and provide predictable income streams."
  },
  {
    category: "General Bond Investment",
    question: "What is the minimum investment amount for bonds?",
    answer: "The minimum investment varies depending on the type of bond. Corporate bonds typically have a face value of ₹10 lakhs, while government securities can start from ₹10,000. We also offer portfolio solutions that allow for smaller investments through pooled funds, making bond investments accessible to a wider range of investors."
  },
  {
    category: "General Bond Investment",
    question: "How are bond returns calculated?",
    answer: "Bond returns come from two sources: coupon payments (regular interest) and capital gains (if sold before maturity at a higher price). The Yield to Maturity (YTM) is the most comprehensive measure, accounting for coupon payments, current market price, par value, and time to maturity. We provide detailed return calculations for all investment options."
  },
  {
    category: "General Bond Investment",
    question: "What is the difference between bonds and stocks?",
    answer: "Bonds are debt instruments where you lend money and receive fixed interest payments, while stocks represent ownership in a company with variable returns through dividends and capital appreciation. Bonds typically offer lower risk and predictable income, whereas stocks offer higher growth potential but with greater volatility."
  },

  // Our Services
  {
    category: "Our Services",
    question: "What services does Binary Bonds offer?",
    answer: "We offer comprehensive bond market solutions including: Corporate Bond Underwriting, Government Securities Trading, High-Yield Bond Investments, Secondary Market Trading, Credit Rating Advisory, and Portfolio Management Services. Our end-to-end solutions cover primary issuance, secondary trading, and ongoing portfolio management."
  },
  {
    category: "Our Services",
    question: "Do you offer personalized investment advisory?",
    answer: "Yes, we provide personalized investment advisory services tailored to your financial goals, risk tolerance, and investment horizon. Our experienced advisors conduct thorough portfolio analysis and recommend suitable bond investments aligned with your objectives. We offer both one-time consultations and ongoing portfolio management services."
  },
  {
    category: "Our Services",
    question: "Can you help with bond portfolio diversification?",
    answer: "Absolutely. We specialize in creating diversified bond portfolios across various sectors, credit ratings, and maturity profiles. Our team analyzes your existing holdings and recommends optimal allocation strategies to balance risk and return while ensuring liquidity needs are met."
  },
  {
    category: "Our Services",
    question: "Do you provide credit rating advisory services?",
    answer: "Yes, we offer comprehensive credit rating advisory services. We help issuers understand rating methodologies, prepare documentation for rating agencies, and implement strategies to maintain or improve credit ratings. We also provide credit analysis for investors to assess bond quality."
  },

  // Underwriting Process
  {
    category: "Underwriting Process",
    question: "What is bond underwriting and how does it work?",
    answer: "Bond underwriting is the process where financial institutions (underwriters) help companies issue bonds to investors. We assess the issuer's creditworthiness, determine appropriate pricing and terms, purchase the bonds from the issuer, and then distribute them to investors. This ensures successful capital raising while managing risk."
  },
  {
    category: "Underwriting Process",
    question: "How long does the underwriting process typically take?",
    answer: "The complete underwriting process typically takes 6-12 weeks, depending on the complexity of the issue and regulatory requirements. This includes due diligence (2-3 weeks), documentation and regulatory filing (2-4 weeks), rating process (2-3 weeks), and final issuance and settlement (1-2 weeks)."
  },
  {
    category: "Underwriting Process",
    question: "What documents are required for bond issuance?",
    answer: "Required documents include: audited financial statements (last 3 years), board resolutions, credit rating reports, legal opinions, project reports (for project-specific bonds), KYC documents, and draft prospectus. We provide a comprehensive checklist and assist with document preparation."
  },
  {
    category: "Underwriting Process",
    question: "What are the costs involved in bond underwriting?",
    answer: "Underwriting costs typically include underwriting fees (0.5-2% of issue size), rating agency fees, legal fees, trustee fees, and listing fees. The exact cost structure depends on the issue size, complexity, and credit rating. We provide transparent fee structures upfront with no hidden charges."
  },

  // Risks and Returns
  {
    category: "Risks and Returns",
    question: "What are the risks associated with bond investments?",
    answer: "Key risks include: Credit Risk (issuer default), Interest Rate Risk (bond prices fall when rates rise), Liquidity Risk (difficulty selling), Inflation Risk (eroding real returns), and Reinvestment Risk (reinvesting coupons at lower rates). We help assess and mitigate these risks through proper due diligence and diversification."
  },
  {
    category: "Risks and Returns",
    question: "How safe are corporate bonds compared to government bonds?",
    answer: "Government bonds (G-Secs) are considered the safest as they're backed by sovereign guarantee. Corporate bonds carry higher risk but offer higher returns. Safety depends on the issuer's credit rating - AAA-rated corporate bonds are very safe, while lower-rated bonds carry higher risk. We recommend diversification across rating categories."
  },
  {
    category: "Risks and Returns",
    question: "What happens if a bond issuer defaults?",
    answer: "In case of default, bondholders have legal recourse through the bond trustee who represents their interests. Recovery depends on the security/collateral backing the bond and the issuer's asset position. Secured bonds have higher recovery rates. We conduct thorough due diligence to minimize default risk and only recommend bonds meeting our quality standards."
  },
  {
    category: "Risks and Returns",
    question: "Can I lose money investing in bonds?",
    answer: "Yes, though bonds are generally lower-risk, losses can occur through: issuer default, selling before maturity when prices are down, or inflation eroding real returns. However, if you hold high-quality bonds to maturity, you'll receive your principal back. We help minimize risks through careful selection and portfolio diversification."
  },

  // Compliance and Regulations
  {
    category: "Compliance and Regulations",
    question: "Is Binary Bonds regulated by SEBI?",
    answer: "Yes, Binary Bonds operates in full compliance with SEBI (Securities and Exchange Board of India) regulations. We adhere to all regulatory requirements for bond trading, underwriting, and advisory services. Our processes are designed to ensure investor protection and market integrity."
  },
  {
    category: "Compliance and Regulations",
    question: "Are bond investments insured or guaranteed?",
    answer: "Government bonds are backed by the sovereign guarantee. Corporate bonds are not insured but may be secured by collateral or guarantees. The safety depends on the issuer's creditworthiness and the bond structure. We provide detailed risk assessments for all investment options."
  },
  {
    category: "Compliance and Regulations",
    question: "How are bond investments taxed in India?",
    answer: "Interest income from bonds is taxed as per your income tax slab. Capital gains depend on holding period: bonds held >36 months qualify for long-term capital gains (20% with indexation), while shorter periods are taxed as short-term gains (per slab rate). Tax-free bonds offer tax-exempt interest. We recommend consulting tax advisors for personal situations."
  },
  {
    category: "Compliance and Regulations",
    question: "What investor protection measures are in place?",
    answer: "Multiple protections exist: SEBI regulations for fair practices, bond trustees to protect bondholder interests, disclosure requirements for transparency, credit rating requirements, and legal recourse mechanisms. We maintain the highest standards of transparency and client protection in all transactions."
  },

  // Portfolio Management
  {
    category: "Portfolio Management",
    question: "How do you manage bond portfolios?",
    answer: "We use a comprehensive approach including: asset allocation based on client goals, duration management to control interest rate risk, credit quality monitoring, regular rebalancing, and active management of market opportunities. We provide regular performance reports and market updates."
  },
  {
    category: "Portfolio Management",
    question: "What is the ideal bond portfolio allocation?",
    answer: "Ideal allocation depends on your risk profile, goals, and time horizon. Conservative investors might prefer 70-80% in AAA-rated bonds, moderate investors 50-60% in AAA with some AA+ bonds, while aggressive investors might include high-yield bonds. We create customized allocations based on detailed risk assessment."
  },
  {
    category: "Portfolio Management",
    question: "How often should I review my bond portfolio?",
    answer: "We recommend quarterly reviews for active portfolios and semi-annual reviews for buy-and-hold strategies. Additionally, review when: interest rates change significantly, issuer credit ratings are revised, your financial goals change, or when bonds near maturity need reinvestment decisions. We proactively alert clients to relevant changes."
  },
  {
    category: "Portfolio Management",
    question: "Can I access my investments before maturity?",
    answer: "Yes, bonds can be sold in the secondary market before maturity, though the price will fluctuate based on market conditions. Liquidity varies by bond type - government bonds and large corporate issues are more liquid. We help assess liquidity and timing for optimal exits when needed."
  },

  // Market and Timing
  {
    category: "Market and Timing",
    question: "When is the best time to invest in bonds?",
    answer: "The optimal time depends on interest rate cycles. When rates are high and expected to fall, bond prices typically rise. However, since timing markets is difficult, we generally recommend systematic investing and focusing on quality bonds appropriate for your goals rather than trying to time the market perfectly."
  },
  {
    category: "Market and Timing",
    question: "How do interest rate changes affect bond prices?",
    answer: "Bond prices and interest rates have an inverse relationship. When interest rates rise, existing bond prices fall (since newer bonds offer higher rates). Conversely, when rates fall, existing bond prices rise. Longer-maturity bonds are more sensitive to rate changes. We help manage this duration risk through proper portfolio construction."
  },
  {
    category: "Market and Timing",
    question: "What is the current bond market outlook?",
    answer: "Market outlook depends on various factors including economic growth, inflation, monetary policy, and global conditions. We provide regular market insights and recommendations through our research reports and client communications. Contact us for current market views and investment opportunities."
  },

  // Getting Started
  {
    category: "Getting Started",
    question: "How do I start investing in bonds through Binary Bonds?",
    answer: "Getting started is simple: 1) Contact us through our website or call us directly, 2) Complete a brief investor profile assessment, 3) Provide necessary KYC documents, 4) Review our investment recommendations, 5) Execute trades through our platform. The entire onboarding typically takes 3-5 business days."
  },
  {
    category: "Getting Started",
    question: "What documents do I need to provide for KYC?",
    answer: "Standard KYC documents include: PAN card, Aadhaar card or passport, address proof (utility bill/bank statement), bank account details, and passport-sized photographs. For corporate investors, additional documents like incorporation certificate and board resolutions are required."
  },
  {
    category: "Getting Started",
    question: "Do you charge any advisory or management fees?",
    answer: "Our fee structure is transparent and competitive. Advisory fees typically range from 0.5-1.5% annually based on portfolio size and services. Transaction fees apply for trades. We provide detailed fee schedules upfront with no hidden charges. Many clients find our value-added services well worth the fees through better returns and risk management."
  },
  {
    category: "Getting Started",
    question: "Can NRIs invest in Indian bonds through your platform?",
    answer: "Yes, NRIs can invest in Indian bonds subject to RBI regulations and FEMA guidelines. We assist with the complete process including PIS account setup, repatriation procedures, and tax implications. Our team has extensive experience handling NRI investments and ensures full regulatory compliance."
  },
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1a237e] to-[#283593] py-20 mt-16 md:mt-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <HelpCircle className="w-16 h-16 text-[hsl(var(--golden))] mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Find comprehensive answers to all your questions about bond investments, 
                our services, and how we can help you achieve your financial goals.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-[hsl(var(--golden))]/10 text-gray-700 hover:text-[#1a237e] rounded-full text-sm font-medium transition-all duration-300 border border-gray-200 hover:border-[hsl(var(--golden))]"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {categories.map((category, catIndex) => (
                <div
                  key={category}
                  id={category.toLowerCase().replace(/\s+/g, '-')}
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-3xl font-bold text-[#1a237e] mb-6 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--golden))]/10 flex items-center justify-center">
                      {catIndex === 0 && <FileText className="w-6 h-6 text-[#1a237e]" />}
                      {catIndex === 1 && <TrendingUp className="w-6 h-6 text-[#1a237e]" />}
                      {catIndex === 2 && <Shield className="w-6 h-6 text-[#1a237e]" />}
                      {catIndex > 2 && <HelpCircle className="w-6 h-6 text-[#1a237e]" />}
                    </div>
                    {category}
                  </h2>

                  <div className="space-y-4">
                    {faqs
                      .filter(faq => faq.category === category)
                      .map((faq, index) => (
                        <details
                          key={index}
                          className="group bg-white rounded-xl border border-gray-200 hover:border-[hsl(var(--golden))] transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:text-[#1a237e] transition-colors">
                            <span className="text-lg pr-4">{faq.question}</span>
                            <ChevronDown className="w-5 h-5 text-[hsl(var(--golden))] flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                          </summary>
                          <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed border-t border-gray-100">
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#1a237e] to-[#283593]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Our expert team is here to help. Get in touch for personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden))]/90 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Contact Us
                </a>
                <a
                  href="/binary-bonds-brochure.pdf"
                  download="Binary-Bonds-Brochure.pdf"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
