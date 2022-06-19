import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-2xl bg-light shadow position-sticky top-0">
            <div className="container-fluid">
                <a href="#" className="navbar-brand fs-1">
                    Archies
                </a>
                <button class="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-end">
                        <li className="nav-item active">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav text-end">
                        <li className="nav-item active">
                            <a href="#" className="nav-link">About</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav text-end">
                        <li className="nav-item active">
                            <a href="#" className="nav-link">Dashboard</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav text-end">
                        <li className="nav-item active">
                            <a href="#" className="nav-link">Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
