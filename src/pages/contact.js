import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              I'm baby pork belly cornhole chicharrones brunch direct trade
              godard next level tousled, bushwick chia tilde single-origin
              coffee paleo.
            </p>
            <p>
              Cliche knausgaard you probably haven't heard of them echo park
              tumeric. Truffaut jean shorts lomo vibecession yuccie 8-bit
              shaman, organic pug art party polaroid unicorn shabby chic
              listicle vape.
            </p>
            <p>
              Next level mixtape skateboard messenger bag heirloom microdosing
              pinterest. Bicycle rights la croix edison bulb cold-pressed
              helvetica, master cleanse ennui taiyaki.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email"></input>
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
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

export default Contact
