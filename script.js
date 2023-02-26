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
