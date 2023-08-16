import './App.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider as ReduxProvider} from 'react-redux';
import App from './App';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
<React.StrictMode>
  <ReduxProvider store={store}>
    <App/>
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </ReduxProvider>
</React.StrictMode>
)