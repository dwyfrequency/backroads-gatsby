import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
const RegularHeader = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { title, author, description } = data.site.siteMetadata
        return (
          <div>
            <h1>{title}</h1>
            <h1>{author}</h1>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
