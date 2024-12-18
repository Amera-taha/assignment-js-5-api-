let search = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
let allWether = [];












async function sarchWather(city){

    let response = await fetch (`  http://api.weatherapi.com/v1/forecast.json?key=7fbbe53f634441be95c23139241812&q= ${city}`);

    let data = await response.json();
    console.log(data);
    

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".wind").innerHTML = data.current.wind_kph +"km/h";
    document.querySelector(".humidity").innerHTML = data.current.humidity +"%";
    document.querySelector(".date").innerHTML = data.location .localtime;
    document.querySelector(".country").innerHTML = data.location .country;
    
}




searchBtn.addEventListener("click" , function(){
    sarchWather(search.value);
    
})
sarchWather("egypt");