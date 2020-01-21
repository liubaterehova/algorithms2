const splitEvery = (num, arr) => {
  if (typeof num !== 'number' || !Array.isArray(arr)) {
    throw new Error('Invalid argument type');
  }
  const numberOfArrs = Math.ceil(arr.length / num);
  let index = 0;
  const newArr = [];
  for (let i = 0; i < numberOfArrs; i += 1) {
    newArr.push(arr.slice(index, index += num));
  }
  return newArr;
};

console.log(splitEvery(4, [1, 2, 3, 4, 5, 6, 7]));
