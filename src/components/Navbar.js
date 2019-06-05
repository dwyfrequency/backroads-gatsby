import React, { useState } from 'react'
import styles from '../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/logo.svg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(prevIsOpen => !prevIsOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            {/* is the icon on the right of the screen */}
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen ? `${styles.navLinks} ${styles.showNav}` : styles.navLinks
          }
        >
          {links.map(({ path, text }) => (
            <li key={text}>
              <AniLink fade to={path}>
                {text}
              </AniLink>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map(({ url, icon }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
