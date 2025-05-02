import React, { useState } from 'react';
import { useCity } from '../context/CityContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { city, setCity } = useCity();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/forecast');
  };

  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h4>Forecast by City</h4>
        <div className="form-group">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            placeholder="Enter city name"
          />
        </div>
        <button onClick={handleNavigation} className="btn btn-primary">
          Get Forecast
        </button>
      </div>
    </div>
  );
};

export default Home;