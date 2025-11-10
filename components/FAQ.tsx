'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of bonds does Binary Bonds deal in?",
      answer: "We specialize in corporate bonds, government securities (G-Secs), treasury bonds, municipal bonds, high-yield bonds, and structured debt instruments. Our expertise covers both primary market underwriting and secondary market trading across all major bond categories."
    },
    {
      question: "What is the minimum investment amount required?",
      answer: "Our services are primarily designed for institutional investors, HNIs, and corporate treasuries. Minimum investment amounts vary by bond type and issuer, typically starting from ₹1 Crore for corporate bonds and ₹50 Lakhs for government securities. We can provide customized solutions based on your investment capacity."
    },
    {
      question: "How does the bond underwriting process work?",
      answer: "Our underwriting process involves: (1) Initial consultation to understand issuer requirements, (2) Credit analysis and rating advisory, (3) Bond structuring and pricing, (4) Documentation and regulatory compliance, (5) Marketing to institutional investors, and (6) Successful placement and settlement. The entire process typically takes 4-8 weeks depending on complexity."
    },
    {
      question: "What are the risks involved in bond investments?",
      answer: "Bond investments carry several risks including credit risk (issuer default), interest rate risk (price fluctuation), liquidity risk (difficulty selling), and reinvestment risk. We provide comprehensive risk assessment, credit rating analysis, and portfolio diversification strategies to mitigate these risks. Our team continuously monitors market conditions and provides timely advisory."
    },
    {
      question: "How do you ensure regulatory compliance?",
      answer: "Binary Bonds operates under strict SEBI and RBI guidelines. We maintain full compliance through: regular audits, transparent reporting, proper documentation, KYC/AML procedures, and dedicated compliance officers. All our transactions are conducted through regulated exchanges and clearing corporations."
    },
    {
      question: "What is the difference between primary and secondary bond markets?",
      answer: "Primary market involves new bond issuances where we help companies raise capital through underwriting. Secondary market involves trading of existing bonds between investors, providing liquidity and price discovery. We offer comprehensive services in both markets, enabling clients to participate in new issues and trade existing holdings."
    },
    {
      question: "How are bond prices determined?",
      answer: "Bond prices are influenced by multiple factors: prevailing interest rates, credit rating of issuer, time to maturity, liquidity, market demand-supply, and macroeconomic conditions. Our research team provides real-time pricing analysis and market insights to help clients make informed decisions."
    },
    {
      question: "What documentation is required for bond transactions?",
      answer: "Required documents include: PAN card, KYC documents, bank account details, board resolution (for corporates), demat account, and investment policy (for institutional investors). Our compliance team guides you through the entire documentation process to ensure smooth transactions."
    },
    {
      question: "How long does settlement take for bond transactions?",
      answer: "Government securities typically settle on T+1 basis (next business day). Corporate bonds settle on T+2 basis. We ensure efficient settlement through our relationships with clearing corporations and depositories. Funds are credited to your account immediately upon settlement."
    },
    {
      question: "Do you provide ongoing portfolio management services?",
      answer: "Yes, we offer comprehensive bond portfolio management including: regular portfolio reviews, rebalancing strategies, duration management, yield optimization, risk monitoring, and market updates. Our relationship managers provide personalized service and strategic advisory to help you achieve your investment objectives."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--navy))] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about bond investments, our services, and the investment process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-[hsl(var(--golden))]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[hsl(var(--navy))] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[hsl(var(--golden))] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? Our team is here to help.
          </p>
          <button className="px-8 py-3 bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-[hsl(var(--navy))] font-semibold rounded-lg transition-colors">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
