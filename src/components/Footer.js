import React from "react"

const Footer = () => {
  return (
    <>
      <footer className="page-footer">
        <p>
          &copy; {new Date().getFullYear()}
          <span> SimplyRecipes</span>. Built with{" "}
          <a href="https://www.gatsby.com">Gatsby</a>
        </p>
      </footer>
      <p>
        <a href="https://gatsby-v3-tutorial-recipes.netlify.app/">
          JohnSmilga's demo
        </a>
      </p>
    </>
  )
}

export default Footer
