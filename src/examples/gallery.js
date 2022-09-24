import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Gallery = () => {
  const data = useStaticQuery(query)
  const { nodes } = data.allFile

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={name}
              className="gallery-img"
            ></GatsbyImage>
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

export const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          id
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`
export default Gallery
