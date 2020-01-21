const omit = (arrOfKeys, obj) => {
  if (!Array.isArray(arrOfKeys) || typeof obj !== 'object') throw new Error('Invalid argument type');
  const newObj = { ...obj };
  arrOfKeys.forEach((key) => {
    if (Object.keys(obj).includes(key)) {
      delete newObj[key];
    }
  });
  return newObj;
};


console.log(omit(['a'], { a: 1, b: 2, c: 3 }));
