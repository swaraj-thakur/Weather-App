const apikey = 'ca639e08e451211cebe0d71309d75206';
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

let searchinput = document.querySelector("#input");
let searchbtn = document.querySelector("#button")

async function checkWeather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`)
    if(response.status == 404){
        alert("Wrong CityName! Please Enter Right Name..")
        searchinput.value = '';
    }
   else{
    var data =  await response.json();
    console.log(data)
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#celcius").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#humidity").innerHTML = data.main.humidity +"%";
    document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        document.querySelector("#weatherIcon").src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        document.querySelector("#weatherIcon").src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector("#weatherIcon").src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector("#weatherIcon").src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        document.querySelector("#weatherIcon").src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector("#desc").style.display = "none";
    searchinput.value = '';
}
}

searchbtn.addEventListener("click",() =>{
    checkWeather(searchinput.value);
})