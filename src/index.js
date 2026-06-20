import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from "react-router-dom";

library.add(
  faBars,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faSpinner,
  faArrowLeft,
  faShoppingCart
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

