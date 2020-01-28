import React from 'react';

const WeatherInfo = (props) => {

    
    return (
        <div>
        {props.location.currently ? (
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
