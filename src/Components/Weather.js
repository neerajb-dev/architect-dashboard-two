import React from "react";
import "./Weather.css";
import images from "..";

const Weather = () => {
    return (
        <div className="weather d-flex flex-column align-items-center">
            <div className="searchBox">
                <input type="text" className="search-bar" placeholder="Search..." />
            </div>
            <div className="img-container mt-3"></div>
        </div>
    )
};

export default Weather;