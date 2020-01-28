import React, {useState, useEffect} from 'react';

const key = process.env.REACT_APP_DARK_SKY_API_KEY

const WeatherInfo = ({ location }) => {
    const [ city, setCity ] = useState({lat: null, lon: null})
    const [ result, setResult ] = useState({})

    useEffect(() => {
        setCity({lat: location.lat, lon: location.lon})
    }, [location])

    useEffect(() => {
        if (city.lon !== null) {
            fetch(`/forecast/${key}/${city.lat},${city.lon}`)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setResult(res)
            }).catch(error => console.log(error))
        }
        
    }, [city])

    return (
        <div>
        {result.currently ? (
            <>
                <p>Location: {result.currently.summary}</p>
                <p>Temp: {result.currently.temperature}°</p>
                <p>humidity: {result.currently.humidity}</p>
                <p>Wind Speed: {result.currently.windSpeed}mph</p>
            </>
            ) : <p>No data to display</p>
        } 
            
        </div>
    )
}

export default WeatherInfo
