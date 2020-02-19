const About = () => {
  return (
    <section className='hero is-large' id='heroAbout'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='columns' id='aboutColumnsContainer'>
            <div className='column is-7'>
              <div className='container has-text-left'>
                <h1 id='aboutTitle'>About Us</h1>
                <p className='aboutParagraph'>
                  Proton Learning Centre is the brainchild of a former school
                  principal and mathematics teacher who realized the need of the
                  student community to have quality tutoring programs to excel
                  in their studies.
                </p>
                <br />
                <p className='aboutParagraph'>
                  Two decades of professional experience in teaching and school
                  administration gave him the necessary confidence to start such
                  an institution. The tutoring centre was initially started in
                  2001 at Victoria Park and St.Clair area with only two class
                  rooms and one tutor.
                </p>
                <br />
                <p className='aboutParagraph'>
                  Within two years, encouraged by favourable response from
                  students and parents, the centre was shifted to the current
                  Danforth and Victoria Park location. Subsequently branches of
                  Proton Learning Centre were opened at Markham and Sheppard and
                  Eglinton and Kennedy areas to meet the increased demand of
                  students coming from that geographical area.
                </p>
                <p className='aboutParagraph'></p>
              </div>
            </div>
            <div className='column'>
              <img src='#' alt='location' id='aboutImgContainer' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
