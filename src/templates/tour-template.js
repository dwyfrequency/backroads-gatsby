import React from 'react'
import { graphql } from 'gatsby'

const TourTemplate = ({ data }) => {
  console.log(data)
  return <div>tour template</div>
}

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
