import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { WiThermometerExterior } from "weather-icons-react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Weather = () => {
  AOS.init();
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchAPI = async () => {
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e6166d776d8dcf9388e637cc4624b35b`;

      const res = await fetch(url);
      const resJson = await res.json();
      setCity(resJson.main);
      console.log(resJson);
    };
    fetchAPI();
  }, [search]);

  return (
    <>
      <div className="">
        <input
          type="search"
          defaultValue=""
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="container my-5 input-text text-success input-lg fs-2 text-center form-control w-50"
          placeholder="Enter any City..."
        />

        {/* {
          !city ? (
            <p>No data</p>
          ) :( */}
        {/* 
        <div>
          <h1>{search}</h1>
          <h3>Current Temperature: {city.temp}°C</h3>
          <h3>Minimum temperature{city.temp_min}°C</h3>
          <h3>Maximum Temperature{city.temp_max}°C</h3>
          <h3>Pressure:{city.pressure}</h3>
          <h3>Humidity :{city.humidity}</h3>
        </div>
          )} */}

        {!city ? (
          <div className="d-flex justify-content-center align-items-center my-5" data-aos="flip-up"
              data-aos-mirror="true"
              data-aos-delay="0"
              data-aos-duration="1000">
            <h3 className="mx-3 border border-1 p-3 container text-center border-success data">
              
              No data
            </h3>
          </div>
        ) : (
          <div className="text-center d-flex justify-content-center align-items-center flex-column">
            <h1
              className=" city_name border border-1 p-3 mx-3 border-success data container w-50"
              data-aos="flip-up"
              data-aos-mirror="true"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <WiThermometerExterior className="text-danger" />
              {search}
            </h1>
            <div className=" d-flex justify-content-center align-items-center mx-auto flex-column">
              <div className="d-flex justify-content-center align-items-center my-5">
                <h3
                  className="mx-3 border border-1 p-3 border-success data"
                  data-aos="flip-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  Minimum temperature
                  <span className="d-flex justify-content-center align-items-center">
                    {city.temp_min}°C
                  </span>
                </h3>
                <h3
                  className="mx-3 border border-1 p-3 border-success data"
                  data-aos="flip-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  Current Temperature
                  <span className="d-flex justify-content-center align-items-center">
                    {city.temp}°C
                  </span>
                </h3>
                <h3
                  className="mx-3 border border-1 p-3 border-success data"
                  data-aos="flip-left"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  Maximum Temperature
                  <span className="d-flex justify-content-center align-items-center">
                    {city.temp_max}°C
                  </span>
                </h3>
              </div>
              <div className="d-flex justify-content-center align-items-center my-3">
                <h3
                  className="mx-3 border border-1 p-3 border-success data"
                  data-aos="flip-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  Pressure
                  <span className="d-flex justify-content-center align-items-center">
                    {city.pressure}
                  </span>
                </h3>
                <h3
                  className="mx-3 border border-1 p-3 border-success data"
                  data-aos="flip-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  Humidity
                  <span className="d-flex justify-content-center align-items-center">
                    {city.humidity}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
