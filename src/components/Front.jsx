import React, { useState} from "react";
import axios from "axios";
import "./front.css";
import Display from "./Display";

const Front = () => {
  const [city, setcity] = useState();
  const [data, newdata] = useState({
    description: "Description",
    temp: 0,
    feels_like: 0,
    wind: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
    pressure: 0,
    iconcode: "03n",
  });

  // {temp.toFixed(2)}

  // useEffect(()=>{
  //   axios.get(`http://openweathermap.org/img/w/${data.iconcode}.png`).then((result)=>{

  //   })
  // })
  // let API_key = "a1688ca8d62732917903eee7fa3b310f";

  const api = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1688ca8d62732917903eee7fa3b310f&units=metric`
      )
      .then((response) => {
        console.log(response);
        newdata({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          feels_like: response.data.main.feels_like,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
          pressure: response.data.main.pressure,
          iconcode: response.data.weather[0].icon,
        });

        // <Display />
      });
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="title">
            <h1>REACT WEATHER APP</h1>
          </div>
          <div className="title2">
            <h2>Search City</h2>
          </div>
          <div className="input">
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
            />
            <button className="btn" type="submit" onClick={api}>
              SEARCH
            </button>
          </div>
        </div>
      </div>
      {/* <h2>{data.iconcode}</h2> */}

      <Display details={data} />
    </>
  );
};

export default Front;
