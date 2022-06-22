import React from "react";
import Content from "../../Components/Content";
// import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

const Home = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <Content />
        </div>
    )
};

export default Home;