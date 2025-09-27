const apikey = '61993753c4eadd10294e879d74b546e9';
const input =document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.getElementById("icon");

const weather = document.getElementById("weather");

const temperature = document.getElementById("temperature");

const description = document.getElementById("description");


btn.addEventListener("clicked",() =>{
    let city = input.value;
    getWeather(city);

})

function getWeather(city){
    console.log(city);
    fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')
    .then(response =>response.json)
    .then(data => {
        console.log(data);
        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src ="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
        alt ="Weather.icon"/>`
const weatherCity = data.name;
const weatherCountry = data.sys.country;
weather.innerHTML= `${weatherCity}, ${weatherCountry}`;
const weatherTemp = data.main.temp;
weatherTemp = weatherTemp-273;
const temp = weatherTemp.tofixed(2)
temperature.innerHTML= `${temp}'C`

})

}