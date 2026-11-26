import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <h3>BestCare</h3>
          <p>Gyerekfelügyelet és animáció<br />rendezvényekre, esküvőkre, családi eseményekre.</p>
        </div>
        <div>
          <h3>Elérhetőség</h3>
          <p>Tel.: <a href="tel:+36000000000">+36 00 000 0000</a><br />
          E-mail: <a href="mailto:info@bestcare.hu">info@bestcare.hu</a></p>
        </div>
        <div>
          <h3>Oldalak</h3>
          <p><Link href="/szolgaltatasok">Szolgáltatások</Link><br /><Link href="/arlista">Árlista</Link><br /><Link href="/urlap">Tájékoztatás kérése</Link></p>
        </div>
      </div>
    </footer>
  );
}
