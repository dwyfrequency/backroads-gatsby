import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
// import img from '../../images/defaultBcg.jpeg'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const getAboutQuery = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        id
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutQuery)
  // const {} = aboutImage.childImageSharp.fluid
  return (
    <section className={styles.about}>
      hello from about
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer} />
          {/* <img src={img} alt="about company" /> */}
          <Img
            fluid={aboutImage.childImageSharp.fluid}
            alt="awesome landscape"
          />
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
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
