import React from 'react'
import banner from '../assets/Images/banner.png'
import '../styles/Bhoklago.css'

const BannerPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div>
                    <p className='fw-bold text-uppercase fs-3 mt-3'>भोकलाग्यो ! fresh</p>
                    <img src={banner} alt="" className='w-100 shadow rounded-1' style={{height:400}}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BannerPage
