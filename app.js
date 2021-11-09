//-- name 
let Name = "Luis";

//-- number of states
const states = "50";

//--add 5 and 4 
let result = 5 + 4;

//-- alert that displays hello world
function sayHello() {
    alert("Hello World!");
}
sayHello()

//--check age is less than 21 alert message
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let Veggies = ["Carrot", "Corn", "Cabbage", "Cucumber", "Tomate"];

for (let i = 0; i < Veggies.length; i++) {
    console.log(Veggies[i]);
}

let pet = {
    name: "Bella",
    breed: "Doodle"
};

console.log(pet.name, pet.breed); // dot notation

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
};

checkAge("Stacy", 18);
checkAge("Caly", 22);
checkAge("Betzaida", 18);
checkAge("Ruby", 22);

let people = [
    {
        name: "Stacy",
        age: 18
    },
    {
        name: "Caly",
        age: 22
    },
    {
        name: "Betzaida",
        age: 18
    },
    {
        name: "Ruby",
        age: 22
    }

];

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}


function getLength(word) {
    return word.length
};

let stringLength = getLength("Hello World!");

if (stringLength % 2 == 0) {
    console.log('The world is nice and even!') 
} else {
    console.log('The world is an odd place!')
}
