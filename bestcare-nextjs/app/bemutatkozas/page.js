import { about } from '../../content';

export const metadata = { title: about.title };

export default function About() {
    const { hero, story, values } = about;
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
                <div className="wrap two">
                    <div className="ph">{story.photoText}</div>
                    <div>
                        <h2>{story.title}</h2>
                        {story.paragraphs.map((t, i) => (
                            <p key={i} className="lead" style={{ marginBottom: '1rem' }}>{t}</p>
                        ))}
                    </div>
                </div>
            </section>
            <section className="alt">
                <div className="wrap">
                    <h2>{values.title}</h2>
                    <div className="grid">
                        {values.items.map((i) => (
                            <div className="card" key={i.title}><h3>{i.title}</h3><p>{i.text}</p></div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}