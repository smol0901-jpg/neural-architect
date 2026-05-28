import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEURAL ARCHITECT PREMIUM++ | AI-First Site Engine',
  description: 'Гидро-движок нового поколения с нейро-вайб эффектами',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}