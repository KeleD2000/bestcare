import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { site } from '../content';

export const metadata = {
  title: site.title,
  description: site.description,
};

export const viewport = { themeColor: '#4C4A46' };

export default function RootLayout({ children }) {
  return (
      <html lang="hu">
      <body>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollReveal />
      </body>
      </html>
  );
}