import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import geocode from 'react-geocode'

geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)
geocode.setRegion("us")

geocode.fromAddress("Seattle, WA").then(
    res => {
        const { lat, lng } = res.results[0].geometry.location
        console.log(lat, lng)
    }
)

const key = process.env.REACT_APP_DARK_SKY_API_KEY


const LocationSearch = () => {
    const [location, setLocation] = useState({})

    return (
        <div className="search-container">
            <h2>Enter Location</h2>
            <input 
                type="text"
                id="search-location"
                placeholder="search for location"
            />
            <WeatherInfo location={location}/>
        </div>
    );
};


export default LocationSearch;
