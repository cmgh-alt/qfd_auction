import { useState } from 'react';
import type { Product } from '../data/products';
import ImageViewer from './ImageViewer';
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
  const images = product.imagePaths ?? [];
  const [current, setCurrent] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((i) => (i + 1) % images.length);
  };

  return (
    <>
      <div
        className={`product-card${product.isSold ? ' product-card--sold' : ''}${images.length > 0 ? ' product-card--clickable' : ''}`}
        onClick={() => images.length > 0 && setViewerOpen(true)}
      >
        <div className="product-card__image-placeholder">
          {images.length > 0 ? (
            <>
              <img
                src={images[current]}
                alt={`${product.name} ${current + 1}`}
                className="product-card__image"
              />
              {images.length > 1 && (
                <>
                  <button className="product-card__nav product-card__nav--prev" onClick={prev}>&#8249;</button>
                  <button className="product-card__nav product-card__nav--next" onClick={next}>&#8250;</button>
                  <span className="product-card__image-count">{current + 1} / {images.length}</span>
                </>
              )}
            </>
          ) : null}
          {product.isSold && (
            <span className="product-card__sold-banner">Sold</span>
          )}
          <span className="product-card__lot">Lot {product.lotNumber}</span>
        </div>
        <div className="product-card__body">
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__description">{product.description}</p>
          <div className="product-card__footer">
            <span className={`product-card__badge ${conditionClass[product.condition]}`}>
              {product.condition}
            </span>
            <div className="product-card__footer-right">
              {product.quantity !== undefined && (
                <span className="product-card__quantity">Qty: {product.quantity}</span>
              )}
              {product.price && (
                <span className="product-card__price">{product.price}/unit</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {viewerOpen && images.length > 0 && (
        <ImageViewer
          images={images}
          initialIndex={current}
          productName={product.name}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </>
  );
}
