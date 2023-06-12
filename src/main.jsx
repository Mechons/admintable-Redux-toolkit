import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {store} from './store'
import store from './store/store.jsx'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >

    <App/>
  </Provider>

)
