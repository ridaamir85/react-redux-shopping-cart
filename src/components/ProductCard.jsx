import { Plus, Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        {product.discountPercentage > 12 && <span className="sale-badge">−{Math.round(product.discountPercentage)}%</span>}
        <button className="quick-add" onClick={() => dispatch(addToCart(product))} aria-label={`Add ${product.title} to cart`}>
          <Plus size={18} /> Add to cart
        </button>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category.replace(/-/g, ' ')}</span>
        <h3>{product.title}</h3>
        <div className="product-meta">
          <strong>${product.price.toFixed(2)}</strong>
          <span><Star size={14} fill="currentColor" /> {product.rating.toFixed(1)}</span>
        </div>
      </div>
    </article>
  );
}
