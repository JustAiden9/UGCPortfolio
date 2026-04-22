import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'aidenpicks | Content that converts.',
  description: 'UGC creator portfolio for Aiden Baker. Gen Z-focused, high-converting content.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans selection:bg-blue-500/30 selection:text-blue-900" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
