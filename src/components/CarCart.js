import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,updateQuantity } from '../store/slices/CartSlice';
import './Compo.css'

export default function CarCart() {


  const cartItems = useSelector((state) => state.shopCart.cartItems);

  // console.log(cartItems)

  const dispatch = useDispatch()


  const handleQuantityChange = (id, value) => {
    if (value === 'more') {
      const newQuantity = prompt('Enter quantity (max 100):', '5');
      if (newQuantity && !isNaN(newQuantity) && newQuantity > 0 && newQuantity <= 100) {
        dispatch(updateQuantity({ id, quantity: parseInt(newQuantity) }));
      }
    } else {
      dispatch(updateQuantity({ id, quantity: parseInt(value) }));
    }
  };


  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 1),
    0
  );



  return (

    <div className="car-container">
      <div className='cart-details'>
        <h3>Total Items : {cartItems.length}</h3>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

      </div>
      <div className='car-div cart-div'>
        {cartItems.map((cart) => {
          return <div className='car-card' key={cart.id}>
            <img src={cart.image} alt='' />
            <div className='cart-items'>
              <div>
                <h3>{cart.name}</h3>
                <p><strong>Price : $</strong> {cart.price}</p>
                <p><strong>CC : </strong> {cart.cc}</p>
                <p><strong>Mileage : </strong> {cart.mileage}</p>
              </div>
              <select 
               
                 value={cart.quantity}
                  onChange={(e) => handleQuantityChange(cart.id, e.target.value)}
                >
                  {[...Array(4).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      Qty. {num + 1}
                    </option>
                  ))}
                  <option value="more">More</option>
                </select>
            </div>

            <button onClick={() => dispatch(removeFromCart(cart.id))}>Remove</button>
          </div>
        })}
      </div>
    </div>
  )
}
