import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ملف الإنجاز الإلكتروني | E-Portfolio',
  description: 'ملف إنجاز إلكتروني للتدريب العملي وفق الإطار الوطني لكفاءات التربويين',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
