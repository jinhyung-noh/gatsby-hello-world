import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="About"></SEO>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Elit ea fugiat labore laborum.</h2>
            <p>
              In nisi culpa sit mollit elit laboris ut reprehenderit fugiat
              consequat irure nostrud.
            </p>
            <p>
              Cupidatat laboris velit irure et. Esse nostrud dolore adipisicing
              deserunt quis aute ex eu excepteur. Amet tempor sunt culpa elit
              nostrud ad. In minim reprehenderit ex laborum mollit minim.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          ></StaticImage>
        </section>
        <section className="featured-recipes">
          <h5>Look at his Awesome source!</h5>
          <RecipesList recipes={recipes}></RecipesList>
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        cookTime
        prepTime
        content {
          id
        }
        image {
          gatsbyImageData
        }
        title
      }
    }
  }
`

export default About
