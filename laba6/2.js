const pipe = (...fns) => {
    if (!fns.every(fn => typeof fn === 'function')) {
        throw new TypeError('all arguments must be functions');
    }
    return p => fns.reduce((acc, fn) => fn(acc), p);
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
} catch (e) {
    console.log(e.message);
}
