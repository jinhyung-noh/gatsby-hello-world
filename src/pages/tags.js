import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, idx) => {
            const [tagName, tagNum] = tag
            const tagSlug = slugify(tagName)
            return (
              <Link to={`/tags/${tagSlug}`} key={idx} className="tag">
                <h5>{tagName}</h5>
                <p>{tagNum} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
