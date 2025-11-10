import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://binarybonds.com'),
  title: {
    default: 'Binary Bonds - Leading Bond Market Specialists & Underwriting Services',
    template: '%s | Binary Bonds'
  },
  description: 'Binary Bonds, a division of Binary Capital, specializes in primary and secondary bond markets. Expert bond underwriting, government securities trading, and debt capital market solutions for institutional investors across India.',
  keywords: [
    'bond underwriting',
    'corporate bonds',
    'government securities',
    'debt capital markets',
    'bond trading',
    'institutional investors',
    'treasury bonds',
    'credit rating advisory',
    'bond portfolio management',
    'secondary market trading',
    'Binary Bonds',
    'Binary Capital',
    'India bond market',
    'SEBI registered',
    'RBI compliant'
  ],
  authors: [{ name: 'Binary Bonds' }],
  creator: 'Binary Bonds',
  publisher: 'Binary Capital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Binary Bonds',
    title: 'Binary Bonds - Leading Bond Market Specialists',
    description: 'Strategic bond market solutions for institutional investors. Expert underwriting, government securities trading, and debt capital market services.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Binary Bonds - Bond Market Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Bonds - Leading Bond Market Specialists',
    description: 'Strategic bond market solutions for institutional investors across India.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const serviceMetadata = {
  'corporate-bond-underwriting': {
    title: 'Corporate Bond Underwriting Services - Expert Debt Capital Markets',
    description: 'Professional corporate bond underwriting services with comprehensive risk assessment, pricing strategies, and placement services. Trusted by leading institutions across India.',
    keywords: 'corporate bond underwriting, debt securities, bond structuring, credit analysis, pricing advisory, placement services',
  },
  'government-securities': {
    title: 'Government Securities Trading - Treasury Bonds & Sovereign Debt',
    description: 'Expert handling of government bonds, treasury securities, and sovereign debt with deep market knowledge and regulatory expertise. SEBI registered and RBI compliant.',
    keywords: 'government securities, treasury bonds, sovereign debt, G-Secs, state development loans, RBI auctions',
  },
  'high-yield-bonds': {
    title: 'High-Yield Bonds - Specialized Credit Evaluation & Risk Management',
    description: 'Specialized services for high-yield corporate bonds with enhanced due diligence and risk management protocols. Expert credit evaluation and investor matching.',
    keywords: 'high-yield bonds, credit evaluation, risk mitigation, market timing, investor matching, corporate bonds',
  },
  'bond-portfolio-management': {
    title: 'Bond Portfolio Management - Strategic Optimization & Yield Enhancement',
    description: 'Strategic portfolio management services optimizing yield, duration, and credit quality for institutional investors. Comprehensive risk management and rebalancing strategies.',
    keywords: 'bond portfolio management, portfolio optimization, duration management, yield enhancement, rebalancing strategies',
  },
  'credit-rating-advisory': {
    title: 'Credit Rating Advisory - Achieve Optimal Ratings & Investor Confidence',
    description: 'Comprehensive credit rating advisory services to help issuers achieve optimal ratings and maintain investor confidence. Expert rating preparation and agency coordination.',
    keywords: 'credit rating advisory, rating preparation, agency coordination, documentation support, rating maintenance',
  },
  'secondary-market-trading': {
    title: 'Secondary Market Trading - Liquidity & Competitive Bond Pricing',
    description: 'Efficient secondary market trading services providing liquidity and competitive pricing for bond portfolios. Market making and settlement services.',
    keywords: 'secondary market trading, bond liquidity, market making, price discovery, settlement services, bond trading',
  },
};
