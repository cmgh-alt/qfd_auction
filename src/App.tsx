import './styles/App.css';
import Header from './Header';
import CategorySection from './components/CategorySection';
import { categories } from './data/products';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>
      <footer className="footer">
        <p>Contact us for price details for item(s) being considered.</p>
      </footer>
    </>
  );
}

export default App;
