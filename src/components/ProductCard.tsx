import type { Product } from '../data/products';
import '../styles/ProductCard.css';

interface Props {
  product: Product;
}

const conditionClass: Record<Product['condition'], string> = {
  Excellent: 'badge--excellent',
  Good: 'badge--good',
  Fair: 'badge--fair',
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <div className="product-card__image-placeholder">
        <span className="product-card__lot">Lot {product.lotNumber}</span>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <span className={`product-card__badge ${conditionClass[product.condition]}`}>
          {product.condition}
        </span>
      </div>
    </div>
  );
}
