import React from 'react'
import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { increase, decrease, removeItem } from '../redux/cart/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  
  const dispatch = useDispatch();
  const handleClickToRemove = () => {
    dispatch(removeItem(id));
  }

  const handleClickToIncrease = () => {
    // We use destructuration here because we also destructure the payload in the action
    dispatch(increase({ id }));
  }

  const handleClickToDecrease = () => {
    // Check if the amount is equal to 1 and remove the item if we go to a negative number
    if (amount === 1) {
      dispatch(removeItem(id));
      return;
    }

    // We use destructuration here because we also destructure the payload in the action
    dispatch(decrease({ id }));
  }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={handleClickToRemove}>remove</button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleClickToIncrease}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleClickToDecrease}>
          <ChevronDown />
        </button>
      </div>
    </article>    
  )
}

export default CartItem;