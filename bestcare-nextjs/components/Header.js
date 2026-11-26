'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Főoldal' },
  { href: '/bemutatkozas', label: 'Bemutatkozás' },
  { href: '/szolgaltatasok', label: 'Szolgáltatások' },
  { href: '/arlista', label: 'Árlista' },
  { href: '/urlap', label: 'Tájékoztatás kérése' },
];

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
        <Link href="/" className="logo" aria-label="BestCare főoldal">
          {logoOk ? (
            <img src="/logo.png" alt="BestCare logó" className="logo-img" onError={() => setLogoOk(false)} />
          ) : (
            <span>BestCare</span>
          )}
        </Link>
        <button className={`menu-btn ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menü">
          <span /><span /><span />
        </button>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? 'active' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
