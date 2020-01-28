import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';

const LocationSearch = () => {
    const [location, setLocation] = useState({})

    return (
        <div className="search-container">
            <h2>Enter Location</h2>
            <WeatherInfo location={location}/>
        </div>
    );
};


export default LocationSearch;
