import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
  return (
    <section className={styles.about}>
      hellow from about
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer} />
          <img src={img} alt="about company" />
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>{' '}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aliquam nobis cumque commodi?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            non
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
