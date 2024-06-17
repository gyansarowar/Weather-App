import Search from "./components/search/Search";
import "./App.css";
import CurrentWeather from "./components/current-weather/Current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    // console.log('searchData',searchData);
    // console.log('lat',lat);
    // console.log('lon',lon);

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        // console.log("response", response);
        const weatherResponse = await response[0].json();
        // console.log('weatherResponse',weatherResponse);
        const forecastResponse = await response[1].json();
        // console.log('forecastResponse',forecastResponse);
        setcurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((e) => console.log(e));
  };
  // console.log('currentWeather',currentWeather);
  // console.log("forecast", forecast);
  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
}

export default App;
