import type { Category } from '../data/products';
import ProductCard from './ProductCard';
import '../styles/CategorySection.css';

interface Props {
  category: Category;
}

export default function CategorySection({ category }: Props) {
  return (
    <section className="category-section" id={category.id}>
      <div className="category-section__header">
        <h2 className="category-section__title">{category.label}</h2>
        <span className="category-section__count">{category.products.length} items</span>
      </div>
      <div className="category-section__grid">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
