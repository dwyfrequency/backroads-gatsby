import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Tour from '../tours/Tour'

const query = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const response = useStaticQuery(query)
  const { edges: tours } = response.featuredTours
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      featured tours
      {tours.map(({ node }) => {
        return <Tour key={node.contentful_id} tour={node} />
      })}
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
