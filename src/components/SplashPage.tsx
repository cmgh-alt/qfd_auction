import { categories } from '../data/products';
import logo from '../assets/logo.png';
import '../styles/SplashPage.css';

interface Props {
  onEnter: () => void;
}

const previewImages = categories
  .flatMap((c) => c.products)
  .filter((p) => p.imagePaths && p.imagePaths.length > 0)
  .map((p) => ({ src: p.imagePaths![0], name: p.name }));

export default function SplashPage({ onEnter }: Props) {
  return (
    <div className="splash">

      {/* ── Main info ── */}
      <div className="splash__left">
        <div className="splash__brand">
          <div className="splash__logo-placeholder">
            <img src={logo} alt="Quality logo" className="splash__logo-img" />
          </div>
          <p className="splash__tagline">New &amp; Used Items</p>
          <p className="splash__tagline">Contact Mago Espinoza</p>
        </div>

        <div className="splash__contact">
          <p className="splash__contact-heading">Get in touch</p>
          <a href="tel:+15599947300" className="splash__contact-row">
            <span className="splash__contact-icon">&#9990;</span>
            <span>(559) 994-7300</span>
          </a>
          <a href="mailto:magoespinoza123@gmail.com" className="splash__contact-row">
            <span className="splash__contact-icon">&#9993;</span>
            <span>magoespinoza123@gmail.com</span>
          </a>
          <div className="splash__contact-row splash__contact-row--plain">
            <span className="splash__contact-icon">&#9679;</span>
            <span>Fresno, CA</span>
          </div>
        </div>

        <button className="splash__enter" onClick={onEnter}>
          View All Listings
        </button>
      </div>

      {/* ── Marquee strip ── */}
      {previewImages.length > 0 && (
        <div className="splash__right">
          <div className="splash__slide-gradient" />
          <div className="splash__edge-left" />
          <div className="splash__edge-right" />
          <div className="splash__marquee-track">
            {[...previewImages, ...previewImages].map((img, i) => (
              <div key={i} className="splash__marquee-item">
                <img src={img.src} alt={img.name} className="splash__marquee-img" />
                <span className="splash__marquee-label">{img.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

