import React from "react";
import Content from "./Content";
import "./Dashboard.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <Sidebar />
            <Content /> 
        </div>
    )
};

export default Dashboard;