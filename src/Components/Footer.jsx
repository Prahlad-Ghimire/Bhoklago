import React from "react";
import "../styles/Bhoklago.css";
import { Link } from "react-router-dom";
import Contact from "../Pages/Contact";

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
                                        <Link className="text-white text-decoration-none fs-5" to="/contact">Contact Us</Link>
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
                </div>
            </div>
        </div>
    )
}
export default Footer;