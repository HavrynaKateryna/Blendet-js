// //Завдання 1:
// // Створіть масив styles з елементами 'jazz' і 'blues'
// // Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// // Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// // Напишіть функцію logItems(array), яка приймає масив як аргумент
// // і виводить у консоль кожен його елемент у форматі:
// // "<номер елемента> - <значення елемента>".
// // Використайте цикл for для перебору елементів масиву.
// // Нумерація елементів повинна починатися з 1 (а не з 0).

// //let styles = ['jazz', 'blues'];
// //styles.push('rock-n-roll');
// //const index = styles.indexOf('blues');
// //if (index !== -1) {
//   //styles[index] = 'classic';
// //}
// //unction logItems(array) {
//  // for (let i = 0; i < array.length; i++) {
//   //  console.log(`${i + 1} - ${array[i]}`);
//  // }
// //}
// //logItems(styles);

// //==========================================================================================//

// //Завдання 2:
// // Напишіть функцію checkLogin(array), яка:
// // Приймає масив логінів як аргумент.
// // Запитує ім'я користувача через prompt.
// // Перевіряє, чи є введене ім'я у переданому масиві.
// // Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// // Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// // const logins = ["Peter", "John", "Igor", "Sasha"];

// // Масив логінів

// //const logins = ["Peter", "John", "Igor", "Sasha"];
// //function checkLogin(array) {
//   //const userName = prompt("Введіть Ваше імя");
//   //if (array.includes(userName)) {
//    // alert(`Welcome, ${userName}!`);
//   //} else {
//     //alert("User not found");
//   //}
// //}
// //checkLogin(logins);

// //============================================================================================//

// //Завдання 3:
// // Напишіть функцію caclculateAverage(),
// // яка приймає довільну кількість
// // аргументів і повертає їхнє середнє значення.
// // Додайте перевірку, що аргументи - це числа.


// //function caclculateAverage(...args) {
//     //let totalSum = 0;
//    // let count = 0;
//    // for (const arg of args) {
//       //  if (typeof arg === 'number') {
//       //      totalSum += arg
//         //    count +=1
//       //  }
//  //   }
    
//     //return totalSum / count
// //}
// //console.log(caclculateAverage(5, 10, 15, 'hello'));

// //========================================================================================//

// //Завдання 4:
// // Напишіть функцію, яка сумуватиме сусідні числа
// // і пушитиме їх в новий масив.

// // const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // уточнення: складати необхідно перше число з другим, потім друге - з третім,
// // третє - з четвертим і так до кінця.
// // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// // function sumAdjacentNumbers(arr) {
// //   if (Array.isArray(arr) === false) {
//     // return 'Error: input is not an array!';
// //   }
// //   const result = [];
// //   for (let i = 0; i < arr.length - 1; i++) {
//     // result.push(arr[i] + arr[i + 1]);
// //   }
// //   return result;
// // }
// // const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// // console.log(sumAdjacentNumbers(someArr));

// //==========================================================================//
// // Завдання 5:
// // Напишіть функцію findSmallestNumber(numbers),
// // яка шукає найменше число в масиві.
// // Додайте перевірку, що функція отримує саме масив, і
// // якщо функція отримує масив - поверніть з функції найменше число,
// // в іншому випадку - поверніть 'Sory, it is not an array!'.

//  function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers) === false) {
//     // return 'Sory, it is not an array!';
//   }
//   if (numbers.length === 0) {
//     return 'Array is empty!';
//   }
//   let smallest = numbers[0];
//   for (const num of numbers) {
//     if (num < smallest) {
//       smallest = num;
//     }
//   }
//   return smallest;
// }

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallestNumber(numbers));

//=================================================================================================//
//Завдання 6:
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   if (typeof string !== 'string') {
    // return 'Error: input is not a string!';
//   }
//   const words = string.split(' ');
//   let longestWord = words[0];
//   for (const word of words) {
    // if (word.length > longestWord.length) {
    //   longestWord = word;
    // }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
