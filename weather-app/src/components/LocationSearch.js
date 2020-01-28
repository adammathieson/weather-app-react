import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import geocode from 'react-geocode';
import Autocomplete from 'react-google-autocomplete';

geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)
geocode.setRegion("us")

geocode.fromAddress("Seattle, WA").then(
    res => {
        const { lat, lng } = res.results[0].geometry.location
        // console.log(lat, lng)
    }
)

const LocationSearch = () => {
    const [location, setLocation] = useState({lat: null, lon: null})

    const handleSearch = place => {
        const lat = place.geometry.location.lat()
        const lon = place.geometry.location.lng()
        console.log(lat, lon)
        setLocation({lat, lon})
    }

    return (
        <div className="search-container">
            <h2>Enter Location</h2>
            <Autocomplete
                style={{width: '90%'}}
                onPlaceSelected={(place) => {
                console.log(place);
                handleSearch(place)
                }}
                // types={['(regions)']}
                componentRestrictions={{country: "us"}}
            />
            <WeatherInfo location={location}/>
        </div>
    );
};


export default LocationSearch;
