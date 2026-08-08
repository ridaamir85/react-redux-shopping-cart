import { SlidersHorizontal } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSort } from '../features/products/productsSlice';

export default function Filters({ categories, count }) {
  const dispatch = useDispatch();
  const { category, sort } = useSelector((state) => state.products);

  return (
    <div className="filters">
      <div className="category-pills" aria-label="Product categories">
        {['all', ...categories].map((item) => (
          <button
            className={category === item ? 'active' : ''}
            key={item}
            onClick={() => dispatch(setCategory(item))}
          >
            {item === 'all' ? 'All goods' : item.replace(/-/g, ' ')}
          </button>
        ))}
      </div>
      <div className="sort-control">
        <SlidersHorizontal size={17} />
        <span>{count} items</span>
        <select value={sort} onChange={(event) => dispatch(setSort(event.target.value))} aria-label="Sort products">
          <option value="featured">Featured</option>
          <option value="rating">Top rated</option>
          <option value="price-low">Price: low to high</option>
          <option value="price-high">Price: high to low</option>
        </select>
      </div>
    </div>
  );
}
