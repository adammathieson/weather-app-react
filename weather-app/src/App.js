import React from 'react';
import './App.css';

import WeatherContainer from './components/WeatherContainer';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <WeatherContainer />
      <Footer />
    </div>
  );
}

export default App;
