// CartItem.jsx component which displays items held in shopping cart. This component has a number of functionalities that find in a typical shopping cart: Calculate the total for all items in the cart, Calculate the subtotal for each plant type in the cart, Continue shopping, Increment and decrement the number of each plant type in the cart, Remove (delete) a plant type from the cart altogether.
// dispatch the increment, decrement, and update quantity details from a Redux file

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice'
import './CartItem.css'

const CartItem = ({ onContinueShopping }) => {

  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  // Initialize a variable total
  // Loop through the cart array using cart.forEach().
  // Extract the quantity and cost of each item.
  // Multiply quantity by cost, use parseFloat(item.cost.substring(1)) to convert price strings like "$10.00" into numbers.
  // Return the total sum.

  const calculateTotalAmount = () => {
    let TotalCost = 0;
    cart.forEach(item => {
        const itemCost = parseFloat(item.cost.substring(1));
        TotalCost += itemCost * item.quantity;
    });
    return TotalCost;

  };

  // Users should be able to return to the plant listing page to continue shopping while on the shopping cart page. So, in the handleContinueShopping() function, call the onContinueShopping(e) function passed from the parent component

  const handleContinueShopping = (e) => {
        onContinueShopping(e);
  };

  // checkout
  // not required to provide the handleCheckoutShopping() function, but wish to for further exploration and practice. For now, just add in the following code to alert the user this function will get added at a later date
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };


  // handleIncrement() and handleDecrement() functions, need to dispatch the updateQuantity() reducer in the CartSlice.jsx file. In the function argument, either add one to the item.quantity value or subtract one, respectively. Also, for the handleDecrement() need an if-else to handle the case.
  // If the item's quantity is greater than 1, dispatch updateQuantity to decrease the quantity by 1. Else if the quantity would drop to 0, dispatch the removeItem action to remove the plant type from the cart

  const handleIncrement = (item) => {
      const updatedItem = { ...item };
      updatedItem.quantity++;
      dispatch(updateQuantity(updatedItem));
  };

  const handleDecrement = (item) => {
      const updatedItem = { ...item };

          if (updatedItem.quantity == 1) {
              // Remove item if number of items gets decremented to 0
              dispatch(removeItem(updatedItem));
          } else {
              updatedItem.quantity--;
              dispatch(updateQuantity(updatedItem));
          }
    
  };

  // For the handleRemove() function need to dispatch the removeItem action to delete the item from the cart
  const handleRemove = (item) => {
      dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  // Calculate the total cost for an item by multiplying its quantity with its unit price in the calculateTotalCost() function.
  // Extract the numeric value from the item's cost string using parseFloat(item.cost.substring(1)) before performing the multiplication.
  // Note: Ensure that these event handlers update the UI in real time. When the user changes the number of a plant type, the following should update accordingly: individual plant quantity, item's subtotal, overall total cost, total number of items in the cart icon.

  const calculateTotalCost = (item) => {
    let totalCost = 0;
    const itemCost = parseFloat(item.cost.substring(1));
    totalCost = item.quantity * itemCost;

    return totalCost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem