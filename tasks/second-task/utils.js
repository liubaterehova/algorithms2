const drop = (index, arr) => {
  if (!Array.isArray(arr) || (typeof index !== 'number')) throw new Error('Invalid argument type');
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};


console.log(drop(2, [1, 2, 3, 4, 5]));
