import Link from 'next/link';
import { home } from '../content';

export default function Home() {
  const { hero, why, services, cta } = home;
  return (
      <>
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="lead">{hero.text}</p>
            <div className="actions">
              <Link href="/urlap" className="btn">{hero.primaryButton}</Link>
              <Link href="/arlista" className="btn ghost">{hero.secondaryButton}</Link>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <p className="eyebrow">{why.eyebrow}</p>
            <h2>{why.title}</h2>
            <div className="grid">
              {why.items.map((i) => (
                  <div className="card" key={i.title}><h3>{i.title}</h3><p>{i.text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="alt">
          <div className="wrap two">
            <div className="ph">{services.photoText}</div>
            <div>
              <p className="eyebrow">{services.eyebrow}</p>
              <h2>{services.title}</h2>
              <p className="lead" style={{ marginBottom: '1.5rem' }}>{services.text}</p>
              <Link href="/szolgaltatasok" className="btn ghost">{services.button}</Link>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="wrap">
            <h2>{cta.title}</h2>
            <p className="lead">{cta.text}</p>
            <Link href="/urlap" className="btn">{cta.button}</Link>
          </div>
        </section>
      </>
  );
}