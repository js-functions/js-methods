/**
 * 1. Replace [] with .
 * 2. Split .
 * 3. Remove double .'s or blank string
 * 4. Map the path
 * @param {*} object 
 * @param {*} path 
 * @returns {*} return resolved value
 */
function get(object, path) {
  if (typeof object !== 'object') throw new TypeError('First parameter should be object type')
  if (typeof path !== 'string') throw new TypeError('Second parameter should be string type')
  return path.replace(/\[|\]\.?/g, '.')  // https://tinyurl.com/yjgybc9g
    .split('.')
    .filter(p => p)
    .reduce((t, v) => t && t[v], object)
}

module.exports = get