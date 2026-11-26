import Link from 'next/link';
import { prices } from '../../content';

export const metadata = { title: prices.title };

export default function Prices() {
  const { hero, packages, button } = prices;
  return (
      <>
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="lead" style={{ margin: '1.2rem auto 0' }}>{hero.text}</p>
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
              <Link href="/urlap" className="btn">{button}</Link>
            </p>
          </div>
        </section>
      </>
  );
}