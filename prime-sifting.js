// const num = listCreator(2)(100)([])(0);
// const allPrimes = (num) => {
//   const userList = listCreator([])(2)(num)(0);
//   console.log(userList + "This userList");
//   if(num > 2 && num % userList[num - 2] === 0) {
//     console.log("papaya");
//     userList.splice(userList[num - 2], 1);
//     return allPrimes(num-1);
//   }
//   return userList;
// }

// startNum, endNum, 

// 2,3,4,5,6,7,8,9,10
// Check these numbers 
// 2, 3, 5, 7

// const Program = (num) => {
//   const userList = listCreator([])(2)(num)(0);
//     function allPrimes(counter = num - 1) {
//       if(counter > 1) {
//         if (num % counter === 0 && userList.includes(num)) {
//           // console.log(num);
//           const discardedNumList = userList.splice(counter - 2, 1);
//           console.log(discardedNumList);
//         }
//         allPrimes(counter - 1);
//       }
//       console.log(userList);
//       Program(num - 1);
//     }
//     allPrimes;
//     return userList;
// }

const listCreator = (numArray) => {
  return function(startNum) {
    return function(endNum) {
      return function(counter) {
        if(isNaN(startNum || endNum)) {
          return;
        }
        if(startNum > endNum) {
          return numArray;
        } else {
          numArray[counter] = startNum;
          return listCreator(numArray)(startNum + 1)(endNum)(counter + 1);
        }
      }
    }
  }
}

const allPrimes = (num, counter = num - 1, userList = listCreator([])(2)(num)(0)) => {
  if(counter > 1 && userList.includes(num)) {
    if (num % counter === 0 && num !== 2) {
      userList.splice(num - 2, 1);
      return allPrimes(num - 1, counter - 1, userList);
    }
    return allPrimes(num, counter - 1, userList);
  }
  if (num > 2) {
    const newNum = num - 1;
    return allPrimes(newNum, counter = newNum - 1, userList);
  }
  return userList;
}
// [2, 3, 4, n, i]
// [2, 3, 4, n, i]

// const numPrimes = (num) => {
//   if (num > 1) {
//     const newNum = num - 1;
//     counterPrimes(newNum, counter = newNum - 1, userList);
//   }
// }
// const counterPrimes = (num, counter = num - 1, userList = listCreator([])(2)(num)(0)) => {
//   if(counter > 1) {
//     if (num % counter === 0 && userList.includes(num) && num !== 2) {
//       userList.splice(num - 2, 1);
//     }
//     counterPrimes(num, counter - 1, userList);
//   }
//   numPrimes;
//   return userList;
// }