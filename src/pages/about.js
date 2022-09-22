import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Elit ea fugiat labore laborum.</h2>
            <p>
              In nisi culpa sit mollit elit laboris ut reprehenderit fugiat
              consequat irure nostrud. In proident eu nisi commodo elit. In id
              sunt dolor amet eu nostrud. Et culpa irure commodo aliquip veniam
              dolor dolore do irure est adipisicing magna et.
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
      </main>
    </Layout>
  )
}

export default About
