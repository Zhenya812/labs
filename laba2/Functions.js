arr=[];
function average(a, b) {
    return (a + b) / 2;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}
function calculate() {
    for (let n = 1; n <= 15; n+= 2) {

    arr.push (average(square(n), cube(n)) );
    }
}
calculate();
console.log(arr);