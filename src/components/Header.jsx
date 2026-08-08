import { Moon, Search, ShoppingBag, Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../context/ThemeContext';
import { openCart, selectCartCount } from '../features/cart/cartSlice';
import { setSearch } from '../features/products/productsSlice';

export default function Header() {
  const dispatch = useDispatch();
  const count = useSelector(selectCartCount);
  const search = useSelector((state) => state.products.search);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="NovaCart home">
        <span className="brand-mark">N</span>
        <span>NovaCart</span>
      </a>

      <label className="header-search">
        <Search size={18} />
        <input
          value={search}
          onChange={(event) => dispatch(setSearch(event.target.value))}
          placeholder="Search the collection"
          aria-label="Search products"
        />
      </label>

      <div className="header-actions">
        <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
          {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
        </button>
        <button className="cart-button" onClick={() => dispatch(openCart())}>
          <ShoppingBag size={19} />
          <span>Cart</span>
          <strong>{count}</strong>
        </button>
      </div>
    </header>
  );
}
