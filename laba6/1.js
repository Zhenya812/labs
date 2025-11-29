const pipe = (...fns) => {

  for (let n = 0; n < fns.length; n++) {
    if (typeof fns[n] !== 'function') {
      throw new Error(` argument at position ${n} is not a function`);
    }
  }

  const listeners = [];

  const composed = (p) => {
    let result = p;
    try {
      for (let n = 0; n < fns.length; n++) {
        result = fns[n](result);
      }
      return result;
    } catch (error) {
      listeners.forEach(handler => handler(error));
      return undefined;
    }
  };

  
  composed.on = (event, handler) => {
    if (event === 'error' && typeof handler === 'function') {
      listeners.push(handler);
    }
  };

  return composed;
};


const inc = p => ++p;
const twice = p => p * 2;
const cube = p => p ** 3;


const f1 = pipe(inc, twice, cube);
console.log(f1(5));


const f2 = pipe(inc, inc);
console.log(f2(7));


try {
  const f3 = pipe(inc, 7, cube);
} catch (error) {
  console.log(error.message); 
}

const badFunction = p => {
  if (p > 10) throw new Error('p is too large');
  return p * 2;
};

const f4 = pipe(inc, badFunction, cube);
f4.on('error', e => console.log('error:', e.message));

console.log(f4(5)); 
console.log(f4(10)); 