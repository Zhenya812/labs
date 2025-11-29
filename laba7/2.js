function removeElements(array, ...items) {
  for (const item of items) {
    let index;

    while ((index = array.indexOf(item)) !== -1) {
      array.splice(index, 1);
    }
  }
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2,'Berlin', 'Kiev');
console.log(array2); 