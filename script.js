// 1
let string = '12345';
let arrayNew = string.split('');
let sum = 0;

arrayNew.forEach(function(number) {
  sum += parseInt(number);
});

console.log(sum);

// 2 ?
let array1 = [“hello1”, 14,24, “hello2”];
let newArray1 = array1.filter( (item) => typeof item);
console.log(newArray1);

// 3
let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray2 = array2.map (item => {
    if (typeof item =="number"){
        return item * item;
    } else if (typeof item == "string") {
        return item.toUpperCase();
    }
    return item;
})
console.log(newArray2);

// 4

let info = 'Good day';

let newInfo = info.slice (1,1);
console.log(newInfo);

// 5
function newFunction( inputString) {
    return inputString.length;
}
let inputStr = "Good day";
let length = newFunction(inputStr);
console.log(length);

// 6
let userAnswer = promt("What day is today")
let corrent = "friday";
let lowercaseAnswer = userAnswer.toLowerCase();

if (lowercaseAnswer = corrent){
  console.log("სწორია");
} else {
  console.log("არასწორია");
}


// 7

let link = "https://google.com";
function http(element) {
 let item = element.indexOf("https:")  

 if (item == -1){
  console.log("არასწორია");
 } else {
  console.log("სწორია");
 }
}

http(link);

// 8
let fruits = ["apple", "mango", "avocado", "kiwi"];

fruits.splice(fruits.length - 1, 1, "strawberry");

console.log(fruits);


// 9
let array3 = [5, 25, 89, 120, 36];
array3.push ("javascript", "python");
array3.unshift ("html", "css");

console.log(array3);
console.log(array3.length);

// axali masivi (-1 gareshec camishala bolo cifri)
let array4 = [5, 25, 89, 120, 36];
array4.shift(0,1)
array4.pop(0,1)

console.log(array4);

// 10 (es davaleba momecona)
 let arrayFructs = ["orange", "banana", "pear"];
 console.log(arrayFructs.length);

 arrayFructs.push("apple", "paneapple");
 console.log(arrayFructs);

arrayFructs.unshift("watermelow");
console.log(arrayFructs);

console.log(arrayFructs.length);

arrayFructs.splice(3, 0, "Mango");
console.log(arrayFructs);

arrayFructs.shift(0,0);
console.log(arrayFructs);

arrayFructs.pop(0,1)
console.log(arrayFructs);

console.log(arrayFructs.length);

// 11
let array5 =[1, 2, 3, 4, 5]
// [1, 2, 3, 'a', 'b', 'c', 4, 5]- unda daibechdos es pasuxi
array5.splice(2,0, "a","b","c")

console.log(array5);

// 12 

let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(number) {
  sum += number;
});

console.log(sum)

// 13
let  array = [12, 25, 3, 6, 8, 14, 7, 23];
let newNumbersArray = array.map(function(x) {
    return x / 3;
})

console.log(newNumbersArray);

// 14
let languages = ['html', 'css', 'javascript', "python", 'php'];

let languagesFilter = languages.filter(function(word)) {
    return word.length > 3;
};
console.log(languagesFilter);

// 15
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let filteredWords = words.filter(function(word) {
  return word.includes('m') || word.includes('M');
});

console.log(filteredWords); 

// 16
let array6 = [-1, -2, -3, 4];

let havePositiveNumber = array6.some(function(number) {
  return number > 0;
});

console.log(havePositiveNumber);

// negative-s rato ver vigeb igive metodit?
// let array7 = [-1, -2, -3, 4];

// let negativeNumber = array7.some(function(number) {
//   return number < 0;
// });

// console.log(negativeNumber);

// 17
let array8 = [2,15,10,24];
let deleteElements = array8.splice (2,1)

console.log(array8);