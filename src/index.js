import React from 'react';
import ReactDOM from 'react-dom';
import WhatsCooking from './components/WhatsCooking';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalProvider } from 'react-modal-hook';
import './styles/reset.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ModalProvider>
    <Router>
      <WhatsCooking />
    </Router>
  </ModalProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
