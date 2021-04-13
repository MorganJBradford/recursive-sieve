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