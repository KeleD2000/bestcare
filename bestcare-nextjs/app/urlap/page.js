import Form from './Form';
export const metadata = { title: 'Tájékoztatás kérése | BestCare' };

export default function FormPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Tájékoztatás kérése</p>
          <h1>Küldjük a részleteket</h1>
          <p className="lead" style={{ margin: '1.2rem auto 0' }}>Töltse ki az űrlapot, és elküldjük a tájékoztatót az Ön eseményéhez igazítva.</p>
        </div>
      </section>
      <section style={{ paddingTop: '2rem' }}>
        <div className="wrap"><Form /></div>
      </section>
    </>
  );
}
