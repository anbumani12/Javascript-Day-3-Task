//Q1 How to compare two JSON have the same properties without order
// a.let Obj1 = {name:"person 1", age:5};
// b.let Obj2 = {age:5, name: "person 1"};

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert the JSON objects to strings

let JSON1 = JSON.stringify(obj1);
let JSON2 = JSON.stringify(obj2);

if (JSON1 === JSON2) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}

//Q2 Use the rest countries API URL and display all the country flags in the console

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function (){
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
    for (var i =0;i<result.length;i++){
        console.log(result[i].flags.png);
        console.log(result[i].flags.svg);
    }
}

//Q3 Use the same rest countries and print all countries names,regions,sub regions and populations

var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();

request1.onload = function () {
  var data = request1.response;
  var result1 = JSON.parse(data);

  for (var i = 0; i < result1.length; i++) {
    console.log("Country: " + result1[i].name.common);
    console.log("Region: " + result1[i].region);
    console.log("Subregion: " + result1[i].subregion);
    console.log("Population: " + result1[i].population);
  }
};
