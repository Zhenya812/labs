function incObj(num) {
    num.n+=21;
}
const obj = { n: 31 };
incObj(obj);
console.dir(obj);