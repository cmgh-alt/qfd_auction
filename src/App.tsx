import { useState } from 'react';
import './styles/App.css';
import Header from './Header';
import CategorySection from './components/CategorySection';
import SplashPage from './components/SplashPage';
import { categories } from './data/products';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashPage onEnter={() => setShowSplash(false)} />;
  }

  return (
    <>
      <Header />
      <main className="main">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>
      <footer className="footer">
        <p>Contact us to inquire at <a href="tel:+15599947300">(559) 994-7300</a></p>
      </footer>
    </>
  );
}

export default App;
