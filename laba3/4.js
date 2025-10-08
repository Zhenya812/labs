const iface = {
    n1: x => [x],
    n2: function(x, y){ 
      return [x, y] ;
    },
    n3: (x, y, z) => { 
      return [x, y, z];
    }
} 
let arr =[]
for (let key in iface){
   if(typeof iface[key] === 'function') 
    arr.push([key, iface[key].length]);
}
console.dir(arr);