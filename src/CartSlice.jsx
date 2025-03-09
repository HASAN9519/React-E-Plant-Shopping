import { createSlice } from '@reduxjs/toolkit'

// implement reducer property of slice for adding, removing, and updating the number of items in the cart. These reducer functions will be called when user wants to add or remove the quantity of plants within the cartItems component. addItem() reducer adds a new plant item to the items array
// addItem() function should get called when the user selects an Add to cart on the plant listing page. Subsequently, the handleAddToCart() gets called which has the plant type as a parameter. handleAddToCart() function will then dispatch the plant details to addItem() reducer function in CartSlice.jsx



export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    numOfItems: 0 // Number of items multiplied by their quantity
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.numOfItems += 1;
    },

    // reducer removes an item from the cart based on its name and gets called when the user wants to remove products from the cart
    removeItem: (state, action) => {
            const { name, quantity } = action.payload;
            state.items = state.items.filter(item => item.name !== name);
            state.numOfItems -= quantity;

            // to avoid negative numbers
            if (state.numOfItems < 0) {
                state.numOfItems = 0;
            }
    },
    
    // updateQuantity(): To create this function, start by extracting the item's name and amount from the action.payload. Then, look for the item in the state.items array that matches the extracted name. If the item is found, update its quantity to the new amount provided in the payload. This ensures the item’s quantity is correctly updated based on the action

    updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const existingItem = state.items.find(item => item.name === name);

            if (existingItem) {
                const differenceQuantity = quantity - existingItem.quantity;
                state.numOfItems += differenceQuantity;
                existingItem.quantity = quantity;
            }
    },

  },
});

// Export the action creators, addItem() to use in ProductList.jsx, removeItem(), and updateQuantity(), to use in the CartItem.jsx
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// export the reducer as the default to use in store.js

export default CartSlice.reducer