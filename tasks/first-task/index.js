const adjust = (index, func, arr) => {
if (!Array.isArray(arr) || index instanceof Number || typeof window[func] == 'function') return null;

 const resOfFunc = func(copyOfArr[index]);
 return [...arr.slice(0,index), resOfFunc, arr.slice(index + 1)]
}

