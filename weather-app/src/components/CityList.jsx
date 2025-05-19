import { Link } from 'react-router-dom';
import React from 'react';

function CityList() {
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
 const cities = Object.keys(weatherData);
return (
   <div>
    <h2>Select a City</h2>
     <ul>
  {cities.map((city) => (
    <li key={city}>
      <Link to={`/forecast/${city}`}>{city}</Link>
    </li>
  ))}
</ul>
 </div>
);

}
export default CityList;