/**
 * Source: https://twitter.com/js_tut/status/1215558710480855041
 * 
 * JavaScript Teacher @js_tut
 + Who can write a script to reduce wwiii to wii on one line?
 + ['w', 'w', 'i', 'i', 'i'].reduce(?); // "wii"
 + (is it possible?)
 */

function unique(arr) {
  return arr.reduce((accum, elem) => {
    if (!accum.endsWith(elem)) {
      accum = accum + elem;
    }

    return accum;
  });
}

function repeat(arr) {
  const myArr = arr.reduce((newArr, elem, index) => {
    for (let i = 0; i <= index; i++) {
      // console.log(`Index is ${index}, Elem: ${elem} repeated ${i}`);
      newArr = newArr + elem;
    }
    // console.log("This is newArr change:", newArr);
    return newArr;
  }, "");
  // console.log("This is myArr", myArr);
  return myArr;
}

// const arr = ["w", "w", "i", "i", "i"];
// const uniqueArray = unique(arr).split("");
// console.log(`For array: ${arr}, apply reducer function: ${uniqueArray}`);
// console.log("This is uniqueArray", uniqueArray);

// console.log(`For array: ${arr}, apply repeat function: ${repeat(uniqueArray)}`);

const secondArr = ["w", "w", "w", "w", "i", "i", "i", "a", "a", "w"];
const secondUniqueArray = unique(secondArr).split("");
console.log(
  `For array: ${secondArr}, apply reducer function: ${secondUniqueArray}`
);
console.log(
  `For array: ${secondArr}, apply repeat function: ${repeat(secondUniqueArray)}`
);
