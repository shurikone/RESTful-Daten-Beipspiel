const apiUrl = "https://api.weatherapi.com/v1/current.json?q=Leipzig&key=ad4999757e6945249db112156231703";

function fetchWetterData(apiUrl){
    return fetch(apiUrl)
       .then((response) => response.json())
       .then((data) => {
       console.log(data);

       showWeatherData(data);

       })
       .catch(error => {
       console.error('Fehler beim Laden der Daten', error);
       });
}


function showWeatherData(data) {
    const temperature = data.current.temp_c;
    const temperatureElement = document.getElementById('temperature');
    temperatureElement.innerHTML = 'Zurzeit beträgt die Temperatur in Leipzig: ' + temperature + '°C';

    const wind = data.current.wind_kph;
    const windElement = document.getElementById('wind');
    windElement.innerHTML = 'Zurzeit beträgt die Windgeschwindigkeit in Leipzig: ' + wind + ' km/h';

    const feelslike = data.current.feelslike_c;
    const feelslikeElement = document.getElementById('feelslike');
    feelslikeElement.innerHTML = 'Zurzeit fühlt es sich wie: ' + feelslike + ' °C';

    const tagonacht = data.current.is_day;
    const tagonachtElement = document.getElementById('tagonacht');
    if (tagonacht == 1)
        tagonachtElement.innerHTML = 'Zurzeit ist es Tag in Leipzig';
    else if (tagonacht == 0)
            tagonachtElement.innerHTML = 'Zurzeit ist es Nacht in Leipzig';
}

fetchWetterData(apiUrl)


