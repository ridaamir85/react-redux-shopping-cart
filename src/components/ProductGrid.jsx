import { PackageSearch, RefreshCw } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectVisibleProducts } from '../features/products/productsSlice';
import ProductCard from './ProductCard';

function SkeletonCard() {
  return <div className="skeleton-card"><div /><span /><span /><small /></div>;
}

export default function ProductGrid() {
  const dispatch = useDispatch();
  const products = useSelector(selectVisibleProducts);
  const { status, error } = useSelector((state) => state.products);

  if (status === 'loading' || status === 'idle') {
    return <div className="product-grid">{Array.from({ length: 8 }, (_, index) => <SkeletonCard key={index} />)}</div>;
  }

  if (status === 'failed') {
    return (
      <div className="empty-state">
        <PackageSearch size={38} />
        <h3>We couldn’t load the collection</h3>
        <p>{error}</p>
        <button className="primary-button" onClick={() => dispatch(fetchProducts())}><RefreshCw size={17} /> Try again</button>
      </div>
    );
  }

  if (!products.length) {
    return <div className="empty-state"><PackageSearch size={38} /><h3>No products found</h3><p>Try another search or category.</p></div>;
  }

  return <div className="product-grid">{products.map((product) => <ProductCard product={product} key={product.id} />)}</div>;
}
