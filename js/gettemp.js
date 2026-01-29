 function fetchWeather() {
    const apiKey = 'cf040a15a51306352a0ef35baadab4ba'; // API
    const city = 'Hong Kong'; // choose the city that you want to get the temp
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            const temperature = Math.round(data.main.temp);
            
            document.getElementById('temp').textContent = temperature;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('temperature').textContent = 'N/A';
        });
}


fetchWeather();

setInterval(fetchWeather, 300000);// update per 5 minutes