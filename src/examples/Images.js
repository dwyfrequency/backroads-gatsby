import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import img from '../images/connectBcg.jpeg'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vh;
  margin: 0 auto 10rem auto;
  article {
    border: 3px solid red;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
`

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
      id
      size
      relativePath
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  const { fixed, fluid } = data
  console.log(fixed)
  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} alt="basic img" className="basic" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Img fixed={fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h4>fluid image/svg</h4>
        <Img fluid={fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

export default Images
