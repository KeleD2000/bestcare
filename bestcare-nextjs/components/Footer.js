import Link from 'next/link';
import { site, footer } from '../content';

export default function Footer() {
  return (
      <footer className="footer">
        <div className="wrap">
          <div>
            <h3>{site.name}</h3>
            <p className="pl">{footer.about}</p>
          </div>
          <div>
            <h3>{footer.contactTitle}</h3>
            <p>
              {footer.phoneLabel} <a href={`tel:${site.phoneLink}`}>{site.phone}</a><br />
              {footer.emailLabel} <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div>
            <h3>{footer.pagesTitle}</h3>
            <p>
              {footer.links.map((l, i) => (
                  <span key={l.href}><Link href={l.href}>{l.label}</Link>{i < footer.links.length - 1 && <br />}</span>
              ))}
            </p>
          </div>
        </div>
      </footer>
  );
}