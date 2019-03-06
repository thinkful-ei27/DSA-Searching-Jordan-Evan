'Use strict';
// figure out how deep nesting goes 215
//  find 2's area, in 2's area find 1 section, in the 1 section find the 5 section
const bookSearch = (array, value, start, end) => {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  let trimString = value.split('.')[0];
  if (start > end) {
    return -1;
  }

  //  215
  for(let i = 0; i < trimString.length; i++){
    binarySearch(trimString[i]);
  }
};

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
      return index[array];
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};

