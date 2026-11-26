'use client';
import { useState } from 'react';
import { form as t } from '../../content';

export default function Form() {
    const [status, setStatus] = useState({ type: 'idle', text: '' });

    async function onSubmit(e) {
        e.preventDefault();
        const formEl = e.target;
        setStatus({ type: 'loading', text: t.sending });
        const data = Object.fromEntries(new FormData(formEl));
        try {
            const res = await fetch('/api/urlap', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
            const json = await res.json();
            if (!res.ok) throw new Error(json.error || t.genericError);
            setStatus({ type: 'ok', text: t.success });
            formEl.reset();
        } catch (err) {
            setStatus({ type: 'error', text: err.message });
        }
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="row">
                <label>{t.labels.name}<input name="nev" required /></label>
                <label>{t.labels.phone}<input name="telefon" type="tel" /></label>
            </div>
            <label>{t.labels.email}<input name="email" type="email" required /></label>
            <div className="row">
                <label>{t.labels.eventType}
                    <select name="esemeny" defaultValue={t.eventTypes[0]}>
                        {t.eventTypes.map((o) => <option key={o}>{o}</option>)}
                    </select>
                </label>
                <label>{t.labels.date}<input name="datum" type="date" /></label>
            </div>
            <div className="row">
                <label>{t.labels.kids}<input name="letszam" type="number" min="1" /></label>
                <label>{t.labels.place}<input name="helyszin" /></label>
            </div>
            <label>{t.labels.message}<textarea name="uzenet" rows="4" /></label>
            <button className="btn" type="submit" disabled={status.type === 'loading'}>{t.submit}</button>
            {status.text && <div className="msg" role="status">{status.text}</div>}
        </form>
    );
}