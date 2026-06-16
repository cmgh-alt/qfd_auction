import { categories } from './data/products';
import type { Category } from './data/products';
import './styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <span className="header__title">Auction Showcase</span>
          <span className="header__subtitle">PRODUCTS FOR SALE</span>
        </div>
        <nav className="header__nav">
          {categories.map((cat: Category) => (
            <a key={cat.id} href={`#${cat.id}`} className="header__nav-link">
              {cat.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
