'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site, nav } from '../content';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap">
          <Link href="/" className="logo" aria-label={site.name}>
            {logoOk ? (
                <img src={site.logo} alt={site.logoAlt} className="logo-img" onError={() => setLogoOk(false)} />
            ) : (
                <span>{site.name}</span>
            )}
          </Link>
          <button className={`menu-btn ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menü">
            <span /><span /><span />
          </button>
          <nav className={`nav ${open ? 'open' : ''}`}>
            {nav.map((l) => (
                <Link key={l.href} href={l.href} className={path === l.href ? 'active' : ''} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
            ))}
          </nav>
        </div>
      </header>
  );
}