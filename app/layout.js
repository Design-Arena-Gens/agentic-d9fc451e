import './globals.css';
import { Cinzel, Inter } from 'next/font/google';

const display = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: 'Echodyne House',
  description: 'An interactive horror story that unfolds as you linger.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-abyss-900 text-white ${display.className}`}>
      <body className={`min-h-screen bg-abyss-900 text-white relative overflow-x-hidden antialiased ${body.className}`}>
        <div className="pointer-events-none fixed inset-0 bg-grain opacity-60 mix-blend-soft-light" aria-hidden />
        {children}
      </body>
    </html>
  );
}
