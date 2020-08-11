/* eslint-disable prettier/prettier */
import React from 'react'
import styles from './navbar.module.css'
import Logo from '../../images/logo.png'

const Navbar = () => {

    return (
      <nav className={styles.Navbar}>
        <img src={Logo} alt="logo" />
        <ul className={styles.NavItems}>
          <li><a href="#projects">Work</a></li>
          <li><a href="mailto:amrikmalhans@gmail.com">Hire me</a></li>
        </ul>
      </nav>
    )
}

export default Navbar
