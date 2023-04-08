const API_KEY = 'd98edbd7f5ef34006ebe5397ccfad2c9';

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=es`)
        .then(response => response.json())
        .then(data => setweatherData(data))
}

const setweatherData = data => {
    console.log(data);
    const weatherData = {
        location: this.textContent = 'Clima en ' + data.name,
        description: data.weather[0].description,
        icon: data.weather[0].main,
        humidity: this.textContent = 'Humedad: ' + data.main.humidity + ' %',
        pressure: this.textContent = 'Presion: ' + data.main.pressure + ' mba',
        wind: this.textContent = 'Viento: ' + data.wind.speed * 3.6 + ' Km/h',
        temperature: this.textContent = data.main.temp + ' °C',
        date: getDate(),
    }

    Object.keys(weatherData).forEach( key => {
        document.getElementById(key).textContent = weatherData[key];
    });

    cleanUp();
}

const cleanUp = () => {
    let conteiner = document.getElementById('conteiner');
    let loader = document.getElementById('loader');

    loader.style.display = 'none';
    conteiner.style.display = 'flex';
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${( '0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}

separador = " ",
inicialDos = data.weather[0].main.split(separador),
inicialUno = data.weather[0].main.split(); 
                           
function devuelveIniciales(){ 
    for (x=0;x<inicialUno.length;x++){
                            inicialA = inicialUno[x].substring(0, 1); 
    }  
    for (x=0;x<inicialDos.length;x++){
        inicialB = inicialDos[x].substring(0, 1); 
    }
    if (inicialA == inicialB) {
        X = (inicialA);}
    else {
        X = (inicialA + inicialB);}
    }       
devuelveIniciales(); 

var myImage = new Image(100, 200);
myImage.src = `https://www.metaweather.com/static/img/weather/png/${X}.png`;
console.log(myImage);