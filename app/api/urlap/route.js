import nodemailer from 'nodemailer';
import { form } from '../../../content';

export async function POST(req) {
  const d = await req.json();
  if (!d.nev || !d.email || !/^\S+@\S+\.\S+$/.test(d.email)) {
    return Response.json({ error: form.invalidInput }, { status: 400 });
  }

  const text = Object.entries(d).map(([k, v]) => `${k}: ${v}`).join('\n');
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

  if (!SMTP_HOST) {
    console.log('Új érdeklődés (SMTP nincs beállítva):\n' + text);
    return Response.json({ ok: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST, port: Number(SMTP_PORT || 587), auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({ from: SMTP_USER, to: MAIL_TO || SMTP_USER, replyTo: d.email, subject: `${form.emailSubject} ${d.nev}`, text });
    return Response.json({ ok: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: form.sendFailed }, { status: 500 });
  }
}