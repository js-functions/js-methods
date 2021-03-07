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
    -
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
