/**
 * averagePair source: https://levelup.gitconnected.com/using-the-multiple-pointers-strategy-to-solve-algorithms-b90a98f854db
 *
 * Improved as the provided array can deliver more values that fullfill the solution.
 *
 */

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let results = [];

  console.log(
    `Initial values, 
    start: ${start}, arr[${start}]: ${arr[start]}
    end: ${end}, arr[${end}]: ${arr[end]}
    results: ${results}`
  );

  while (start < end) {
    let average = (arr[start] + arr[end]) / 2;
    if (average === num) {
      results.push([arr[start], arr[end]]);
      start++;
    } else if (average > num) {
      end--;
    } else {
      start++;
    }
    console.log(
      `Changed values, 
      start: ${start}, arr[${start}]: ${arr[start]}
      end: ${end}, arr[${end}]: ${arr[end]}
      results: ${results}`
    );
  }
  if (results.length === 0) {
    return `None of these number pairs have an average of ${num}`;
  } else {
    return `The results: ${results}`;
  }
}

console.log(averagePair([-2, 0, 1, 2, 4, 5, 6, 7], 5.5));
