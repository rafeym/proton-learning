import React from 'react'

const LandingPage = () => {
  return (
    <div className='hero is-fullheight' id='landingPageHero'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='columns' id='columns-container'>
            <div className='column is-7'>
              <div className='container has-text-left'>
                <h1 id='mainTitle'>
                  Proton Learning Centre, an after school educational institute
                  helping students in the GTA.
                </h1>
                <h3 id='subHeading'>
                  For the past ten years we serve the student community by
                  providing high quality, result oriented tutoring programs
                </h3>
                <button className='button' id='hero-button'>
                  Learn More
                </button>
              </div>
            </div>
            <div className='column'>
              <img
                src='https://www.pngkit.com/png/full/115-1159307_machine-learning-machine-learning-images-png.png'
                alt='learning'
                id='hero-image'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
