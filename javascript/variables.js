/*question 1
let age = 25;

age >= 18 ? console.log("Eligible to vote") : console.log("not eligible to vote");

question 2
let no = 20

no % 2 == 0 ? console.log("Number is even") : console.log("Number is odd");

class for data types

let a  = 10;
let b = "10";
console.log(typeof b);

let score = 20;

if (score >= 70 && score <= 100) {
    console.log("A");
}else if (score >= 60 && score <= 69) {
    console.log("B");
}else if (score >= 50 && score <= 59) {
    console.log("C");
}else if (score >= 40 && score <= 49) {
    console.log("D");
}else if (score >= 35 && score <= 39) {
    console.log("E");
}else if (score >= 0 && score <= 34) {
    console.log("F");}
else {
    console.log("Marks cannot be allocated");
}

------------------------------------------------------------------------------------------------------------

Assignment
let dayOfWeek = 5;
switch (dayOfWeek) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
    case 6:
        console.log("Saturday")
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Not a day of the week")
}

let text = "We are the so-called 'vikings' from the north."
console.log(text);

console.log("He shouted \"john\" and said it's alright")

let list = "He shouted 'John'"
let listPart = list.slice(3, 7);
console.log(listPart)

------------------------------------------------------------------------------------------------------------

let city = "Benin city";
let newCity = city.replace("Benin city", "Lagos");
console.log(newCity + " city".toUpperCase());

const prompt = require("prompt-sync")({sigint:true});

var phoneNumber = prompt("Enter your phone Number: ")

if (phoneNumber.toString().length === 11 && !isNaN(phoneNumber)) {
    console.log("Phone number activated")
}
else {
    console.log("Invalid Number")
}

concatenation Arrays
we use the +

const phones = ["Samsung", "dell", "microsoft","xioami","nokia"]

console.log("My phone is a " + phones[0] +" phone");

console.log(phones.toString());
specifies what should seperate the strings
console.log(phones.join(" and "));

------------------------------------------------------------------------------------------------------------

Creating objects

const onePiece = {
    captain: "Luffy",
    viceCaptain: "zoro",
    helmsman: "jimbe",
    navigator : "nami swaaan",
    doctor: "chopper"
}

console.log(onePiece["helmsman"] + " is" + " the helmsman and " + onePiece["navigator"] + " is the doctor of " + onePiece["captain"] + " ship");

console.log(onePiece.helmsman + " is" + " the helmsman and " + onePiece.navigator + " is the doctor of " + onePiece.captain + " ship");



const randomUser = {
  results: [
    {
      gender: "female",
      name: { title: "Ms", first: "Lydia", last: "Cook" },
      location: { 
        street: { number: 3996, name: "W Dallas St" },
        city: "Hervey Bay",
        state: "New South Wales",
        country: "Australia",
        postcode: 1314,
        coordinates: { latitude: "-86.0564", longitude: "130.4184" },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
      },
      email: "lydia.cook@example.com",
      login: {
        uuid: "92e86e73-e329-4c82-9ca3-afdb9591bb4c",
        username: "bluemouse987",
        password: "obelix",
        salt: "mkLWIkZW",
        md5: "7ef347805ab2b36b180f8bab26284920",
        sha1: "d57f35cc39b06f82a7579ecaeec86071dfacb53f",
        sha256:
          "aa9f62a15fc8f0a07aca30066afee3ba55ed7828949bcafbd16106999466b0fe",
      },
      dob: { date: "1992-01-16T02:45:43.422Z", age: 31 },
      registered: { date: "2016-03-29T18:33:33.545Z", age: 7 },
      phone: "03-5077-2718",
      cell: "0471-715-712",
      id: { name: "TFN", value: "591958411" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/55.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/55.jpg", 
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/55.jpg",
      },
      nat: "AU",
    },
  ],
  info: { seed: "182f65b5705a0bf8", results: 1, page: 1, version: "1.4" },
};

console.log(randomUser.results[0].location.timezone.description);



------------------------------------------------------------------------------------------------------------

let x = 1;
while (x <= 10) {
  console.log("While loop " + x);
  x++;
}

do{
  console.log("He is " + x + " years old");
  x++;
}while(x <=10);

for(let victor = 1; victor <= 10; victor++){
  console.log(victor);
}

let fruits =["Banana", "Orange", "Apple", "Pineapple", "Grape"]

let x = 0
while (x <= 4) {
  console.log(fruits[x])
  x++
}
  
const car = {
  fName: "BMW",
  sName: "Black",     
  engine: "V12", 
  configuration: "4-wheel drive", 
  owner: "Victor_Right",
};
for(a in car){
  console.log(car[a]);
}

fizz buzz assignment with array

output = [];
count = 1;

function fizzbuzz() {
  while (count <= 100) {
    if (count % 3 == 0 && count % 5 == 0) {
      output.push("FizzBuzz")
    }else if(count % 3 === 0){
      output.push("Fizz")
    }else if(count % 5 === 0){
      output.push("Buzz")
    }else{
      output.push(count);
    }
    count++
  }
  return output;
}
console.log(fizzbuzz());

fizz buzz assignment without array

output = 1;
while (count <= 100) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log("FizzBuzz")
  }else if(count % 3 === 0){
    console.log("Fizz")
  }else if(count % 5 === 0){
    console.log("Buzz")
  }else{
    console.log(count);
  }
  count++
}

for(a in fruits) {
  console.log(fruits[a]);
}

for(a of name){
  console.log(a);
}

javascript functions

//define a function without the return keyword that will print Mr something

function greeting(gender, name) {
  if (gender == "male") {
    console.log("welcome Mr "  + name);
  }else if(gender == "female"){
    console.log("welcome Mrs "  + name);
  }
}

greeting("female", "mark");

 define a function that takes 2 no and saves them prarameters, print var a and b and swap both numbers

 function swap(A, B) {
 var A = A;
  var B = B;
  console.log(A, B);

  A = A + B;
  B = A - B;

  A = A - B;

  console.log(A,B);
}

 swap(5, 6);



let login = prompt(`login`)
if (login == `Admin`) {
    let password = prompt(`Enter password`)
    if (password == `TheMaster`) {
        alert(`Welcome`);
    } else if (password != `TheMaster`){
        alert(`Wong Password`);
    } else if (password == `` || null){
        alert(`Canceled`)
    }
} else if (login == ``){
    alert(`Canceled`)
} else if (login != `Admin`){
    alert(`I don't know you`)
}*/


let animal = `lion`;
let name = `Oluchi`;
let item = 100;

console.log(typeof (name));
console.log(typeof (item));
console.log(typeof (animal));