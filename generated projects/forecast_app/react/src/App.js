import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Forecast from './components/Forecast';
import { CityProvider } from './context/CityContext';

const App = () => {
  return (
    <CityProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/forecast/:days" element={<Forecast />} />
          </Routes>
        </div>
      </Router>
    </CityProvider>
  );
};

export default App;