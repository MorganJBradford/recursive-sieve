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

const allPrimes = (num, counter = 3, userList = listCreator([])(2)(num)(0)) => {
  if(counter < num && userList.includes(num)) {
    if ((num % counter || num % 2) === 0 && num !== 2) {
      userList.splice(num - 2, 1);
      return allPrimes(num - 1, counter + 2, userList);
    }
    return allPrimes(num, counter + 2, userList);
  }
  if (num > 2) {
    const newNum = num - 1;
    return allPrimes(newNum, counter = 2, userList);
  }
  return userList;
}