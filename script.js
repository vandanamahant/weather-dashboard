const apiKey = typeof CONFIG !== 'undefined' ? CONFIG.WEATHER_API_KEY : "VERCEL_ENV_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");
const error = document.getElementById("error");

async function getWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        
        cityName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        condition.textContent = data.weather[0].main;
        humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${data.wind.speed} km/h`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        error.textContent = "";

    } catch (err) {
        error.textContent = "City not found. Please try again.";
        cityName.textContent = "--";
        temperature.textContent = "--°C";
        condition.textContent = "--";
        humidity.textContent = "--%";
        wind.textContent = "-- km/h";
        weatherIcon.src = "";
    }
}

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) getWeather(city);
});

cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const city = cityInput.value.trim();
        if (city) getWeather(city);
    }
});

getWeather("London");