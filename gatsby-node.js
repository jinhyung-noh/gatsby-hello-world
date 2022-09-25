const path = require("path")
const slugify = require("slugify")

/**
 * gatsby node로 동적 페이지 생성하려면 root 위치에 있어야 함
 * gatsby가 대신 해주는 것을 직접 해주는 과정: 데이터 받아 -> 페이지 생성
 * 수정할때마다, 개츠비 서버 재실행해야함
 */
exports.createPages = async ({ graphql, actions }) => {
  // 일단 query로 데이터를 받아와야 함(이전 방법에서는 gatsby가 해줌)
  const { createPage } = actions
  const result = await graphql(`
    query getRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  // 받아온 데이터를 바탕으로 페이지 생성
  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      // 페이지 생성시, 옵션을 직접 지정해주어야 함
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag,
        },
      })
    })
  })
}
