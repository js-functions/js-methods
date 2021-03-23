/**
 * Flattens `array` a single level deep.
 * @param {Array} array
 * @returns {Array} Returns new flattened single level deep array
 */
function flatten(array) {
  if (!Array.isArray(array)){ 
    throw new TypeError('parameter should be of Array type') 
  }
 
  let flattenedArray = []
  // loop through array
  array.map((item) => {
    const length = item.length
    // check if item is array using array length property
    // if undefined, means it is not an array then push into flattenedArray
    if (length === undefined) {
      flattenedArray.push(item)
    } else {
      // if array length is not undefined (actual length) means it is a array
      // then iterate & push into flattenedArray
      item.map((item) => {
        flattenedArray.push(item)
      })
    }
  })
  return flattenedArray
}

module.exports = flatten
