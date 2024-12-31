import React, { useState } from "react";
import "../styles/Bhoklago.css"
import Bhoklago2 from "../assets/Images/Bhoklago2.png"
import Bhoklago from "../assets/Images/Bhoklago.png"

function Navbar() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const openLoginModal = () => {
        setShowLoginModal(true);
        setShowRegisterModal(false);
    }

    const openRegisterModal = () => {
        setShowRegisterModal(true);
        setShowLoginModal(false)
    }

    const closeAllModals = () => {
        setShowLoginModal(false);
        setShowRegisterModal(false);
    }

    return (
        <div>
            <div className="bg-dark z-3 w-100 position-fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="py-3 d-flex justify-content-between">
                                <img src={Bhoklago2} alt="" className="rounded-circle" style={{ width: 120, height: 50 }} />
                                <button onClick={openLoginModal} className="btn text-white animated-button border-0 text-uppercase">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showLoginModal && (
                <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", }}>
                    <div className="modal-dialog modal-dialog-centered" style={{ width: '100%' }}>
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="">
                                            <img src={Bhoklago} alt="" className="w-100 rounded-3 d-flex justify-content-center align-items-center" style={{height:465}}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mt-3">
                                            <div className="w-100 d-flex justify-content-between mb-0">
                                                <p className="fs-5 fw-bold mb-0">Login to भोकलागो</p>
                                                <button onClick={closeAllModals} className="btn-close border-0" style={{ boxShadow: 'none' }}></button>
                                            </div>
                                            <hr />
                                            <form action="">
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label text-uppercase">Email Address:</label>
                                                    <input type="email" className="form-control" id="email" placeholder="you@yourname.com" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label text-uppercase">Password:</label>
                                                    <input type="password" className="form-control" id="password" placeholder="..." />
                                                </div>
                                                <button type="submit" className="loginbhoklago btn w-100 text-white" style={{backgroundColor:'#6B6B6B'}}>Login</button>
                                                <hr />
                                                <div className="text-center mt-4">
                                                    <p className="text-capitalize">or login using</p>
                                                </div>
                                                <div className="d-flex justify-content-center gap-4">
                                                    <button className="btn btn-primary">Facebook</button>
                                                    <button className="btn btn-danger">Google</button>
                                                </div>
                                                <div className="mt-4 text-center d-flex align-items-center justify-content-center">
                                                    <p className="mb-0">New here?</p>
                                                    <button onClick={openRegisterModal} className="btn text-success">Register</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navbar;