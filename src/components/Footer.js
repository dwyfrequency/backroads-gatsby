import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map(({ path, text }) => (
          <AniLink fade to={path} key={text}>
            {text}
          </AniLink>
        ))}
      </div>
      <div className={styles.icons}>
        {socialIcons.map(({ icon, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
