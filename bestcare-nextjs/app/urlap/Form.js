'use client';
import { useState } from 'react';

export default function Form() {
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Küldés...' });
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch('/api/urlap', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Hiba történt.');
      setStatus({ type: 'ok', text: 'Köszönjük! Hamarosan elküldjük a tájékoztatót.' });
      e.target.reset();
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row">
        <label>Név *<input name="nev" required /></label>
        <label>Telefonszám<input name="telefon" type="tel" /></label>
      </div>
      <label>E-mail cím *<input name="email" type="email" required /></label>
      <div className="row">
        <label>Esemény típusa
          <select name="esemeny" defaultValue="Esküvő">
            <option>Esküvő</option><option>Céges rendezvény</option><option>Szülinap</option><option>Családi esemény</option><option>Egyéb</option>
          </select>
        </label>
        <label>Esemény dátuma<input name="datum" type="date" /></label>
      </div>
      <div className="row">
        <label>Gyerekek száma<input name="letszam" type="number" min="1" /></label>
        <label>Helyszín<input name="helyszin" /></label>
      </div>
      <label>Üzenet<textarea name="uzenet" rows="4" /></label>
      <button className="btn" type="submit" disabled={status.type === 'loading'}>Tájékoztatás kérése</button>
      {status.text && <div className="msg" role="status">{status.text}</div>}
    </form>
  );
}
