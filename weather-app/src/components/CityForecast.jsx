import React, {useEffect, useState, useRef} from "react";
import { useParams, Link } from "react-router-dom";

function CityForecast() {
    const {cityName} = useParams();
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] =  useState(true);
    const detailsRef = useRef(null);

    const weatherData = {
 NewYork: {
 summary: "Sunny, 25°C",
 details: "Clear skies throughout the day with mild temperatures.",
 },
 London: {
 summary: "Cloudy, 18°C",
 details: "Overcast with occasional light rain in the afternoon.",
 },
 Tokyo: {
 summary: "Rainy, 22°C",
 details: "Continuous rain expected throughout the day.",
 },
};

useEffect(() =>{
    setLoading(true);

    const timer = setTimeout(() =>{
        const CityForecast = weatherData[cityName];
        setForecast(cityForecast || null);
        setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
}, [cityName]);

const handleViewDetails = () => {
    if (detailsRef.current) {
        detailsRef.current.scrollInView({ behavior: 'smooth'});
    }
};
if (loading) {
    return <p>Loading forecast...</p>;
}
if (!forecast) {
    return(
        <div>
            <p>City not found.</p>
            <Link to="/">Back to the City List</Link>
        </div>
    )
}
return (
    <div>
        <h2>Weather Forecast for {cityName}</h2>
        <p>{forecast.summary}</p>

        <button onClick={handleViewDetails}>View Details</button>

        <div ref={detailsRef} style={{marginTop: '30px'}}>
            <h3>Details</h3>
            <p>{forecast.details}</p>
        </div>
        <Link to="/">Back to City  List </Link>
    </div>
);
}

export default CityForecast;

