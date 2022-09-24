/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipe site",
    author: "@realbro",
    person: {
      name: "jinh",
      age: 27,
    },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name: "jinh",
        age: 27,
      },
      {
        name: "john",
        age: 99,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/src`,
      },
    },
  ],
}
