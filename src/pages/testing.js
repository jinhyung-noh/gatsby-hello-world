import { graphql } from "gatsby"
import React from "react"

const Testing = ({ data }) => {
  const { author } = data.site.info
  console.log(data)
  return (
    <div>
      {" "}
      <h2>author: {author}</h2>{" "}
    </div>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
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
export default Testing
