//1
function sum_z(...args) {
    let p = 0;

    for(let n = 0; n < args.length; n++) {
        p += args[n];
    }
    return p;
}
console.log(sum_z(2, 5, 10));

//2 
function sum_h(...args) {
    let p = 0;

    for(let arg of args) {
        p += arg;
    }
    return p;
}
console.log(sum_h(40, 27, -50));

//3
function sum_e(...args) {
    let p = 0;
    let n = 0;
    while(n < args.length) {
        p += args[n];
        n++;
    }
    return p;
}
console.log(sum_e(7, 1, 2, 1, 2, 1, 2, 1));

//4
function sum_n(...args) {
    let p = 0;
    let n = 0;
    do {
        p += args[n];
        n++;
    }
    while(n < args.length);
    return p;
}
console.log(sum_n(542, -525));


//5
function sum_y(...args) {
    return args.reduce((acc, current) => acc + current);
}
console.log(sum_y(345, 134, -300, -566, 404));