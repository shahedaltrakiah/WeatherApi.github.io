async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fbb2d6bae8b9cf785bc4662e7d326305&units=metric&lang=ar`;
    try {
        const response = await fetch(url);
        const weatherDetails = await response.json();
        displayWeatherDetails(weatherDetails);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherDetails(weather) {
    document.getElementById('cityName').textContent = weather.name;
    document.getElementById('cityDescription').textContent = `Description: ${weather.weather[0].description}`;
    document.getElementById('cityTemp').textContent = `Temp: ${weather.main.temp} °C`;
}

fetchWeatherData("Amman");