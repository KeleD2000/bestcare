import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'BestCare | Gyerekcsősz és animátor rendezvényekre',
  description: 'Képzett gyerekfelügyelők és animátorok esküvőkre, rendezvényekre és családi eseményekre, hogy a vendégek felhőtlenül ünnepelhessenek.',
  themeColor: '#4C4A46',
};

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
