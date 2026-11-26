import Link from 'next/link';
export const metadata = { title: 'Szolgáltatások | BestCare' };

const services = [
  ['Esküvői gyerekfelügyelet', 'Gondoskodó felügyelet az egész esküvő alatt, külön játszósarokkal és programokkal.'],
  ['Rendezvény animáció', 'Céges családi napok, ünnepségek és fesztiválok gyerekprogramjai.'],
  ['Szülinapi animáció', 'Játékos, tematikus programok gyereknapokra és születésnapokra.'],
  ['Kézműves foglalkozások', 'Alkotás, festés, barkácsolás: a gyerekek haza is vihetik az alkotásaikat.'],
  ['Játszósarok kialakítása', 'Hangulatos, az esemény stílusához illő gyerekkuckó berendezése.'],
  ['Egyedi igények', 'Egyedi kéréssel keressen minket, közösen megtaláljuk a megoldást.'],
];

export default function Services() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Szolgáltatások</p>
          <h1>Amiben segíteni tudunk</h1>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="grid">
            {services.map(([t, d]) => (
              <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <h2>Nem találja, amit keres?</h2>
          <p className="lead">Írjon nekünk, és személyre szabott tájékoztatót küldünk.</p>
          <Link href="/urlap" className="btn">Tájékoztatás kérése</Link>
        </div>
      </section>
    </>
  );
}
