const Banner = ({ text }) => {
  return (
    <div className='hero is-medium' id='heroBanner'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h2 id='bannerText'>{text}</h2>
        </div>
      </div>
    </div>
  )
}

export default Banner
