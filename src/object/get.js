/**
 * Gets the value at `path` of `object`, and if path not found return the default value
 * 1. Replace [] with .
 * 2. Split .
 * 3. Remove double .'s or blank string
 * 4. Map the path
 * @param {Object} object Source object
 * @param {String} string Path to pick
 * @param {*} [defaultValue] The value returned for 'undefined' path
 * @returns {*} Returns resolved value
 */
function get(object, path, defaultValue) {
  if (typeof object !== 'object') throw new TypeError('First parameter should be object type')
  if (typeof path !== 'string') throw new TypeError('Second parameter should be string type')
  const result = path.replace(/\[|\]\.?/g, '.')  // https://tinyurl.com/yjgybc9g
    .split('.')
    .filter(p => p)
    .reduce((t, v) => t && t[v], object)
  return result === undefined ? defaultValue : result
}

module.exports = get