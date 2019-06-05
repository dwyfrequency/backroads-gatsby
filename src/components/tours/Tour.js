import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaMap } from 'react-icons/fa'
const Tour = ({ tour }) => {
  const { name, price, slug, country, contentful_id, days, images } = tour
  // we have four images in contentful, but here we'll just use the first one
  let mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className="styles.footer">
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
