import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Provider component from react-redux library is already imported. This component enables all components in the application to access the Redux store
import { Provider } from 'react-redux'

// Redux store is imported from the store.js file. This store holds the application's state, using the reducer defined in the CartSlice.jsx file
import store from './store.js'


// App component is wrapped with the Provider component, with the Redux store passed as a prop. This allows all components in the app to access and interact with the global state managed by Redux

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>,
)
