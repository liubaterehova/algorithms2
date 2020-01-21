const insert = (index, value, arr) => {
  if (!Array.isArray(arr)
  || typeof index !== 'number') throw new Error('Invalid argument type');
  return [...arr.slice(0, index), value, ...arr.slice(index)];
};
console.log(insert(3, 'x', [1, 2, 3, 4]));
