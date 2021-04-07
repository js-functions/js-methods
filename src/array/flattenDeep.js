/**
 * Flattens `array` recursively.
 * @param {Array} array
 * @returns {Array} Returns new flattened array
 */
function flattenDeep(array) {  
  let flattenedArray = []
  if (!Array.isArray(array)){ 
    throw new TypeError('parameter should be of Array type') 
  }
  
  function recursiveFunction(array){
    // loop through array
    let i = 0
    while(i < array.length){
      let item = array[i]
      // check if array element is array or not
      // if array then recursively call itself 
      if (Array.isArray(item)){
        recursiveFunction(item)
      } 
      else if (!Array.isArray(item)) {         
        flattenedArray.push(item)
      } 
      i++
    }    
  }
  recursiveFunction(array)
  return flattenedArray
}

module.exports = flattenDeep
