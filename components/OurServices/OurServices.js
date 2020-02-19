import Services from './Services'

const OurServices = () => {
  return (
    <section className='hero is-medium' id='heroAbout'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='columns' id='servicesColumnsContainer'>
            <div className='column'>
              <Services />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
