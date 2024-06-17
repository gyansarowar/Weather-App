export const geoAPIOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_GEO_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_GEO_API_HOST,
  },
};

export const GEO_API_URL = `https://${import.meta.env.VITE_GEO_API_HOST}/v1/geo`;
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
