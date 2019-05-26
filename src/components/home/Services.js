import React from 'react'
import styles from '../../css/services.module.css'
import Title from '../Title'
import services from '../../constants/services'

const Services = () => {
  return (
    <self className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.services}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </self>
  )
}

export default Services
