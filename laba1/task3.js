const list = [true, 'hello', 5, 12, -200, false, false, 'word', 21, false, 53, 'tree', 87, 9, false, 'bush', false, 5, 21 ];
const typeCount = {};
for (const el of list) {
    const type = typeof el;
    if (typeCount[type]) {
        typeCount[type]++;
    } else {
        typeCount[type] = 1;
    } 
}
console.dir(typeCount);
