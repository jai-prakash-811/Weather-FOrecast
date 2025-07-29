const apiKey = "2d540007747d9fb9d70ab66a53f3c2f6";  // Get your API key from OpenWeatherMap
const button = document.getElementById("getWeather");
const cityInput = document.getElementById("city");
const weatherDetails = document.getElementById("weatherDetails");

button.addEventListener("click", function() {
    const city = cityInput.value;
    if (city !== "") {
        getWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert("City not found, please try again");
            }
        })
        .catch(error => alert("Error fetching weather data: " + error));
}

function displayWeather(data) {
    document.getElementById("location").textContent = `Location: ${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;

    weatherDetails.style.display = "block";
}
