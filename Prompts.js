function greeting() {
    console.log("hey there");
}
//----------------------------------------------------------------------------------------------------
function reverseNum() {
    let n = prompt("Pick a 2 digit number:");

	n = n + "";
    console.log(n.split("").reverse().join(""));
}
//----------------------------------------------------------------------------------------------------
function check_Palindrome(){
    let entry = prompt("Type a word:");

    let cstr = entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    let count = 0;

    if ((cstr.length) % 2 === 0) {
        count = (cstr.length) / 2;
    } else {
        if (cstr.length === 1) {
            console.log("Entry is a palindrome.");
            return true;
        } else {
            count = (cstr.length - 1) / 2;
        }
    }

    for (let x = 0; x < count; x++) {
        if (cstr[x] != cstr.slice(-1-x)[0]) {
            console.log(entry + " is not a palindrome.");
            return false;
        }
    }
    console.log(entry + " is a palindrome.");
    return true;
}
//----------------------------------------------------------------------------------------------------
function alphabet_order() {
    let str = prompt("Type a word:");

    console.log(str.split('').sort().join(''));
}
//----------------------------------------------------------------------------------------------------
function changeToLowerCase(str) {
     console.log(str.toLowerCase());
}
//----------------------------------------------------------------------------------------------------
function changeToUpperCase(str) {
    let array1 = str.split(' ');
    let newarray1 = [];
    
    for(let i = 0; i < array1.length; i++) {
        newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
    }
    console.log(newarray1.join(' '));
}
//----------------------------------------------------------------------------------------------------
function longestWord(str) {
    let array1 = str.match(/\w[a-z]{0,}/gi);
    let result = array1[0];

    for(let x = 1 ; x < array1.length ; x++) {
        if(result.length < array1[x].length) {
            result = array1[x];
        } 
    }
    console.log(result);
}
//----------------------------------------------------------------------------------------------------
function multiply(a, b) {
    console.log(a*b);
}
//----------------------------------------------------------------------------------------------------
function array() {
    let arr = ["soccer", "messi", "neymar", "ronaldo"];
    console.log(arr);
}
//----------------------------------------------------------------------------------------------------
function repeated(){
    let str = prompt("Type a word with repeated characters (Example: Test):")

    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
  
    if (strArr != null) {
        strArr.forEach((elem) => {
        result.push(elem[0]);
        });
    }
    console.log(result);
}
//----------------------------------------------------------------------------------------------------
function calculateDogAge() {
    let dogs = prompt("How many dogs do you have?");
    let count = 0;

    for(let i = 0; i < dogs; i++){
        count++;
        let age = prompt("How old is dog " + count + "?");
        let dogAge = age * 7;
        console.log("Your dog #" + count + " is " + dogAge + " years old in dog years!");
    }
}