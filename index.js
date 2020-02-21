//O(n^2) solution
function largestSubarraySum(array) {
  let largest = 0;
  let current = 0;

  let subArray = []


  function reduce(subArray, start, end) {
    let subTotal = 0
    for(let i = start; i <= end; i++) {
      subTotal += subArray[i]
    }
    return subTotal
  }

  let start = 0;
  let end = 1;

  while(start < array.length - 1) {
    if(end > array.length - 1) {
      ++start
      end = start + 1
    }
    end++

    current = reduce(array, start, end)
    if(current > largest) {
      largest = current
    }
  }

  return largest

}

largestSubarraySum(array)

//attempt at a refactored O(n) solution

// function largestSubarraySum(array) {
//
//   let start = 0;
//   let end = 1;
//   let largest = 0;
//
//   let current = array[start] + array[end];
//
//
//
//   while(start < array.length - 1) {
//     // if(current < 0) current = 0;
//     if(end > array.length - 1) {
//       ++start
//       end = start + 1
//     }
//
//     end++
//
//     current = current + array[end];
//     if(current < 0) {
//       current = 1
//     }
//
//     if(current > largest) {
//       largest = current
//     }
//   }
//
//   return largest
//
// }
//
// largestSubarraySum(array);
