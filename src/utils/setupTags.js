const setupTags = recipes => {
  const allTags = {}

  // get tags and its number
  recipes.forEach(recipe => {
    const tags = recipe.content.tags
    tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] += 1
      }
      allTags[tag] = 1
    })
  })
  // sort in ASC order
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })
  return newTags
}

export default setupTags
