console.log("welcome to my first commit");
//exercises first 

let nameArray = ["saM", "ken", "michael", "matha", "lukas"];

for (let i = 0; i < nameArray.length; i++){
    console.log(nameArray[i]);
}
console.log(nameArray[2][1]);

//exercises 6

//Write a function that takes a string as input and returns the string reversed.


function reverseString(str) {
    return str.split("").reverse().join("");
}   

console.log(reverseString(" world"));



function reverseString(text) {
    let answer = "";
    for (let i = text.length - 1; i >= 0; i--) {
        answer += text[i];
    }
  return answer;
   // return str.split("").reverse().join("");
}   
console.log(reverseString("hello world"));
