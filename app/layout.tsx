import type { Metadata } from 'next';
import './globals.css';
import { defaultMetadata } from '@/lib/seo';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';
import AOSInit from '@/components/AOSInit';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon */}
        <link rel="icon" href="/1000112610.png" />
        <link rel="apple-touch-icon" href="/1000112610.png" />
      </head>
      <body className="antialiased">
        {/* Google Analytics - Replace with your actual Measurement ID */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
