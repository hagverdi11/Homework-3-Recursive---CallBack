// function getSum(n) {

//     if (n == 1) {
//         return n;
//     }
//     else {

//         return n + getSum(n - 1)

//     }
// }

// console.log(getSum(6));

//  let array = ["Ali", "Vali","Ayxan", "Elxan"]

// array.forEach((element, index) => {
//     console.log(element,index);
// });
// for (const item of array) {
//    console.log(item);
// }

let students = [{
    name: "Haqverdi",
    surname: "Mustafayev",
    age: 26
},
{
    name: "Ali",
    surname: "Vali",
    age: 22

},
{
    name: "Salam",
    surname: "Sagol",
    age: 26
}
]

// for (const key in students) {
//     console.log(students[key].surname);
// }

// for (const key in students) {
//  console.log(students[key].);
// }

// let people= ["Ali","Vali","Pirvali"]

// function getPeople(...array) {
//     for (const item of array) {
//         console.log(item);
//     }

// }

// getPeople("Ali","Vali","Pirvali")

// function evenNum(n) {
//     return n%2==0
// }

// function evenOdd(n) {
//     return n%2==1
// }

// let evenOdd = n => n % 2 == 1;

// function sumOdd(arr, callback) {
//     let num = 0
//     for (const item of arr) {
//         if (callback(item)){
//             num += item
//         }
//     }

//     return num;
// }

// function sumEven(arr, callback) {
//     let num = 0
//     for (const item of arr) {
//         if (callback(item)){
//             num += item
//         }
//     }

//     return num;
// }

// function biggerThanThree(arr) {
//     let num = 0
//     for (const item of arr) {
//         if (item>=3){
//             num += item
//         }
//     }

//     return num;
// }


// console.log(sumEven([1,2,3,4,5,6,7,8,9], evenNum));
// console.log(sumEven([1,2,3,4,5,6,7,8,9], evenOdd));

// console.log(sumOdd([1,2,3,4,5,6,7,8,9],n => n % 2 == 1) );

// let numbers = [1,2,3,4,5,6,7,8,9]

// let filteredNumbers = numbers.filter(n=>n<5)

// console.log(filteredNumbers);


let users = 
[
    
    { name: "Ali", surname: "Vali", age:15},
    { name: "Salam", surname: "Sagol", age:30},
    { name: "Melekber", surname: "Elekber", age:45}

]

let date = new Date();

let result = users.map(m =>{return{
    fullName: `${m.name}, ${m.surname}`,
    yearOfBirth: date.getFullYear() - m.age
}
})

console.log(result);

