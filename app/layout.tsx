import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'OCIMUM - AI-Powered Healthcare Ecosystem',
  description: 'Transform your clinic with AI-driven automation, real-time patient management, and seamless connectivity.',
  openGraph: {
    title: 'OCIMUM - AI-Powered Healthcare Ecosystem',
    description: 'Transform your clinic with AI-driven automation, real-time patient management, and seamless connectivity.',
    url: 'https://ocimum.ai',
    siteName: 'OCIMUM',
    images: [
      {
        url: 'https://ocimum.ai/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCIMUM - AI-Powered Healthcare Ecosystem',
    description: 'Transform your clinic with AI-driven automation, real-time patient management, and seamless connectivity.',
    images: ['https://ocimum.ai/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 flex justify-center">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
