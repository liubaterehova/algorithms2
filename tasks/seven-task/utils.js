const path = (arrOfKeys, obj) => {
  if (!Array.isArray(arrOfKeys) || typeof obj !== 'object') throw new Error('Invalid argument type');
  let newObj = obj;
  for (let i = 0; i < arrOfKeys.length; i += 1) {
    newObj = newObj[arrOfKeys[i]];
  }
  return newObj;
};
console.log(path(['a', 'b'], { a: { b: { c: 2 } } }));
