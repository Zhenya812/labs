function contract(fn, ...types) {
  if (typeof fn !== 'function') {
    throw new TypeError('First argument must be a function');
  }

  return function(...args) {
    const expectedArgTypes = types.slice(0, -1); 
    const expectedReturnType = types[types.length - 1]; 

    if (args.length !== expectedArgTypes.length) {
      throw new TypeError(`Expected ${expectedArgTypes.length} arguments, got ${args.length}`);
    }

    for (let i = 0; i < args.length; i++) {
      if (!(args[i] instanceof expectedArgTypes[i]) &&
          typeof args[i] !== expectedArgTypes[i].name.toLowerCase()) {
        throw new TypeError(`Argument ${i + 1} should be of type ${expectedArgTypes[i].name}`);
      }
    }

    const result = fn(...args);

    if (!(result instanceof expectedReturnType) &&
        typeof result !== expectedReturnType.name.toLowerCase()) {
      throw new TypeError(`Return value should be of type ${expectedReturnType.name}`);
    }

    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3)); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings('Hello ', 'world!'));