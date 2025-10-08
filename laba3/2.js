function generateKey(length, characters) {
    let result = '';
    for ( let n = 0; n < length; n++ ) {
        let index = Math.floor(Math.random() * characters.length);
        result += characters[index];
    }
    return result;
}

const characters = 'wadsghryrewaf467w3h632';
const key = generateKey(14, characters);
console.dir(key);
