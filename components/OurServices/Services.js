import Level from './Level'

const Services = () => {
  return (
    <>
      <h3 id='serviceTitle'>We've got you covered</h3>
      {/* <nav class='level is-mobile'>
        <Level />
      </nav> */}
      <p className='serviceParagraph'>
        We make sure that our students get personalized attention in our small
        group of classes.
      </p>
      <p className='serviceParagraph'>
        To instill confidence and good study skills in students and develop
        leadership like qualities.
      </p>
      <p className='serviceParagraph'>
        We provide our students with appropriate materials to practice and
        enhance their academic skills.
      </p>
      <p className='serviceParagraph'></p>
      <button className='button' id='service-button'>
        Contact Us
      </button>
    </>
  )
}

export default Services
