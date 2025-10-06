function range (start, end) {
    let arr = [];
    for (let n = start; n <= end; n++) {
        arr.push(n);
    }
    return arr; 
}
function rangeOdd (start, end) {
    let arr = [];
    for (let n = start; n <= end; n++) {
        if (n % 2 !== 0) {
            arr.push(n);
        }
    }
    return arr;
}
console.log("range(15, 30)", range(15, 30));
console.log("rangeOdd(15, 30)", rangeOdd(15, 30));


