import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/global.css';
import AppRouter from './routes';

const App = () => {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;