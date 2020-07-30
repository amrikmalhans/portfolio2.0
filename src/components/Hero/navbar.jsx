/* eslint-disable prettier/prettier */
import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
      <nav className={styles.Navbar}>
        <img src="" alt="logo" />
        <ul className={styles.NavItems}>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Hire me</a></li>
        </ul>
      </nav>
    )
}

export default Navbar