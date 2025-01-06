import React from "react";
import { useState } from "react";
import '../styles/Bhoklago.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"
import Bhoklago from "../assets/Images/Bhoklago.png"
import foodbg from "../assets/Images/foodbg.png";
function Home() {
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
            <div className="container-fluid px-0 pb-5">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }} modules={[Autoplay]} className="mySwiper">
                    <SwiperSlide>
                        <div className="position-relative">
                            <div className="">
                                <img src="https://img.freepik.com/free-photo/appetizing-spaghetti-italian-pasta-with-tomato-sauce_1150-20309.jpg?t=st=1735568552~exp=1735572152~hmac=b8ae1b580ec6172109ccf8eb59d396b59161ca1d4aca2eba903e2e111d3cb48c&w=996" className="w-100 object-fit-cover" style={{ height: 500 }} />
                            </div>
                            <div className="position-absolute top-0 opacity-25 w-100">
                                <img src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30461.jpg?t=st=1735568824~exp=1735572424~hmac=36549b9354bccb90f01c459a9a09fe7fbea68844002ad804e391ede17dd2fac3&w=740" alt="" className="w-100 object-fit-cover" style={{ height: 500 }} />
                            </div>
                            <div className="position-absolute px-5" style={{ top: 200 }}>
                                <h1 className="text-white fw-bold text-uppercase animate__animated animate__slideInRight" style={{ letterSpacing: 3 }}>Hungry? <br /> <strong className="mt-3 text-uppercase">Let's Bhoklago Take Care of It!</strong></h1>
                                <p className="text-white fs-5 mt-3 text-capitalize animate__animated animate__slideInRight">Order your favorite food, anytime, anywhere.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="position-relative">
                            <div className="">
                                <img src="https://img.freepik.com/free-photo/korean-food-kim-bap-steamed-rice-with-vegetables-seaweed_1150-42971.jpg?t=st=1735573381~exp=1735576981~hmac=c410f22bd68bfc93b6e867dbad0d2176b799164f9cf4ab8017c8a44294469aba&w=996" className="w-100 object-fit-cover" style={{ height: 500 }} />
                            </div>
                            <div className="position-absolute top-0 opacity-25 w-100">
                                <img src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30461.jpg?t=st=1735568824~exp=1735572424~hmac=36549b9354bccb90f01c459a9a09fe7fbea68844002ad804e391ede17dd2fac3&w=740" alt="" className="w-100 object-fit-cover" style={{ height: 500 }} />
                            </div>
                            <div className="position-absolute px-5" style={{ top: 200 }}>
                                <h1 className="text-white fw-bold text-uppercase animate__animated animate__slideInRight" style={{ letterSpacing: 3 }}>Explore <br /> <strong className="mt-3 text-uppercase">Delicious Choices at Bhoklago!</strong></h1>
                                <p className="text-white fs-5 mt-3 text-capitalize animate__animated animate__slideInRight">Your cravings, our menu, your satisfaction.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="position-relative">
                            <div className="">
                                <img src="https://img.freepik.com/free-photo/top-view-delicious-food-with-copy-space_23-2150873986.jpg?t=st=1735574159~exp=1735577759~hmac=23a787dd0cfd22f43642b0253a58ae47faf5e95df5a0b3368947091d75f651a8&w=1060" className="w-100 object-fit-cover" style={{ height: 500 }} />
                            </div>
                            <div className="position-absolute top-0 opacity-25 w-100">
                                <img src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30461.jpg?t=st=1735568824~exp=1735572424~hmac=36549b9354bccb90f01c459a9a09fe7fbea68844002ad804e391ede17dd2fac3&w=740" alt="" className="w-100 object-fit-cover" style={{ height: 500 }} />
                            </div>
                            <div className="position-absolute px-5" style={{ top: 200 }}>
                                <h1 className="text-white fw-bold text-uppercase animate__animated animate__slideInRight" style={{ letterSpacing: 3 }}>Bhoklago <br /> <strong className="mt-3 text-uppercase">A Menu for Every Craving!</strong></h1>
                                <p className="text-white fs-5 mt-3 text-capitalize animate__animated animate__slideInRight">Order now, and satisfy your hunger in just a few clicks.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
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
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-center align-items-center" style={{height:800}}>
                            <img src={foodbg} className="w-100" alt="" style={{ height: 600}} />
                        </div>
                    </div>
                    <div className="col-lg-6">
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
            <div className="container-fluid bg-secondary">
                <div className="row">
                    <div className="col-lg-12">
                        <p>dhdbfkabdbfbfh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;