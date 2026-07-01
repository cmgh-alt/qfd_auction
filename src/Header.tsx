import { useState } from 'react';
import { categories } from './data/products';
import type { Category } from './data/products';
import logo from './assets/logo.jpg';
import './styles/Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <img src={logo} alt="Quality" className="header__logo" />
        </div>

        {/* Desktop nav */}
        <nav className="header__nav">
          {categories.map((cat: Category) => (
            <a key={cat.id} href={`#${cat.id}`} className="header__nav-link">
              {cat.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`header__hamburger${open ? ' header__hamburger--open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="header__dropdown">
          {categories.map((cat: Category) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="header__dropdown-link"
              onClick={() => setOpen(false)}
            >
              {cat.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
