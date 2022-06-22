import React from "react";
import "./Sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar d-none d-md-inline-block">
            <div className="container-fluid">
                <Router>
                    <ul className="nav nav-pills flex-column text-start mb-auto">
                        <li className="nav-item">
                            {/* <a href="#" className="nav-link" aria-current="page"> */}
                            <Link to="/" className="nav-link">
                                <i class="fas fa-home me-2"></i>
                                Home
                            </Link>
                            {/* </a> */}
                        </li>
                        <li className="nav-item">
                            {/* <a href="#" className="nav-link link-dark active"> */}
                            <Link to="/Dashboard" className="nav-link">
                                <i class="fas fa-tachometer-alt-fast me-2"></i>
                                Dashboard
                            </Link>
                            {/* </a> */}
                        </li>
                        <li className="nav-item" >
                            {/* <a href="#" className="nav-link link-dark"> */}
                            <Link to="/Orders" className="nav-link">
                                <i class="fas fa-table me-2"></i>
                                Orders
                            </Link>
                            {/* </a> */}
                        </li>
                        <li className="nav-item">
                            {/* <a href="#" className="nav-link link-dark"> */}
                            <Link to="/Products" className="nav-link">
                                <i class="fas fa-th me-2"></i>
                                Products
                            </Link>
                            {/* </a> */}
                        </li>
                        <li className="nav-item">
                            {/* <a href="#" className="nav-link link-dark"> */}
                            <Link to="/Customers" className="nav-link">
                                <i class="fas fa-user-circle me-2"></i>
                                Customers
                            </Link>
                            {/* </a> */}
                        </li>
                    </ul>
                </Router>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://avatars.githubusercontent.com/u/61327327?v=4" alt="" className="rounded-circle me-2" width="32" height="32" />
                        <strong>Neeraj</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;