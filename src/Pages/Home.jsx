import React from "react";
import '../styles/Bhoklago.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"
function Home() {
    return (
        <div>
            <div className="container-fluid px-0">
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
                <div className="row">
                    <div className="col-lg-12">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;