import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Gallery from "../examples/gallery"

const Testing = () => {
  const data = useStaticQuery(query)
  console.log("data", data)
  return (
    <Layout>
      <main className="page">
        <Gallery></Gallery>
      </main>
    </Layout>
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
            transformOptions: { grayscale: true }
            width: 200
          )
        }
      }
    }
  }
`

export default Testing
