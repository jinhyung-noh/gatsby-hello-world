import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        person {
          age
          name
        }
        complexData {
          age
          name
        }
        simpleData
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData)
  const {
    site: {
      siteMetadata: { title },
    },
  } = data
  return (
    <div>
      <h2>site title is: {title}</h2>
    </div>
  )
}

export default FetchData
