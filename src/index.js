import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import REDUX store to wrap the data layer
// Install REDUX Chrome extension to see the "user"
import store from './app/store';
// Import Provider for dealing with "Uncaught Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // APP must be wrapped around a provider, provider sets the context so only its child can have access to it
  // Create a wrapper around the component to the APP
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
