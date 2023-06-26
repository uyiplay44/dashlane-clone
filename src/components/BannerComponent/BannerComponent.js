import React from 'react'
import './bannercomponent.css'
import Photo12 from '../../assets/Photo12.png'

const BannerComponent = () => {
  return (
    <main className='banner-component'>
      <div className='banner-component-container'>
        <div className="banner-component-cul-1">
          <img src={Photo12} alt="banner" />
        </div>
        <div className='banner-component-cul-2'>
          <div className="banner-component-cul">
            <p className='banner_1'>Has your business been breached? <span className='banner_0'>Find out now and what to do.</span></p>
            <p className='banner_3'>The first step in protecting important business data is knowing if any has been compromised in a breach. See what data connected to your business domain has been exposed.</p>
          </div>
          <div className='banner-search'>
            <div className='banner-cul'>
              <p className='banner_4'>Start a free vulnerablity scan</p>
              <input type="text" placeholder='Enter your email' className='banner-space'/>
              <button className='banner-btn-btn'>Submit</button>
            </div>
            <p className='banner_5'>You’ll receive instructions on how to get started with Dashlane and run your free dark web scan.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BannerComponent
