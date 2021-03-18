/**
 * Creates a new duplicate-free array
 * @param {Array} array 
 * @returns {Array} Returns the new duplicate-free array
 */
function uniq(array=[]) {
  let uniqeArray = []
  // We will loop through the array only once so Time Complexity will be O(n).
  array.map(item => {  
    if(!uniqeArray.includes(item)){          
      uniqeArray.push(item)
    }
  })
  return uniqeArray
}

module.exports = uniq