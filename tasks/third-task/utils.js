const dropRepeats = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Invalid argument type');
  const newArr = arr.filter((item, index) => {
    if (arr.includes(item, index + 1)) {
      return false;
    }
    return true;
  });
  return newArr;
};
console.log(dropRepeats([1, 1, 1, 2, 2, 3, 4]));
