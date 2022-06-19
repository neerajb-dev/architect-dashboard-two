import React from "react";
import "./Content.css";
import img from "../Assets/car.png";

const Content = () => {
    return (
        <div className="content bg-transparent">
            <div className="container-fluid overflow-auto">
                <div className="row dashboard__header bg-white text-lg-start justify-content-sm-center justify-content-center align-items-center pe-sm-2 p-2">
                    <img className="col-sm-3 d-none d-md-inline-block" src={img} alt="" style={{ width: "100px" }} />
                    <div className="title col-sm-6">
                        <h3>Analytics Dashboard</h3>
                        <p>This is a complete dashboard created using react and bootstrap.</p>
                    </div>
                    <button className="btn btn-primary col-3 col-sm-3">Button</button>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header">
                                Header
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, reiciendis?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header">
                                Header
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, reiciendis?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header">
                                Header
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, reiciendis?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header">
                                Header
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, reiciendis?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header">
                                Header
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, reiciendis?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header">
                                Header
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, reiciendis?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="card text-bg-light mb-3">
                            <div className="card-header">
                                Header
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, reiciendis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;