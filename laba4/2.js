function max(arr) {
    var maxvalue = arr[0][0];

    for (let n = 0; n < arr.length; n++) {
        for (let p = 0; p < arr[n].length; p++) {
            if (arr[n][p] > maxvalue)
                maxvalue = arr[n][p];
        }
    }

    return maxvalue;
}

console.log(max([[12, 52, 43], [74, 5, 26], [17, 38, 10]])); 