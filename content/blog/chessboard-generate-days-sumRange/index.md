---
title: Chessboard | Generate Days | Sum Range
date: "2021-07-20"
description: Little scripts that were solutions to some coding exercises
tags: [Learning]
---

These are three small scripts that I created as I tried to get a better understanding of JavaScript. I didn't look at any solutions or examples online, and just wanted to create my own solutions, however imperfect they might be.

## Chessboard

I found this exercise in _Eloquent JavaScript (3rd Edition)_ by Marijn Haverbeke.

The tasks was to create a chessboard out of '#'s and spaces. The function takes width and height arguments and outputs a grid of the corresponding width and height.

```js
const chessboard = (width, height) => {
  let i = 1
  let hash1 = "# "
  let hash2 = " #"

  while (i <= height) {
    let hashWide = i % 2 === 0 ? hash1.repeat(width) : hash2.repeat(width)
    console.log(hashWide)
    i += 1
  }
}

// Example
chessboard(10, 8)

//Output
# # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #
```

## Generate Days

I keep a daily journal in Google docs, and I like to have a formatted heading for each day because then I can see each day in the document outline. I also wanted to have each day in the following format: `{Month} {Day of Month}, {Year}, {Day of Week}`, and it was annoying to manually write date each day, I created this script that creates as many dates in this format and outputs it to console where I can then copy them to a Google doc.

The function takes argument days as a number of days we need from the current date.

```js
const generateDays = days => {
  var t = 0
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  var today = new Date()
  var day_in_milliseconds = 1000 * 60 * 60 * 24

  while (t < days) {
    var today = new Date(Date.now() + day_in_milliseconds * t)
    var weekday = weekdays[today.getDay()]
    var month = months[today.getMonth()]
    var day = today.getDate()
    var year = today.getFullYear()
    console.log(`${month} ${day}, ${year}, ${weekday}`)
    t++
  }
}

//Example (today's date is July 20, 2021)
generateDays(10)

//Output
July 20, 2021, Tuesday
July 21, 2021, Wednesday
July 22, 2021, Thursday
July 23, 2021, Friday
July 24, 2021, Saturday
July 25, 2021, Sunday
July 26, 2021, Monday
July 27, 2021, Tuesday
July 28, 2021, Wednesday
July 29, 2021, Thursday
```

The only thing left after this is to copy this output to Google doc, selecting the output and then formatting as a heading by selecting the desired heading size in the editing bar or by using `ctrl + alt + {desired heading size that corresponds to numbers 1-5 (I use 5)}`

## Sum and Range

This exercise was also in _Eloquent Javascript_. The task was to create a function that will take the starting and ending numbers and then create an array that will have have those two numbers and all numbers between them. The third argument is the humber by which we want to increment the numbers in the array.

```js
const range = (start, end, increment) => {
  let arrayNumbers = []
  let i = start
  while (i <= end) {
    arrayNumbers.push(i)
    i += increment ? increment : 1
  }
  return arrayNumbers
}

const sum = range => {
  let sum = 0
  let i = 0
  while (i < range.length) {
    sum += range[i]
    i += 1
  }
  return sum
}

//Example
console.log(range(1, 10)) //Output: [(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)]
console.log(sum(range(1, 10))) //Output: 55
```
