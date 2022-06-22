import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
// import images from "..";

const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [query, setQuery] = useState("");

    // const q = "q=" + query;

    console.log(query);
    
    useEffect(() => {
        getWeatherData();
    }, [query])
    
    const getWeatherData = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=6ccae8a9be9d445717219e5298dcd124`).then(res => {
            if (res.data) {
                setWeatherData(res.data);
            }
        })
            .catch(console.log("err"))
    }

    const handleChange = e => {
        setQuery(e.target.value);
    }

    console.log(query)

    // const handleSearch = e => {
    //     setQuery(query + e.target.value);
    //     e.preventDefault();
    // }

    console.log("weatherData", weatherData);

    console.log(query);

    return (
        <div className="weather d-flex flex-column align-items-center">
            <div className="searchBox">
                <input type="text" className="search-bar" placeholder="Search..." onChange={handleChange} />
                {/* <button className="btn btn-primary mx-3" onClick={handleSearch}>Search</button> */}
            </div>
            <div className="img-container mt-3 p-2">       
                <h1 className="text-light">{weatherData&&weatherData.main&&weatherData.main.temp}</h1>
                <h4 className="text-success">{weatherData&&weatherData.name}</h4>
            </div>
        </div>
    )
};

export default Weather;