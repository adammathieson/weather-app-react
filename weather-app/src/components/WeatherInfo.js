import React, {useState, useEffect} from 'react';

const key = process.env.REACT_APP_DARK_SKY_API_KEY

const WeatherInfo = ({ location }) => {
    const [ city, setCity ] = useState({lat: null, lon: null})
    console.log("city", city)

    useEffect(() => {
        setCity({lat: location.lat, lon: location.lon})
    }, [location])

    useEffect(() => {
        if (city.lon !== null) {
            fetch(`/forecast/${key}/${city.lat},${city.lon}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            }).catch(error => console.log(error))
        }
        
    }, [city])

    return (
        <div>
        {location.currently ? (
            <>
                <p>Location:</p>
                <p>Temp:</p>
                <p>humidity:</p>
                <p>Warnings:</p>
            </>
            ) : <p>No data to display</p>
        } 
            
        </div>
    )
}

export default WeatherInfo
