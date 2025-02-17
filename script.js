const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "6f45e313b461590d4e4ffb8030450083";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try {
        const response = await fetch(url);
        const weather_data = await response.json();

        if (weather_data.cod === '404') {
            console.log("City not found!");
            return;
        }

        
        temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;


        switch (weather_data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "cloud.jpg";
                break;
            case 'Clear':
                weather_img.src = "sun.jpg";
                break;
            case 'Rain':
                weather_img.src = "RainyWeather.jpg";
                break;
            case 'Mist':
                weather_img.src = "Mist.jpg";
                break;
            case 'Snow':
                weather_img.src = "Snow.jpg";
                break;
            default:
                weather_img.src = "cloud.jpg";
        }

        console.log(weather_data);
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}


searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
