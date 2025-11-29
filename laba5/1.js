function seq(fn) {
  const fns = [];
  if (typeof fn === 'function') fns.push(fn);
  function chain(arg) {
    if (typeof arg === 'function') {
      fns.push(arg);
      return chain;
    }
    if (typeof arg === 'number') {
      return fns.reduceRight((acc, f) => f(acc), arg);
    }
  }
  return chain;
}
console.log(
  seq(x => x + 7)
    (x => x * 2)(5)
);
console.log(
  seq(x => x * 2)
    (x => x + 7)(5)
);
console.log(
  seq(x => x + 1)
    (x => x * 2)
    (x => x / 3)
    (x => x - 4)(7)
);