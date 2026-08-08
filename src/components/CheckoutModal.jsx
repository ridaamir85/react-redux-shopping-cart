import { Check, LockKeyhole, X } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartSubtotal } from '../features/cart/cartSlice';

export default function CheckoutModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const subtotal = useSelector(selectCartSubtotal);
  const [complete, setComplete] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setComplete(true);
    dispatch(clearCart());
  }

  function closeCheckout() {
    setComplete(false);
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="checkout-overlay" role="dialog" aria-modal="true" aria-label="Demo checkout">
      <div className="checkout-page">
        <div className="checkout-topbar">
          <a className="brand" href="#top" onClick={closeCheckout}>
            <span className="brand-mark">N</span>
            <span>NovaCart</span>
          </a>
          <span className="demo-label"><LockKeyhole size={14} /> Demo checkout — no payment collected</span>
          <button className="icon-button" onClick={closeCheckout} aria-label="Close checkout"><X size={20} /></button>
        </div>

        {complete ? (
          <div className="order-success">
            <span className="success-icon"><Check size={32} /></span>
            <span className="eyebrow">Demo order complete</span>
            <h2>Thanks for trying NovaCart.</h2>
            <p>This was a demonstration only. No personal information or payment details were saved or sent.</p>
            <button className="primary-button" onClick={closeCheckout}>Return to the shop</button>
          </div>
        ) : (
          <div className="checkout-layout">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <span className="eyebrow">Final step</span>
              <h1>Checkout</h1>
              <p className="checkout-intro">Enter test information below to preview the checkout experience.</p>

              <div className="form-section">
                <h2>Contact</h2>
                <label>
                  Full name
                  <input name="name" placeholder="Test User" />
                </label>
                <label>
                  Email address
                  <input name="email" placeholder="test@example.com" />
                </label>
              </div>

              <div className="form-section">
                <h2>Delivery address</h2>
                <label className="wide-field">
                  Street address
                  <input name="address" placeholder="123 Demo Street" />
                </label>
                <label>
                  City
                  <input name="city" placeholder="Demo City" />
                </label>
                <label>
                  Postal code
                  <input name="postalCode" placeholder="12345" />
                </label>
              </div>

              <button className="place-order-button" type="submit">Place demo order · ${subtotal.toFixed(2)}</button>
              <p className="form-note"><LockKeyhole size={13} /> Demonstration only. Nothing is stored or transmitted.</p>
            </form>

            <aside className="checkout-summary">
              <span className="eyebrow">Your order</span>
              <h2>{items.length} {items.length === 1 ? 'item' : 'items'}</h2>
              <div className="summary-items">
                {items.map((item) => (
                  <div className="summary-item" key={item.id}>
                    <div className="summary-image">
                      <img src={item.thumbnail} alt="" />
                      <span>{item.quantity}</span>
                    </div>
                    <div><strong>{item.title}</strong><small>{item.category.replace(/-/g, ' ')}</small></div>
                    <b>${(item.price * item.quantity).toFixed(2)}</b>
                  </div>
                ))}
              </div>
              <div className="summary-total"><span>Total</span><strong>${subtotal.toFixed(2)}</strong></div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
