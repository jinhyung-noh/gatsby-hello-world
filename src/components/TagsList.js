import { Link } from "gatsby"
import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, idx) => {
          const [tagName, tagNum] = tag
          console.log("tag", tag)
          return (
            <Link to={`/${tagName}`} key={idx}>
              {tagName} {tagNum}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
