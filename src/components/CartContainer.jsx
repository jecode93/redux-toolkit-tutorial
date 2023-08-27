import React from 'react'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/cart/cartSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  }

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currrently empty</h4>
        </header>
      </section>
    )
  }
  
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        { cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleClick}>Clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer;