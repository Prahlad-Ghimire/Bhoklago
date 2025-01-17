import React from 'react'
import AfterLoginPage from './Pages/AfterLoginPage'
import Afterloginnavbar from './Components/afterloginnavbar'
import Footer from './Components/Footer'
import BannerPage from './Pages/BannerPage'

const Loginsuccess = () => {
    return (
        <div>
            <Afterloginnavbar />
            <BannerPage />
            <AfterLoginPage />
            <Footer />
        </div>
    )
}

export default Loginsuccess
