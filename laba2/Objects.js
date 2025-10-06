const fn  = () => {
    const a = { name: "Zhenya", };
    let b ={ name: "ZhenyA",  };

    a.name = "Gerold";
    b.name = "Georgiy"; 

    b = { name: "Georg" };

    console.log({a, b});

} 
fn(); 
const createUser = (name, city) => {
   const info = {name: name, city: city};
    return info;
}
console.log(createUser("Marcus", "Bila Tserkva"));
