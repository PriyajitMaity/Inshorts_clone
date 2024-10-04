// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import './index.css'
// import MyContextProvider from './CustomContext.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MyContextProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     </MyContextProvider>
//   </StrictMode>,
// )
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MyContextProvider from './CustomContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <MyContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyContextProvider>
  </StrictMode>
);