import Link from 'next/link';
import { services } from '../../content';

export const metadata = { title: services.title };

export default function Services() {
    const { hero, items, cta } = services;
    return (
        <>
            <section className="hero">
                <div className="wrap">
                    <p className="eyebrow">{hero.eyebrow}</p>
                    <h1>{hero.title}</h1>
                </div>
            </section>
            <section>
                <div className="wrap">
                    <div className="grid">
                        {items.map((i) => (
                            <div className="card" key={i.title}><h3>{i.title}</h3><p>{i.text}</p></div>
                        ))}
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