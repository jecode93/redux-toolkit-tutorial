import React from 'react';
import { closeModal } from '../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cart/cartSlice';

const Modal = () => {

  const dispatch = useDispatch();

  const closeTheModal = () => {
    dispatch(closeModal());
  };

  const clearTheCart = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={clearTheCart}>
            confirm
          </button>
          <button type="button" className="btn clear-btn" onClick={closeTheModal}>
            cancle
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal