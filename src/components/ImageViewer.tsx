import { useEffect, useState } from 'react';
import '../styles/ImageViewer.css';

interface Props {
  images: string[];
  initialIndex?: number;
  productName: string;
  onClose: () => void;
}

export default function ImageViewer({ images, initialIndex = 0, productName, onClose }: Props) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="image-viewer__overlay" onClick={onClose}>
      <div className="image-viewer__container" onClick={(e) => e.stopPropagation()}>
        <button className="image-viewer__close" onClick={onClose}>&#10005;</button>
        <img
          src={images[current]}
          alt={`${productName} ${current + 1}`}
          className="image-viewer__image"
        />
        {images.length > 1 && (
          <>
            <button className="image-viewer__nav image-viewer__nav--prev" onClick={prev}>&#8249;</button>
            <button className="image-viewer__nav image-viewer__nav--next" onClick={next}>&#8250;</button>
            <span className="image-viewer__count">{current + 1} / {images.length}</span>
          </>
        )}
      </div>
    </div>
  );
}
