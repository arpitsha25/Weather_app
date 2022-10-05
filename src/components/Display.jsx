import React from "react";
import "./Display.css";
// import axios from "axios";
// import { useEffect } from "react";
const Display = ({ details }) => {
  let url = `http://openweathermap.org/img/w/${details.iconcode}.png`;
  // useEffect(() => {
  //   axios
  //     .get(`http://openweathermap.org/img/w/${details.iconcode}.png`)
  //     .then((result) => {document.getElementById});
  // },[]);


let unix = details.sunrise;
let date = new Date(unix*1000);
var hours = date.getHours();
var minutes = "0" + date.getMinutes();
var seconds = "0" + date.getSeconds();
var srise = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
console.log(srise);

let unix2 = details.sunset;
let date2 = new Date(unix2*1000);
var hours2 = date2.getHours();
var minutes2 = "0" + date2.getMinutes();
var seconds2 = "0" + date2.getSeconds();
var sset = hours2 + ':' + minutes2.substr(-2) + ':' + seconds2.substr(-2);
console.log(sset);
  return (
    <>
      <div className="cont1">
        <div className="cont2">
          <div className="bar tmp">
            <p>{details.temp} °C</p>
          </div>
          <div className="bar">
            <img src={url} alt="..Loading..." />
          </div>
          <div className="bar desc">
            <p>{details.description}</p>
          </div>
          <div className="bar b4">
            <div className="bar-j"><h3>Feels Like</h3><p>{details.feels_like} °C</p></div>
            <div className="bar-j"><h3>Sunrise</h3><p>{srise}</p></div>
            <div className="bar-j"><h3>Humidity</h3><p>{details.humidity} %</p></div>
          </div>
          <div className="bar">
            <div className="bar-j"><h3>Wind speed</h3><p>{details.wind} m/s</p></div>
            <div className="bar-j"><h3>Sunset</h3><p>{sset}</p></div>
            <div className="bar-j"><h3>Pressure</h3><p>{details.pressure} hPa</p></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;

//     description: "",
//     temp: 0,
//     temp_max: 0,
//     temp_min: 0,
//     humidity: 0,
//     sunrise: 0,
//     sunset: 0,
//     country: "",
//     pressure: 0,
//     iconcode: "",
