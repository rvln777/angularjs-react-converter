import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CustomerComponent from './components/CustomerComponent';
import React, { useEffect } from 'react';
import { initializeFacebook } from './config/facebookConfig';

const App = () => {
  useEffect(() => {
    // Initialize Facebook SDK
    initializeFacebook('367738076696928');
  }, []);

  return (
    <div className="main container">
    <h1>Pega Contatos</h1>
    <BrowserRouter>
      <Routes>
        {/* Route for customer functionality */}
        <Route path="/" element={<CustomerComponent />} />
        {/* Redirect unmatched routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
};

export default App;
