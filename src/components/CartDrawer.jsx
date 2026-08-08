import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  closeCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartSubtotal,
} from '../features/cart/cartSlice';

export default function CartDrawer() {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);
  const subtotal = useSelector(selectCartSubtotal);

  return (
    <>
      <button className={`cart-backdrop ${isOpen ? 'visible' : ''}`} onClick={() => dispatch(closeCart())} aria-label="Close cart" />
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="cart-header">
          <div><span>Your selection</span><h2>Shopping bag</h2></div>
          <button className="icon-button" onClick={() => dispatch(closeCart())}><X size={20} /></button>
        </div>

        <div className="cart-content">
          {!items.length ? (
            <div className="empty-cart"><ShoppingBag size={42} /><h3>Your bag is empty</h3><p>Add something considered and lovely.</p></div>
          ) : items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="cart-item-copy">
                <span>{item.category.replace(/-/g, ' ')}</span>
                <h3>{item.title}</h3>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                <div className="quantity-control">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={14} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={14} /></button>
                </div>
              </div>
              <button className="remove-item" onClick={() => dispatch(removeFromCart(item.id))} aria-label={`Remove ${item.title}`}><Trash2 size={17} /></button>
            </div>
          ))}
        </div>

        {!!items.length && (
          <div className="cart-footer">
            <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear bag</button>
            <div className="total-row"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
            <p>Taxes and delivery calculated at checkout.</p>
            <button className="checkout-button">Continue to checkout</button>
          </div>
        )}
      </aside>
    </>
  );
}
