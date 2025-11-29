function unique(array) {
  const seen = new Set();
  const result = [];

  for (const item of array) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}


const result1 = unique([2, 1, 1, 3, 2]);
console.log(result1); 

const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2); 