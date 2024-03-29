import React, { useState } from 'react'
import './Weather.css'
import clearweather_icon from '../Assets/clearweather.png';
import cloudweather_icon from '../Assets/cloudweather.png';
import drizzleweather_icon from '../Assets/drizzleweather.png';
import humidityweather_icon from '../Assets/humidityweather.png';
import rainweather_icon from '../Assets/rain weather.png';
import search_icon from '../Assets/search.jpg';
import snow_icon from '../Assets/snow.png';
import windy_icon from '../Assets/windy.png';

const  Weather = () => {

    let weather_api="8750433054a88b37b3e0161c552bb560";
    
    const [wicon,setWicon]=useState(cloudweather_icon);


     const search= async ()=>{
         const element=document.getElementsByClassName("cityInput");
         if(element[0].value===""){
            return 0;
         }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${weather_api}`;
        let response =await fetch(url);
        let data= await response.json();
        const humidity=document.getElementsByClassName("humidity-percentage")
        const wind=document.getElementsByClassName("wind-speed")
        const temperature=document.getElementsByClassName("weather-temp")
        const location =document.getElementsByClassName("weather-location")

        humidity[0].innerHTML= data.main.humidity+"%";
        wind[0].innerHTML=Math.floor(data.wind.speed)+"km/h";
        temperature[0].innerHTML=Math.floor(data.main.temp)+"°C";
        location[0].innerHTML=data.name;
        
        if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){
            setWicon(clearweather_icon);
        }
        else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
            setWicon(cloudweather_icon);
        }
        else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
            setWicon(drizzleweather_icon);
        }
        else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
            setWicon(drizzleweather_icon);
        }
        else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
            setWicon(rainweather_icon);
        }
        else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
            setWicon(rainweather_icon);
        }
        else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clearweather_icon);
        }
     }


  return (
    <div className='container'>
    <div className='top-bar'>
    <input  type="text" className="cityInput" placeholder='search'/>
    <div className='search-icon' onClick={()=>{search()}}>
        <img src={search_icon} alt=""/>
    </div>
    </div>
    <div className="weather-image">
    <img src={wicon} alt=""/>
   </div>
       <div className='weather-temp'>38°C</div>
       <div className='weather-location'>Lucknow</div>
       <div className='data-container'>

        <div className='element'>
        <img src={humidityweather_icon} alt='' className='icon' />
        <div className='data'>
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
        </div>
        </div>

        <div className='element'>
        <img src={windy_icon} alt='' className='icon' />
        <div className='data'>
            <div className="wind-speed">15km/h</div>
            <div className="text">Wind speed</div>
        </div>
        </div>


       </div>
    </div>
  );
};

export default 
Weather;