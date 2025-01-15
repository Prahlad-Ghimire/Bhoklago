import React from "react";
import '../styles/Bhoklago.css';

function Contact() {
    return (
        <div>
            <div className="container mt-5 mb-3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-5 mt-5">
                            <p className="text-center fs-1 fw-bold">Contact Us</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact">
                            <p className="fw-bold fs-2 text-uppercase">How can we serve you</p>
                            <p className="fs-5" style={{ textAlign: "justify" }}>Have questions or ready to order your favorite meals? Our team is here to help! Reach out, and we'll work together to deliver a satisfying and seamless food ordering experience that meets your cravings and needs.</p>
                            <div className="mb-4">
                                <div className="d-flex align-items-center gap-3 contactsection">
                                    <div className="bg-dark rounded-circle d-flex justify-content-center align-items-center" style={{ width: 80, height: 80 }}>
                                        <i class="bi bi-envelope contacticons fs-2  text-white"></i>
                                    </div>
                                    <div>
                                        <p className="mb-0 fw-bold">Order Support</p>
                                        <p className="mb-0 fs-10">bhoklago.support@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex align-items-center gap-3 contactsection">
                                    <div className="bg-dark rounded-circle d-flex justify-content-center align-items-center" style={{ width: 80, height: 80 }}>
                                        <i class="bi bi-telephone contacticons fs-2  text-white"></i>
                                    </div>
                                    <div>
                                        <p className="mb-0 fw-bold">Call Us</p>
                                        <p className="mb-0 fs-10">+9779802034008</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex align-items-center gap-3 contactsection">
                                    <div className="bg-dark rounded-circle d-flex justify-content-center align-items-center" style={{ width: 80, height: 80 }}>
                                        <i class="bi bi-geo-alt contacticons fs-2  text-white"></i>
                                    </div>
                                    <div>
                                        <p className="mb-0 fw-bold">Address</p>
                                        <p className="mb-0 fs-10">Kathmandu, Nepal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form action="" className="d-flex form p-5">
                            <div className="filling w-100">
                                <div className="py-4">
                                    <input type="text" name="fullname" id="" className="w-100 " placeholder="Your Name" />
                                </div>
                                <div className="py-4">
                                    <input type="email" name="email" id="" className="w-100" placeholder="Your Email" />
                                </div>
                                <div className="pt-4 pb-2">
                                    <textarea name="" id="" className="w-100" placeholder="Write a Message"></textarea>
                                </div>
                                <button className="submitting w-100 border-0 mt-4 py-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;