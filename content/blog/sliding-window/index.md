---
title: Sliding Window
date: "2021-07-23"
description: Find highest value in a sliding window
tags: [Learning, JavaScript]
---

I've seen some convoluted ways to solve this exercise, but I find my way simpler and easier to understand.

Given an array of arbitrary number of elements, and a window size in which an array will be split up, output each window's highest value.

```js
const findMaxSlidingWindow = (arr, w) => {
  let s = 0
  let result = []
  let tempArray = []
  let maxOfTempArray = null

  while (w <= arr.length) {
    //Create a temporary array that consists of n items based on the window size
    tempArray = arr.slice(s, w)
    //Find maximum value of the tempArray
    maxOfTempArray = Math.max(...tempArray) // Here I was passing just tempArray, but it turns out I need to pass it with a spread operator.
    //Push that value to the final result array
    result.push(maxOfTempArray)
    s += 1
    w += 1
  }
  return result
}

console.log(
  findMaxSlidingWindow([1, 2, 10, 7, 5, 11, 25, -8, 36, 50, 13, 25], 3)
) //Output: [ 10, 10, 10, 11, 25, 25, 36, 50, 50, 50
]
```
