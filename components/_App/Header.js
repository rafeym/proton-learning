import React from 'react'

import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Header = () => {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <>
      <nav className='navbar is-primary is-fixed-top'>
        <div className='container'>
          <div className='navbar-brand'>
            <a href='/' className='navbar-item '>
              Proton Learning
            </a>
            <a
              role='button'
              className='navbar-burger'
              data-target='navMenu'
              aria-label='menu'
              aria-expanded='false'
              onClick={() => {
                setIsActive(!isActive)
              }}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div
            className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}
            id='navMenu'
          >
            <div className='navbar-end'>
              <Link href='#'>
                <a className='navbar-item'>About Us</a>
              </Link>
              <Link href='#'>
                <a className='navbar-item'>Our Services</a>
              </Link>
              <Link href='#'>
                <a className='navbar-item'>Why Proton</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
