import React from 'react'
import Bhoklago2 from "../assets/Images/Bhoklago2.png"
import { Link } from 'react-router-dom'

const Afterloginnavbar = () => {
    return (
        <div>
            <div className="bg-dark w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="py-3 d-flex justify-content-between align-items-center">
                                <img src={Bhoklago2} alt="" className="rounded-circle" style={{ width: 120, height: 50 }} />
                                <div className='text-white d-flex gap-4 justify-content-center align-items-center'>
                                    <Link>
                                        <div className='logosfill border border-white d-flex justify-content-center align-items-center rounded-circle' style={{ width: 40, height: 40 }}>
                                            <i class="bi bi-bell fs-5 text-white"></i>
                                        </div>
                                    </Link>
                                    <Link>
                                        <div className='logosfill border border-white d-flex justify-content-center align-items-center rounded-circle' style={{ width: 40, height: 40 }}>
                                            <i class="bi bi-person fs-5 text-white"></i>
                                        </div>
                                    </Link>
                                    <Link>
                                        <div className='logosfill border border-white d-flex justify-content-center align-items-center rounded-circle' style={{ width: 40, height: 40 }}>
                                            <i class="bi bi-basket3 fs-5 text-white"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Afterloginnavbar
