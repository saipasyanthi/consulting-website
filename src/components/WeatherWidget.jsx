import { useEffect, useState } from "react";
import axios from "axios";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=YOUR_API_KEY&units=metric`)
      .then(res => setWeather(res.data))
      .catch(console.error);
  }, []);

  const getIcon = () => {
    if (!weather) return "☁️";
    const type = weather.weather[0].main.toLowerCase();
    if (type.includes("cloud")) return "☁️";
    if (type.includes("rain")) return "🌧️";
    if (type.includes("snow")) return "❄️";
    if (type.includes("clear")) return "☀️";
    return "🌡️";
  };

  return (
    <div>
        <span className="text-xl">{getIcon()}</span>
        <span>Today's Temperature is {weather?.name}: {weather?.main.temp}°C</span>
      </div>
  );
};

export default WeatherWidget;
