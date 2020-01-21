const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid argument type');
  }

  const newArr = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr.push(...flatten(item));
    } else {
      newArr.push(item);
    }
  });

  return newArr;
};

console.log (flatten([1, 2, [3, 4], 5, [6, [7, 8]]]));
