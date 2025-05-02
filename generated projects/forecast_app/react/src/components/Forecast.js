import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import { useCity } from '../context/CityContext';

const Forecast = () => {
  const { city } = useCity();
  const [days, setDays] = useState(7); // Default value for slider
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const API_KEY = '082c34236a151c1c88b51da077466817';
      const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${days}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data.list || []);
    };

    fetchWeatherData();
  }, [city, days]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleDateString('en-US', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <div>
      <h3>Forecast for {city}</h3>
      <ReactSlider
        className="slider"
        min={1}
        max={7}
        value={days}
        onChange={(value) => setDays(value)}
      />
      <p>Showing forecast for {days} days</p>

      {weatherData.length > 0 ? (
        weatherData.map((weather, index) => (
          <div key={index} className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">{formatDate(weather.dt)}</h3>
                </div>
                <div className="panel-body">
                  Daytime Temperature: <b>{Math.round(weather.temp.day)}ºC</b>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  );
};

export default Forecast;
