import Link from 'next/link';

const why = [
  ['Képzett felügyelők', 'Tapasztalt, referenciával rendelkező gyerekcsőszök és animátorok.'],
  ['Egyedi programok', 'Kreatív foglalkozások, játékok és kézműveskedés az esemény hangulatához igazítva.'],
  ['Hangulatos játszósarok', 'Kényelmes, esztétikus gyerekkuckó, ahol a kicsik is jól érzik magukat.'],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Gyerekfelügyelet · Animáció · Rendezvények</p>
          <h1>Ti ünnepeltek,<br />mi vigyázunk a kicsikre.</h1>
          <p className="lead">A BestCare gondoskodó felügyeletet és játékos programokat biztosít esküvőkön, rendezvényeken és családi eseményeken, hogy minden vendég felhőtlenül szórakozhasson.</p>
          <div className="actions">
            <Link href="/urlap" className="btn">Tájékoztatást kérek</Link>
            <Link href="/arlista" className="btn ghost">Árlista megtekintése</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Miért a BestCare?</p>
          <h2>Biztonság, figyelem, jókedv</h2>
          <div className="grid">
            {why.map(([t, d]) => (
              <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap two">
          <div className="ph">Ide kerülhet egy fotó</div>
          <div>
            <p className="eyebrow">Szolgáltatásaink</p>
            <h2>Minden eseményhez a megfelelő csomag</h2>
            <p className="lead" style={{ marginBottom: '1.5rem' }}>Rövidebb családi összejövetelektől a teljes napos esküvőig: rugalmasan igazodunk az Ön igényeihez.</p>
            <Link href="/szolgaltatasok" className="btn ghost">Tovább a szolgáltatásokhoz</Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Kérjen ajánlatot még ma</h2>
          <p className="lead">Töltse ki az űrlapot, és hamarosan elküldjük a részletes tájékoztatót az Ön eseményére szabva.</p>
          <Link href="/urlap" className="btn">Tájékoztatás kérése</Link>
        </div>
      </section>
    </>
  );
}
