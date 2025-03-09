// configureStore() function from the @reduxjs/toolkit package is imported to set up the Redux store.
// cartReducer from the CartSlice.jsx file which is imported, manages the state slice related to the shopping cart

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'

// configureStore() function is used to setup the Redux store.Inside the configuration object passed to configureStore(), the reducer key specifies the reducer functions. In this case, the cartReducer is assigned to manage the cart slice of the state

    const store = configureStore({
        reducer: {
            cart: cartReducer,
        },
});
export default store