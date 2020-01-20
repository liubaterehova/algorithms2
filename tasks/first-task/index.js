const adjust = (index, func, arr) => {
  if (!Array.isArray(arr)
    || typeof index !== 'number'
    || typeof func !== 'function'
  ) {
    return null;
  }

  const resOfFunc = func(arr[index]);
  return [...arr.slice(0, index), resOfFunc, ...arr.slice(index + 1)];
};

console.log(adjust(2, (e) => e.toLowerCase(), ['A', 'S', 'D', 'F']));
