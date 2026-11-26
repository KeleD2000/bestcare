export const metadata = { title: 'Bemutatkozás | BestCare' };

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Bemutatkozás</p>
          <h1>Ismerjen meg minket</h1>
          <p className="lead" style={{ margin: '1.2rem auto 0' }}>A BestCare célja, hogy a szülők nyugodtan ünnepelhessenek, a gyerekek pedig felejthetetlen élményekkel térjenek haza.</p>
        </div>
      </section>
      <section>
        <div className="wrap two">
          <div className="ph">Ide kerülhet a csapat fotója</div>
          <div>
            <h2>Rólunk</h2>
            <p className="lead" style={{ marginBottom: '1rem' }}>Gyerekcsősz és animátor csapatunk évek óta dolgozik rendezvényeken. Hisszük, hogy a jó gyerekfelügyelet nem csak vigyázás: közös játék, figyelem és biztonságérzet.</p>
            <p className="lead">Minden eseményre egyedi programot állítunk össze, a gyerekek korosztályához és az alkalom hangulatához igazítva.</p>
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <h2>Értékeink</h2>
          <div className="grid">
            <div className="card"><h3>Biztonság</h3><p>A gyerekek épsége mindennél fontosabb. Mindig megfelelő létszámban és felkészülten érkezünk.</p></div>
            <div className="card"><h3>Kreativitás</h3><p>Játékok, kézműves foglalkozások és mesés programok, amelyek lekötik a kicsik figyelmét.</p></div>
            <div className="card"><h3>Megbízhatóság</h3><p>Pontos szervezés, átlátható kommunikáció és egyértelmű árak.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
