let store = (arg) => () => arg;

const read = store(5);
const value = read();
console.log(value);