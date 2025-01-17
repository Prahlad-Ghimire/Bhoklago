import React from 'react'
import { useState } from 'react';
import Bhoklago from '../assets/Images/Bhoklago.png'
import '../styles/Bhoklago.css'

const SecondPage = () => {
    const [content, setContent] = useState({
        heading: "Quality Ingredients",
        image: "https://img.freepik.com/free-photo/noodle-with-chicken-bowl-side-view_141793-2406.jpg?t=st=1735579906~exp=1735583506~hmac=69f5d5a522d5eeb1e58c7e02c62f57341c39c7d072450544526e00aca05f09b4&w=360",
        l1: "Smooth and creamy texture, packed with healthy fats.",
        l2: "Crisp and refreshing for that perfect crunch.",
        l3: "Made with premium-quality oil for a rich, flavorful dressing.",
    });

    const data = {
        mission: {
            heading: "Quality Ingredients",
            image: "https://img.freepik.com/free-photo/noodle-with-chicken-bowl-side-view_141793-2406.jpg?t=st=1735579906~exp=1735583506~hmac=69f5d5a522d5eeb1e58c7e02c62f57341c39c7d072450544526e00aca05f09b4&w=360",
            l1: "Smooth and creamy texture, packed with healthy fats.",
            l2: "Crisp and refreshing for that perfect crunch.",
            l3: "Made with premium-quality oil for a rich, flavorful dressing.",
        },
        vision: {
            heading: "Quality Ingredients",
            image: "https://img.freepik.com/free-photo/side-close-up-view-khinkali-khinkali-wooden-bowl_140725-73912.jpg?t=st=1735611821~exp=1735615421~hmac=3e0ff0f12d73d360f2bd7929deda000567b42ca27946f67c16521f4cf5fd519b&w=996",
            l1: "Fragrant and aromatic, bringing out the best in every dish.",
            l2: "Aged to perfection for added depth and richness.",
            l3: "Elevates the natural flavors of your food with every bite.",
        },
        value: {
            heading: "Quality Ingredients",
            image: "https://img.freepik.com/free-photo/woman-staying-home-kitchen-cooking-shrimps-with-vegetables-pan-home-cooking-healthy-cooking-concept_1220-6308.jpg?t=st=1735612665~exp=1735616265~hmac=0f8be0d69da0c51642bb25dff2aa8cfb75e8b924d77bfe775816755c459958d7&w=996",
            l1: "Delightfully sweet with a touch of caramel undertones.",
            l2: "Rich and aromatic, amplifying the overall flavor.",
            l3: "Made with premium-quality eggs for perfect moisture and structure.",
        },
    };

    const handleClick = (type) => {
        setContent(data[type]);
    };
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="fresh position-relative w-100">
                            <img src="https://img.freepik.com/free-photo/crispy-mix-pizza-with-sausage_140725-2281.jpg?t=st=1735575595~exp=1735579195~hmac=453b230443e512e31c00c3a45b0b45f81938c02dcba573e6b7f9d142614564f8&w=740" className="z-2 shadow position-relative rounded-3 pe-0" alt="" style={{ height: 600 }} />
                            <div className="position-absolute z-2 bg-light border-5 rounded-2 shadow" style={{ bottom: 55, right: -10 }}>
                                <img src={Bhoklago} alt="" className="p-2" style={{ width: 200, height: 200 }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  col-md-12">
                        <div className="description px-4">
                            <h2 className="fs-1 text-capitalize">Fresh Home food <strong>delivered at your</strong> Door Step</h2>
                            <p className="fs-5 mt-4" style={{ textAlign: "justify" }}>At Bhoklago, we make enjoying delicious, wholesome meals effortless. With just a few clicks, you can have home-style food delivered straight to your door, made from the freshest ingredients and authentic recipes.</p>
                            <div className="grp-button d-flex justify-content-between">
                                <button className="btn border-0 fw-bold fs-5 animation-button" onClick={() => handleClick("mission")}>Our Mission</button>
                                <button className="btn border-0 fw-bold fs-5 animation-button" onClick={() => handleClick("vision")}>Our Vision</button>
                                <button className="btn border-0 fw-bold fs-5 animation-button" onClick={() => handleClick("value")}>Our Value</button>
                            </div>
                            {content.image &&
                                <div className="row mt-5">
                                    <div className="col-lg-6">
                                        <img src={content.image} className="w-100 rounded-2 shadow" alt="" style={{ height: 300 }} />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mt-5">
                                            <p className="px-3 fs-5 fw-bold">{content.heading}</p>
                                            <div>
                                                <ul className="text-capitalize">
                                                    <li className="fs-6">{content.l1}</li>
                                                    <li className="fs-6">{content.l2}</li>
                                                    <li className="fs-6">{content.l3}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage
