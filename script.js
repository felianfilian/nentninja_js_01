// string tests
let myName = "mario and luigi";
// console.log(myName[3]);
// console.log(myName.length);
// console.log(myName.toLocaleUpperCase());
// console.log(myName.slice(-5));
// console.log(myName.substring(6, 9));
// console.log(myName.replace("luigi", "peach"));

// string concat
myScore = "1250";
// console.log(myScore.concat(" points"));
// console.log(`Score: ${myScore}`);

// arrays
let myArray = ["yoshi", "peach"];
myArray.push("luigi");
// console.log(myArray.length);
// console.log(myArray.join("/"));

// console.log(myArray);

// types
let myNumber = 1234;
let newString = String(myNumber);
// console.log(typeof myNumber);
// console.log(typeof newString);

// control flow
a = 2;
switch (a) {
  case 1:
    console.log("its one");
    break;
  case 2:
    console.log("its two");
    break;
  default:
    console.log(def);
}

// fucntions
const calc = (callbackFunc) => {
  let value = 20;
  callbackFunc(value);
};

calc((value) => {
  console.log(value);
});

// foreach routine
const container01 = document.querySelector("#container01");
const people = ["mario", "yoshi", "toad"];
let html01 = "";

function createList(person) {
  html01 += `<p>${person}</p>`;
}

people.forEach(createList);

container01.innerHTML = html01;

// classes

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showName() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

let person01 = new user("mario", 56);
person01.showName();

// objects
let num02 = 1.2345;
console.log((1.2345).toFixed(2));
console.log(Math.round(num02));

// random
console.log(Math.round(Math.random() * 5) + 1);

// DOm

let container02 = document.querySelector("#container02");
container02.querySelector("p").innerHTML = "peach";
