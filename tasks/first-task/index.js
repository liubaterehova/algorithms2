const adjust = (index, func, arr) => {
if (!Array.from(arr)) return null;
 const resOfFunc = func(copyOfArr[index]);
 return [...arr.slice(0,index), resOfFunc, arr.slice(index + 1)]
}

