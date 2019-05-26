import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)
  const { title, author, description } = data.site.siteMetadata
  return (
    <div>
      <h1>{title}</h1>
      <h1>{author}</h1>
    </div>
  )
}

export default Header
