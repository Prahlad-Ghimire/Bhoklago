import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SwiperPage from './Pages/SwiperPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';
import FourthPage from './Pages/FourthPage';


const Clear = () => {
  return (
    <div>
      <Navbar />
      <SwiperPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </div>
  )
}

export default Clear
