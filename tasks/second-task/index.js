const drop = function ( index, arr ) => {
  if (!Array.from(arr) ||  (!Array.from(arr))) return null;
  return [...arr.slice(0, index),  ...arr.slice(index +1)];
}