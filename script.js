const apiKey = 'fd0681482e791db0395a18d27bad42bd';
const api = 'https://api.openweathermap.org/data/2.5/weather?q={CITYNAME}&appid={APIKEY}';

document.querySelector('.search').addEventListener('click', getData);

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      getData();
    }
});
getData();
async function getData() {
    console.clear();
   console.log("Fetching data");
   let cityName = document.getElementById('city').value;
   let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
   console.log(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
   let data = await responce.json();
   console.log(data);
   if(data.message === 'city not found'){
    console.log("city not found");
    document.getElementById('cityName').innerHTML = "Not found";
   }
   else{
    document.getElementById('cityName').innerHTML = data.name;
    document.getElementById('temperature').innerHTML = `${Math.floor(data.main.temp-273)}&deg;C`;
    document.querySelector('.windSpeedPerHour').innerHTML = `${data.wind.speed}Km/hr`;
    document.querySelector('.humidityPercentage').innerHTML = `${data.main.humidity}%`;
    console.log(data.weather[0].main);
    updateImages(data);
    }
}


function updateImages(info){
    if(info.weather[0].main === 'Clouds'){
        document.getElementById('skyStatus').src = './images/clouds.png';
    }
    else if(info.weather[0].main === 'Clear'){
        document.getElementById('skyStatus').src = './images/clear.png';
    }
    else if(info.weather[0].main === 'Rain'){
        document.getElementById('skyStatus').src = './images/rain.png';
    }
    else if(info.weather[0].main === 'Drizzle'){
        document.getElementById('skyStatus').src = './images/drizzle.png';
    }
    else if(info.weather[0].main === 'Mist'){
        document.getElementById('skyStatus').src = './images/mist.png';
    }
}