import { Link } from "gatsby"
import React from "react"
import setupTags from "../utils/setupTags"
import slugify from "slugify"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, idx) => {
          const [tagName, tagNum] = tag
          const tagSlug = slugify(tagName, { lower: true })

          return (
            <Link to={`/tags/${tagSlug}`} key={idx}>
              {tagName} ({tagNum})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
