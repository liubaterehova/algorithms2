const adjust = (index, func, arr) => {
  if (!Array.isArray(arr)
    || typeof index !== 'number'
    || typeof func !== 'function'
  ) {
    throw new Error('Invalid argument type');
  }
  const resOfFunc = func(arr[index]);
  return [...arr.slice(0, index), resOfFunc, ...arr.slice(index + 1)];
};

console.log(adjust(0, (e) => e.toLowerCase(), ['A', 'S', 'D', 'F']));
