import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Stylesheets & CDN Links */}
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=B612&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Poppins&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Playfair+Display&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='/styles/custom-style.css'
        />
        <link rel='stylesheet' type='text/css' href='/styles/nprogress.css' />
        <script
          defer
          src='https://use.fontawesome.com/releases/v5.3.1/js/all.js'
        />

        <title>Proton Learning</title>
      </Head>
      <Header />
      {children}
    </>
  )
}

export default Layout
