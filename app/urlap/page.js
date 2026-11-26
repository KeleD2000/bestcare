import Form from './Form';
import { form } from '../../content';

export const metadata = { title: form.title };

export default function FormPage() {
    const { hero } = form;
    return (
        <>
            <section className="hero">
                <div className="wrap">
                    <p className="eyebrow">{hero.eyebrow}</p>
                    <h1>{hero.title}</h1>
                    <p className="lead" style={{ margin: '1.2rem auto 0' }}>{hero.text}</p>
                </div>
            </section>
            <section style={{ paddingTop: '2rem' }}>
                <div className="wrap"><Form /></div>
            </section>
        </>
    );
}