import React from 'react'
import { graphql } from 'gatsby'

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
  // const [mainImage, ...tourImages] = images
  console.log(data.contentfulTour)

  return <div>{name}</div>
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
