# js-methods

## Pending tasks
- NPM Publish 
- Problem statement 
  - Array
    - 
      ### 1. Pull/Remove 

      Lodash document reference [link.](https://lodash.com/docs/4.17.15#pull)

      Remove elements for array and return new array

      #### Arguments
      (Array): Array to modify.
      (...*): Elements to get removed.

      #### Returns
      (Array): New updated array

      #### Example
      ```javascript
      var fruits = ['apple', 'banana', 'mango', 'oranges']
      var allSeasonFruits = pull(fruits, 'mango', 'oranges')
      console.log(allSeasonFruits) // ['apple', 'banana']
      ```
    -
     ### 2. Uniq

      Lodash document reference [link.](https://lodash.com/docs/4.17.15#uniq)

      Remove duplicate elements from array

      #### Arguments
      (Array): Array to inspect.

      #### Returns
      (Array): New duplicate free array.

      #### Example
      ```javascript
      var fruits = ['apple', 'apple', 'mango', 'oranges']
      var allSeasonFruits = uniq(fruits)
      console.log(allSeasonFruits) // ['apple', 'mango', 'oranges]
      ```
    -
      ### 3. Flatten

      Lodash document reference [link.](https://lodash.com/docs/4.17.15#flatten)

      Flattens array a single level deep.

      #### Arguments
      (Array): The array to flatten.

      #### Returns
      (Array): Returns the new flattened array.

      #### Example
      ```javascript
      var array = [1, [2, [3, [4]], 5]]
      var flattenedArray = flatten(array)
      console.log(flattenedArray) // [1, 2, [3, [4]], 5]
      ```
    -
      ### 3.1 Flatten Deep

      Lodash document reference [link.](https://lodash.com/docs/4.17.15#flattenDeep)

      Recursively flattens array.

      #### Arguments
      (Array): The array to flatten.

      #### Returns
      (Array): Returns the new flattened array.

      #### Example
      ```javascript
      var array = [1, [2, [3, [4]], 5]]
      var flattenedArray = flattenDeep(array)
      console.log(flattenedArray) // [1, 2, 3, 4, 5]
      ```
    -
      ### 4. Intersection

      Lodash document reference [link.](https://lodash.com/docs/4.17.15#intersection)

      Creates an array of unique values that are included in all given arrays using [SameValueZero](https://262.ecma-international.org/7.0/#sec-samevaluezero) for equality comparisons. The order and references of result values are determined by the first array.

      #### Arguments
      (...Array): The arrays to inspect.

      #### Returns
      (Array): Returns the new array of intersecting values.

      #### Example
      ```javascript
      var intersectingArray = intersection([2, 1], [2, 3])
      console.log(intersectingArray) // [2]
      ```
    -
     ### 5. Union

      Lodash document reference [link.](https://lodash.com/docs/#union)

      Creates an array of unique values, in order, from all given arrays using [SameValueZero](https://262.ecma-international.org/7.0/#sec-samevaluezero) for equality comparisons.

      #### Arguments
      (...Array): The arrays to inspect.

      #### Returns
      (Array): Returns the new array of combined values.

      #### Example
      ```javascript
      var unionArray = _.union([2], [1, 2]);
      console.log(unionArray) // [2, 1]
      ```
    -
  - Object
    -
       ### 1. Get

      Lodash document reference [link.](https://lodash.com/docs/4.17.15#get)

      Get object value from string path

      #### Arguments
      (Object): The object to query.
      (Path): The string path to query.
      [DefaultValue]: The default value if path is ```undefined```
      #### Returns
      (*): Return the resolved value

      #### Example
      ```javascript
      var object = { 'a': [{ 'b': { 'c': 3 } }] };
      console.log(get(object, 'a[0].b.c')) // 3
      ```
    -
    ### 2. Set

    Lodash document reference [link.](https://lodash.com/docs/4.17.15#set)

    Set the value at the path of object. If a portion of path doesn't exist, it's created.

    #### Arguments
    (Object): The object to query. 
    (Path): The string to set value. 
    value: The value to set 
    #### Returns
    (*): Return object

    #### Example
    ```javascript
    var object = { 'a': [{ 'b': { 'c': 3 } }] };
    console.log(set(object, 'a[0].b.d'), 5) // { 'a': [{ 'b': { 'c': 3, d: 5 } }] }
      ```
    -
    -
    -
  - Function
    -
       ### 1. Once

      Lodash document reference [link, ](https://lodash.com/docs/4.17.15#once) extra [information.](https://dustinpfister.github.io/2017/12/04/lodash_once/)

      Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation.

      #### Arguments
      (Function): The function to restrict..
      #### Returns
      (Function): Returns the new restricted function.

      #### Example
      ```javascript
      var fn = function () {
        console.log('Hello World')
      }
      var init = once(fn)
      console.log(init()) // Hello World
      console.log(init()) // nothing gets print
      ```
    -
    -
    -
    -
