import React from "react";
import "../styles/Bhoklago.css";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            <div className="container-fluid slate">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="pt-5 mt-lg-5 px-4 mb-1 mb-lg-4 pushingdown">
                            <p className="text-white fs-4 fw-bold">We're <strong className="text-danger">भोकलाग्यो !</strong></p>
                            <div>
                                <ul>
                                    <li className="py-2">
                                        <Link className="text-white text-decoration-none fs-5">About Us</Link>
                                    </li>
                                    <li className="py-2">
                                        <Link className="text-white text-decoration-none fs-5">Blog</Link>
                                    </li>
                                    <li className="py-2">
                                        <Link className="text-white text-decoration-none fs-5">Delivery Charge</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pt-5 mt-lg-5  px-4 mb-1 mb-lg-4">
                            <p className="text-white fs-4 fw-bold">Get Help</p>
                            <div>
                                <ul>
                                    <li className="py-2">
                                        <Link className="text-white text-decoration-none fs-5">FAQs</Link>
                                    </li>
                                    <li className="py-2">
                                        <Link className="text-white text-decoration-none fs-5" to="/">Home</Link>
                                    </li>
                                    <li className="py-2">
                                        <Link className="text-white text-decoration-none fs-5" to="/contacting">Contact Us</Link>
                                    </li>
                                    <li className="py-2">
                                        <Link className="text-white text-decoration-none fs-5" to="/loginsuccess">LoginSuccess</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pt-5 mt-lg-5 px-4 mb-4">
                            <div>
                                <p className="text-white fs-4 fw-bold text-">Call Us</p>
                                <div className="text-white">
                                    <p> <strong className="fs-5"> Gauradaha: </strong>5914720, 4544177, <br /> 4540979, 9802034008</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-white fs-4 fw-bold text-">Call Us</p>
                                <div className="text-white">
                                    <p> <strong className="fs-5"> Damak: </strong>5914720, 4544177, <br /> 4540979, 9802034008</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <p className="text-white px-4"><strong className="text-capitalize">service hour:</strong> 07:00 AM to 10:00 PM</p>
                        </div>
                        <div className="border border-bottom border-2 mt-3 mb-4"></div>
                        <div className="px-4 text-white text-capitalize d-flex justify-content-between">
                            <p className="">terms of usage | privacy policy</p>
                            <p className="px-4">&copy; 2025 भोकलाग्यो ! pvt. ltd | prahlad ghimire</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;