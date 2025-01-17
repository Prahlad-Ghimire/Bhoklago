import React from 'react'
import foodbg from '../assets/Images/foodbg.png'
import '../styles/Bhoklago.css'

const FourthPage = () => {
  return (
    <div>
      <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: 700 }}>
                            <img src={foodbg} className="rounded-2" alt="" style={{ width: 300, height: 300 }} />
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div>
                            <h2 className="mt-lg-5 mt-2">Easy Order in 3 Steps</h2>
                        </div>
                        <div className="d-flex rotating align-items-center mt-lg-5 mt-3 gap-3">
                            <div className="steps">
                                <img src="https://img.freepik.com/free-photo/people-creating-food-content-upload-internet-food-lovers_23-2151461646.jpg?t=st=1736120991~exp=1736124591~hmac=35a1758a0cf794eb629bb8926752ceffdadfeb317ff59a2fb5b05f0e45b323c3&w=996" alt="" className="rounded-circle border border-5 border-primary object-fit-cover" style={{ width: 150, height: 150 }} />
                            </div>
                            <div>
                                <p className="fw-bold fs-4 mb-1">Explore Restaurants</p>
                                <p className="mb-0 text-capitalize" style={{ textAlign: "justify" }}>Discover a variety of restaurants near you offering delicious cuisines.</p>
                            </div>
                        </div>
                        <div className="d-flex rotating align-items-center mt-lg-5 mt-3 gap-3">
                            <div className="steps">
                                <img src="https://img.freepik.com/free-photo/front-view-delicious-food-arrangement_23-2148510936.jpg?t=st=1736122628~exp=1736126228~hmac=670fe41b479e786bff0aec151c144dcccd01f532fefd5e69dd698aee5fbafb74&w=996" alt="" className="rounded-circle border border-5 border-primary object-fit-cover" style={{ width: 150, height: 150 }} />
                            </div>
                            <div>
                                <p className="fw-bold fs-4 mb-1">Choose a Tasty Dish</p>
                                <p className="mb-0 text-capitalize" style={{ textAlign: "justify" }}> Pick your favorite meal from a wide selection of flavorful dishes.</p>
                            </div>
                        </div>
                        <div className="d-flex rotating align-items-center mt-lg-5 mt-3 gap-3">
                            <div className="steps">
                                <img src="https://img.freepik.com/free-photo/close-up-hand-taking-photo-with-phone_23-2149250069.jpg?t=st=1736123280~exp=1736126880~hmac=4fc86da2f9855cd538e5f80680ef4e880acf5b9a503835bc226d2964e471828d&w=360" alt="" className="rounded-circle border border-5 border-primary object-fit-cover" style={{ width: 150, height: 150 }} />
                            </div>
                            <div>
                                <p className="fw-bold fs-4 mb-1">Follow the Status</p>
                                <p className="mb-0 text-capitalize" style={{ textAlign: "justify" }}> Track your order in real time, from preparation to delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FourthPage
