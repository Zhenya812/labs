const PhoneBook = [
    { name: "Isaac Newton", phone: "+380445554433" },
    { name: "Albert Einstein", phone: "+380432235875" },
    { name: "Marie Sklodowska-Curie", phone: "+38087609428" },
    { name: "Ernest Rutherford", phone: "+38097357842" },
    { name: "Max Planck", phone: "+380665344562" },
    { name: "Galileo Galilei", phone: "+3804562148762" }
    
]
function findPhoneByName(name) {
     for (const n of PhoneBook) {
         if (n.name === name) {
             return n.phone;
         }
         return "Не знайдено";
     }
}
const PhoneBookHash = {
    "Isaac Newton": "+380445554433",
    "Albert Einstein": "+380432235875",
    "Marie Sklodowska-Curie": "+38087609428",
    "Ernest Rutherford": "+38097357842",
    "Max Planck": "+380665344562",
    "Galileo Galilei": "+3804562148762"
}
function findPhoneByName(name) {
    return PhoneBookHash[name] || "Не знайдено";
}
console.log(findPhoneByName("Isaac Newton"));
console.log(findPhoneByName("Albert Einstein"));
console.log(findPhoneByName("Marie Sklodowska-Curie"));
console.log(findPhoneByName("Ernest Rutherford"));
console.log(findPhoneByName("Max Planck"));
console.log(findPhoneByName("Galileo Galilei"));
