import React from 'react'

const ThirdPage = () => {
  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: '#656565' }}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="px-4 mb-5">
                            <h1 className="text-capitalize text-white mt-5">Satisfy Your Cravings <br /> Anytime, Anywhere</h1>
                            <div className="d-flex align-items-center gap-2 mt-4">
                                <p className="mb-0 fs-4 fw-bold">Quick Response</p>
                                <div className="rounded-circle px-2 py-1 fs-4 d-inline-block" style={{ backgroundColor: "#F8F9FA" }}>
                                    <i class="bi bi-rocket-takeoff"></i>
                                </div>
                            </div>
                            <p className="text-white px-4 mt-3" style={{ textAlign: 'justify' }}>We understand hunger can't wait! That's why we ensure fast and reliable communication to meet your needs instantly.</p>
                            <div className="d-flex align-items-center gap-2 mt-4">
                                <p className="mb-0 fs-4 fw-bold">Skilled Team</p>
                                <div className="rounded-circle px-2 py-1 fs-4 d-inline-block" style={{ backgroundColor: "#F8F9FA" }}>
                                    <i class="bi bi-people-fill"></i>
                                </div>
                            </div>
                            <p className="text-white px-4 mt-3" style={{ textAlign: 'justify' }}>Our team of expert chefs and passionate food lovers work tirelessly to bring you fresh, delicious meals inspired by authentic family recipes.</p>
                            <div className="d-flex align-items-center gap-2 mt-4">
                                <p className="mb-0 fs-4 fw-bold">Customer First</p>
                                <div className="rounded-circle px-2 py-1 fs-4 d-inline-block" style={{ backgroundColor: "#F8F9FA" }}>
                                    <i class="bi bi-person"></i>
                                </div>
                            </div>
                            <p className="text-white px-4 mt-3" style={{ textAlign: 'justify' }}>Your satisfaction is our priority. We strive to deliver meals that bring the warmth of home to your doorstep, making every bite memorable.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="h-100 d-flex align-items-center mt-0 mt-lg-5 position-relative">
                                    <img src="https://img.freepik.com/free-photo/georgian-eggplant-roulettes-table_140725-9215.jpg?t=st=1735925307~exp=1735928907~hmac=b5ef6a0b5c70abd9603ae945aea74e8b9b2d34eb4b540e767534ce0d06923bb9&w=360" alt="" className="w-100 rounded-3 img-thumbnail object-fit-cover mb-2" style={{ height: 450 }} />
                                    <img src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30461.jpg?t=st=1735568824~exp=1735572424~hmac=36549b9354bccb90f01c459a9a09fe7fbea68844002ad804e391ede17dd2fac3&w=740" alt="" className="position-absolute rounded-3  mb-2 object-fit-cover opacity-25 w-100" style={{ height: 450 }} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="h-100 d-flex align-items-center mt-0 mt-lg-5 position-relative">
                                    <img src="https://img.freepik.com/free-photo/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table_141793-4744.jpg?t=st=1736056495~exp=1736060095~hmac=106a8cef6399a43ab176c90c7463976f49ea5aeb67a3672712a450d0e73f7775&w=996" alt="" className="w-100 rounded-circle  mb-2 object-fit-cover" style={{ height: 450, border: "5px solid #9AA6B2" }} />
                                    <img src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30461.jpg?t=st=1735568824~exp=1735572424~hmac=36549b9354bccb90f01c459a9a09fe7fbea68844002ad804e391ede17dd2fac3&w=740" alt="" className="position-absolute rounded-circle  mb-2 object-fit-cover opacity-50 w-100" style={{ height: 450 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ThirdPage
