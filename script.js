
let apiKey="145d0c26fba8c5581e06e9e4463d528b";
var searchText= document.querySelector(".search input");
var searchBtn= document.querySelector(".search button");
var weathericon=document.querySelector(".weather-img");
var error=document.querySelector(".card .error");
gsap.to(".weather-img",{
            scale:1.05,
            duration:0.8,
            repeat:-1,
            yoyo:true
        })

async function getWeather(city){
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&`+"appid="+`${apiKey}`);
    if(response.status==404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display = "none";

    }
    else{
        var data= await response.json();
        console.log(data);  
        document.querySelector(".weather .temp").innerHTML= Math.floor(data.main.temp)+"°c";
        document.querySelector(".weather .city").innerHTML= data.name;
        document.querySelector(".details .humidity").innerHTML=data.main.humidity+" %"
        document.querySelector(".details .wind").innerHTML=data.wind.speed+" km/hr";        
        
        let weather= (data.weather[0].main).toLowerCase();
        let loc= "images/"+weather+".png"
        weathericon.setAttribute("src",loc);
      document.querySelector(".error").style.display="none";
        
        document.querySelector(".weather").style.display = "block";


    
}
}

searchBtn.addEventListener("click",()=>{
    getWeather(searchText.value);
  

})

