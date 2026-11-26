'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SELECTOR = 'main section:not(.hero) h2, main section:not(.hero) .eyebrow, main section:not(.hero) > .wrap > .lead, .card, .ph, .form, main section .btn, .band .lead';

export default function ScrollReveal() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = [...document.querySelectorAll(SELECTOR)];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => {
      const i = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0;
      el.style.setProperty('--d', `${Math.min(i, 5) * 90}ms`);
      el.classList.add('reveal');
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);
  return null;
}
