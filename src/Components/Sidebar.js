import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar d-none d-md-inline-block">
            <div className="container-fluid">
                <ul className="nav nav-pills flex-column text-start mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link" aria-current="page">
                            <i class="fas fa-home me-2"></i>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-dark active">
                            <i class="fas fa-tachometer-alt-fast me-2"></i>
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-dark">
                            <i class="fas fa-table me-2"></i>
                            Orders
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-dark">
                            <i class="fas fa-th me-2"></i>
                            Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-dark">
                            <i class="fas fa-user-circle me-2"></i>
                            Customers
                        </a>
                    </li>
                </ul>
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