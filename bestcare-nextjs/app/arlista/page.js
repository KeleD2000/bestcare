import Link from 'next/link';
export const metadata = { title: 'Árlista | BestCare' };

// FIGYELEM: a csomagok és árak helyőrzők, írd át a saját árakra!
const packages = [
  { name: 'Alap', price: '25 000 Ft', note: 'Kisebb eseményekhez', items: ['Akár 2 óra felügyelet', '1 gyerekcsősz', 'Játékok és kézműveskedés'] },
  { name: 'Prémium', price: '50 000 Ft', note: 'A legnépszerűbb', featured: true, items: ['Akár 4 óra felügyelet', '2 gyerekcsősz / animátor', 'Egyedi programterv', 'Játszósarok kialakítása'] },
  { name: 'Teljes napos', price: '90 000 Ft', note: 'Esküvőkhöz, nagy eseményekhez', items: ['Akár 8 óra felügyelet', '2–3 gyerekcsősz / animátor', 'Tematikus játszósarok', 'Kézműves foglalkozások', 'Meglepetés ajándékcsomagok'] },
];

export default function Prices() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Árlista</p>
          <h1>Átlátható csomagok</h1>
          <p className="lead" style={{ margin: '1.2rem auto 0' }}>Az árak tájékoztató jellegűek, a végleges ajánlat az esemény helyszínétől, időtartamától és a gyerekek létszámától függ.</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="grid">
            {packages.map((p) => (
              <div className={`card ${p.featured ? 'featured' : ''}`} key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.note}</p>
                <div className="price">{p.price}</div>
                <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/urlap" className="btn">Részletes tájékoztatást kérek</Link>
          </p>
        </div>
      </section>
    </>
  );
}
