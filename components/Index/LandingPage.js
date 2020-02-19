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
                  Proton Learning Centre, is an after school educational
                  institute helping students within GTA.
                </h1>
                <h3 id='subHeading'>
                  For the past ten years we've served the student community with
                  high quality, result oriented tutoring programs.
                </h3>
                <div id='hero-button-container'>
                  <button className='button' id='hero-button'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className='column'>
              <img
                src='https://www.pngkit.com/png/full/115-1159307_machine-learning-machine-learning-images-png.png'
                alt='learning'
                id='hero-image'
                className='levitate'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
