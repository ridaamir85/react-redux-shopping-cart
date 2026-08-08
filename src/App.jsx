import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartDrawer from './components/CartDrawer';
import Filters from './components/Filters';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import { fetchProducts, selectVisibleProducts } from './features/products/productsSlice';

export default function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const visibleProducts = useSelector(selectVisibleProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = useMemo(() => [...new Set(products.map((product) => product.category))].slice(0, 6), [products]);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <section className="collection" id="collection">
          <div className="section-heading">
            <div><span className="eyebrow">The latest edit</span><h2>Find your new favorite.</h2></div>
            <p>Useful essentials and small luxuries, selected for quality and character.</p>
          </div>
          <Filters categories={categories} count={visibleProducts.length} />
          <ProductGrid />
        </section>
      </main>
      <footer><a className="brand" href="#top"><span className="brand-mark">N</span><span>NovaCart</span></a><p>Curated goods for considered living.</p><span>React Context + Redux Toolkit</span></footer>
      <CartDrawer />
    </div>
  );
}
