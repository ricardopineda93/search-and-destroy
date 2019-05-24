'use strict';

// Complete this algo
const binarySearch = (array = [], target = undefined) => {
  const middleNumberIndex = Math.floor(array.length / 2);
  const middleNumber = array[middleNumberIndex];

  if (target === middleNumber) {
    return true;
  } else if (target < middleNumber) {
    const leftArray = array.slice(0, middleNumberIndex);
    return binarySearch(leftArray, target);
  } else if (target > middleNumber) {
    const rightArray = array.slice(middleNumberIndex + 1);
    return binarySearch(rightArray, target);
  }

  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
