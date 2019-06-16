import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons'
import Day from '../components/tours/SingleTour/Day'

const TourTemplate = ({ data }) => {
  console.log(data)
  const {
    name,
    country,
    days,
    description: { description },
    images,
    price,
    start,
    journey,
  } = data.contentfulTour
  const [mainImage, ...tourImages] = images
  console.log(data.contentfulTour)

  return (
    <Layout>
      <StyledHero />
      <div>{name}</div>
    </Layout>
  )
}

// we get the variable from the gatsby node file
// it has to match the key in context for our query param
/*
context: {
        slug: node.slug,
      },
*/
export const query = graphql`
  query($slug: String!) {
    contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      slug
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`

export default TourTemplate
