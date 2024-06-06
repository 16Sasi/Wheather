import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
function Test (){

    const[apiData,setapiData]=useState(null);
    const[inputData,setInputData]=useState("chennai");
 
    useEffect(()=>{
        var data=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=3a198f149ede7dad00dff54cce0fbb3c`);
        var apiData =data.then((item)=>item.json());
        apiData.then((value)=>setapiData(value));
    },[inputData]);
  //  console.log(data.name);
  const submittingFrom=(event)=>{
    // console.dir(event.target[0].value);
    setInputData(event.target[0].value);
    event.preventDefault();
  }
  console.log(apiData,inputData);
    return(
        <>
        <div className="overall">
          <div className="card">
            <h1>Weather App</h1>
            
            <form className="wrap" onSubmit={(e)=>submittingFrom(e)}>
              <input type="text" placeholder="Enter your city name" />
              <button type="submit" className="icon">
                <FcSearch />
              </button>
            </form>
            <h1>{apiData?.name}</h1>
            <h1>
              <span>
                <FaCloudShowersHeavy />
              </span>{" "}
              <span>{apiData?.weather[0].main}</span>
            </h1>
            <div className="box">
              <div className="sec1">
                <p>Humidity</p>
                <span>
                  <WiHumidity />
                </span>
                <span>{apiData?.main.humidity}</span>
              </div>
  
              <div className="sec1">
                <p>Wind Speed</p>
                <span>
                  <FaWind />
                </span>
                <span>{apiData?.wind.speed}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };


export default Test;
